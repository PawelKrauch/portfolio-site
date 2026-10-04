import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" title="Info" />
        <div className="flex flex-col gap-10">
          <div className="flex max-w-3xl flex-col gap-8 font-serif text-2xl leading-snug text-white/85 sm:text-3xl">
            <p>
              I&apos;m a freelance filmmaker and director working with brands
              and agencies on commercial and branded content. I lean on AI
              throughout preproduction — concepting, shot planning,
              scheduling — to move faster and shoot with more precision,
              which lets me deliver agency-level results working solo or
              with a small, focused crew. The outcome is commercial-grade
              work without the overhead of a full production house.
            </p>
            <p>
              Available for commercial, branded content, and campaign work
              worldwide — and for private commissions: personal lifestyle
              films made to the same standard.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs uppercase font-mono">
            <a
              href="mailto:pavelkrauch@gmail.com"
              className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              pavelkrauch@gmail.com
            </a>
            <a
              href="https://instagram.com/pawel_krauch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/80"
            >
              @pawel_krauch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
