# PHASE 3 — Pages

Read docs/DESIGN_DIRECTION.md section 5 (page patterns) and docs/PROJECT_BRIEF.md sitemap. All content from Sanity via `/sanity/lib/queries.ts` — zero hardcoded copy. `generateStaticParams` + `revalidate: 3600` on all detail pages.

Build in this order (commit after each):
1. **Home** — hero, positioning intro, Signature Expeditions (isSignature packages), Trip Finder strip (client component: month + style selects filtering client-side over allPackages summary data, linking into /packages with query params), destination grid, whyUs strip, testimonials, featured guides, final CTA band.
2. **/packages** — filterable index (month, trip type, duration buckets) reading URL params; grid of PackageCard.
3. **/packages/[slug]** — full money-page pattern: hero, sticky enquiry sidebar (desktop) + sticky bottom CTA (mobile), day-by-day Accordion with altitude + driving hours per day, inclusions/exclusions, gallery, package FAQ, related packages/guides. This page gets the most polish.
4. **/destinations** + **/destinations/[slug]** — per pattern: intro, highlights, best time, how to reach, permit note callout, packages covering this destination.
5. **/trip-types/[slug]** — hero, intro, filtered packages.
6. **/guides** + **/guides/[slug]** — reading layout, portable-text renderer with custom blocks (image, callout, inline packageReference card), TOC for long guides.
7. **/about** — story, founder note, whyUs expanded, testimonials.

Editorial copy: write original, sensory, second-person copy per CLAUDE.md content rules for any field the seed left thin — then SAVE it into Sanity (via MCP), not into code.

QA every page with Playwright at 375px before moving to the next. Build must pass at each commit.
