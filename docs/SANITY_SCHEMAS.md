# SANITY_SCHEMAS.md — Content model

Free tier constraints: 2 users, 1 dataset ("production"), generous document limits — fine for v1. Embedded Studio at `/studio`. All image fields must include a required `alt` string.

## Document types

### `package` (core commercial object)
- `title` (string, e.g. "7-Day Leh–Nubra–Pangong Classic Circuit") — enforce day-count-first naming
- `slug`
- `heroImage` (image + alt), `gallery` (array of image+alt)
- `summary` (text, ≤ 240 chars, card copy)
- `overview` (portable text — editorial intro)
- `durationDays` (number), `routeLine` (string, "Leh → Nubra → Pangong → Leh")
- `startingPrice` (number, INR, per person), `priceNote` (string, "twin sharing, ex-Leh")
- `bestMonths` (array of month enums) — powers Trip Finder
- `tripTypes` (array of references → tripType)
- `destinations` (array of references → destination)
- `itinerary` (array of `day` objects: `dayNumber`, `title`, `description` (portable text), `stayLocation`, `altitudeMeters`, `drivingHours`)
- `inclusions` (array of strings), `exclusions` (array of strings)
- `isSignature` (boolean — flags flagship expeditions), `fixedDepartures` (array of date ranges, optional)
- `faq` (array of {question, answer})
- `seo` (object: metaTitle, metaDescription, ogImage)

### `destination`
- `title`, `slug`, `region` (enum: Ladakh | Himachal)
- `heroImage`+alt, `gallery`
- `intro` (portable text), `highlights` (array of {title, description, image})
- `altitudeMeters`, `bestMonths`, `permitRequired` (boolean), `permitNote`
- `howToReach` (portable text)
- `seo`

### `tripType`
- `title` (Bike Expedition, Family, Honeymoon, Group & Corporate, Photography, Spiritual), `slug`, `heroImage`, `intro` (portable text), `seo`

### `guide`
- `title`, `slug`, `heroImage`, `excerpt`, `body` (portable text with image, callout, and packageReference custom blocks), `relatedPackages` (refs), `publishedAt`, `seo`

### `testimonial`
- `name`, `location`, `tripTaken` (ref → package, optional), `quote`, `rating` (1–5), `photo` (optional)

### `faqItem` (site-wide FAQ)
- `question`, `answer` (portable text), `category` (enum: permits | health | booking | payments | general)

### `siteSettings` (singleton)
- `siteTitle`, `tagline`, `whatsappNumber`, `phone`, `email`, `address`
- `socialLinks`, `heroHome` (image/video + headline + subline)
- `whyUs` (array of {icon, title, description})
- `defaultSeo`

### `enquiry` (written by API route, hidden from public queries)
- `name`, `phone`, `email`, `travelMonth`, `groupSize`, `tripStyle`, `message`, `sourcePage`, `createdAt`
- Studio: read-only list view for the client — a free lightweight CRM.

## Studio config notes

- Desk structure: group as Commercial (packages, destinations, trip types) / Content (guides, testimonials, FAQs) / Enquiries / Settings.
- Validation: required slugs, required alt text, price > 0, durationDays 1–21, summary max length.
- Preview URLs: configure Presentation/preview so the client sees draft pages on Vercel preview deploys (nice-to-have, phase 5).
