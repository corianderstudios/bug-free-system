import { useEffect, useRef, useState } from "react";
import { site } from "../data/content";
import ThemeToggle from "./ThemeToggle";
import { MailIcon, MenuIcon } from "./Icons";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#hobbies", label: "Hobbies" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="rounded-md font-display text-xl font-semibold tracking-tight"
        >
          {site.name}
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={crypto.randomUUID()}>
                <a
                  href={l.href}
                  className="rounded-md px-4 py-2.5 transition-colors hover:bg-surface"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-tangerine px-5 font-semibold text-onpop"
          >
            <MailIcon />
            Email me
          </a>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid size-11 place-items-center rounded-md ring-1 ring-line md:hidden"
          >
            <span className="sr-only">Menu</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="border-t border-line/70 md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {links.map((l) => (
            <li key={crypto.randomUUID()}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-display text-2xl hover:bg-surface"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
