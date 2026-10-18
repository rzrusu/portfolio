# rusu.me

Portfolio of Rusu Răzvan-Iulian, a UI/UX designer working on websites and interfaces for hosting and gaming companies. Built with [Astro](https://astro.build) and Tailwind CSS, in English (`/`) and Romanian (`/ro/`).

## Commands

| Command           | What it does                                          |
| :---------------- | :---------------------------------------------------- |
| `npm install`     | Install dependencies                                  |
| `npm run dev`     | Start the dev server at `localhost:4321`              |
| `npm run build`   | Build the site to `dist/`                             |
| `npm run preview` | Serve the built site locally                          |
| `npm run check`   | Type-check the project with `astro check`             |
| `npm run og`      | Re-render the social preview cards (needs Chrome)     |

## Where things live

- **Interface text** in both languages: `src/i18n.ts`
- **Profile links, current job and side projects**: `src/data/site.ts`
- **Case studies**: `src/content/work/<lang>/<slug>.md`. The file name becomes the URL (`/work/<slug>/`), and a study missing from `ro/` falls back to the English one. Studies with a `gallery` in their front matter show stacked screenshots instead of the scrolling layout.
- **Images**: `src/assets/` (Astro optimises them at build time)
- **Social preview cards**: `src/assets/og/`, rendered by `scripts/og-cards.mjs` from the text in `src/i18n.ts`. Run `npm run og` after changing the role, intro or availability text.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`), served at [rusu.me](https://rusu.me) via `public/CNAME`.
