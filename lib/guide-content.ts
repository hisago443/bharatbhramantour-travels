// Full editorial bodies for the travel guides.
// Facts (altitudes, permit rules, road-opening windows) verified against
// current public information; anything that changes seasonally is phrased
// so the operations team confirms at booking.

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideBody {
  title: string;
  slug: string;
  excerpt: string;
  imageKey: string; // key into destinationImages
  readMinutes: number;
  sections: GuideSection[];
}

export const guideBodies: GuideBody[] = [
  {
    title: "Inner Line Permit for Ladakh: Complete Guide",
    slug: "inner-line-permit-ladakh",
    excerpt:
      "Who needs it, how to apply, current costs, and the areas it covers — everything about the ILP for domestic and international travellers.",
    imageKey: "leh",
    readMinutes: 6,
    sections: [
      {
        heading: "What the Inner Line Permit actually is",
        paragraphs: [
          "Large parts of Ladakh sit close to sensitive international borders, and access to them is regulated. The Inner Line Permit (ILP) is the document that lets Indian citizens travel into these 'protected' areas — and if your itinerary includes Nubra Valley, Pangong Tso, Tso Moriri, Hanle, or Turtuk, you will pass checkpoints that ask for it.",
          "The good news: it's a routine formality, not a barrier. Tens of thousands of travellers get it every season, and when you travel with us, we obtain it before you even land in Leh.",
        ],
      },
      {
        heading: "Who needs it — and who doesn't",
        paragraphs: [
          "Indian citizens need the ILP for the protected areas listed below. Residents of Ladakh are exempt. Foreign nationals don't use the ILP system at all — they need a Protected Area Permit (PAP) instead, which must be arranged through a registered travel agency and has its own rules about group composition and restricted zones.",
        ],
        bullets: [
          "Nubra Valley (Diskit, Hunder, Sumur, Panamik) — ILP required",
          "Turtuk, Bogdang and the lower Shyok — ILP required, checked at Bogdang",
          "Pangong Tso and the Changthang lake belt — ILP required",
          "Tso Moriri, Tso Kar and Korzok — ILP required",
          "Hanle, Umling La and the far Changthang — ILP required; border-sensitive, carry extra copies",
          "Leh town, Sham Valley, Lamayuru, Kargil, Drass, Srinagar–Leh and Manali–Leh highways — no permit needed",
        ],
      },
      {
        heading: "How to apply",
        paragraphs: [
          "Applications are processed through the Leh District administration — either online via the official LAHDC permit portal or in person at the DC office/Tourist Information Centre in Leh. You select your route, pay the environment and Red Cross fees plus a small per-day charge, and receive a printable permit.",
          "Costs are modest — typically a few hundred rupees total depending on duration — but rates are revised periodically, so we confirm the exact amount at booking. The permit is generally valid for the length of a normal itinerary; you don't need separate permits per destination if you declare your full route.",
        ],
      },
      {
        heading: "On the road: how it works in practice",
        paragraphs: [
          "Checkpoints at places like Khardung La, Chang La, Bogdang and Nyoma will collect a photocopy of your permit and note your passage. This is why the golden rule is: carry more photocopies than you think you need — six is a comfortable number — plus your original government photo ID.",
          "When you travel with Bharat Bhraman, all of this is invisible to you. We file the application with your ID details before arrival, print the copies, and our drivers handle every checkpoint while you photograph the pass.",
        ],
      },
      {
        heading: "Three mistakes to avoid",
        paragraphs: [],
        bullets: [
          "Assuming a permit isn't needed because 'it's all Ladakh' — the checkpoints genuinely turn people back.",
          "Carrying only a phone photo of the permit — checkpoints want physical photocopies to retain.",
          "Leaving Hanle or Umling La off your declared route and trying to add them on the fly — declare everything upfront.",
        ],
      },
    ],
  },
  {
    title: "Acclimatization in Ladakh: How to Not Ruin Your Trip",
    slug: "acclimatization-ladakh",
    excerpt:
      "Leh sits at 3,500m. Your body needs time. Here's how to pace your first 48 hours, what AMS feels like, and when to take Diamox.",
    imageKey: "nubra-valley",
    readMinutes: 7,
    sections: [
      {
        heading: "Why this is the most important page on our site",
        paragraphs: [
          "When you fly from Delhi (216m) to Leh (3,500m), you gain more altitude in ninety minutes than most trekkers gain in a week. The air in Leh carries roughly two-thirds of the oxygen you're used to — and at Pangong or Hanle, closer to sixty percent. Your body can adapt to this brilliantly. It just needs time.",
          "Acute Mountain Sickness (AMS) doesn't care how fit you are. Marathon runners get it; grandmothers sail through. The only reliable variables are ascent rate, rest, and hydration — all three of which are built into every itinerary we run.",
        ],
      },
      {
        heading: "The first 48 hours: your only job is to do less",
        paragraphs: [
          "Day one in Leh should be genuinely lazy: check in, hydrate, stroll gently in the bazaar at most, and sleep early. Day two can add light sightseeing — Shanti Stupa by car, Leh Palace, a slow lunch. What it should not include is Khardung La, exertion, alcohol, or sleeping pills, all of which suppress the breathing response your body is using to adapt.",
          "Drink three to four litres of water a day, eat carbohydrate-rich meals even if your appetite dips, and walk slower than feels natural. In Ladakh they say: 'Walk like a lama, not like a lambardar.'",
        ],
      },
      {
        heading: "What AMS feels like — and when to worry",
        paragraphs: [
          "Mild AMS feels like a hangover you didn't earn: headache, poor sleep, low appetite, slight nausea, unusual fatigue. This is common, manageable, and usually resolves within a day if you rest, hydrate, and don't ascend further until it clears.",
          "The serious forms are rare but non-negotiable. Worsening breathlessness at rest, a wet cough, confusion, or stumbling like you're drunk are signs of HAPE or HACE — descend immediately and get medical help. Leh has SNM Hospital and multiple oxygen-equipped clinics; our vehicles carry oxygen cylinders and our drivers know every medical stop on every route.",
        ],
      },
      {
        heading: "Diamox: the honest answer",
        paragraphs: [
          "Acetazolamide (Diamox) genuinely helps many travellers acclimatize faster — it's the standard preventive, typically started a day before arrival. It is also a prescription drug with real contraindications (notably sulfa allergies), so the only correct advice is: ask your doctor before you travel, not a WhatsApp group.",
          "What Diamox is not: a licence to skip acclimatization days. Medication plus a sensible itinerary works; medication instead of one doesn't.",
        ],
      },
      {
        heading: "How our itineraries build acclimatization in",
        paragraphs: [],
        bullets: [
          "Minimum one full rest day in Leh before any high pass — two on longer circuits.",
          "Sleep low, cross high: Nubra (3,050m) comes before Pangong (4,225m); Tso Moriri (4,522m) and Hanle (4,500m) come last.",
          "Oxygen cylinder and pulse oximeter in every vehicle, with drivers trained to use them.",
          "Overland Manali routes sleep at Jispa (3,200m), never straight through to Leh in a day.",
          "Flexible pacing — if your body asks for a slower day, the route bends, not you.",
        ],
      },
    ],
  },
  {
    title: "Best Time to Visit Ladakh: Month-by-Month",
    slug: "best-time-ladakh",
    excerpt:
      "May is opening season, June–September is peak, October is closing. Each month brings different roads, crowds, and colours.",
    imageKey: "pangong-tso",
    readMinutes: 6,
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "For most travellers: mid-June to mid-September, when every road, pass and lake is open and the weather is at its kindest. For photographers and crowd-avoiders: late September. For winter romantics with good cold tolerance: fly in any time — Leh never closes, only the roads do.",
        ],
      },
      {
        heading: "January – March: the frozen kingdom",
        paragraphs: [
          "Both highways are snowed shut; Leh is fly-in only. Days hover below freezing and nights can reach −15°C or lower, but the light is crystalline, hotels drop prices, and Pangong freezes into a white mirror. This is the season of the famous frozen-river conditions in Zanskar and of snow leopard spotting in Hemis National Park — special-interest travel, and unforgettable if it's your kind of thing.",
        ],
      },
      {
        heading: "April – May: the thaw and the opening",
        paragraphs: [
          "April is shoulder season in Leh — cold nights, blossoming apricot villages in Sham and Nubra's fringes, very few tourists. The Srinagar–Leh highway usually opens in May once Zoji La is cleared, making late May the first real road-trip window. Expect snow walls at the passes and some lake camps still closed.",
        ],
      },
      {
        heading: "June – August: full season",
        paragraphs: [
          "The Manali–Leh highway typically opens in June, and by mid-June all of Ladakh is running: every camp at Pangong and Tso Moriri, every homestay in Turtuk and Hanle. Days are warm (20–25°C in Leh), nights pleasantly cold, and Ladakh sits in a rain shadow, so it largely escapes the monsoon drenching the rest of the Himalaya — though localized cloudbursts can briefly close roads in late July and August, which is why our itineraries carry buffer time.",
          "This is also festival season — Hemis Tsechu usually lands in June or July, filling the monastery courtyard with masked cham dances.",
        ],
      },
      {
        heading: "September – October: the golden secret",
        paragraphs: [
          "September might be Ladakh's best month: monsoon risk fades, skies stay glassy, crowds thin, and the light turns long and golden. By early October the poplars and willows blaze yellow and the first camps begin packing up. Mid-October to early November is closing time — beautiful, cold, and increasingly quiet until the passes shut for winter.",
        ],
      },
      {
        heading: "Month by month at a glance",
        paragraphs: [],
        bullets: [
          "Jan–Mar: fly-in winter, −15°C nights, frozen lakes, snow leopards — for the prepared.",
          "Apr: quiet thaw, apricot blossom, roads still shut.",
          "May: Srinagar road opens; first circuits possible with snow-wall drama.",
          "Jun: Manali road opens; everything running; peak begins.",
          "Jul–Aug: warmest, busiest; rain-shadow protection with occasional cloudburst detours.",
          "Sep: golden light, thinner crowds — the connoisseur's month.",
          "Oct: autumn colours, camps closing, cold nights return.",
          "Nov–Dec: roads close; Leh goes quiet under the first serious snow.",
        ],
      },
    ],
  },
  {
    title: "Manali–Leh vs Srinagar–Leh: Which Road and Why",
    slug: "manali-leh-vs-srinagar-leh",
    excerpt:
      "Two legendary highways into Ladakh. One climbs through Lahaul and 5 passes. The other winds through Kashmir and Kargil. How to choose.",
    imageKey: "manali",
    readMinutes: 7,
    sections: [
      {
        heading: "Two roads, two personalities",
        paragraphs: [
          "The Srinagar–Leh highway (NH1, ~418 km) is the historic caravan road: it climbs gradually through Sonamarg, crosses Zoji La (~3,528m), then rolls through Drass, Kargil and the Lamayuru moonland into the Indus valley. The Manali–Leh highway (~473 km) is the wilder sibling: through the Atal Tunnel into Lahaul, then up and over a ladder of giant passes — Baralacha La (~4,890m), Lachulung La (~5,059m), Tanglang La (~5,328m) — across the More Plains at 4,700m.",
        ],
      },
      {
        heading: "The acclimatization argument (this should decide it)",
        paragraphs: [
          "Srinagar–Leh is simply better for your body. You sleep at Sonamarg (~2,730m) or Kargil (~2,676m) before ever going high, so altitude arrives in polite increments. On the Manali side, the road spends hours above 4,500m, and doing it in one day from Manali is the single most common cause of AMS we see. If you ride or drive it, sleep at Jispa (~3,200m) — never push Manali to Leh in one go.",
          "Our favourite recommendation for a full crossing: enter via Srinagar, exit via Manali. Your body ascends gently, and you still collect the big-pass drama on the way out — downhill, acclimatized, camera ready.",
        ],
      },
      {
        heading: "Scenery: apples and oranges, both spectacular",
        paragraphs: [
          "Srinagar–Leh is a story of transitions — Kashmiri pine forests dissolving into Drass's war-memorial ridgelines, then Mulbekh's rock-cut Buddha and Lamayuru's lunar badlands. Manali–Leh is pure high-altitude theatre: the Gata Loops' 21 hairpins, the eerie flatness of the More Plains, colours that don't look real in photographs. Riders tend to worship the Manali road; photographers split evenly.",
        ],
      },
      {
        heading: "Practicalities",
        paragraphs: [],
        bullets: [
          "Opening window: Srinagar route usually opens first (May) and closes later; Manali route runs roughly June to mid-October.",
          "Fuel: both routes have long dry stretches — Tandi (Manali side) is the famous 'last pump for 365 km'.",
          "Driving time: both are best as two-day journeys with an overnight (Kargil or Jispa/Sarchu respectively).",
          "Road quality varies year to year with landslides and repairs; we run current road intel before every departure.",
          "Nervous about mountain roads? Srinagar side is gentler; the Zoji La stretch is dramatic but short.",
        ],
      },
      {
        heading: "Our verdict",
        paragraphs: [
          "First Ladakh trip with limited days: fly into Leh and skip the debate. Overland once in your life: go up the Srinagar road, come down the Manali road — our 10-day Trans-Himalayan Crossing does exactly this, and it's the best-ordered version of the greatest road trip in India.",
        ],
      },
    ],
  },
  {
    title: "Pangong vs Tso Moriri vs Hanle: Choosing Your Lakes",
    slug: "pangong-vs-tso-moriri-vs-hanle",
    excerpt:
      "Three very different high-altitude experiences. Pangong is the icon, Tso Moriri is the quiet one, Hanle is the dark sky.",
    imageKey: "tso-moriri",
    readMinutes: 5,
    sections: [
      {
        heading: "Three destinations, one plateau",
        paragraphs: [
          "East of Leh, the Changthang plateau holds Ladakh's three great overnight destinations: Pangong Tso, Tso Moriri, and the Hanle valley. They're often lumped together as 'the lakes', but they deliver three very different nights — and if your itinerary can't fit all three, it helps to know exactly what each one is for.",
        ],
      },
      {
        heading: "Pangong Tso: the icon",
        paragraphs: [
          "The most famous, most accessible, and yes, most visited. At 4,225m and 134 km long, its colour-shifting water is a genuine natural phenomenon, not a filter. Reachable in 5–6 hours from Leh (or from Nubra via the Shyok road), with the widest range of camps and homestays. Choose Pangong if this is your first Ladakh trip, if your schedule is tight, or if the photographs are the point. Escape the crowds by sleeping at Man or Merak instead of Spangmik.",
        ],
      },
      {
        heading: "Tso Moriri: the sanctuary",
        paragraphs: [
          "Higher (4,522m), further (7–8 hours), and wilder. Tso Moriri sits in a wildlife sanctuary with Ramsar-protected wetlands: black-necked cranes, bar-headed geese, kiang herds, and Changpa nomad camps around Korzok village. Facilities are simpler and the night is colder — that's the price of having a Himalayan great lake mostly to yourself. Choose it for solitude, wildlife, and the feeling Pangong had twenty years ago.",
        ],
      },
      {
        heading: "Hanle: the sky",
        paragraphs: [
          "Not a lake at all — a high grassland valley at ~4,500m that happens to sit under the darkest measured skies in India. The observatory, the Dark Sky Reserve rules, and the astro-homestays make this the choice for one specific, spectacular reason: the night sky. Time it to the new moon and it will outrank the lakes in your memory. It's also the base for the optional Umling La run (~5,798m), the world's highest motorable road.",
        ],
      },
      {
        heading: "The honest decision matrix",
        paragraphs: [],
        bullets: [
          "5–7 days in Ladakh: Pangong only — do it via Nubra so the drive never repeats.",
          "8–9 days: Pangong + either Tso Moriri (wildlife, solitude) or Hanle (stars) depending on your obsession.",
          "10+ days: all three in an arc — Nubra → Pangong → Hanle → Tso Moriri → Leh. Our Grand Ladakh circuit runs exactly this.",
          "Photographers: dawn at Pangong, golden hour at Tso Moriri, night at Hanle. There is no wrong answer.",
        ],
      },
    ],
  },
  {
    title: "Turtuk & Thang: Visiting India's Last Villages",
    slug: "turtuk-thang-last-villages",
    excerpt:
      "Opened to tourists in 2010, these Balti villages near the LoC offer apricot orchards, warm hospitality, and a respectful-tourism perspective.",
    imageKey: "turtuk",
    readMinutes: 5,
    sections: [
      {
        heading: "A village that changed countries overnight",
        paragraphs: [
          "Until December 1971, Turtuk was in Pakistan. After the war that year, the frontline moved, and this Balti-speaking village on the Shyok river woke up Indian — families split by a border that had shifted past their orchards. It stayed closed to travellers for four decades, opening only in 2010, which is why Turtuk still feels like a place, not a destination.",
          "Culturally, this is Baltistan: the language, the stone-and-timber architecture, the apricot economy and the food all belong to a region that mostly lies across the Line of Control. Visiting is the closest most of us will come to it.",
        ],
      },
      {
        heading: "What a day in Turtuk looks like",
        paragraphs: [
          "You cross the footbridge and climb into a maze of hand-stacked stone lanes where irrigation channels run like veins between houses. The village spreads across three hamlets — Farol on the plateau, Youl by the stream, Chutang below — linked by paths shaded with apricot and walnut. The small Yabgo palace museum, kept by the descendant of the old royal house, is a must; so is simply accepting the tea you will inevitably be offered.",
          "Half an hour further on, Thang village and its army viewpoint look across the valley to hamlets on the other side of the LoC. People stand quietly there. It reframes the whole trip.",
        ],
      },
      {
        heading: "Travelling respectfully",
        paragraphs: [
          "Turtuk is a small, conservative Muslim village absorbing tourism on its own terms. The rules are simple: dress modestly, always ask before photographing people (especially women), don't fly drones, and spend your money inside the village — homestays, home kitchens, local guides, dried apricots. That's not a restriction on your experience; it is the experience.",
        ],
      },
      {
        heading: "The practical bits",
        paragraphs: [],
        bullets: [
          "Permits: ILP required, checked at Bogdang. Rules for visiting Thang can vary for foreign nationals — we confirm current status before travel.",
          "Getting there: ~2.5 hours beyond Hunder along the Shyok; combine it with Nubra for a two-night valley stay.",
          "Altitude: at ~2,900m Turtuk is Ladakh's most restful sleep — a smart mid-circuit recovery night.",
          "When: May–September; July–August for the apricot harvest, September for golden buckwheat fields.",
          "Stay: family homestays and small guesthouses — simple, warm, and the whole point.",
        ],
      },
    ],
  },
];
