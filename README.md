# Mrityunjoy Kumar Deka Portfolio

Premium personal portfolio built with React, TypeScript, Tailwind CSS, Vite, Framer Motion, React Router DOM, and Lucide React.

## Features

- Responsive dark-first design with light theme toggle
- Sticky navigation, active section highlights, mobile menu, scroll progress, loading screen, and back-to-top control
- Premium hero, about, skills, projects, services, journey, workflow, resume, CTA, contact, and footer sections
- Filterable project showcase with interactive preview details
- Validated contact form with Formspree support
- SEO meta tags, Open Graph preview, favicon, and accessible landmarks
- Clean data-driven content structure for easy updates

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Contact Form Setup

Create a `.env` file and add your Formspree endpoint:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Without this variable, the form still validates locally and provides an email fallback to `mrityunjoykdeka100@gmail.com`.

## Content Updates

Most portfolio content lives in:

```text
src/data/site.ts
```

Update project URLs, social links, testimonials, skill levels, and service copy there as your real work grows.

## Deployment

The app can be deployed to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

Typical Vercel/Netlify settings:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_FORMSPREE_ENDPOINT`

## Project Structure

```text
src/
  animations/
  assets/
  components/
  data/
  hooks/
  layouts/
  pages/
  sections/
  types/
  utils/
```
