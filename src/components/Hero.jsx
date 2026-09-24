import { site } from "../data/content";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <p className="text-lg text-muted">
          {site.role} in {site.location}
        </p>
        <h1
          id="hero-title"
          className="mt-3 text-[clamp(3.5rem,13vw,9rem)] font-normal leading-[0.9] tracking-[-0.035em]"
        >
          {site.name}
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,36rem)_auto] md:items-end md:justify-between">
          <p className="text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">
            {site.intro}
          </p>
          {site.availability && (
            <p className="inline-flex w-fit items-center gap-2.5 rounded-md bg-surface px-4 py-2 ring-1 ring-line">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-mint ring-4 ring-mint/30"
              />
              {site.availability}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
