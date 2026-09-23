# Portfolio

React + Vite + Tailwind CSS v4. Builds to plain static files that run on any cPanel host.

## Make it yours

Almost everything lives in **`src/data/content.js`**: your name, email, intro, LinkedIn/GitHub URLs,
projects (split into `human` and `vibe`), jobs, and hobbies.

- **Company logos:** put SVG/PNG files in `public/logos/` and set `logo: "logos/your-company.svg"`.
  Leave `logo: ""` to show colored initials instead.
- **Project screenshots:** put images in `public/projects/` and set `image: "projects/name.png"` plus a short `imageAlt`.
  Without an image, the card shows the project name on a color block.
- **Resume PDF:** drop `resume.pdf` into `public/`. Set `resumePdf: ""` to hide the button.
- **Colors:** `src/index.css`. The light/dark values are under `:root` and `.dark`, the pops are in the second `@theme` block.
- **Fonts:** change the Google Fonts link in `index.html` and `--font-display` / `--font-sans` in `src/index.css`.
- **Page title and description:** `index.html`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Namecheap cPanel

1. Run `npm run build`. This creates a `dist/` folder.
2. Log in to cPanel and open **File Manager** → `public_html`
   (or the folder for your addon domain / subdomain).
3. Delete any old placeholder files there (like `default.html`).
4. Upload **the contents** of `dist/` (not the `dist` folder itself). The easiest way is to zip the contents,
   upload the zip, then right-click → **Extract**.
5. In File Manager, click **Settings** → tick **Show Hidden Files** and confirm `.htaccess` was uploaded.
6. Once SSL is active (cPanel → **SSL/TLS Status** → Run AutoSSL), open `.htaccess` and uncomment the two
   HTTPS lines to redirect all visitors to https.

Because `vite.config.js` uses `base: "./"`, the build also works from a subfolder like `yourdomain.com/portfolio/`.

## Accessibility notes

Skip link, landmark regions, one `h1` with a clean heading order, visible keyboard focus, 44px+ touch targets,
labelled icon buttons, a status message when the email is copied, a pause button on the skills marquee,
and no animation for visitors who have "reduce motion" turned on. All text colors meet WCAG AA contrast
in both light and dark modes.
