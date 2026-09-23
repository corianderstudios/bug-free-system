import { useState } from "react";
import { site } from "../data/content";
import { CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      setCopied(false);
    }
  }

  return (
    <footer aria-labelledby="contact-title" className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="contact-title" className="text-2xl font-medium">
            Get in touch
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="break-all underline decoration-tangerine decoration-2 underline-offset-4"
            >
              {site.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm font-semibold ring-1 ring-line hover:bg-surface"
            >
              {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
              {copied ? "Copied" : "Copy"}
              <span className="sr-only"> email address</span>
            </button>
            <p role="status" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex gap-2">
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-md ring-1 ring-line hover:bg-surface"
              >
                <LinkedInIcon className="size-5" />
                <span className="sr-only">LinkedIn (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-md ring-1 ring-line hover:bg-surface"
              >
                <GitHubIcon className="size-5" />
                <span className="sr-only">GitHub (opens in a new tab)</span>
              </a>
            </li>
          </ul>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
