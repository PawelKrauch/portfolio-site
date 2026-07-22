import { projects, type ProjectGroup } from "../data/projects";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const groups: { name: ProjectGroup; gridClass: string }[] = [
  { name: "Brand Films", gridClass: "grid-cols-1 sm:grid-cols-2" },
  { name: "Social & Events", gridClass: "grid-cols-2 sm:grid-cols-3" },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-baseline gap-3">
          <span className="text-xs font-medium text-accent">01</span>
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Selected Work
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {groups.map(({ name, gridClass }) => {
            const groupProjects = projects.filter((p) => p.group === name);
            if (groupProjects.length === 0) return null;

            return (
              <div key={name}>
                <h3 className="mb-6 text-sm text-white/50">{name}</h3>
                <div className={`grid gap-6 ${gridClass}`}>
                  {groupProjects.map((project, i) => (
                    <Reveal key={project.slug} delay={i * 80}>
                      <ProjectCard project={project} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
