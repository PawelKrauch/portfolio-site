"use client";

import { useActionState, useEffect } from "react";
import { submitContact, type ContactState } from "../actions/contact";
import { trackLead } from "../lib/pixel";

const initialContactState: ContactState = { status: "idle", message: "" };

const BUDGET_OPTIONS: { value: string; label: string }[] = [
  { value: "<5k", label: "Under 5,000 zł" },
  { value: "5-15k", label: "5,000–15,000 zł" },
  { value: ">15k", label: "15,000 zł+" },
];

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-white/30 focus:border-accent";

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState
  );

  const values = state.values;
  const errors = state.fieldErrors;

  // Fire once per successful submission — Meta Pixel's Lead conversion event,
  // used to optimize/measure ad delivery. No-ops safely if the Pixel hasn't
  // loaded (no ID configured yet, or the visitor declined cookie consent).
  useEffect(() => {
    if (state.status === "success") trackLead();
  }, [state.status]);

  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-baseline gap-3">
          <span className="text-xs font-medium text-accent">05</span>
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Contact
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex max-w-md flex-col gap-6">
            <h3 className="text-3xl font-semibold sm:text-4xl">
              Let&apos;s make something.
            </h3>
            <p className="text-lg text-white/70">
              Tell me about your project — brand film, campaign, social, or an
              idea still taking shape. I read every message and reply
              personally within 48 hours.
            </p>
            <a
              href="mailto:pavelkrauch@gmail.com"
              className="text-sm text-white/50 underline underline-offset-4 hover:text-accent"
            >
              Or email me directly
            </a>
          </div>

          {state.status === "success" ? (
            <div className="flex flex-col justify-center rounded-lg border border-accent/40 bg-surface p-8">
              <p className="text-lg font-medium text-foreground">
                Message sent.
              </p>
              <p className="mt-2 text-sm text-white/70" aria-live="polite">
                {state.message}
              </p>
            </div>
          ) : (
            <form action={formAction} className="flex flex-col gap-5" noValidate>
              {/* Honeypot — hidden from humans, catches bots. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden"
              >
                <label htmlFor="company_website">Company website</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-white/50">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  defaultValue={values?.name}
                  aria-invalid={Boolean(errors?.name)}
                  className={inputClass}
                  placeholder="Your name"
                />
                {errors?.name && (
                  <p className="text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-white/50">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={values?.email}
                  aria-invalid={Boolean(errors?.email)}
                  className={inputClass}
                  placeholder="you@company.com"
                />
                {errors?.email && (
                  <p className="text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-xs text-white/50">
                  Project budget{" "}
                  <span className="text-white/30">(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue={values?.budget ?? ""}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="">Prefer not to say</option>
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-white/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  defaultValue={values?.message}
                  aria-invalid={Boolean(errors?.message)}
                  className={`${inputClass} resize-y`}
                  placeholder="A few lines about the project, timeline, and brand."
                />
                {errors?.message && (
                  <p className="text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {state.status === "error" && !errors && (
                <p className="text-sm text-red-400" aria-live="polite">
                  {state.message}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="mt-1 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {pending ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
