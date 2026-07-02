# PHASE 5 — SEO, performance, deploy

Task:
1. **Metadata**: `generateMetadata` on every route from Sanity seo fields with sensible fallbacks; canonical URLs; OG images (use hero images; optionally `next/og` dynamic OG for packages showing title + day count + price).
2. **JSON-LD**: `TravelAgency` (home, from siteSettings), `TouristTrip` (package pages: name, itinerary, offers.price INR, provider), `FAQPage` (FAQ blocks), `Article` (guides), `BreadcrumbList` (all detail pages).
3. **/sitemap.ts** and **/robots.ts** from Sanity slugs. 404 page in brand style.
4. **Performance pass**: verify all images `next/image` with proper `sizes`; hero images `priority`; fonts `display: swap`; no client component where a server component works; run Lighthouse (Playwright or `npx lighthouse`) — mobile performance ≥ 90, fix what falls short.
5. **Accessibility pass**: keyboard-navigate the whole site, focus states visible, form labels correct, contrast check saffron-on-night.
6. **Vercel**: via Vercel MCP — link repo, set all env vars from `.env.example`, deploy preview, verify /studio works in production (add production URL to Sanity CORS origins), then promote to production.
7. Add Vercel Analytics. Document the client handover in README: how to edit content in Studio, how enquiries arrive, how to add a package.
8. Commit `feat: seo, jsonld, sitemap, performance` and tag `v1.0.0`.

Post-launch backlog (do not build now): Hindi locale, Razorpay payment links via WhatsApp, Google Reviews embed, Mapbox route maps, blog RSS, Sentry.
