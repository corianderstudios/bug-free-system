import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    id: "human-coded",
    title: "Human-coded",
    badge: "bg-butter",
    blurb: "",
    items: projects.human,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading id="projects-title" title="Projects">
        Some of these I wrote by hand. Others I built by playing with AI tools.
      </SectionHeading>

      {groups.map((g) => (
        <div key={crypto.randomUUID()} id={g.id} className="mt-16">
          <div className="mb-8 flex flex-col gap-2 border-t border-line pt-8 sm:flex-row sm:items-baseline sm:gap-6">
            <p className="max-w-xl text-muted">{g.blurb}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((p) => (
              <ProjectCard key={crypto.randomUUID()} project={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
