import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  // Uniform square tiles keep the grid symmetrical regardless of footage shape
  // (horizontal vs vertical). The full native aspect shows on the detail page.
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block aspect-square overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent/60"
    >
      {!project.placeholder && project.videoUrl && (
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
