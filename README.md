# Karadimas — ikaradimas.gr

Website for **Karadimas**, a tile and bath store in Glyfada, Greece. Built with Astro 5 and deployed on Vercel.

[Live site →](https://ikaradimas.gr/)

## Stack

- [Astro 5](https://astro.build/) — static site generator
- [Tailwind CSS 3](https://tailwindcss.com/) — styling
- [Flowbite](https://flowbite.com/) — carousel component
- [Vercel](https://vercel.com/) — hosting & analytics
- Images hosted on [Cloudinary](https://cloudinary.com/)
- Contact form via [Formspree](https://formspree.io/)

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → ./dist/
npm run preview   # preview the build locally
```

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
