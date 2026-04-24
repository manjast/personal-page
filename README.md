# Stefan Manja personal site

Focused Astro site for **independent project lead generation** around internal AI systems for enterprise workflows, with emphasis on evaluation, deployment discipline, and real-world usefulness.

## Purpose

This repository is intentionally narrow:

- a conversion-focused personal site,
- two public Delta-based case studies,
- a featured methodology artifact (the Agentic Development Playbook),
- and a clean deployment path to GitHub Pages behind a custom domain.

It is **not** a general scratch repo, note dump, or raw-material archive.

## Project standards

- **Runtime:** Node 22 LTS (`.nvmrc`)
- **Framework:** Astro 5
- **Styling:** Tailwind 4 via `@tailwindcss/vite`
- **Hosting target:** GitHub Pages + custom domain

## Local development

```bash
nvm use
npm install
npm run dev
```

## Available scripts

- `npm run dev` — start the local Astro dev server
- `npm run build` — create the production static build
- `npm run preview` — preview the built site locally
- `npm run check` — run Astro's project checks

## Content structure

- `src/content/case-studies/` — public case-study content used on `/work` and `/work/[slug]`

The public site currently ships only case-study content. Add writing back only when there is a real first piece ready to publish.

## What stays out of this repo

- raw profile exports,
- private notes,
- private planning and launch material,
- unpublished companion repo material,
- confidential client documents,
- and any loose planning artifacts that do not belong in the public site repo.

## Contact form setup

The contact page supports a hosted Formspree form via the public environment variable below:

```bash
PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

If the variable is not set, the site still builds and the direct email path remains active.

For GitHub Pages deployments, add the same value as a repository **Actions variable** named `PUBLIC_FORMSPREE_FORM_ID` so the form is active in the production build.

## Deployment

- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Static output target: `dist/`
- Custom domain file: `public/CNAME`
- Search metadata baseline: `public/robots.txt` + `@astrojs/sitemap`

## Analytics

GoatCounter is active in the codebase for privacy-respecting pageview tracking, including contact-page event tracking for email link clicks and form submissions.
