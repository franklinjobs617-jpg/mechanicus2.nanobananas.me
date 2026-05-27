# AGENTS.md

## Project Overview
Unofficial fan-made website for **Warhammer 40,000: Mechanicus II** — game guides, crafting calculator, and build planner. English only, PC & mobile responsive.

## Version Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI Components**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS 4

## Directory Structure
```
├── public/
│   ├── hero-banner.jpg            # AI-generated hero image
│   ├── build-planner-hero.jpg     # AI-generated build planner hero
│   ├── guide-*.jpg                # AI-generated guide thumbnails
│   ├── guide-*-inline.jpg         # AI-generated guide inline images
│   └── mat-*.jpg                  # AI-generated material category images
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with Header + Footer + SEO template
│   │   ├── page.tsx               # Homepage
│   │   ├── globals.css            # Global styles + Tailwind theme
│   │   ├── about/page.tsx         # About + Copyright page
│   │   ├── privacy/page.tsx       # Privacy Policy page
│   │   ├── terms/page.tsx         # Terms of Service page
│   │   ├── guides/
│   │   │   ├── page.tsx           # Guides list
│   │   │   └── [slug]/page.tsx    # Guide detail (dynamic, 5 slugs)
│   │   └── tools/
│   │       ├── page.tsx           # Tools list
│   │       ├── crafting-calculator/
│   │       │   ├── layout.tsx     # SEO meta
│   │       │   └── page.tsx       # Crafting Calculator tool
│   │       └── build-planner/
│   │           ├── layout.tsx     # SEO meta
│   │           └── page.tsx       # Build Planner tool
│   ├── components/
│   │   ├── Header.tsx             # Global navigation (desktop + mobile)
│   │   ├── Footer.tsx             # Global footer with copyright + Privacy/Terms links
│   │   └── ui/                    # shadcn/ui components
│   ├── lib/
│   │   ├── utils.ts               # cn() utility
│   │   ├── guides.ts              # Guide data + types
│   │   ├── crafting-data.ts       # Crafting Calculator data + types
│   │   └── build-planner-data.ts  # Build Planner data + types
│   └── server.ts
├── DESIGN.md                      # Visual design system
├── AGENTS.md                      # This file
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Build & Test Commands
- `pnpm install` — Install dependencies
- `pnpm run dev` — Start dev server (port 5000)
- `pnpm run build` — Production build
- `pnpm ts-check` — TypeScript type checking
- `pnpm lint` — ESLint checking
- `pnpm lint:build` — ESLint quiet mode

## Coding Standards
- TypeScript strict mode; no implicit `any` or `as any`
- All function parameters, return values, and event handlers must have explicit types
- Use `'use client'` + `useEffect` + `useState` for dynamic content (no `Date.now()`, `Math.random()`, `typeof window` in JSX)
- No `<head>` tags — use `metadata` export or `globals.css` `@import`
- Fonts loaded via `fonts.googleapis.cn` in globals.css
- Use pnpm only — never npm or yarn

## Copyright Red Lines (MUST follow)
- NO official game logos, UI, original artwork, or promotional images
- NO direct copy of in-game text, Steam content, or official documents
- NO reverse engineering, data mining, or automated scraping
- NO use of words like "Official", "Authorized", "Partnered"
- NO cheats, modifiers, or save-tampering features
- Global footer copyright notice on ALL pages
- Tool page top notice on ALL tool pages
- Guide end notice on ALL guide articles

## Design Tokens (from DESIGN.md)
- Main Background: `#0F2620` (Dark Green)
- Secondary Background: `#1A1A1A` / `#0A1F19`
- Card Background: `#162B24`
- Highlight: `#E6C200` (Yellow)
- Main Text: `#F0F0F0`
- Secondary Text: `#B0B0B0`
- Border: `rgba(230, 194, 0, 0.2)`
- Font: Inter (sans-serif), Roboto Mono (monospace)
- Max border radius: `rounded-lg` — no large border-radius

## Page Routes (V1.0 Complete)
| Route | Status |
|-------|--------|
| `/` | Done |
| `/guides` | Done (5 guides with thumbnails) |
| `/guides/[slug]` | Done (5 slugs with full content + inline images) |
| `/tools` | Done (2 tool cards with hero images) |
| `/tools/crafting-calculator` | Done (39 items, 22 materials, usage guide) |
| `/tools/build-planner` | Done (16 units, 52 equipment, usage guide) |
| `/about` | Done (intro + copyright + contact) |
| `/privacy` | Done (full Privacy Policy) |
| `/terms` | Done (full Terms of Service) |
| `/tools/crafting-calculator` | Phase 3 |
| `/tools/build-planner` | Phase 4 |
| `/about` | Done |
