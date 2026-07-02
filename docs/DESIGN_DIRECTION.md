# DESIGN_DIRECTION.md — Bharat Bhraman

This document is the synthesis of five reference sites (Black Tomato, Visit Iceland, ROAR AFRICA, Jacada Travel, Ubuntu Travel). It defines the concept, the visual system, and the page-by-page patterns. **Reference sites are structural inspiration only — never copy their copy, images, or exact layouts.**

---

## 1. What all five references share (our non-negotiables)

1. **Enquiry-led funnel.** No booking engine anywhere. Every CTA is a variation of "start a conversation": Plan My Trip / Begin the Conversation / Start Planning. We use **"Plan My Trip"** (primary) and WhatsApp (secondary).
2. **Three-axis information architecture:**
   - **Destinations** (place pages: Leh, Nubra, Pangong, Tso Moriri, Hanle, Turtuk, Kargil, Manali, Bir Billing)
   - **Trip Types / Who & What** (Bike Expeditions, Family, Honeymoon, Group/Corporate, Photography, Spiritual & Monasteries, Winter/Chadar-adjacent)
   - **Packages / Itineraries** (day-count-led: "7-Day Leh–Nubra–Pangong Circuit")
3. **Cinematic hero:** full-bleed image/video, one short emotional headline, one CTA. No carousels of deals, no popups on load.
4. **Emotion-first storytelling:** positioning around feeling and transformation, not "3N/4D deluxe package."
5. **Social proof stack:** named testimonials with trip detail, awards/press strip, review-platform score.
6. **"Why us" icon strip:** 4–5 items (local Himalayan team, 24/7 on-road support, oxygen & acclimatization-planned itineraries, no hidden costs, custom routing).
7. **Editorial hub:** travel guides that do SEO work AND build trust.

## 2. The best single idea from each site (what we adapt)

| Site | Their idea | Our adaptation |
|---|---|---|
| Black Tomato | "It's not where you want to go; it's how you want to feel" + Trip Finder by feeling & month | **Trip Finder**: filter packages by month + travel style. Month matters enormously in Ladakh (roads open May–Oct). |
| Visit Iceland | Practical authority: safe travel, getting around, road conditions | **"Know Before You Go" guide hub**: Inner Line Permits, acclimatization/AMS at 3,500m+, Manali–Leh vs Srinagar–Leh, best month matrix, network/ATM reality in Nubra & Changthang. No Indian competitor does this at quality. This is our SEO moat. |
| ROAR AFRICA | Founder letter + flagship "Specialist Trips" cards (dates, from-price, sold-out states) | **Signature Expeditions**: 2–3 flagship fixed-departure trips (e.g., "The Hanle Dark Sky Expedition", "Turtuk & the Last Villages") with dates and from-pricing. Founder note on About page — local roots story. |
| Jacada | "Your trip, your story" + guide-driven inspiration | Package cards with strong photography + travel guides feeding internal links to packages. |
| Ubuntu | Day-count-first itinerary naming + long-form FAQ | Name every package "N-Day ..." and ship a rich FAQ section with FAQPage JSON-LD. |

## 3. Concept

**Working concept: "The Himalayas, properly."**
Bharat Bhraman is the operator that actually lives here — routes planned around acclimatization, drivers who know every water crossing, permits handled before you land. The site should feel like a beautifully produced field journal: cinematic, calm, precise.

Voice: warm, knowledgeable, second-person, sensory. Confident but never boastful. One vivid image per paragraph, not ten adjectives.

## 4. Typography — inspired by all five reference sites

### What the references use and why it works

All five sites share a **serif display + clean sans body** pattern. This is the universal language of luxury/editorial travel:

- **Black Tomato** — Uses a transitional serif (Freight Display-style) for headlines paired with a geometric sans-serif (likely Apercu or similar) for body. Headlines are lightweight (300–400 weight), very large, with tight letter-spacing. Body text is small (15–16px), generous line-height (~1.75). The dark background sections use light text at 300 weight for an airy, magazine feel.
- **ROAR AFRICA** — Uses an elegant serif with italic emphasis for testimonial quotes (Canela-style or similar editorial serif). Body in a clean sans (Neue Haas Grotesk / Helvetica Neue family). Their hero headlines are in italicized serif — creates emotional warmth. CTA buttons are all-caps sans-serif with wide letter-spacing. Confirmed running on Sanity + Next.js + Vercel.
- **Visit Iceland** — Cleaner, more guide-oriented: uses a humanist sans-serif for almost everything (likely custom or Söhne/National) with a serif reserved for pull-quotes and editorial moments. More functional than the others — fitting for their "practical authority" positioning.
- **Jacada Travel** — Elegant serif headlines (similar to Cormorant Garamond or Freight Text), body in a neutral sans. Warmer and more intimate than Black Tomato — slightly larger body text, warmer line spacing.
- **Ubuntu Travel** — Bold sans display headlines with a serif for body/editorial sections. More commercial/accessible than the others.

