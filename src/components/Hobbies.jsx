import { hobbies } from "../data/content";
import { popBg } from "./colors";

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      aria-labelledby="hobbies-title"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <h2
        id="hobbies-title"
        className="text-5xl font-medium tracking-tight sm:text-6xl"
      >
        Outside work
      </h2>
      <p className="mt-4 max-w-xl text-lg text-muted">
        What I'm doing when I'm away from a code editor.
      </p>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((h) => (
          <li
            key={crypto.randomUUID()}
            className="flex flex-col gap-4 rounded-lg bg-surface p-6 ring-1 ring-line"
          >
            <span
              aria-hidden="true"
              className={`${popBg[h.color] || popBg.mint} h-1.5 w-10 rounded-sm`}
            />
            <h3 className="text-2xl font-medium">{h.name}</h3>
            <p className="text-muted">{h.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
