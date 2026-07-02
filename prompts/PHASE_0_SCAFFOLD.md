# PHASE 0 — Scaffold

Read CLAUDE.md and docs/PROJECT_BRIEF.md fully before starting.

Task:
1. Initialize a Next.js 15+ app in this repo root: TypeScript, App Router, Tailwind CSS v4, ESLint, `src/` OFF (use root `/app`), import alias `@/*`.
2. Create the folder structure exactly as specified in CLAUDE.md (route group `(site)`, `/sanity`, `/components`, `/lib`).
3. Add `.env.example` with all env vars from CLAUDE.md (empty values). Ensure `.env.local` is gitignored.
4. Add `lib/config.ts` exporting site constants (siteName, WhatsApp helper `waLink(message)`, nav items).
5. Set up fonts with `next/font/google`: **DM Serif Display** (weights: 400, 400-italic) as `--font-display` and **Plus Jakarta Sans** (weights: 300, 400, 500, 600, 700) as `--font-body`, exposed as CSS variables consumed by Tailwind theme.
6. Define the full Tailwind v4 theme from docs/DESIGN_DIRECTION.md sections 4–6: colors (night, snow, saffron, saffron-hover, slate, stone, charcoal, pine, lake), fonts (display, body), spacing scale, typography scale with clamp() values, letter-spacing tokens, and line-height tokens in the CSS `@theme` block.
7. Placeholder home page rendering "Bharat Bhraman" in the design tokens to prove fonts/colors wired.
8. Verify `npm run dev` and `npm run build` both succeed.
9. Conventional commit: `feat: scaffold next.js app with design tokens` and push to main.

Do NOT install Sanity yet (Phase 1). Do NOT build real UI (Phase 2/3).
