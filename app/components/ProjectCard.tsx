import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  // Uniform 4:5 portrait tiles keep the grid symmetrical regardless of footage shape
  // (horizontal vs vertical). The full native aspect shows on the detail page.
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        {!project.placeholder && project.videoUrl && (
          <video
            src={project.videoUrl}
            poster={project.cover ?? project.poster}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            muted
            loop
            playsInline
            preload={project.poster ? "none" : "metadata"}
          />
        )}
      </div>
      <p className="mt-4 font-serif text-2xl leading-tight">{project.title}</p>
      <p className="mt-1 text-xs uppercase font-mono text-white/45">
        {project.category} · {project.year}
      </p>
    </Link>
  );
}