### Our font system (free, Google Fonts compatible for performance)

The pattern is clear: we need a **refined serif for display** and a **clean sans for everything else**.

**Display font: DM Serif Display**
- Why: captures the Black Tomato/ROAR AFRICA editorial serif feel (high contrast, elegant) but is free via Google Fonts. More refined than Playfair Display (which is overused in Indian web design). Use for: hero headlines, package names, section titles, pull-quotes.
- Weights: 400 only (it's a display face — don't use for body).
- Style: use italic variant for testimonial quotes and emotional callouts (the ROAR AFRICA move).

**Body font: Plus Jakarta Sans**
- Why: geometric sans like Apercu/Söhne but free. More personality than Inter (which every SaaS uses). Clean at small sizes, distinctive at medium. Matches the modern-warm tone of Jacada and Black Tomato's body copy.
- Weights: 300 (light body on dark bg), 400 (default body), 500 (nav/labels), 600 (buttons/emphasis), 700 (bold).
- Use for: body text, navigation, buttons, form labels, metadata (day counts, prices, dates).

**Alternative option (if client wants something more classical):**
- Display: Cormorant Garamond (Google Fonts) — closer to Jacada's old-world warmth
- Body: Inter or Source Sans 3

### Typography scale and spacing

Taken directly from the reference sites' rendering (inspected at 1440px desktop):

```
--font-display:    'DM Serif Display', Georgia, 'Times New Roman', serif;
--font-body:       'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif;

/* Desktop scale (use clamp() for responsiveness) */
--text-hero:       clamp(2.75rem, 6vw, 5.5rem);    /* 44–88px, BT/ROAR use 72–90px */
--text-h1:         clamp(2rem, 4vw, 3.5rem);        /* 32–56px */
--text-h2:         clamp(1.75rem, 3vw, 2.75rem);    /* 28–44px */
--text-h3:         clamp(1.25rem, 2vw, 1.75rem);    /* 20–28px */
--text-body:       1.0625rem;                         /* 17px — BT/Jacada use 15–17px */
--text-small:      0.875rem;                          /* 14px — metadata, dates */
--text-caption:    0.75rem;                           /* 12px — labels */

/* Line heights */
--leading-hero:    1.05;      /* all 5 sites use tight hero leading */
--leading-heading: 1.2;
--leading-body:    1.7;       /* BT uses ~1.75, ROAR ~1.65 */

/* Letter spacing */
--tracking-hero:    -0.02em;  /* BT and ROAR both use negative tracking on large serif */
--tracking-heading: -0.01em;
--tracking-caps:     0.12em;  /* all sites use wide tracking on uppercase labels/CTAs */
--tracking-body:     0em;

/* Font weights */
--weight-light:    300;       /* body text on dark backgrounds (the BT pattern) */
--weight-regular:  400;
--weight-medium:   500;
--weight-semi:     600;
--weight-bold:     700;
```

### Typography rules (observed across all 5 sites)

1. **Hero headlines are serif, large, light-weight, negatively tracked.** Never bold serif. The lightness creates elegance; boldness creates a poster.
2. **Body text on light backgrounds: regular (400) weight.** On dark backgrounds: light (300) weight. This is consistent across BT, ROAR, and Jacada.
3. **CTAs and navigation: sans-serif, medium weight (500–600), uppercase with wide letter-spacing (0.1–0.15em).** All five sites do this. Black Tomato's "Enquire Now" and ROAR's "Begin the conversation" both use this pattern.
4. **Italicized serif for emotional moments:** testimonial quotes, founder letters, pull-quotes. ROAR does this extensively. Use DM Serif Display Italic.
5. **Maximum headline length: 6–8 words.** BT's hero is 4 words ("The luxury travel experts"), ROAR's is 3 ("Luxury African Safaris"). Short headlines + serif + full-bleed image = the formula.
6. **Section labels/eyebrows: all-caps sans, 12–13px, wide tracking, muted color.** "OUR DESTINATIONS", "SPECIALIST TRIPS" — all five use this pattern above section titles.

