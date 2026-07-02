#!/usr/bin/env node
/**
 * Seed Sanity dataset with placeholder content + images from Unsplash.
 * Usage: node scripts/seed-sanity.mjs
 *
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load env from .env.local
const envPath = resolve(__dirname, "../.env.local");
try {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch {
  console.error("No .env.local found. Create it with NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN.");
  process.exit(1);
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// Unsplash image URLs (all verified free under Unsplash License)
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const imageIds = {
  ladakhValley: "1713214414117-5b8acc5aa06d",
  mountainLake: "1643368214091-6af1a029aee0",
  lehMonastery: "1695876670020-e2c2ac5a21ce",
  nubraCamels: "1741416075697-edc2a63aa226",
  pangongBlue: "1635255506105-b74adbd94026",
  tsoMoriri: "1600356033695-a003690a6351",
  milkyWay: "1721755514211-eca71feba369",
  kargil: "1566323124805-757e5c41d37c",
  manali: "1652543393067-281cea9b8c02",
  birBilling: "1625124313248-903aa145ac51",
  highway: "1694948055470-36d187668df1",
  rawMountain: "1566323124620-d22adb71d2a2",
  lamayuru: "1632649276640-b78f56fbb68f",
  sangam: "1619837374214-f5b9eb80876d",
  mountainRoad: "1694948056349-f91199dd8a3a",
};

async function uploadImageFromUrl(url, altText) {
  console.log(`  Uploading: ${altText}...`);
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, {
    filename: altText.toLowerCase().replace(/\s+/g, "-") + ".jpg",
    contentType: "image/jpeg",
  });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    alt: altText,
  };
}

async function seed() {
  console.log(`\nSeeding Sanity project: ${projectId} / ${dataset}\n`);

  // Upload images
  console.log("Uploading destination images...");
  const images = {};
  const imageMap = {
    leh: { id: imageIds.lehMonastery, alt: "Monastery on a mountainside in Leh, Ladakh" },
    nubraValley: { id: imageIds.nubraCamels, alt: "Bactrian camels in Hunder sand dunes, Nubra Valley" },
    pangongTso: { id: imageIds.pangongBlue, alt: "Pangong Tso lake with snow-capped peaks under blue sky" },
    tsoMoriri: { id: imageIds.tsoMoriri, alt: "Tso Moriri lake surrounded by barren Changthang mountains" },
    hanle: { id: imageIds.milkyWay, alt: "Milky Way over Ladakh mountains at Hanle Dark Sky Reserve" },
    turtuk: { id: imageIds.mountainRoad, alt: "Mountain bridge on the road to Turtuk, near the LoC" },
    kargilDrass: { id: imageIds.kargil, alt: "River bridge surrounded by mountains near Kargil" },
    manali: { id: imageIds.manali, alt: "Manali town with snow-capped mountains in Himachal Pradesh" },
    birBilling: { id: imageIds.birBilling, alt: "Paragliding over green mountains at Bir Billing" },
    ladakhValley: { id: imageIds.ladakhValley, alt: "Dramatic valley and peaks in Ladakh" },
    mountainLake: { id: imageIds.mountainLake, alt: "Mountain range reflected in a high-altitude lake" },
    highway: { id: imageIds.highway, alt: "Manali-Leh highway with vehicles and mountain scenery" },
    lamayuru: { id: imageIds.lamayuru, alt: "Lamayuru monastery perched on a mountain in Ladakh" },
    rawMountain: { id: imageIds.rawMountain, alt: "Brown mountain under blue sky in Ladakh" },
  };

  for (const [key, { id, alt }] of Object.entries(imageMap)) {
    images[key] = await uploadImageFromUrl(unsplash(id, 1600), alt);
  }

  // Create destinations
  console.log("\nCreating destinations...");
  const destinations = [
    { _id: "dest-leh", title: "Leh", slug: "leh", region: "Ladakh", altitudeMeters: 3500, bestMonths: ["May","Jun","Jul","Aug","Sep","Oct"], permitRequired: false, imageKey: "leh" },
    { _id: "dest-nubra", title: "Nubra Valley", slug: "nubra-valley", region: "Ladakh", altitudeMeters: 3050, bestMonths: ["May","Jun","Jul","Aug","Sep"], permitRequired: true, imageKey: "nubraValley" },
    { _id: "dest-pangong", title: "Pangong Tso", slug: "pangong-tso", region: "Ladakh", altitudeMeters: 4225, bestMonths: ["May","Jun","Jul","Aug","Sep"], permitRequired: true, imageKey: "pangongTso" },
    { _id: "dest-tsomoriri", title: "Tso Moriri", slug: "tso-moriri", region: "Ladakh", altitudeMeters: 4522, bestMonths: ["Jun","Jul","Aug","Sep"], permitRequired: true, imageKey: "tsoMoriri" },
    { _id: "dest-hanle", title: "Hanle", slug: "hanle", region: "Ladakh", altitudeMeters: 4500, bestMonths: ["May","Jun","Jul","Aug","Sep"], permitRequired: true, imageKey: "hanle" },
    { _id: "dest-turtuk", title: "Turtuk", slug: "turtuk", region: "Ladakh", altitudeMeters: 2900, bestMonths: ["May","Jun","Jul","Aug","Sep"], permitRequired: true, imageKey: "turtuk" },
    { _id: "dest-kargil", title: "Kargil & Drass", slug: "kargil-drass", region: "Ladakh", altitudeMeters: 2676, bestMonths: ["May","Jun","Jul","Aug","Sep","Oct"], permitRequired: false, imageKey: "kargilDrass" },
    { _id: "dest-manali", title: "Manali", slug: "manali", region: "Himachal", altitudeMeters: 2050, bestMonths: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], permitRequired: false, imageKey: "manali" },
    { _id: "dest-bir", title: "Bir Billing", slug: "bir-billing", region: "Himachal", altitudeMeters: 1400, bestMonths: ["Mar","Apr","May","Jun","Sep","Oct","Nov"], permitRequired: false, imageKey: "birBilling" },
  ];

  const destRefs = {};
  for (const d of destinations) {
    const doc = {
      _id: d._id,
      _type: "destination",
      title: d.title,
      slug: { _type: "slug", current: d.slug },
      region: d.region,
      heroImage: images[d.imageKey],
      altitudeMeters: d.altitudeMeters,
      bestMonths: d.bestMonths,
      permitRequired: d.permitRequired,
    };
    await client.createOrReplace(doc);
    destRefs[d.slug] = { _type: "reference", _ref: d._id };
    console.log(`  ✓ ${d.title}`);
  }

  // Create packages
  console.log("\nCreating packages...");
  const packages = [
    {
      _id: "pkg-classic-7",
      title: "7-Day Leh–Nubra–Pangong Classic Circuit",
      slug: "7-day-leh-nubra-pangong-classic-circuit",
      summary: "The essential Ladakh loop: acclimatize in Leh, cross Khardung La into Nubra Valley, traverse the Shyok road to Pangong Tso, and return through Chang La.",
      durationDays: 7,
      routeLine: "Leh → Khardung La → Nubra → Pangong → Leh",
      startingPrice: 28500,
      priceNote: "twin sharing, ex-Leh",
      bestMonths: ["May","June","July","August","September"],
      isSignature: false,
      imageKey: "mountainLake",
      itinerary: [
        { _key: "d1", dayNumber: 1, title: "Arrive Leh — Acclimatize", stayLocation: "Leh", altitudeMeters: 3500 },
        { _key: "d2", dayNumber: 2, title: "Leh Local: Shanti Stupa, Leh Palace, Hall of Fame", stayLocation: "Leh", altitudeMeters: 3500 },
        { _key: "d3", dayNumber: 3, title: "Leh → Khardung La → Nubra Valley", stayLocation: "Hunder", altitudeMeters: 3050, drivingHours: 5 },
        { _key: "d4", dayNumber: 4, title: "Nubra: Diskit Monastery & Hunder Dunes", stayLocation: "Hunder", altitudeMeters: 3050 },
        { _key: "d5", dayNumber: 5, title: "Nubra → Shyok Road → Pangong Tso", stayLocation: "Pangong", altitudeMeters: 4225, drivingHours: 6 },
        { _key: "d6", dayNumber: 6, title: "Pangong → Chang La → Leh", stayLocation: "Leh", altitudeMeters: 3500, drivingHours: 5 },
        { _key: "d7", dayNumber: 7, title: "Depart Leh", stayLocation: "Leh", altitudeMeters: 3500 },
      ],
      inclusions: ["Airport pickup and drop", "Accommodation in hotels/camps (twin sharing)", "All meals (breakfast + dinner)", "Private SUV with experienced driver", "Inner Line Permits", "Oxygen cylinder in vehicle", "Medical kit"],
      exclusions: ["Flights to/from Leh", "Lunch", "Personal expenses", "Tips and gratuities", "Travel insurance", "Monument entry fees"],
      faq: [
        { _key: "f1", question: "Is this trip suitable for first-time visitors to Ladakh?", answer: "Absolutely. This is our most popular route for first-timers. We build in proper acclimatization days in Leh before gaining altitude." },
        { _key: "f2", question: "What kind of vehicles do you use?", answer: "We use Toyota Innova Crysta or similar SUVs, equipped with oxygen cylinders and medical kits for your safety at altitude." },
      ],
    },
    {
      _id: "pkg-grand-9",
      title: "9-Day Grand Ladakh: Nubra, Pangong, Hanle & Tso Moriri",
      slug: "9-day-grand-ladakh",
      summary: "The complete Ladakh experience — Nubra Valley, Pangong Tso, Hanle dark sky reserve, and the remote Tso Moriri on the Changthang Plateau.",
      durationDays: 9,
      routeLine: "Leh → Nubra → Pangong → Hanle → Tso Moriri → Leh",
      startingPrice: 42000,
      priceNote: "twin sharing, ex-Leh",
      bestMonths: ["June","July","August","September"],
      isSignature: false,
      imageKey: "ladakhValley",
    },
    {
      _id: "pkg-turtuk-6",
      title: "6-Day Ladakh with Turtuk: The Last Villages",
      slug: "6-day-ladakh-with-turtuk",
      summary: "Journey to India's northernmost villages — Turtuk and Thang on the Line of Control, with a Nubra Valley deep-dive and Balti homestay.",
      durationDays: 6,
      routeLine: "Leh → Nubra → Turtuk → Thang → Leh",
      startingPrice: 26000,
      priceNote: "twin sharing, ex-Leh",
      bestMonths: ["May","June","July","August","September"],
      isSignature: false,
      imageKey: "turtuk",
    },
    {
      _id: "pkg-manali-leh-8",
      title: "8-Day Manali to Leh Overland Expedition",
      slug: "8-day-manali-to-leh-overland-expedition",
      summary: "The legendary highway from Manali to Leh — Atal Tunnel, Jispa, Sarchu, More Plains, Tanglang La. Available as bike or SUV expedition.",
      durationDays: 8,
      routeLine: "Manali → Jispa → Sarchu → Leh → Nubra → Pangong → Leh",
      startingPrice: 35000,
      priceNote: "twin sharing, ex-Manali",
      bestMonths: ["June","July","August","September"],
      isSignature: false,
      imageKey: "highway",
      itinerary: [
        { _key: "d1", dayNumber: 1, title: "Arrive Manali — Briefing & Equipment Check", stayLocation: "Manali", altitudeMeters: 2050 },
        { _key: "d2", dayNumber: 2, title: "Manali → Atal Tunnel → Sissu → Jispa", stayLocation: "Jispa", altitudeMeters: 3200, drivingHours: 4 },
        { _key: "d3", dayNumber: 3, title: "Jispa → Baralacha La → Sarchu", stayLocation: "Sarchu", altitudeMeters: 4300, drivingHours: 5 },
        { _key: "d4", dayNumber: 4, title: "Sarchu → Gata Loops → More Plains → Leh", stayLocation: "Leh", altitudeMeters: 3500, drivingHours: 7 },
        { _key: "d5", dayNumber: 5, title: "Leh Rest Day — Local Sightseeing", stayLocation: "Leh", altitudeMeters: 3500 },
        { _key: "d6", dayNumber: 6, title: "Leh → Khardung La → Nubra Valley", stayLocation: "Hunder", altitudeMeters: 3050, drivingHours: 5 },
        { _key: "d7", dayNumber: 7, title: "Nubra → Shyok → Pangong Tso", stayLocation: "Pangong", altitudeMeters: 4225, drivingHours: 6 },
        { _key: "d8", dayNumber: 8, title: "Pangong → Chang La → Leh — Depart", stayLocation: "Leh", altitudeMeters: 3500, drivingHours: 5 },
      ],
    },
    {
      _id: "pkg-comfort-5",
      title: "5-Day Leh Comfort: Local + Pangong",
      slug: "5-day-leh-comfort",
      summary: "A gentle Ladakh experience for families and seniors — Leh local sightseeing, Sangam, and one overnight at Pangong with oxygen-equipped vehicles.",
      durationDays: 5,
      routeLine: "Leh → Local → Pangong → Leh",
      startingPrice: 22000,
      priceNote: "twin sharing, ex-Leh",
      bestMonths: ["May","June","July","August","September"],
      isSignature: false,
      imageKey: "leh",
    },
    {
      _id: "pkg-trans-10",
      title: "10-Day Srinagar–Kargil–Leh–Manali Trans-Himalayan Crossing",
      slug: "10-day-trans-himalayan-crossing",
      summary: "The ultimate Himalayan crossing — Srinagar to Manali via Kargil, Drass War Memorial, Lamayuru moonscape, Leh, and the legendary highway south.",
      durationDays: 10,
      routeLine: "Srinagar → Kargil → Lamayuru → Leh → Manali",
      startingPrice: 48000,
      priceNote: "twin sharing, Srinagar to Manali",
      bestMonths: ["June","July","August","September"],
      isSignature: false,
      imageKey: "lamayuru",
    },
    {
      _id: "pkg-bir-3",
      title: "3-Day Bir Billing Paragliding Weekend",
      slug: "3-day-bir-billing-paragliding-weekend",
      summary: "One of the world's top paragliding sites — tandem flight from Billing, Tibetan colony cafés, and the Rajgundha meadow trek.",
      durationDays: 3,
      routeLine: "Bir → Billing → Bir",
      startingPrice: 8500,
      priceNote: "per person, ex-Bir",
      bestMonths: ["March","April","May","September","October","November"],
      isSignature: false,
      imageKey: "birBilling",
    },
    {
      _id: "pkg-manali-5",
      title: "5-Day Manali–Sissu–Jispa Getaway",
      slug: "5-day-manali-sissu-jispa-getaway",
      summary: "The Lahaul Valley beyond Atal Tunnel — Sissu waterfall, Jispa meadows, and mountain quiet without the high-altitude commitment.",
      durationDays: 5,
      routeLine: "Manali → Sissu → Jispa → Manali",
      startingPrice: 15000,
      priceNote: "twin sharing, ex-Manali",
      bestMonths: ["May","June","July","August","September","October"],
      isSignature: false,
      imageKey: "manali",
    },
    {
      _id: "sig-hanle",
      title: "Hanle Dark Sky Expedition",
      slug: "hanle-dark-sky-expedition",
      summary: "A new-moon-aligned expedition to one of the world's highest dark sky reserves. Astronomy evening at the Indian Astronomical Observatory, with an optional Umling La push.",
      durationDays: 6,
      routeLine: "Leh → Nubra → Pangong → Hanle → Umling La → Leh",
      startingPrice: 38000,
      priceNote: "twin sharing, ex-Leh",
      bestMonths: ["June","July","August","September"],
      isSignature: true,
      imageKey: "hanle",
      itinerary: [
        { _key: "d1", dayNumber: 1, title: "Arrive Leh — Acclimatize", stayLocation: "Leh", altitudeMeters: 3500 },
        { _key: "d2", dayNumber: 2, title: "Leh → Khardung La → Nubra Valley", stayLocation: "Hunder", altitudeMeters: 3050, drivingHours: 5 },
        { _key: "d3", dayNumber: 3, title: "Nubra → Shyok → Pangong Tso", stayLocation: "Pangong", altitudeMeters: 4225, drivingHours: 6 },
        { _key: "d4", dayNumber: 4, title: "Pangong → Hanle Dark Sky Reserve", stayLocation: "Hanle", altitudeMeters: 4500, drivingHours: 5 },
        { _key: "d5", dayNumber: 5, title: "Hanle Astronomy Night + Optional Umling La", stayLocation: "Hanle", altitudeMeters: 4500 },
        { _key: "d6", dayNumber: 6, title: "Hanle → Leh via Chumur → Depart", stayLocation: "Leh", altitudeMeters: 3500, drivingHours: 7 },
      ],
    },
    {
      _id: "sig-photo",
      title: "Ladakh Photography Expedition",
      slug: "ladakh-photography-expedition",
      summary: "An 8-day expedition routed for golden-hour shooting — monastery mornings, Changthang wildlife, Pangong blue, and the Nubra dunes at sunset.",
      durationDays: 8,
      routeLine: "Leh → Monasteries → Nubra → Pangong → Tso Moriri → Leh",
      startingPrice: 45000,
      priceNote: "twin sharing, ex-Leh",
      bestMonths: ["June","July","August","September"],
      isSignature: true,
      imageKey: "rawMountain",
    },
  ];

  for (const pkg of packages) {
    const doc = {
      _id: pkg._id,
      _type: "package",
      title: pkg.title,
      slug: { _type: "slug", current: pkg.slug },
      summary: pkg.summary,
      durationDays: pkg.durationDays,
      routeLine: pkg.routeLine,
      startingPrice: pkg.startingPrice,
      priceNote: pkg.priceNote,
      bestMonths: pkg.bestMonths,
      isSignature: pkg.isSignature,
      heroImage: images[pkg.imageKey],
      ...(pkg.itinerary ? { itinerary: pkg.itinerary } : {}),
      ...(pkg.inclusions ? { inclusions: pkg.inclusions } : {}),
      ...(pkg.exclusions ? { exclusions: pkg.exclusions } : {}),
      ...(pkg.faq ? { faq: pkg.faq } : {}),
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${pkg.title}`);
  }

  // Create testimonials
  console.log("\nCreating testimonials...");
  const testimonials = [
    { _id: "test-rahul", name: "Rahul Sharma", location: "Delhi", quote: "The acclimatization planning made all the difference. Our driver knew every turn, every stop for chai, every viewpoint we'd have missed on our own. Pangong at dawn was exactly what they promised — utterly still, utterly blue.", rating: 5, tripRef: "pkg-classic-7" },
    { _id: "test-priya", name: "Priya Menon", location: "Bangalore", quote: "We brought our parents on the Leh Comfort trip. Oxygen cylinders in the vehicle, gentle pacing, warm homestays. My mother still talks about the light at Shanti Stupa at sunset.", rating: 5, tripRef: "pkg-comfort-5" },
    { _id: "test-arjun", name: "Arjun Patel", location: "Mumbai", quote: "The Manali–Leh overland ride was a lifelong dream. These guys had the route, the backup plans, the mechanic numbers. When the weather turned near Sarchu, they just handled it.", rating: 5, tripRef: "pkg-manali-leh-8" },
  ];

  for (const t of testimonials) {
    await client.createOrReplace({
      _id: t._id,
      _type: "testimonial",
      name: t.name,
      location: t.location,
      quote: t.quote,
      rating: t.rating,
      tripTaken: { _type: "reference", _ref: t.tripRef },
    });
    console.log(`  ✓ ${t.name}`);
  }

  // Create site settings
  console.log("\nCreating site settings...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    siteTitle: "Bharat Bhraman Tour & Travels",
    tagline: "The Himalayas, Properly.",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999",
    email: process.env.ENQUIRY_TO_EMAIL || "info@bharatbhramantours.com",
    heroHome: {
      image: images.ladakhValley,
      headline: "The Himalayas, Properly.",
      subline: "Acclimatization-first itineraries, local drivers who know every crossing, permits handled before you land.",
    },
    whyUs: [
      { _key: "w1", icon: "mountain", title: "Born in the Himalayas", description: "Local team, local drivers, real ground knowledge. We don't subcontract — we drive." },
      { _key: "w2", icon: "heart", title: "Acclimatization-First Itineraries", description: "Routes paced for altitude with oxygen on board. Your body adjusts before your adventure begins." },
      { _key: "w3", icon: "phone", title: "24/7 On-Road Support", description: "One call, we're already moving. Real support from people who know every road and every shortcut." },
      { _key: "w4", icon: "shield", title: "Permits Handled", description: "ILP and restricted-area paperwork done before you land. You travel — we handle the bureaucracy." },
      { _key: "w5", icon: "check", title: "No Hidden Costs", description: "The price we quote is the price you pay. Accommodation, meals, permits, vehicle — it's all in there." },
    ],
  });
  console.log("  ✓ Site settings");

  console.log("\n✅ Seeding complete! All content and images are in Sanity.\n");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
