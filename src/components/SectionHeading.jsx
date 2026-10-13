export default function SectionHeading({ id, title, children, action }) {
  return (
    <div className="grid gap-6 border-t border-ink pt-6 md:grid-cols-12">
      <h2 id={id} className="text-5xl font-light tracking-[-0.03em] sm:text-7xl md:col-span-7">
        {title}
      </h2>
      {(children || action) && (
        <div className="flex flex-col gap-4 md:col-span-4 md:col-start-9 md:pt-3">
          {children && <p className="text-muted">{children}</p>}
          {action}
        </div>
      )}
    </div>
  );
}