## 5. Color palette — derived from reference sites

### What the references use

- **Black Tomato:** Near-black (`#1a1a1a`) bg, warm cream sections, muted terracotta/tomato-red accent. Mostly monochromatic with photography providing all the color.
- **ROAR AFRICA:** Deep charcoal/dark-green-black (`#0d1b0e`-ish), warm ivory text, gold/amber accent sparingly. Earth tones throughout — the palette feels like savanna at dusk.
- **Visit Iceland:** White/light grey bg, deep navy text, teal-turquoise accent (glacial). Bright and clean — the functional counterpoint.
- **Jacada:** Warm cream (`#f5f0e8`) bg, deep brown/charcoal text, muted gold accent. Feels like aged paper — intentionally warm.
- **Ubuntu:** Dark slate bg, white text, burnt orange accent. More commercial/punchy.

### Our palette

Inspired by the reference sites but rooted in Ladakh's actual visual palette:

```
/* Primary */
--night:      #0B1626;   /* deep Ladakh night sky — BT/ROAR-style dark base */
--snow:       #FAF7F2;   /* warm off-white — matches Jacada's cream, BT's warm white */

/* Accent */
--saffron:    #E8890C;   /* monastery robes, prayer flags — Ubuntu-style warm accent */
--saffron-hover: #D47A0A;

/* Neutrals */
--slate:      #8FA3B8;   /* muted glacial blue-grey — Visit Iceland influence */
--stone:      #D4CFC7;   /* warm mid-grey for borders, dividers — Jacada's stone */
--charcoal:   #2A3441;   /* dark text alternative lighter than night */

/* Secondary (use sparingly) */
--pine:       #1E3A2F;   /* dark forest green — nod to ROAR's green-black */
--lake:       #1B6B93;   /* Pangong blue — for inline links, info callouts */

/* Functional */
--success:    #2D6A4F;
--error:      #C1292E;
--overlay:    rgba(11, 22, 38, 0.65);  /* hero text overlay gradient */
```

### Color usage rules (from studying the references)

