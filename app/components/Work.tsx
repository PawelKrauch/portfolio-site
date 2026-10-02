import { projects, type ProjectGroup } from "../data/projects";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const groups: { name: ProjectGroup; gridClass: string; intro?: string }[] = [
  { name: "Brand Films", gridClass: "grid-cols-1 sm:grid-cols-2" },
  { name: "Social & Events", gridClass: "grid-cols-2 sm:grid-cols-3" },
  {
    name: "Private Commissions",
    gridClass: "grid-cols-2 sm:grid-cols-3",
    intro:
      "Brand-level films for individuals — your sport, travel or lifestyle, shot and edited for your own channels.",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-baseline gap-3">
          <span className="text-xs font-medium text-accent">02</span>
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Selected Work
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {groups.map(({ name, gridClass, intro }) => {
            // Featured pieces get their own big cards up top — keep the grid to
            // the rest of the catalog so nothing shows twice.
            const groupProjects = projects.filter(
              (p) => p.group === name && !p.placeholder && !p.featured
            );
            if (groupProjects.length === 0) return null;

            return (
              <div key={name}>
                <h3 className="mb-6 text-sm text-white/50">{name}</h3>
                {intro && (
                  <p className="-mt-3 mb-6 max-w-xl text-sm text-white/60">{intro}</p>
                )}
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
