// Shared section title: a small parenthesised index over a large display-serif
// heading — the editorial/fashion-magazine pattern used across the homepage.
export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-14 flex flex-col gap-3 sm:mb-20">
      <span className="font-mono text-xs text-white/40">
        ({index})
      </span>
      <h2 className="font-serif text-5xl leading-none tracking-tight sm:text-7xl">
        {title}
      </h2>
    </div>
  );
}
