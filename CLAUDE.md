# CLAUDE.md — Bharat Bhraman Tour & Travels

## What this project is

A premium tour & travel agency website for **Bharat Bhraman Tour and Travels**, a client of Tevrix AI. The agency specializes in **Ladakh and Himachal Pradesh** circuits: Leh, Nubra Valley, Pangong Tso, Tso Moriri, Hanle, Kargil, Turtuk, Thang, Gurudwara Pathar Sahib, Umling La, Manali, and Bir Billing.

**Positioning:** Editorial, luxury-adjacent Himalayan travel specialist — NOT a cluttered Indian travel-portal template. Design benchmark class: Black Tomato, ROAR AFRICA, Jacada Travel, Visit Iceland, Ubuntu Travel.

**Business model on the site:** Enquiry-led. NO payment gateway, NO cart, NO checkout. Every CTA funnels to the enquiry form or WhatsApp. This mirrors all five reference sites.

## Stack

- **Framework:** Next.js 15+ (App Router, TypeScript, Server Components by default)
- **Styling:** Tailwind CSS v4
- **CMS:** Sanity (free tier) — embedded Studio at `/studio`, content fetched via GROQ with `next-sanity`
- **Images:** Sanity image pipeline (`@sanity/image-url`) + `next/image` everywhere. Stock: Unsplash/Pexels Ladakh photos + client photos. NEVER hotlink or copy images from reference/competitor sites.
- **Enquiries:** API route → email (Brevo transactional, free tier) + WhatsApp deep link (`https://wa.me/<number>?text=...`). Optionally also write enquiry docs to Sanity for a lightweight CRM.
- **Deploy:** Vercel (hobby). Repo: `github.com/hisago443/bharatbhramantour-travels`
- **Analytics:** Vercel Analytics + GA4 (add when client provides ID)

## Commands

```bash
npm run dev          # local dev (Next + embedded Studio at /studio)
npm run build        # production build — MUST pass before any commit to main
npm run lint         # eslint
npx sanity deploy    # deploy standalone studio (only if we split it out later)
```

## Project structure

```
/app
  /(site)              # public site route group
    /page.tsx          # home
    /destinations/[slug]
    /packages/[slug]
    /trip-types/[slug]
    /guides/[slug]     # travel guides (permits, acclimatization, road status, best time)
    /about
    /contact
  /studio/[[...tool]]  # embedded Sanity Studio
  /api/enquiry         # POST handler → Brevo email + Sanity enquiry doc
/components            # shared UI (PascalCase files, one component per file)
/sanity
  /schemas             # one file per document type
  /lib                 # client, queries (all GROQ lives here, never inline in pages)
/lib                   # utils, constants (WhatsApp number, site config)
/docs                  # PROJECT_BRIEF, DESIGN_DIRECTION, SANITY_SCHEMAS, CONTENT_SEED
/prompts               # phased build prompts
```

## Design rules (full detail in docs/DESIGN_DIRECTION.md — READ IT IN FULL before building any UI)

- **Palette:** Dark editorial base: night `#0B1626`, warm off-white `#FAF7F2`, saffron accent `#E8890C`, glacial slate `#8FA3B8`, stone `#D4CFC7`, pine `#1E3A2F`, lake `#1B6B93`. Derived from studying BT/ROAR/Jacada/Visit Iceland/Ubuntu color systems. Keep everything in Tailwind theme tokens so client brand swap is one-file.
- **Fonts (inspired by all 5 reference sites — they ALL use serif display + sans body):**
  - **Display: DM Serif Display** (Google Fonts) — captures the BT/ROAR editorial serif feel. Use for heroes, package names, section titles, testimonial quotes (italic variant). Weight: 400 only, never bold. Tight negative tracking (-0.02em on heroes).
  - **Body: Plus Jakarta Sans** (Google Fonts) — geometric sans like Apercu/Söhne but free. Weights: 300 (light text on dark bg — the Black Tomato pattern), 400 (body), 500 (nav/labels), 600 (buttons), 700 (bold).
