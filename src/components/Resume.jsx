import { experience, site } from "../data/content";
import { popBg } from "./colors";
import { DownloadIcon } from "./Icons";

function initials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Logo({ job }) {
  return (
    <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-lg bg-surface ring-1 ring-line">
      {job.logo ? (
        <img src={job.logo} alt="" className="size-10 object-contain" />
      ) : (
        <span
          aria-hidden="true"
          className={`${popBg[job.color] || popBg.sky} grid size-full place-items-center font-display text-xl font-semibold text-onpop`}
        >
          {initials(job.company)}
        </span>
      )}
    </div>
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-title"
      className="bg-surface/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="resume-title"
            className="text-5xl font-medium tracking-tight sm:text-6xl"
          >
            Resume
          </h2>
          {site.resumePdf && (
            <a
              href={site.resumePdf}
              download
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-md px-5 font-semibold ring-1 ring-ink/30 hover:bg-bg"
            >
              <DownloadIcon />
              Download resume (PDF)
            </a>
          )}
        </div>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {experience.map((job) => (
            <li
              key={job.company + job.start}
              className="flex gap-5 py-8 sm:gap-8 sm:py-10"
            >
              <Logo job={job} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <h3 className="text-2xl font-medium sm:text-3xl">
                    {job.company}
                  </h3>
                  <p className="shrink-0 text-muted">
                    {job.start}
                    <span aria-hidden="true"> – </span>
                    <span className="sr-only"> to </span>
                    {job.end}
                  </p>
                </div>
                <p className="mt-1 font-semibold">{job.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
