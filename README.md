# AlphaTime Fitness Club

AlphaTime Fitness Club is a branded single-page marketing website for a Lahore-based gym. The app is built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion, with a bold old-school bodybuilding visual style and section-based landing page flow.

The homepage currently includes:

- Hero
- About
- Facilities
- Programs
- Trainers
- Pricing
- Gallery
- Testimonials
- Contact
- Footer

## Purpose

This repository is for the public-facing website, not a membership portal or admin system. It is primarily a content-driven landing page focused on branding, gym information, programs, social proof, pricing, and contact details.

## Tech Stack

- Next.js 16 with the App Router (`src/app`)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- `next/font` for typography (`Inter` and `Bebas Neue`)

## Project Structure

```text
src/
  app/
    layout.tsx        Global metadata, fonts, and layout shell
    page.tsx          Homepage section composition
    globals.css       Theme tokens and global styling
    favicon.ico       Browser tab icon
  components/
    *.tsx             Landing page sections and reusable UI pieces
  data/
    content.ts        Brand info, metadata, nav, and most editable content

public/
  images/             Logos and other static image assets
```

## Key Files

- `src/app/page.tsx`
  Controls the order of the homepage sections.

- `src/data/content.ts`
  Main content configuration for the site. This is the first place to look when updating:
  - brand name and tagline
  - navigation links
  - hero copy and stats
  - section headings and descriptions
  - social links
  - image paths

- `src/app/layout.tsx`
  Defines site metadata and global fonts.

- `src/app/globals.css`
  Contains the color system, typography variables, gradients, texture overlay, and shared utility styles.

- `public/images/`
  Holds brand assets and static images referenced by the UI.

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Content Editing Workflow

For most routine updates, use this order:

1. Update copy, links, stats, and image paths in `src/data/content.ts`.
2. Replace or add assets in `public/images/`.
3. Update metadata in `src/app/layout.tsx` if the page title or SEO description changes.
4. Adjust component layout or styling in `src/components/` only when the content model is not enough.

## Branding and Assets

Static files inside `public/` are served from the site root. Example:

- `public/images/logo.png` becomes `/images/logo.png`
- `public/images/example-photo.jpg` becomes `/images/example-photo.jpg`

This project currently uses the `public/images/` folder for logo assets and other brand imagery.

## Important Notes

- The contact form is currently presentational only. It stores input in local component state but does not submit to a backend or API route.
- Most reusable site content is intended to live in `src/data/content.ts`, but some older section content is still hardcoded inside component files. If a text change is not reflected there, check the relevant component in `src/components/`.
- The app uses the `@/` path alias, which maps to `src/`.

## Deployment

For a production check:

```bash
npm run build
npm run start
```

The app is suitable for deployment on Vercel or any platform that supports Next.js 16.
