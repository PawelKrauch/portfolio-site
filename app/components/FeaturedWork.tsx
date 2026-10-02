"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects, type Project } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Big "hero" cards for the flagged featured pieces — each its own animated
// screen that clicks through to the full detail page (data + videos). Sits
// between the showreel Hero and the full Work grid.
//
// Tiles are uniform squares (object-cover crop) so the grid stays symmetrical
// whatever the footage shape; the native aspect shows in full on the detail
// page.
//
// Playback is lazy: videos are NOT preloaded or autoplayed on page load — they
// only start once the card scrolls into view (and pause when it leaves). This
// keeps the (large) featured clips from competing with the hero reel for
// bandwidth while the hero is still on screen.
function FeaturedCard({ project }: { project: Project }) {
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

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden bg-surface"
    >
      {project.videoUrl && (
        <video
          ref={videoRef}
          src={project.previewUrl ?? project.videoUrl}
          poster={project.cover ?? project.poster}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          muted
          loop
          playsInline
          preload="none"
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/10 to-black/0 p-5 sm:p-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/60">
          {project.category}
        </p>
        <p className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{project.title}</p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/50">
          {project.client} · {project.year}
        </p>
        {project.stats && (
          <div className="mt-4 hidden gap-8 sm:flex">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-white">{stat.value}</p>
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
        <SectionHeading index="01" title="Featured" />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
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
