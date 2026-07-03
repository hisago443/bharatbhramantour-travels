import type { Package, Destination, Testimonial, WhyUsItem } from "@/sanity/lib/types";

export const placeholderPackages: Partial<Package>[] = [
  {
    _id: "pkg-1",
    title: "7-Day Leh–Nubra–Pangong Classic Circuit",
    slug: { current: "7-day-leh-nubra-pangong-classic-circuit" },
    summary: "The essential Ladakh loop: acclimatize in Leh, cross Khardung La into Nubra Valley, traverse the Shyok road to Pangong Tso, and return through Chang La.",
    durationDays: 7,
    routeLine: "Leh → Khardung La → Nubra → Pangong → Leh",
    startingPrice: 28500,
    priceNote: "twin sharing, ex-Leh",
    bestMonths: ["May", "June", "July", "August", "September"],
    isSignature: false,
    itinerary: [
      { dayNumber: 1, title: "Arrive Leh — Acclimatize", stayLocation: "Leh", altitudeMeters: 3500 },
      { dayNumber: 2, title: "Leh Local: Shanti Stupa, Leh Palace, Hall of Fame", stayLocation: "Leh", altitudeMeters: 3500 },
      { dayNumber: 3, title: "Leh → Khardung La → Nubra Valley", stayLocation: "Hunder", altitudeMeters: 3050, drivingHours: 5 },
      { dayNumber: 4, title: "Nubra: Diskit Monastery & Hunder Dunes", stayLocation: "Hunder", altitudeMeters: 3050 },
      { dayNumber: 5, title: "Nubra → Shyok Road → Pangong Tso", stayLocation: "Pangong", altitudeMeters: 4225, drivingHours: 6 },
      { dayNumber: 6, title: "Pangong → Chang La → Leh", stayLocation: "Leh", altitudeMeters: 3500, drivingHours: 5 },
      { dayNumber: 7, title: "Depart Leh", stayLocation: "Leh", altitudeMeters: 3500 },
    ],
    inclusions: [
      "Airport pickup and drop",
      "Accommodation in hotels/camps (twin sharing)",
      "All meals (breakfast + dinner)",
      "Private SUV with experienced driver",
      "Inner Line Permits",
      "Oxygen cylinder in vehicle",
      "Medical kit",
    ],
    exclusions: [
      "Flights to/from Leh",
      "Lunch",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Monument entry fees",
    ],
    faq: [
      { question: "Is this trip suitable for first-time visitors to Ladakh?", answer: "Absolutely. This is our most popular route for first-timers. We build in proper acclimatization days in Leh before gaining altitude." },
      { question: "What kind of vehicles do you use?", answer: "We use Toyota Innova Crysta or similar SUVs, equipped with oxygen cylinders and medical kits for your safety at altitude." },
    ],
  },
  {
    _id: "pkg-2",
    title: "9-Day Grand Ladakh: Nubra, Pangong, Hanle & Tso Moriri",
    slug: { current: "9-day-grand-ladakh" },
    summary: "The complete Ladakh experience — Nubra Valley, Pangong Tso, Hanle dark sky reserve, and the remote Tso Moriri on the Changthang Plateau.",
    durationDays: 9,
    routeLine: "Leh → Nubra → Pangong → Hanle → Tso Moriri → Leh",
    startingPrice: 42000,
    priceNote: "twin sharing, ex-Leh",
    bestMonths: ["June", "July", "August", "September"],
    isSignature: false,
  },
  {
    _id: "pkg-3",
    title: "6-Day Ladakh with Turtuk: The Last Villages",
    slug: { current: "6-day-ladakh-with-turtuk" },
    summary: "Journey to India's northernmost villages — Turtuk and Thang on the Line of Control, with a Nubra Valley deep-dive and Balti homestay.",
    durationDays: 6,
    routeLine: "Leh → Nubra → Turtuk → Thang → Leh",
    startingPrice: 26000,
    priceNote: "twin sharing, ex-Leh",
    bestMonths: ["May", "June", "July", "August", "September"],
    isSignature: false,
  },
  {
    _id: "pkg-4",
    title: "8-Day Manali to Leh Overland Expedition",
    slug: { current: "8-day-manali-to-leh-overland-expedition" },
    summary: "The legendary highway from Manali to Leh — Atal Tunnel, Jispa, Sarchu, More Plains, Tanglang La. Available as bike or SUV expedition.",
    durationDays: 8,
    routeLine: "Manali → Jispa → Sarchu → Leh → Nubra → Pangong → Leh",
    startingPrice: 35000,
    priceNote: "twin sharing, ex-Manali",
    bestMonths: ["June", "July", "August", "September"],
    isSignature: false,
    itinerary: [
      { dayNumber: 1, title: "Arrive Manali — Briefing & Equipment Check", stayLocation: "Manali", altitudeMeters: 2050 },
      { dayNumber: 2, title: "Manali → Atal Tunnel → Sissu → Jispa", stayLocation: "Jispa", altitudeMeters: 3200, drivingHours: 4 },
      { dayNumber: 3, title: "Jispa → Baralacha La → Sarchu", stayLocation: "Sarchu", altitudeMeters: 4300, drivingHours: 5 },
      { dayNumber: 4, title: "Sarchu → Gata Loops → More Plains → Leh", stayLocation: "Leh", altitudeMeters: 3500, drivingHours: 7 },
      { dayNumber: 5, title: "Leh Rest Day — Local Sightseeing", stayLocation: "Leh", altitudeMeters: 3500 },
      { dayNumber: 6, title: "Leh → Khardung La → Nubra Valley", stayLocation: "Hunder", altitudeMeters: 3050, drivingHours: 5 },
      { dayNumber: 7, title: "Nubra → Shyok → Pangong Tso", stayLocation: "Pangong", altitudeMeters: 4225, drivingHours: 6 },
      { dayNumber: 8, title: "Pangong → Chang La → Leh — Depart", stayLocation: "Leh", altitudeMeters: 3500, drivingHours: 5 },
    ],
  },
  {
    _id: "pkg-5",
    title: "5-Day Leh Comfort: Local + Pangong",
    slug: { current: "5-day-leh-comfort" },
    summary: "A gentle Ladakh experience for families and seniors — Leh local sightseeing, Sangam, and one overnight at Pangong with oxygen-equipped vehicles.",
    durationDays: 5,
    routeLine: "Leh → Local → Pangong → Leh",
    startingPrice: 22000,
    priceNote: "twin sharing, ex-Leh",
    bestMonths: ["May", "June", "July", "August", "September"],
    isSignature: false,
  },
  {
    _id: "pkg-6",
    title: "10-Day Srinagar–Kargil–Leh–Manali Trans-Himalayan Crossing",
    slug: { current: "10-day-trans-himalayan-crossing" },
    summary: "The ultimate Himalayan crossing — Srinagar to Manali via Kargil, Drass War Memorial, Lamayuru moonscape, Leh, and the legendary highway south.",
    durationDays: 10,
    routeLine: "Srinagar → Kargil → Lamayuru → Leh → Manali",
    startingPrice: 48000,
    priceNote: "twin sharing, Srinagar to Manali",
    bestMonths: ["June", "July", "August", "September"],
    isSignature: false,
  },
  {
    _id: "pkg-7",
    title: "3-Day Bir Billing Paragliding Weekend",
    slug: { current: "3-day-bir-billing-paragliding-weekend" },
    summary: "One of the world's top paragliding sites — tandem flight from Billing, Tibetan colony cafés, and the Rajgundha meadow trek.",
    durationDays: 3,
    routeLine: "Bir → Billing → Bir",
    startingPrice: 8500,
    priceNote: "per person, ex-Bir",
    bestMonths: ["March", "April", "May", "September", "October", "November"],
    isSignature: false,
  },
  {
    _id: "pkg-8",
    title: "5-Day Manali–Sissu–Jispa Getaway",
    slug: { current: "5-day-manali-sissu-jispa-getaway" },
    summary: "The Lahaul Valley beyond Atal Tunnel — Sissu waterfall, Jispa meadows, and mountain quiet without the high-altitude commitment.",
    durationDays: 5,
    routeLine: "Manali → Sissu → Jispa → Manali",
    startingPrice: 15000,
    priceNote: "twin sharing, ex-Manali",
    bestMonths: ["May", "June", "July", "August", "September", "October"],
    isSignature: false,
  },
  {
    _id: "sig-1",
    title: "Hanle Dark Sky Expedition",
    slug: { current: "hanle-dark-sky-expedition" },
    summary: "A new-moon-aligned expedition to one of the world's highest dark sky reserves. Astronomy evening at the Indian Astronomical Observatory, with an optional Umling La push.",
    durationDays: 6,
    routeLine: "Leh → Nubra → Pangong → Hanle → Umling La → Leh",
    startingPrice: 38000,
    priceNote: "twin sharing, ex-Leh",
    bestMonths: ["June", "July", "August", "September"],
    isSignature: true,
    itinerary: [
      { dayNumber: 1, title: "Arrive Leh — Acclimatize", stayLocation: "Leh", altitudeMeters: 3500 },
      { dayNumber: 2, title: "Leh → Khardung La → Nubra Valley", stayLocation: "Hunder", altitudeMeters: 3050, drivingHours: 5 },
      { dayNumber: 3, title: "Nubra → Shyok → Pangong Tso", stayLocation: "Pangong", altitudeMeters: 4225, drivingHours: 6 },
      { dayNumber: 4, title: "Pangong → Hanle Dark Sky Reserve", stayLocation: "Hanle", altitudeMeters: 4500, drivingHours: 5 },
      { dayNumber: 5, title: "Hanle Astronomy Night + Optional Umling La", stayLocation: "Hanle", altitudeMeters: 4500 },
      { dayNumber: 6, title: "Hanle → Leh via Chumur → Depart", stayLocation: "Leh", altitudeMeters: 3500, drivingHours: 7 },
    ],
  },
  {
    _id: "sig-2",
    title: "Ladakh Photography Expedition",
    slug: { current: "ladakh-photography-expedition" },
    summary: "An 8-day expedition routed for golden-hour shooting — monastery mornings, Changthang wildlife, Pangong blue, and the Nubra dunes at sunset.",
    durationDays: 8,
    routeLine: "Leh → Monasteries → Nubra → Pangong → Tso Moriri → Leh",
    startingPrice: 45000,
    priceNote: "twin sharing, ex-Leh",
    bestMonths: ["June", "July", "August", "September"],
    isSignature: true,
  },
];

