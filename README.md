# Viacheslav Martynovskyi · Videographer portfolio

Personal portfolio site in English and Icelandic: showreel, live broadcasts
(with my role in each), bio, experience and contacts.

Separate from the director site (`martynovskyi-films`), but built with the
same stack and the same look: colours, fonts (Newsreader + Inter), header,
menu, buttons, scroll cue and fade-in transitions were carried over from it.
The portrait in `public/images/` is the one used on the director site.

## How it is built

- [Next.js](https://nextjs.org) 15 (App Router) + TypeScript + Tailwind CSS 4,
  same versions as the director site.
- Every page exists twice: `/en/...` and `/is/...` (folder `src/app/[lang]`).
- All texts and project data are in **one file**: `src/content/portfolio.ts`.
- Videos show a thumbnail first; the YouTube player loads only after a click
  (faster pages, no autoplay, no YouTube cookies until the visitor chooses).
- SEO: per-page titles and descriptions, canonical + `hreflang` links,
  `sitemap.xml`, `robots.txt`, schema.org `Person` data.

## Everyday edits

| I want to… | Edit |
| --- | --- |
| Add a project / video | `projects` in `src/content/portfolio.ts` (copy one block, change the YouTube id) |
| Change a text | `ui.en` / `ui.is` in the same file |
| Change colours | `@theme` at the top of `src/app/globals.css` |

Icelandic texts are a first draft: have them checked by a native speaker.
Lines marked `CONFIRM` in `portfolio.ts` are worth double-checking.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build, also checks types
```

## Deploy

The repository is connected to Vercel: every push to `main` deploys the site.
After the first deploy, set the environment variable `NEXT_PUBLIC_SITE_URL`
in Vercel to the real address (used for canonical links and the sitemap).
