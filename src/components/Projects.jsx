import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";

const groups = [
  {
    id: "human-coded",
    title: "Human-coded",
    badge: "bg-butter",
    blurb: "Written and reviewed line by line. The architecture, state, accessibility and tests are my own work.",
    items: projects.human,
  },
  {
    id: "vibe-coded",
    title: "Vibe-coded",
    badge: "bg-lilac",
    blurb: "Built by prompting AI tools, then testing and shaping the result. Quick experiments where speed mattered most.",
    items: projects.vibe,
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 id="projects-title" className="text-5xl font-medium tracking-tight sm:text-6xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-muted">
            Some of these I wrote by hand. Others I built by steering AI tools. They're split up so you can see both.
          </p>
        </div>
        <nav aria-label="Project types">
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md bg-surface px-4 ring-1 ring-line hover:bg-bg"
                >
                  <span aria-hidden="true" className={`size-3 rounded-md ${g.badge}`} />
                  {g.title}
                  <span className="text-muted">({g.items.length})</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {groups.map((g) => (
        <div key={g.id} id={g.id} className="mt-16">
          <div className="mb-8 flex flex-col gap-2 border-t border-line pt-8 sm:flex-row sm:items-baseline sm:gap-6">
            <h3 className="flex shrink-0 items-center gap-3 text-3xl font-medium">
              <span aria-hidden="true" className={`size-4 rounded-md ${g.badge}`} />
              {g.title}
            </h3>
            <p className="max-w-xl text-muted">{g.blurb}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