export const placeholderDestinations: Partial<Destination>[] = [
  { _id: "dest-1", title: "Leh", slug: { current: "leh" }, region: "Ladakh", altitudeMeters: 3500, bestMonths: ["May", "June", "July", "August", "September", "October"], permitRequired: false },
  { _id: "dest-2", title: "Nubra Valley", slug: { current: "nubra-valley" }, region: "Ladakh", altitudeMeters: 3050, bestMonths: ["May", "June", "July", "August", "September"], permitRequired: true },
  { _id: "dest-3", title: "Pangong Tso", slug: { current: "pangong-tso" }, region: "Ladakh", altitudeMeters: 4225, bestMonths: ["May", "June", "July", "August", "September"], permitRequired: true },
  { _id: "dest-4", title: "Tso Moriri", slug: { current: "tso-moriri" }, region: "Ladakh", altitudeMeters: 4522, bestMonths: ["June", "July", "August", "September"], permitRequired: true },
  { _id: "dest-5", title: "Hanle", slug: { current: "hanle" }, region: "Ladakh", altitudeMeters: 4500, bestMonths: ["May", "June", "July", "August", "September"], permitRequired: true },
  { _id: "dest-6", title: "Turtuk", slug: { current: "turtuk" }, region: "Ladakh", altitudeMeters: 2900, bestMonths: ["May", "June", "July", "August", "September"], permitRequired: true },
  { _id: "dest-7", title: "Kargil & Drass", slug: { current: "kargil-drass" }, region: "Ladakh", altitudeMeters: 2676, bestMonths: ["May", "June", "July", "August", "September", "October"], permitRequired: false },
  { _id: "dest-8", title: "Manali", slug: { current: "manali" }, region: "Himachal", altitudeMeters: 2050, bestMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], permitRequired: false },
  { _id: "dest-9", title: "Bir Billing", slug: { current: "bir-billing" }, region: "Himachal", altitudeMeters: 1400, bestMonths: ["March", "April", "May", "June", "September", "October", "November"], permitRequired: false },
];

