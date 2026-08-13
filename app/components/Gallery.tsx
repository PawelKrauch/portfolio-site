import type { GalleryImage } from "../data/projects";

// A labeled photo grid shown at the bottom of a project's detail page — used for
// both STILLS and BTS sections. Square tiles (matching the homepage work grid)
// keep the grid tidy across mixed image orientations; clicking a tile opens the
// full, uncropped image in a new tab. Renders nothing when there are no images.
export default function Gallery({
  label,
  images,
}: {
  label: string;
  images: GalleryImage[];
}) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 border-t border-border pt-10">
      <p className="mb-5 text-xs uppercase tracking-widest text-white/50">
        {label}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image, index) => (
          <a
            key={image.src ?? index}
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent/60"
          >
            {/* Plain <img> to match the codebase (no next/image); lazy-loaded so
                galleries don't block the hero video or page paint. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt ?? `${label} ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
