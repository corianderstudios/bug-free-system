import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {
      /* storage unavailable, theme just won't persist */
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-pressed={dark}
      className="grid size-11 place-items-center rounded-md text-ink ring-1 ring-line transition-colors hover:bg-surface"
    >
      <span className="sr-only">Dark mode</span>
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
