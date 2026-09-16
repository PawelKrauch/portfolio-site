"use server";

// Server Action backing the #contact form. Validates on the server, drops bot
// submissions via a honeypot, and emails the lead to Pavel through Resend's REST
// API (no SDK dependency — a single fetch keeps the project dependency-free).

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  // Echoed back on error so the visitor doesn't have to retype everything.
  values?: { name: string; email: string; message: string; budget?: string };
  fieldErrors?: { name?: string; email?: string; message?: string };
};

// Labels for the optional budget-qualifier field — kept next to the field
// definition so the select options and the emailed label can't drift apart.
const BUDGET_LABELS: Record<string, string> = {
  "<2k": "Under 2,000 zł",
  "2-10k": "2,000–10,000 zł",
  ">10k": "10,000 zł+",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: a field hidden from humans. If it's filled, it's a bot — return a
  // fake success so it doesn't learn it was caught, and send nothing.
  const trap = (formData.get("company_website") as string | null)?.trim();
  if (trap) {
    return { status: "success", message: "Thanks — I'll be in touch soon." };
  }

  const name = ((formData.get("name") as string) ?? "").trim();
  const email = ((formData.get("email") as string) ?? "").trim();
  const message = ((formData.get("message") as string) ?? "").trim();
  // Optional — never blocks submission even if skipped or tampered with.
  const budgetRaw = ((formData.get("budget") as string) ?? "").trim();
  const budget = budgetRaw in BUDGET_LABELS ? budgetRaw : undefined;

  const fieldErrors: NonNullable<ContactState["fieldErrors"]> = {};
  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email address.";
  if (message.length < 10) fieldErrors.message = "Tell me a little more about the project.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      values: { name, email, message, budget },
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Misconfiguration — surface a friendly message but log the real cause.
    console.error("[contact] RESEND_API_KEY is not set");
    return {
      status: "error",
      message:
        "Something went wrong on my end. Please email me directly at pavelkrauch@gmail.com.",
      values: { name, email, message, budget },
    };
  }

  // Defaults work out of the box with Resend's test domain; override via env
  // vars once a custom sending domain is verified.
  const to = process.env.CONTACT_TO_EMAIL || "pavelkrauch@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "Portfolio Site <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New project inquiry — ${name}`,
        text: `New inquiry from the portfolio site.\n\nName: ${name}\nEmail: ${email}${
          budget ? `\nBudget: ${BUDGET_LABELS[budget]}` : ""
        }\n\nMessage:\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend responded", res.status, detail);
      return {
        status: "error",
        message:
          "Couldn't send right now. Please try again, or email me directly at pavelkrauch@gmail.com.",
        values: { name, email, message, budget },
      };
    }
  } catch (err) {
    console.error("[contact] send failed", err);
    return {
      status: "error",
      message:
        "Couldn't send right now. Please try again, or email me directly at pavelkrauch@gmail.com.",
      values: { name, email, message, budget },
    };
  }

  return {
    status: "success",
    message:
      "Thanks — your message is on its way. I'll get back to you personally within 48 hours.",
  };
}
