# PHASE 1 — Sanity CMS

Read CLAUDE.md, docs/SANITY_SCHEMAS.md, docs/CONTENT_SEED.md. Use Context7 for current `next-sanity` + Sanity v3 embedding syntax; use the Sanity MCP for dataset operations.

Task:
1. Install: `sanity`, `next-sanity`, `@sanity/image-url`, `@sanity/vision`. Embed Studio at `/app/studio/[[...tool]]/page.tsx`.
2. Implement ALL schemas from docs/SANITY_SCHEMAS.md in `/sanity/schemas`, one file each, with the validation rules listed there (required alt text, day-count naming hint on package title, price > 0).
3. Desk structure: Commercial / Content / Enquiries (read-only) / Settings (singleton pin).
4. `/sanity/lib/client.ts` (CDN for published reads), `/sanity/lib/image.ts` (urlFor helper), `/sanity/lib/queries.ts` with typed GROQ queries: allPackages, packageBySlug, allDestinations, destinationBySlug, allGuides, guideBySlug, tripTypeBySlug, testimonials, siteSettings, faqByCategory.
5. `/sanity/lib/types.ts` — TypeScript types matching the queries.
6. Seed content via Sanity MCP: all destinations from CONTENT_SEED.md table (with placeholder images from Unsplash uploaded to Sanity assets, each with alt text), 8 packages + 2 signature expeditions as skeletons (full itinerary arrays for at least packages 1, 4, and the Hanle expedition; stubs for the rest), tripTypes, siteSettings singleton with the whyUs items, 6 FAQ items across categories.
7. Verify: `/studio` loads and edits work; a temporary `/debug` page renders allPackages titles from GROQ; then delete `/debug`.
8. Build passes. Commit `feat: sanity studio, schemas, seed content`.
