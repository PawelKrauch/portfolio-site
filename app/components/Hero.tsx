"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

const slides = projects.filter((project) => project.featured);

function tagline(description: string) {
  return description.split(". ")[0].replace(/\.$/, "") + ".";
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = slideRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActive(index);
        });
      },
      { root: container, threshold: 0.6 }
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen snap-y snap-mandatory overflow-y-auto"
    >
      {slides.map((project, i) => (
        <div
          key={project.slug}
          ref={(el) => {
            slideRefs.current[i] = el;
          }}
          className="relative flex h-screen w-full snap-start snap-always items-center justify-center overflow-hidden bg-surface"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, var(--accent) 0%, transparent 60%)",
            }}
          />

          {project.placeholder ? (
            <span className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[20vw] font-medium leading-none text-white/[0.04]">
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : (
            <video
              src={project.videoUrl}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          <div className="relative flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
            {i === 0 && (
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                Filmmaker &amp; Director
              </p>
            )}
            <h2 className="text-balance text-2xl font-medium sm:text-4xl">
              {project.title}
            </h2>
            <p className="max-w-md text-balance text-sm text-white/60 sm:text-base">
              {tagline(project.description)}
            </p>
            <Link
              href={`/work/${project.slug}`}
              className="mt-2 text-sm underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              View Case Study
            </Link>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40">
        <span className="text-[11px] uppercase tracking-widest">
          Scroll to explore
        </span>
        <span className="text-[11px]">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
