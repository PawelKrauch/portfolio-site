export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2">
        <div className="flex items-baseline gap-3">
          <span className="text-xs font-medium text-accent">03</span>
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Info
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-lg text-white/70">
            <p>
              I&apos;m a freelance filmmaker and director. Add 3-4 sentences
              here about your background, the kind of work you shoot, and what
              makes your approach distinct — this is what an agency producer
              reads before deciding to reach out.
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
