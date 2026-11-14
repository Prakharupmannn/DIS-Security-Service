# SIS Security – Corporate Landing Page

Next.js (App Router, JavaScript) + Tailwind CSS 3 + lucide-react.

## Prerequisites
- Node.js 18.18+ (LTS 20/22 recommended) — https://nodejs.org
- VS Code

## Install & run (Windows PowerShell / VS Code terminal)
```
cd sis-security
npm install
npm run dev
```
Open http://localhost:3000

## Production
```
npm run build
npm run start
```

## Structure
- `app/` layout, page, global CSS
- `components/` Header, HeroSection, ServicesSection, AboutSection, IndustriesSection, TestimonialCareerSection, Footer, etc.
- `data/` navigation, services, industries, **images.js** (all photo URLs)
- `lib/newsletter.js` email validation + stub for a future API

## Replacing images
All photos are listed in `data/images.js`. Put your own files in `public/images/`
and change a value to e.g. `"/images/hero-guard.jpg"`. Remote images must come from
`images.unsplash.com` or be added to `remotePatterns` in `next.config.mjs`.
For the closest match to the reference, use a guard photo on a transparent/blue-building
background for `heroGuard`, and a control-room photo for `controlRoom`.

## Configuration
- Colors: `tailwind.config.js`
- Hero video: `VIDEO_SRC` in `components/VideoModal.jsx`
- Newsletter API: `lib/newsletter.js`