export const placeholderTestimonials: Partial<Testimonial>[] = [
  { _id: "test-1", name: "Rahul Sharma", location: "Delhi", quote: "The acclimatization planning made all the difference. Our driver knew every turn, every stop for chai, every viewpoint we'd have missed on our own. Pangong at dawn was exactly what they promised — utterly still, utterly blue.", rating: 5, tripTaken: { title: "7-Day Leh–Nubra–Pangong Classic Circuit" } },
  { _id: "test-2", name: "Priya Menon", location: "Bangalore", quote: "We brought our parents on the Leh Comfort trip. Oxygen cylinders in the vehicle, gentle pacing, warm homestays. My mother still talks about the light at Shanti Stupa at sunset.", rating: 5, tripTaken: { title: "5-Day Leh Comfort: Local + Pangong" } },
  { _id: "test-3", name: "Arjun Patel", location: "Mumbai", quote: "The Manali–Leh overland ride was a lifelong dream. These guys had the route, the backup plans, the mechanic numbers. When the weather turned near Sarchu, they just handled it.", rating: 5, tripTaken: { title: "8-Day Manali to Leh Overland Expedition" } },
];

export const placeholderWhyUs: WhyUsItem[] = [
  { icon: "mountain", title: "Born in the Himalayas", description: "Local team, local drivers, real ground knowledge. We don't subcontract — we drive." },
  { icon: "heart", title: "Acclimatization-First Itineraries", description: "Routes paced for altitude with oxygen on board. Your body adjusts before your adventure begins." },
  { icon: "phone", title: "24/7 On-Road Support", description: "One call, we're already moving. Real support from people who know every road and every shortcut." },
  { icon: "shield", title: "Permits Handled", description: "ILP and restricted-area paperwork done before you land. You travel — we handle the bureaucracy." },
  { icon: "check", title: "No Hidden Costs", description: "The price we quote is the price you pay. Accommodation, meals, permits, vehicle — it's all in there." },
];

