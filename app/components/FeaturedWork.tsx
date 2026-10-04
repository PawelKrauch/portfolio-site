"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects, type Project } from "../data/projects";
import SectionHeading from "./SectionHeading";

// Featured pieces as full-screen "film slides": each one fills the viewport
// with its looping preview and a credit-style row (title, then client /
// category / runtime / year in mono, each on a hairline) — reads like the
// opening credits of the film, and clicks through to the detail page.
//
// Desktop gets a 16:9 crop (slideUrl) so vertical footage isn't stretched
// soft; phones keep the native vertical loop (previewUrl).
//
// Playback is lazy: videos are NOT preloaded or autoplayed on page load — they
// only start once the slide scrolls into view (and pause when it leaves), so
// they never compete with the hero reel for bandwidth.
const DESKTOP = "(min-width: 640px)";

function FeaturedSlide({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const credits = [project.client, project.category, project.runtime, project.year].filter(
    Boolean
  );
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block h-[100svh] w-full overflow-hidden bg-surface"
    >
      {project.videoUrl && (
        <video
          ref={videoRef}
          poster={project.slidePoster ?? project.cover ?? project.poster}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
          muted
          loop
          playsInline
          preload="none"
        >
          {project.slideUrl && (
            <source src={project.slideUrl} media={DESKTOP} type="video/mp4" />
          )}
          <source src={project.previewUrl ?? project.videoUrl} type="video/mp4" />
        </video>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

      <p className="absolute top-24 left-6 font-mono text-xs text-white/60 sm:left-10">
        ({pad(index + 1)}/{pad(total)})
      </p>

      <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 sm:pb-10">
        <div className="grid gap-x-6 gap-y-5 sm:grid-cols-[2.4fr_repeat(4,1fr)] sm:items-end">
          <h3 className="border-b border-white/25 pb-3 font-serif text-4xl leading-none tracking-tight sm:text-6xl">
            {project.title.split(" — ")[0]}
          </h3>
          {credits.map((item) => (
            <p
              key={item}
              className="hidden border-b border-white/25 pb-3 font-mono text-xs uppercase text-white/75 sm:block"
            >
              {item}
            </p>
          ))}
          <p className="font-mono text-xs uppercase text-white/75 sm:hidden">
            {credits.join(" · ")}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured && !p.placeholder);
  if (featured.length === 0) return null;

  return (
    <section id="featured" className="pt-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading index="01" title="Featured" />
      </div>
      <div>
        {featured.map((project, i) => (
          <FeaturedSlide key={project.slug} project={project} index={i} total={featured.length} />
        ))}
      </div>
    </section>
  );
}
