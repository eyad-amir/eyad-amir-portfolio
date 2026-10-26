# Eyad Amir — Portfolio

A static React 18 + Vite portfolio with Tailwind CSS, Framer Motion, Lucide and React Icons. Charcoal, warm off-white and copper, with editorial serif headings. No backend or paid services.

## Run locally

Install Node.js 22 LTS or newer, then from this directory:

```sh
npm ci
npm run dev
```

Open the URL Vite prints. Production checks:

```sh
npm run build
npm run preview
```

## Edit content

- `src/data/site.js`: identity, navigation, headings, about text, contact, social links, interface labels and the `showPhone: false` privacy flag.
- `src/data/skills.js`: all core skill categories, including the skills previously listed as currently learning.
- `src/data/projects.js`: projects, tech stacks, GitHub links, images, featured flags and the full Situation / Task / Action / Result case study. Includes a commented example.
- `src/data/experience.js`: experience and education.
- `src/styles.css`: all palette tokens are in the first theme block. Tailwind's theme references these same CSS variables. Dark and light modes have separate accessible text accents.
- `index.html`: document title, description, font imports and social metadata.

Theme follows system preference on the first visit (dark fallback) and persists manual choices locally. Animations honor reduced motion. Phone is hidden by default. Team project links are omitted until real repository URLs are supplied.

## Replace assets before launch

1. `src/assets/profile.jpg`: currently contains the portrait extracted from your supplied PDF. Replace with a higher-resolution square portrait if desired.
2. `src/assets/olympic-dashboard.png`: an **illustrative placeholder**, not a screenshot of your running application. Replace with an actual screenshot, update its alt text in `projects.js`, and change the preview caption in `site.js`.
3. `public/Eyad_Amir_CV.pdf`: your supplied Eyad_Amir_CV_v4.pdf is included. Replace this file when updating your CV, retaining the filename.
4. `public/og-image.png`: included social card. The `og:image` in `index.html` uses the full GitHub Pages URL. If you move the site, update it to the new full absolute URL (for example `https://eyad-amir.github.io/eyad-amir-portfolio/og-image.png`) for reliable social previews. Add an `og:url` and canonical URL with that same final site address if desired.

Assets and CV links respect Vite's base path. Do not link to `/public/...` in deployed HTML: Vite serves the contents of public at the base root.

## Deploy to GitHub Pages

The configured repository name is **eyad-amir-portfolio**. If you use another name, change `base` in `vite.config.js` to `'/YOUR-REPO/'`. For a repository named `eyad-amir.github.io`, use `'/'`.

Create an empty repository named `eyad-amir-portfolio` under your GitHub account. Run these commands from this project directory:

```sh
npm ci
npm run build
git init
git add .
git commit -m "Build Eyad Amir portfolio"
git branch -M main
git remote add origin https://github.com/eyad-amir/eyad-amir-portfolio.git
git push -u origin main
```

In GitHub repository **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**. If the first workflow ran before Pages was enabled, rerun it from the Actions tab. `.github/workflows/deploy.yml` installs from the npm lockfile, builds and publishes each push to main. Intended URL: `https://eyad-amir.github.io/eyad-amir-portfolio/`.

Repository: https://github.com/eyad-amir/eyad-amir-portfolio

GitHub Pages is configured to deploy through GitHub Actions. Future pushes to main publish automatically.

## Structure

```
src/
  assets/       portrait and project image
  components/   navigation, neural canvas and reusable primitives
  data/         editable site content
  hooks/        theme persistence and active section observer
  sections/     hero and portfolio sections
  styles.css    shared theme and responsive layout
public/         CV, favicon, Open Graph image
.github/workflows/deploy.yml
```

## Quality and accessibility

Semantic landmarks and heading order, keyboard focus states, skip link, accessible mobile navigation, system-aware persisted theme, reduced-motion behavior, lazy project imagery, reserved image dimensions, safe external links and clipboard feedback. Canvas pauses outside the viewport. The portrait loads eagerly as a hero asset. Google Fonts uses `display=swap`.

Lighthouse scores depend on deployment and network conditions; no 90+ score is claimed without measurement. See `VALIDATION.md` for the checks actually completed.
