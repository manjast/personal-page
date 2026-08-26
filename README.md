# Stefan Manja personal site

Live: https://stefanmanja.com

Public Astro site for Stefan Manja's work on internal AI systems for enterprise workflows, with emphasis on evaluation, deployment discipline, cost visibility, reviewability, and real-world usefulness.

English remains the default public site. A Serbian Cyrillic mirror is served from `/sr/` for the surfaces that have a translation. Each rendered page declares its own canonical URL and language alternates.

## Public surfaces

| Surface          | English | Serbian | Source                                |
| ---------------- | :-----: | :-----: | ------------------------------------- |
| Home             |   yes   |   yes   | `pages/index.astro`, `pages/sr/index.astro` |
| About            |   yes   |   yes   | `pages/about.astro`, `pages/sr/about.astro` |
| Services         |   yes   |   yes   | `pages/services.astro`, `pages/sr/services.astro` |
| Work (case studies) |  yes   |   yes   | `pages/work*`, `pages/sr/work*`       |
| Writing          |   yes   |   no    | `pages/writing*` (no `pages/sr/writing*`) |
| Contact          |   yes   |   yes   | `pages/contact*`, `pages/sr/contact*` |
| 404              |   yes   |   yes   | `pages/404.astro`, `pages/sr/404.astro` |

Writing is English-only on the site. The Serbian language switcher on `/writing` is rendered as a disabled control rather than as a working link.

## Content structure

- `src/content/case-studies/en/` and `src/content/case-studies/sr/` — bilingual Delta case-study Markdown with stable slugs. Defined by `src/content.config.ts`.
- `src/content/writing/` — English blog posts (`.mdx`). Each post carries an `ogImage` used for Open Graph previews.
- `src/components/blog/` — shared chart components for blog posts: `BarChart`, `Distribution`, `FiveStep`, `TwoRowFlow`.
- `public/llms.txt` — LLM-readable site index. Lists primary pages, case studies, writing, and the Serbian Cyrillic mirror.

A featured methodology artifact is surfaced from the home page but lives in a separate companion repository: [manjast/agentic-development-playbook](https://github.com/manjast/agentic-development-playbook).

## Project standards

- **Runtime:** Node 24 LTS (`.nvmrc`)
- **Framework:** Astro 6 with the `@astrojs/mdx` integration
- **Styling:** Tailwind 4 via `@tailwindcss/vite`
- **Discovery:** `@astrojs/sitemap` (the `/contact/sent/` thank-you state is filtered out of the sitemap)
- **Hosting target:** GitHub Pages + custom domain

## Local development

```bash
nvm use
npm install
npm run dev
```

## Available scripts

- `npm run dev` — start the local Astro dev server
- `npm run build` — create the production static build in `dist/`
- `npm run preview` — preview the built site locally
- `npm run check` — run Astro's project checks

## Writing publication posture

Writing is shipped as individual English-only posts under `/writing`. Each post is a self-contained `.mdx` file in `src/content/writing/` plus an OG image under `public/`. The Serbian mirror intentionally does not ship writing pages; the language switcher on writing surfaces is disabled rather than linked.

## Deployment

- GitHub Actions workflow: `.github/workflows/deploy.yml` — builds on every push and pull request against `main`, deploys only on push to `main`.
- Static output target: `dist/`
- Custom domain file: `public/CNAME`
- Search metadata baseline: `public/robots.txt` + `@astrojs/sitemap`
- Sitemap filter: `/contact/sent/` is excluded so the thank-you state is not indexed.

## Analytics

GoatCounter is active in the codebase for privacy-respecting pageview tracking. Two events are emitted from `/contact`:

- `contact-email-click` — when the direct email link is activated
- `contact-form-submit` — when the hosted form is submitted

## Contact form setup

The contact page supports a hosted Formspree form via the public environment variable below:

```bash
PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

If the variable is not set, the site still builds and the direct email path remains active.

For GitHub Pages deployments, add the same value as a repository **Actions secret** named `PUBLIC_FORMSPREE_FORM_ID` so the form is active in the production build. CI validation uses a non-production placeholder.

## What stays out of this repo

- raw profile exports,
- private notes,
- private planning and launch material,
- unpublished companion repo material,
- confidential client documents,
- and any loose planning artifacts that do not belong in the public site repo.

Local debug harnesses (any `audit-*.cjs`, `screenshot-*.cjs`, `_dev-serve.py`, and the `blog-pr2-screenshots/` folder) are excluded by `.gitignore` and must not be committed.

## Licensing note

- Source code, configuration, and reusable implementation remain available under the MIT License in [`LICENSE`](./LICENSE).
- Original written site copy, case-study/editorial content, and repository documentation prose are covered by [`CONTENT-LICENSE.md`](./CONTENT-LICENSE.md).