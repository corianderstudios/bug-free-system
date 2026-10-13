import { experience, site } from "../data/content";
import { popBg } from "./colors";
import { DownloadIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

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
        <SectionHeading
          id="resume-title"
          title="Resume"
          action={
            site.resumePdf && (
              <a
                href={site.resumePdf}
                download
                className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md px-4 font-semibold ring-1 ring-ink transition-colors hover:bg-ink hover:text-bg"
              >
                <DownloadIcon />
                Download resume (PDF)
              </a>
            )
          }
        ></SectionHeading>

        <ul className="mt-10">
          {experience.map((job) => (
            <li
              key={job.company + job.start}
              className="grid gap-5 border-b border-line py-8 first:border-t sm:py-10 md:grid-cols-12"
            >
              <div className="flex gap-4 md:col-span-5">
                <Logo job={job} />
                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl">{job.company}</h3>
                  <p className="mt-1">{job.role}</p>
                  <p className="text-sm text-muted">
                    {job.start}
                    <span aria-hidden="true"> – </span>
                    <span className="sr-only"> to </span>
                    {job.end}
                  </p>
                </div>
              </div>
              <ul className="list-disc space-y-2 pl-5 marker:text-tangerine md:col-span-6 md:col-start-7">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
