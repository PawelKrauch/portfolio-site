import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How pawelkrauch.com collects and uses personal data: the contact form, analytics and the Meta Pixel.",
};

const UPDATED = "4 October 2026";
const CONTACT_EMAIL = "pavelkrauch@gmail.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1 px-6 pt-32 pb-24 sm:px-10 sm:pt-40">
        <div className="mx-auto flex max-w-2xl flex-col gap-10 text-base leading-relaxed text-white/70">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-white/45">Last updated: {UPDATED}</p>
          </div>

          <Section title="Who is responsible for your data">
            <p>
              The controller of personal data collected through pawelkrauch.com
              is Paweł Krauch (Krauch Media). For any privacy question or request,
              contact{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="What data is collected and why">
            <p>
              <strong className="text-white">Contact form.</strong> When you send
              a message, I receive your name, email address, your message and,
              if you choose to share it, your project budget range. I use this
              only to reply to your enquiry and to prepare an offer. Legal basis:
              steps taken at your request before entering into a contract, and my
              legitimate interest in responding to enquiries (Art. 6(1)(b) and
              (f) GDPR).
            </p>
            <p>
              <strong className="text-white">Website analytics.</strong> The site
              uses Vercel Web Analytics to count visits, pages viewed, referring
              websites, country and device type. It does not use cookies and does
              not identify you personally. Legal basis: my legitimate interest in
              understanding how the site is used (Art. 6(1)(f) GDPR).
            </p>
            <p>
              <strong className="text-white">Meta Pixel (only with your
              consent).</strong> If you click &ldquo;Accept&rdquo; in the cookie
              banner, the site loads the Meta Pixel, which sets cookies and sends
              Meta information about your visit (pages viewed and whether you sent
              the contact form). This helps measure and improve advertising on
              Facebook and Instagram, and may be combined by Meta with your own
              Meta account data under Meta&apos;s privacy policy. If you click
              &ldquo;Reject&rdquo; or make no choice, the Pixel is not loaded.
              Legal basis: your consent (Art. 6(1)(a) GDPR), which you can
              withdraw at any time.
            </p>
            <p>
              <strong className="text-white">Your cookie choice.</strong> Your
              Accept / Reject decision is stored in your browser&apos;s local
              storage so the banner doesn&apos;t reappear on every visit.
            </p>
          </Section>

          <Section title="Who processes the data">
            <p>The site relies on these service providers:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Vercel Inc. — website hosting and analytics</li>
              <li>Resend — delivery of contact-form messages to my inbox</li>
              <li>Google (Gmail) — my email inbox, where enquiries are stored</li>
              <li>Meta Platforms Ireland Ltd. — the Meta Pixel, only with consent</li>
            </ul>
            <p>
              Some of these providers process data in the United States. Such
              transfers rely on the EU–US Data Privacy Framework or the European
              Commission&apos;s Standard Contractual Clauses.
            </p>
          </Section>

          <Section title="How long data is kept">
            <p>
              Enquiries are kept for as long as needed to handle your request and
              any resulting collaboration, and then for up to two years in case of
              follow-up questions, unless longer retention is required by law (for
              example, tax records if we work together). Meta Pixel data is kept
              by Meta according to its own retention rules.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              You have the right to access your data, correct it, have it deleted,
              restrict or object to its processing, and receive it in a portable
              format. Where processing is based on consent, you can withdraw
              consent at any time without affecting earlier processing. To use
              any of these rights, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <p>
              You can also lodge a complaint with the Polish data protection
              authority, the President of the Personal Data Protection Office
              (Prezes Urzędu Ochrony Danych Osobowych, uodo.gov.pl).
            </p>
          </Section>

          <Section title="Changing your cookie choice">
            <p>
              Use the &ldquo;Cookie settings&rdquo; link at the bottom of any page
              to reopen the banner and change your decision.
            </p>
          </Section>

          <Link href="/" className="text-sm text-white/50 hover:text-white">
            ← Back to the site
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
