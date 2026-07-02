# PHASE 2 — Design system & shell

Read docs/DESIGN_DIRECTION.md in full — it is the authority for this phase. Before coding, generate mockups of the shell + homepage with Claude Design (or Figma) from that document and iterate until approved.

Task:
1. Build shared components in `/components`:
   - `SiteHeader` — transparent over hero, solid `night` on scroll; logo left; nav: Packages, Destinations, Trip Types, Guides, About; right: "Plan My Trip" saffron button. Mobile: full-screen overlay menu.
   - `SiteFooter` — dark, 4 columns (brand+tagline, explore links, popular packages, contact), payment-free trust row, legal links.
   - `WhatsAppFab` — sticky bottom-right on all pages, uses `waLink()` with page-context prefill.
   - `Hero` (full-bleed image/video variant), `SectionHeading`, `PackageCard` (image, day badge, route line, best months, from-price, single CTA), `DestinationTile`, `TestimonialCard`, `GuideCard`, `CtaBand`, `Accordion` (a11y-correct, for itineraries/FAQ), `Badge`, `Container`.
2. Motion: fade-up-on-scroll utility (IntersectionObserver, respects `prefers-reduced-motion`), slow Ken Burns class for heroes.
3. `/styleguide` dev-only route rendering every component with dummy props — QA it with Playwright screenshots at 375/768/1440 and fix visual issues before proceeding.
4. Typography and spacing exactly per DESIGN_DIRECTION section 4. No component may hardcode hex values — tokens only.
5. Build passes. Commit `feat: design system and site shell`.
