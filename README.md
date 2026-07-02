# Karadimas — ikaradimas.gr

Website for **Karadimas**, a tile and bath store in Glyfada, Greece. Built with Astro 7 and deployed on Vercel.

[Live site →](https://ikaradimas.gr/)

## Stack

- [Astro 7](https://astro.build/) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com/) — styling (via `@tailwindcss/vite`)
- [Flowbite](https://flowbite.com/) — carousel component
- [Vercel](https://vercel.com/) — hosting & analytics
- Images hosted on [Cloudinary](https://cloudinary.com/)
- Contact form via [Formspree](https://formspree.io/)

## Local development

This project uses [Bun](https://bun.sh/) as its only package manager. The text lockfile `bun.lock` is committed; do **not** run `npm install` (a `package-lock.json` would make Vercel switch away from Bun — see below).

```bash
bun install
bun run dev       # http://localhost:4321
bun run build     # production build → ./dist/
bun run preview   # preview the build locally
```

## Deployment

Deployed on Vercel. Vercel auto-detects the package manager from the committed lockfile: because only `bun.lock` (text format) is present, it runs `bun install` with Bun ≥ 1.2 and then the framework build (`astro build`). Keeping `package-lock.json` / `yarn.lock` / `pnpm-lock.yaml` out of the repo (they're gitignored) is what keeps that detection on Bun.

## Project structure

```
src/
├── components/   # Reusable UI components
├── layouts/      # DefaultLayout, MarkdownLayout
├── pages/        # Routes — index, bath, tiles, showroom, erga, contact
├── assets/       # SCSS globals
└── js/           # TypeScript (contact form handler)
public/           # Static assets (favicon, fonts, OG image)
vercel.json       # Security headers (CSP, HSTS, Permissions-Policy)
```

## Author

Built by [George Vagdas](https://vagdas.eu/)
