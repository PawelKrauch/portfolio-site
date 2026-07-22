import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const aspectClass =
    project.orientation === "vertical" ? "aspect-[9/16]" : "aspect-video";

  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1 px-6 pt-32 pb-24 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#work"
            className="text-sm text-white/50 hover:text-accent"
          >
            ← Back to work
          </Link>

          <div
            className={`relative mt-8 w-full ${aspectClass} ${
              project.orientation === "vertical" ? "mx-auto max-w-sm" : ""
            } overflow-hidden rounded-lg border border-border bg-surface`}
          >
            {project.placeholder ? (
              <div className="flex h-full flex-col items-center justify-center gap-2 border-2 border-dashed border-white/10 p-4 text-center text-white/30">
                <span className="text-xs uppercase tracking-widest">
                  Video placeholder
                </span>
                <span className="text-[11px] text-white/20">
                  Drop a web-optimized mp4 or embed here
                </span>
              </div>
            ) : (
              <video
                src={project.videoUrl}
                className="h-full w-full object-cover"
                controls
              />
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold sm:text-3xl">
              {project.title}
            </h1>
            <p className="text-sm text-white/50">
              {project.client} · {project.category} · {project.year}
            </p>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              {project.description}
            </p>
          </div>

          {project.stats && (
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-accent sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {project.secondaryVideos && project.secondaryVideos.length > 0 && (
            <div className="mt-12 flex flex-col gap-10 border-t border-border pt-10">
              {project.secondaryVideos.map((secondaryVideo) => (
                <div key={secondaryVideo.label}>
                  <p className="mb-4 text-sm text-white/50">
                    {secondaryVideo.label}
                  </p>
                  <div
                    className={`relative w-full ${aspectClass} ${
                      project.orientation === "vertical"
                        ? "mx-auto max-w-sm"
                        : ""
                    } overflow-hidden rounded-lg border border-border bg-surface`}
                  >
                    {secondaryVideo.placeholder ? (
                      <div className="flex h-full flex-col items-center justify-center gap-2 border-2 border-dashed border-white/10 p-4 text-center text-white/30">
                        <span className="text-xs uppercase tracking-widest">
                          Video placeholder
                        </span>
                        <span className="text-[11px] text-white/20">
                          Drop a web-optimized mp4 or embed here
                        </span>
                      </div>
                    ) : (
                      <video
                        src={secondaryVideo.videoUrl}
                        className="h-full w-full object-cover"
                        controls
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
