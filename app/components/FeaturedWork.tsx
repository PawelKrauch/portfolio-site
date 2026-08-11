import Link from "next/link";
import { projects, type Project } from "../data/projects";
import Reveal from "./Reveal";

// Big, auto-playing "hero" cards for the flagged featured pieces — each one its
// own animated screen that clicks through to the full detail page (data +
// videos). Sits between the showreel Hero and the full Work grid.
//
// Tiles are uniform squares (object-cover crop) so the grid stays symmetrical
// whatever the footage shape; the native aspect shows in full on the detail
// page.
function FeaturedCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block aspect-square overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent/60"
    >
      {project.videoUrl && (
        <video
          src={project.videoUrl}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/10 to-black/0 p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {project.category}
        </p>
        <p className="mt-2 text-lg font-medium sm:text-xl">{project.title}</p>
        <p className="mt-1 text-xs text-white/60">
          {project.client} · {project.year}
        </p>
        {project.stats && (
          <div className="mt-4 hidden gap-8 sm:flex">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p className="text-[11px] text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured && !p.placeholder);
  if (featured.length === 0) return null;

  return (
    <section id="featured" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-baseline gap-3">
          <span className="text-xs font-medium text-accent">01</span>
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Featured
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <FeaturedCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
