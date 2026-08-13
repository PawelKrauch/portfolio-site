import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";

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

  const heroClip = {
    label: project.videoLabel,
    videoUrl: project.videoUrl,
    placeholder: project.placeholder,
  };

  // Only render clips that actually have video — no empty placeholder slots.
  const episodeClips = [heroClip, ...(project.episodes ?? [])].filter(
    (clip) => !clip.placeholder && clip.videoUrl
  );
  const hasEpisodes = (project.episodes?.length ?? 0) > 0 && episodeClips.length > 0;

  const secondaryClips = (project.secondaryVideos ?? []).filter(
    (clip) => !clip.placeholder && clip.videoUrl
  );

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

          {!hasEpisodes && !project.placeholder && project.videoUrl && (
            <>
              {project.videoLabel && (
                <p className="mt-8 text-sm text-white/50">
                  {project.videoLabel}
                </p>
              )}

              <div
                className={`relative w-full ${
                  project.videoLabel ? "mt-4" : "mt-8"
                } ${aspectClass} ${
                  project.orientation === "vertical" ? "mx-auto max-w-sm" : ""
                } overflow-hidden rounded-lg border border-border bg-surface`}
              >
                <video
                  src={project.videoUrl}
                  className="h-full w-full object-cover"
                  controls
                />
              </div>
            </>
          )}

          {hasEpisodes && (
            <div className="mt-8 flex gap-6 overflow-x-auto pb-2">
              {episodeClips.map((clip, index) => (
                <div key={clip.label ?? index} className="w-56 flex-shrink-0 sm:w-64">
                  {clip.label && (
                    <p className="mb-4 text-sm text-white/50">{clip.label}</p>
                  )}
                  <div
                    className={`relative w-full ${aspectClass} overflow-hidden rounded-lg border border-border bg-surface`}
                  >
                    <video
                      src={clip.videoUrl}
                      className="h-full w-full object-cover"
                      controls
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

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

          {secondaryClips.length > 0 && (
            <div className="mt-12 flex flex-col gap-10 border-t border-border pt-10">
              {secondaryClips.map((secondaryVideo) => (
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
                    <video
                      src={secondaryVideo.videoUrl}
                      className="h-full w-full object-cover"
                      controls
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {project.stills && (
            <Gallery label="Stills" images={project.stills} />
          )}

          {project.bts && (
            <Gallery label="Behind the Scenes" images={project.bts} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
