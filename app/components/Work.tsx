import { projects, type ProjectGroup } from "../data/projects";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const groups: { name: ProjectGroup; gridClass: string }[] = [
  { name: "Brand Films", gridClass: "grid-cols-1 sm:grid-cols-2" },
  { name: "Social & Events", gridClass: "grid-cols-2 sm:grid-cols-3" },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Selected Work" />

        <div className="flex flex-col gap-16">
          {groups.map(({ name, gridClass }) => {
            // Featured pieces get their own big cards up top — keep the grid to
            // the rest of the catalog so nothing shows twice.
            const groupProjects = projects.filter(
              (p) => p.group === name && !p.placeholder && !p.featured
            );
            if (groupProjects.length === 0) return null;

            return (
              <div key={name}>
                <h3 className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-white/45">{name}</h3>
                <div className={`grid gap-x-6 gap-y-12 ${gridClass}`}>
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
