# Shubham Maurya Portfolio — Next.js

This project is a Next.js App Router conversion of the original React + Vite portfolio.

## What was preserved

- Same portfolio sections and page structure
- Same Tailwind styling/classes and responsive breakpoints
- Same Framer Motion animations
- Same React Icons
- Same images/assets
- Same external links, resume, certificates and project links
- Same routes:
  - `/`
  - `/education`
  - `/experience`
  - `/projects`
  - `/contactme`

## What changed

- React Router → Next.js App Router
- Vite → Next.js
- Added SEO metadata, canonical URL support, Open Graph/Twitter metadata
- Added `sitemap.xml` and `robots.txt` through Next.js metadata routes
- Added Person JSON-LD structured data
- Navigation now uses `next/link` and `usePathname`
- Removed Vite-only files/dependencies

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## SEO setup before deployment

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN.com
```

Use your real production portfolio domain. This value is used for canonical URLs, Open Graph URLs, sitemap and robots.

## Deploy to Vercel

Import this project into Vercel and set:

`NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN.com`

Then deploy.

## Important

The original visual design and responsive Tailwind classes were intentionally retained. The conversion focuses on changing the framework/runtime and adding SEO rather than redesigning the portfolio.
