import { site } from "../data/content";

export default function Hero() {
  const facts = [
    { label: "Role", value: site.role },
    { label: "Based in", value: site.location },
    site.availability && {
      label: "Status",
      value: site.availability,
      dot: true,
    },
  ].filter(Boolean);

  return (
    <section aria-labelledby="hero-title">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-24">
        <h1
          id="hero-title"
          className="text-[clamp(3.75rem,15vw,11rem)] font-light leading-[0.86] tracking-[-0.045em]"
        >
          {site.name}
        </h1>

        <div className="mt-12 grid gap-10 border-t border-ink pt-6 md:mt-16 md:grid-cols-12">
          <p className="font-display text-2xl leading-snug font-light sm:text-3xl sm:leading-snug md:col-span-7">
            {site.intro}
          </p>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 self-start sm:grid-cols-3 md:col-span-4 md:col-start-9 md:grid-cols-1">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-0.5 flex items-center gap-2">
                  {f.dot && (
                    <span aria-hidden="true" className="status-dot mx-1" />
                  )}
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