// Unsplash photo helper — all photos are free under the Unsplash License
function unsplash(id: string, w: number, q = 80) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

// Photo IDs sourced from Unsplash, verified as free (Unsplash License)
const photos = {
  ladakhValley: "1713214414117-5b8acc5aa06d",       // Ladakh valley with dramatic peaks — Mithun Shivana
  mountainLake: "1643368214091-6af1a029aee0",       // Mountain range reflected in lake — Anuj Bansal
  lehMonastery: "1695876670020-e2c2ac5a21ce",       // White monastery building, Leh — Anmol Arora
  nubraCamels: "1741416075697-edc2a63aa226",        // Bactrian camels, Hunder dunes — Rama Krushna Behera
  pangongBlue: "1635255506105-b74adbd94026",        // Pangong Tso with snow-capped peaks — SOURAV BHADRA
  tsoMoriri: "1600356033695-a003690a6351",          // Blue lake near brown mountains — Aditya Rao
  milkyWay: "1717228237487-d4f126923a5e",           // Milky Way galaxy over mountain range — Akbar Nemati
  kargil: "1566323124805-757e5c41d37c",             // River bridge surrounded by mountains — Ladakh
  manali: "1652543393067-281cea9b8c02",             // Manali city with mountain backdrop — Sajal Das
  birBilling: "1625124313248-903aa145ac51",         // Paragliding over green mountains, Bir — Naman Sood
  highway: "1694948055470-36d187668df1",            // Manali-Leh highway — Vivek
  rawMountain: "1772165134215-eb8d3b5c758d",        // Snow-capped Ladakh peaks at golden hour — Mayur Arvind
  lamayuru: "1632649276640-b78f56fbb68f",           // Lamayuru monastery on mountain — Rutpratheep Nilpechr
  sangam: "1619837374214-f5b9eb80876d",             // Indus-Zanskar river confluence
  mountainRoad: "1694948056349-f91199dd8a3a",       // Motorcyclist crosses bridge in mountains — Vivek
};

export const placeholderImage = unsplash(photos.ladakhValley, 1200);
export const placeholderHeroImage = unsplash(photos.ladakhValley, 1920, 85);