1. **Dark hero → light section → dark section → light section.** Alternate. Never stack two dark sections. BT and ROAR both do this rhythmic dark/light alternation.
2. **Accent color only on CTAs, active states, and one highlight element per section.** All five sites are restrained with accent color. Photography provides vibrancy. The site palette itself should be near-monochromatic.
3. **Text on dark backgrounds: `--snow` at 300 weight.** Text on light backgrounds: `--night` or `--charcoal` at 400 weight. Never pure white (#fff) or pure black (#000) — all five sites avoid these.
4. **Link color in body text: `--lake` (underline on hover).** On dark bg: `--saffron`.
5. **Gradient overlays on hero images: linear-gradient from `--overlay` to transparent.** BT uses a bottom-up gradient; ROAR uses a vignette. We use bottom-up (simpler, reliable with variable image composition).

## 6. Layout and spacing — from the reference sites

### Observed patterns

- **Max content width: 1280–1400px centered.** BT uses ~1200px, ROAR uses ~1440px. We use 1280px for content, full-bleed for heroes/images.
- **Section vertical padding: 120–160px desktop, 64–80px mobile.** All five sites use generous vertical spacing — this is what separates editorial from "busy portal."
- **Card grids: 3-column desktop, 2-column tablet, 1-column mobile.** Consistent across all five.
- **Hero height: 85–100vh on home, 60–70vh on inner pages.** BT and ROAR both use near-full-viewport heroes.
- **Sticky nav becomes solid on scroll.** BT starts transparent, fills to white on scroll. ROAR starts transparent, fills to near-black.
- **Image aspect ratios:** Hero: 16:9 or taller. Card thumbnails: 3:4 portrait (BT's card style) or 4:3 landscape. Destination tiles: square or 3:4. Gallery: mixed with masonry or lightbox.

### Spacing scale (8px base, matching reference site rhythm)

```
--space-1:  0.25rem;   /* 4px */
--space-2:  0.5rem;    /* 8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
--space-40: 10rem;     /* 160px — section padding desktop */
```

### Border radius
- BT: 0px everywhere (sharp, editorial)
- ROAR: 0px everywhere
- Visit Iceland: slight radius on cards (~8px)
- Jacada: 0px
- Ubuntu: slight radius (~4–8px)
- **Our choice: 0px default. 4px on form inputs only.** Sharp edges = editorial. Rounded = SaaS.

## 7. Motion and interaction — from the references

1. **Fade-up on scroll** (all five): elements translate-y 20–40px and fade from 0→1 opacity as they enter viewport. Duration ~600–800ms, ease-out. BT is more subtle (20px, 400ms), ROAR is more dramatic (40px, 800ms).
2. **Ken Burns on hero images** (BT, ROAR): slow scale from 1.0→1.05 over 15–20 seconds. Subtle enough to be felt, not seen.
3. **Smooth hover on cards:** BT lifts cards with subtle box-shadow on hover. ROAR scales the image inside the card (overflow hidden, image scale 1→1.03). We adopt the image-scale approach — feels more cinematic.
4. **Nav transitions:** transparent → solid bg on scroll uses a 300ms ease transition. BT and ROAR both do this.
5. **Parallax:** NONE of the five sites use heavy parallax. At most, slight parallax (10–20% speed difference) on full-bleed images. No parallax on text.
6. **Respect `prefers-reduced-motion`:** disable all transforms and transitions.

## 8. Page patterns

### Home
1. Hero: full-bleed (Pangong or Khardung La), headline ≤ 7 words, sub-line, "Plan My Trip" CTA
2. Intro block: 3–4 sentence positioning statement (the "feeling" paragraph)
3. Signature Expeditions: 2–3 flagship cards (image, dates, from-price)
4. Trip Finder strip: month selector + style selector → filtered packages
5. Destinations grid: 6–9 tiles
6. Why Bharat Bhraman: 5-item icon strip
7. Testimonials: rotating, named, with trip taken
8. Know Before You Go: 3 featured guides
9. Final CTA band: "Ready when the mountains are." + Plan My Trip + WhatsApp

### Package detail (the money page)
- Hero with package name, day count, route line (Leh → Nubra → Pangong → Leh), from-price, best months
- Sticky enquiry sidebar (desktop) / sticky bottom CTA bar (mobile)
- Day-by-day itinerary accordion with altitude noted per night (acclimatization credibility)
- Inclusions / exclusions two-column
- Route map (static map image or Mapbox later)
- Gallery
- Related guides + related packages
- FAQ block

### Destination detail
- Hero, editorial intro, highlights grid, best time, how to reach, permits note, packages covering this destination, gallery

### Guides
- Clean long-form reading layout, TOC for long guides, related packages CTA inline every ~3 sections

### Contact / Plan My Trip
- Short form: name, phone (WhatsApp), email, travel month, group size, style, message
- WhatsApp instant option beside form
- "What happens next" 3-step strip (we reply within 12h → custom itinerary → refine together)

## 9. Component-level patterns from the references

### Navigation (from BT + ROAR)
- **Desktop:** logo left, nav links center-ish, CTA button right. Transparent on hero, solid on scroll.
- **Mobile:** hamburger right, full-screen overlay with large links (BT's approach) — NOT a sliding drawer.
- **CTA button in nav:** always visible, accent color, medium weight, uppercase, wide tracking.
- BT phone number in nav (top-right) — we put WhatsApp number similarly.

### Package/Trip cards (from ROAR + Ubuntu)
- Vertical card: 3:4 image top, content below
- Content area: eyebrow label (e.g., "SIGNATURE EXPEDITION"), title in serif, route line in small sans, day count badge, "From ₹X" price, single CTA link
- Hover: image scales slightly (1→1.03), 500ms ease

### Testimonials (from BT + ROAR)
- Large italic serif quote, em-dash + name + trip, optional small photo
- ROAR uses celebrity names as social proof (Redford, Hilfiger) — our client uses real customer names + city
- Horizontal scroll or auto-rotate, one at a time

### Footer (from BT)
- Dark background, 4 columns: brand+tagline, explore links, popular packages, contact
- Social icons row, legal row
- No newsletter popup — just a simple email capture in footer (ROAR's approach)

## 10. Anti-patterns (what typical Indian travel sites do that we will NOT)

- No popup on page load, no spinning discount wheels
- No 10-item nav with dropdown walls of every package
- No red "BOOK NOW" urgency buttons, no fake countdown timers
- No watermark-stamped stock photos, no Comic-Sans-adjacent typography
- No wall-of-text package descriptions pasted from operator PDFs
- No auto-playing music
- No rounded cards with heavy shadows (the Bootstrap default look)
- No gradient buttons, no skeuomorphic elements
- No carousel with 8 slides auto-playing on the hero
