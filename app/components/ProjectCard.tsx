import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const aspectClass =
    project.orientation === "vertical" ? "aspect-[9/16]" : "aspect-video";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative block ${aspectClass} overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent/60`}
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
          muted
          loop
          playsInline
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/0 to-black/0 p-5 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
        <p className="text-sm font-medium">{project.title}</p>
        <p className="text-xs text-white/60">
          {project.client} · {project.category} · {project.year}
        </p>
      </div>
    </Link>
  );
}