export const destinationImages: Record<string, string> = {
  leh: unsplash(photos.lehMonastery, 600),
  "nubra-valley": unsplash(photos.nubraCamels, 600),
  "pangong-tso": unsplash(photos.pangongBlue, 600),
  "tso-moriri": unsplash(photos.tsoMoriri, 600),
  hanle: unsplash(photos.milkyWay, 600),
  turtuk: unsplash(photos.mountainRoad, 600),
  "kargil-drass": unsplash(photos.kargil, 600),
  manali: unsplash(photos.manali, 600),
  "bir-billing": unsplash(photos.birBilling, 600),
};

export const destinationHeroImages: Record<string, string> = {
  leh: unsplash(photos.lehMonastery, 1920, 85),
  "nubra-valley": unsplash(photos.nubraCamels, 1920, 85),
  "pangong-tso": unsplash(photos.pangongBlue, 1920, 85),
  "tso-moriri": unsplash(photos.tsoMoriri, 1920, 85),
  hanle: unsplash(photos.milkyWay, 1920, 85),
  turtuk: unsplash(photos.mountainRoad, 1920, 85),
  "kargil-drass": unsplash(photos.kargil, 1920, 85),
  manali: unsplash(photos.manali, 1920, 85),
  "bir-billing": unsplash(photos.birBilling, 1920, 85),
};

export const packageHeroImages: Record<string, string> = {
  "7-day-leh-nubra-pangong-classic-circuit": unsplash(photos.mountainLake, 1920, 85),
  "9-day-grand-ladakh": unsplash(photos.ladakhValley, 1920, 85),
  "6-day-ladakh-with-turtuk": unsplash(photos.mountainRoad, 1920, 85),
  "8-day-manali-to-leh-overland-expedition": unsplash(photos.highway, 1920, 85),
  "5-day-leh-comfort": unsplash(photos.lehMonastery, 1920, 85),
  "10-day-trans-himalayan-crossing": unsplash(photos.lamayuru, 1920, 85),
  "3-day-bir-billing-paragliding-weekend": unsplash(photos.birBilling, 1920, 85),
  "5-day-manali-sissu-jispa-getaway": unsplash(photos.manali, 1920, 85),
  "hanle-dark-sky-expedition": unsplash(photos.milkyWay, 1920, 85),
  "ladakh-photography-expedition": unsplash(photos.rawMountain, 1920, 85),
};

export const packageCardImages: Record<string, string> = {
  "7-day-leh-nubra-pangong-classic-circuit": unsplash(photos.mountainLake, 800),
  "9-day-grand-ladakh": unsplash(photos.ladakhValley, 800),
  "6-day-ladakh-with-turtuk": unsplash(photos.mountainRoad, 800),
  "8-day-manali-to-leh-overland-expedition": unsplash(photos.highway, 800),
  "5-day-leh-comfort": unsplash(photos.lehMonastery, 800),
  "10-day-trans-himalayan-crossing": unsplash(photos.lamayuru, 800),
  "3-day-bir-billing-paragliding-weekend": unsplash(photos.birBilling, 800),
  "5-day-manali-sissu-jispa-getaway": unsplash(photos.manali, 800),
  "hanle-dark-sky-expedition": unsplash(photos.milkyWay, 800),
  "ladakh-photography-expedition": unsplash(photos.rawMountain, 800),
};

export const destinationVideos: Record<string, string[]> = {
  leh: ["/videos/leh-monastery-aerial.mp4", "/videos/hero-ladakh.mp4"],
  "nubra-valley": ["/videos/nubra-camels.mp4", "/videos/nubra-river.mp4"],
  "pangong-tso": ["/videos/pangong-timelapse.mp4", "/videos/pangong-ride.mp4"],
  "tso-moriri": ["/videos/tsomoriri-lake.mp4"],
  hanle: ["/videos/hanle-nightsky.mp4"],
  turtuk: ["/videos/leh-monastery-aerial.mp4"],
  "kargil-drass": ["/videos/hero-ladakh.mp4"],
  manali: ["/videos/manali-aerial.mp4"],
  "bir-billing": ["/videos/bir-paragliding.mp4"],
};
