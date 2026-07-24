export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-baseline gap-3">
          <span className="text-xs font-medium text-accent">03</span>
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Info
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex max-w-2xl flex-col gap-6 text-lg text-white/70">
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
              worldwide.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:pavelkrauch@gmail.com"
              className="text-accent underline underline-offset-4 hover:text-white"
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
