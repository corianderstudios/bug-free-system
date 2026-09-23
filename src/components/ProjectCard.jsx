import { popBg } from "./colors";
import { ExternalIcon, GitHubIcon } from "./Icons";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    stack = [],
    live,
    code,
    image,
    imageAlt,
    color = "lilac",
  } = project;

  return (
    <article className="flex flex-col rounded-lg bg-surface p-2.5 ring-1 ring-line">
      <div
        className={`${popBg[color] || popBg.lilac} relative aspect-[4/3] overflow-hidden rounded-md`}
      >
        {image ? (
          <img
            src={image}
            alt={imageAlt || `Screenshot of ${title}`}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center p-6 text-center font-display text-4xl leading-none tracking-tight text-onpop"
          >
            {title}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 px-3 pb-3 pt-5">
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="text-muted">{description}</p>

        {stack.length > 0 && (
          <ul aria-label="Built with" className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <li
                key={crypto.randomUUID()}
                className="rounded-md px-3 py-1 text-sm ring-1 ring-line"
              >
                {s}
              </li>
            ))}
          </ul>
        )}

        {(live || code) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-3">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-ink px-4 font-semibold text-bg"
              >
                Live site
                <span className="sr-only">: {title} (opens in a new tab)</span>
                <ExternalIcon />
              </a>
            )}
            {code && (
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-md px-4 font-semibold ring-1 ring-ink/30 hover:bg-bg"
              >
                <GitHubIcon className="size-4" />
                Code
                <span className="sr-only">
                  : {title} on GitHub (opens in a new tab)
                </span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