- **Layout:** Full-bleed heroes (85–100vh home, 60–70vh inner), 1280px max content width, 120–160px section vertical padding desktop. 0px border-radius (editorial, not SaaS). Alternating dark/light sections.
- **Motion:** Fade-up on scroll (20–40px, 600–800ms), Ken Burns on heroes (scale 1→1.05 over 15s), image-scale on card hover (1→1.03). Respect `prefers-reduced-motion`. No parallax on text.
- **Nav:** Transparent on hero → solid on scroll (300ms ease). CTAs: uppercase sans, 500–600 weight, letter-spacing 0.12em.
- Mobile-first. Majority of Indian travel traffic is mobile. Test at 375px first.
- Sticky WhatsApp FAB on all pages. Sticky "Plan My Trip" in the nav.
- Every package card shows: day count, route summary, best season, "From ₹X" price, single CTA.

## Content rules — IMPORTANT

- **Never copy text or images from blacktomato.com, roarafrica.com, jacadatravel.com, visiticeland.com, ubuntutravelgroup.com, or any competitor.** They are structural/conceptual references only. All copy must be original.
- Write destination and package copy in an editorial, sensory, second-person voice ("You wake to the sound of the Nubra river..."). No clichés like "breathtaking" more than once per page.
- Facts about Ladakh (altitudes, permit rules, road opening months) must be accurate — verify Inner Line Permit requirements, acclimatization guidance (Leh is 3,500m), and seasonal road closures before publishing.
- Hindi-English mixed audience: site is English, but tone should be warm, not stiff-British-luxury.

## Coding conventions

- Server Components by default; `"use client"` only for interactivity (forms, carousels, mobile nav).
- All Sanity queries in `/sanity/lib/queries.ts` with typed returns (use `sanity-typegen` or manual types in `/sanity/lib/types.ts`).
- Use `generateStaticParams` + ISR (`revalidate: 3600`) for destination/package/guide pages.
- Every page exports `generateMetadata` with unique title/description. JSON-LD: `TouristTrip` schema on package pages, `FAQPage` on FAQ sections, `TravelAgency` on home.
- Accessible: semantic HTML, alt text on all images (Sanity `alt` field is required in schemas), visible focus states.
- Commit style: conventional commits (`feat:`, `fix:`, `content:`). Never commit `.env.local`.
- Run `npm run build` before declaring any phase done.

## Environment variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=          # only if dataset made private later
SANITY_API_WRITE_TOKEN=         # for enquiry docs from API route
BREVO_API_KEY=
ENQUIRY_TO_EMAIL=               # client's email
NEXT_PUBLIC_WHATSAPP_NUMBER=    # e.g. 91XXXXXXXXXX
```

## MCP / connector usage

- **Sanity MCP:** schema changes, seeding content, GROQ testing. Prefer it over hand-editing dataset JSON.
- **Vercel MCP:** deployments, build logs, env vars.
- **Figma MCP / Claude Design:** visual direction and mockups before coding major sections.
- **Playwright / Claude in Chrome:** visual QA at 375px, 768px, 1440px after each page is built.
- **Context7:** verify current Next.js 15 / Sanity v3 API syntax before using unfamiliar APIs.

## Build phases (prompts in /prompts, run in order)

0. Scaffold: Next.js + Tailwind + repo hygiene
1. Sanity: schemas + embedded studio + seed content from docs/CONTENT_SEED.md
2. Design system: tokens, typography, layout shell, nav, footer
3. Pages: home → packages → package detail → destinations → destination detail → trip types → guides → about
4. Enquiry funnel: form, API route, WhatsApp integration, thank-you state
5. SEO + performance + deploy: metadata, sitemap, JSON-LD, OG images, Lighthouse ≥ 90 mobile, Vercel production

## Definition of done (per page)

- [ ] Renders real Sanity content (no hardcoded copy)
- [ ] Mobile 375px layout checked visually
- [ ] `generateMetadata` present and unique
- [ ] Images via `next/image` with alt text
- [ ] CTA path to enquiry/WhatsApp present
- [ ] `npm run build` passes
