# CONNECTORS_SETUP.md — Connect these BEFORE Phase 0

## Required

1. **Sanity MCP** — schema management, content seeding, GROQ testing directly from Claude Code.
   - Create the Sanity project first at sanity.io (free tier, dataset: `production`)
   - Add via: `claude mcp add sanity -- npx -y @sanity/mcp-server@latest` (or the hosted server per current Sanity docs — check https://www.sanity.io/docs/mcp for the latest install command)
   - Needs: project ID + a token with Editor rights
2. **Vercel MCP** — deploys, build logs, env vars. Hosted server: `https://mcp.vercel.com` (already in your Claude.ai connectors; add to Claude Code too). Link the GitHub repo `hisago443/bharatbhramantour-travels` to a Vercel project first.
3. **Playwright MCP** (or Claude in Chrome) — visual QA at 375/768/1440px after each page.
   - `claude mcp add playwright -- npx -y @playwright/mcp@latest`

## Design connectors (you asked for "every design connector")

4. **Claude Design** — generate homepage + package-page mockups from docs/DESIGN_DIRECTION.md before coding Phase 2/3. Export direction, then implement in code.
5. **Figma MCP** — `https://mcp.figma.com/mcp` (already connected on Claude.ai). Use if you want to refine Claude Design output in Figma and pull exact specs into code via get_design_context.

## Recommended

6. **Context7 MCP** — fresh Next.js 15 / Sanity v3 / Tailwind v4 docs: `claude mcp add context7 -- npx -y @upstash/context7-mcp`
7. **GitHub** — Claude Code's native git covers commits/pushes. Add GitHub MCP only if you want PR/issue management.

## NOT needed for this project

- Supabase (Sanity is the datastore; enquiries go Brevo + Sanity)
- Twilio/Plivo (that's Tevrix voice-agent stack, irrelevant here)
- Postman, Sentry (add Sentry post-launch if desired)

## Accounts checklist before starting

- [ ] Sanity project created (project ID in hand)
- [ ] Vercel project created + linked to the GitHub repo
- [ ] Brevo account + API key (transactional email for enquiries — free 300/day)
- [ ] Client's WhatsApp business number confirmed
- [ ] Client brand assets requested: logo, any owned photos, preferred colors
- [ ] Domain: confirm if purchased; plan DNS → Vercel
