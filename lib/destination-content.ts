// Rich editorial content for destination detail pages.
// Facts verified: altitudes, permit rules, seasonal windows.
// Mirrors the structure of the Sanity destination schema so it can be
// seeded into the CMS and swapped for live data without template changes.

export interface DestinationHighlight {
  title: string;
  description: string;
}

export interface DestinationContent {
  /** One-line editorial subtitle under the hero headline */
  tagline: string;
  /** 2–3 paragraph editorial intro, second person, sensory */
  intro: string[];
  highlights: DestinationHighlight[];
  knowBeforeYouGo: { label: string; note: string }[];
  howToReach: string;
  bestTimeNote: string;
}

export const destinationContent: Record<string, DestinationContent> = {
  leh: {
    tagline: "The high-altitude capital where every Ladakh journey begins — and where your body learns the mountains.",
    intro: [
      "You land at 3,500 metres and the first thing Leh asks of you is to slow down. The light is sharper here, the shadows harder, and the town moves at the pace of a place that has watched caravans come and go for a thousand years. Spend your first day doing gloriously little: walk the old town lanes, drink butter tea, let your body catch up with your itinerary.",
      "Leh was once the crossroads of the Silk Route between Punjab and Yarkand, and it still feels like a meeting point — monks and mechanics, trekkers and traders, all circling the same sun-baked bazaar. Above it all leans the nine-storey Leh Palace, and beyond that, ranges that don't bother with foothills.",
      "Every one of our itineraries starts with at least one full acclimatization day here. It isn't padding — it's the difference between a trip you survive and a trip you remember.",
    ],
    highlights: [
      { title: "Leh Palace", description: "A nine-storey royal palace from the 17th century, built by King Sengge Namgyal. Climb to the upper terraces at golden hour for the best view over the old town and Stok Kangri." },
      { title: "Shanti Stupa", description: "The white-domed peace stupa above Changspa, built with Japanese collaboration in 1991. Come for sunset — the whole Indus valley turns copper below you." },
      { title: "Thiksey Monastery", description: "A 12-storey monastery complex 19 km from town that looks like a miniature Potala. The 15-metre Maitreya Buddha statue inside is one of Ladakh's most photographed." },
      { title: "Sangam Point", description: "Where the muddy Zanskar meets the blue-green Indus near Nimmu — two rivers, two colours, one dramatic confluence you can see from the highway viewpoint." },
      { title: "Gurudwara Pathar Sahib", description: "A serene gurudwara on the Srinagar road, maintained by the Indian Army, marking the spot where Guru Nanak is believed to have meditated in the 16th century." },
      { title: "Main Bazaar & Old Town", description: "Pedestrianised, poplar-lined, and full of apricot sellers, pashmina dealers, and bakeries making fresh khambir bread in tandoors that never cool down." },
    ],
    knowBeforeYouGo: [
      { label: "Altitude", note: "Leh sits at 3,500m. Plan nothing strenuous for your first 24–48 hours. Hydrate constantly, skip alcohol on day one, and tell us immediately if you feel a headache building." },
      { label: "Permits", note: "No permit is needed for Leh town and the immediate Indus valley. Permits for Nubra, Pangong, Tso Moriri and Hanle are arranged by us before you arrive." },
      { label: "Connectivity", note: "Only postpaid SIMs work in Ladakh (Jio and Airtel are most reliable in town). ATMs exist in Leh but carry cash for everything beyond it." },
    ],
    howToReach: "Fly direct into Kushok Bakula Rimpochee Airport (IXL) from Delhi year-round — one of the most spectacular descents in Indian aviation. By road, the Manali–Leh highway (473 km) and Srinagar–Leh highway (418 km) are open roughly May/June to October.",
    bestTimeNote: "May to October for road access and open passes. June to September is peak, with warm days (15–25°C) and cold nights. April and October are quieter, colder, and beautiful.",
  },

  "nubra-valley": {
    tagline: "Cross one of the world's highest motorable passes and descend into a valley of sand dunes, double-humped camels, and river-braided light.",
    intro: [
      "The road to Nubra goes up before it goes down — over Khardung La at around 5,359 metres, where prayer flags shred themselves against the wind and the air holds about half the oxygen your body is used to. Then the descent begins, and the moonscape softens into something stranger: a green valley floor stitched with silver river channels, backed by silver-grey dunes.",
      "Nubra was the last Indian halt on the caravan route to Yarkand, and its double-humped Bactrian camels are the living descendants of that trade. At Hunder, you can ride them across cold-desert dunes at sunset while the Karakoram turns pink behind you.",
      "This is a valley to sleep in, not to day-trip. Evenings in Hunder and Diskit are quiet and starry, and the morning light on the Diskit Maitreya statue is worth the whole crossing.",
    ],
    highlights: [
      { title: "Khardung La", description: "The gateway pass at roughly 5,359m — among the highest motorable roads on earth. We stop just long enough for photos; lingering at this altitude works against your acclimatization." },
      { title: "Diskit Monastery & Maitreya Buddha", description: "Nubra's oldest and largest gompa, founded in the 14th century, crowned by a 32-metre Maitreya statue that gazes down the Shyok river towards the old frontier." },
      { title: "Hunder Sand Dunes", description: "White cold-desert dunes between village and river, where Bactrian camel caravans once rested en route to Central Asia. Ride at golden hour when the sand goes amber." },
      { title: "Sumur & Panamik", description: "The quieter northern arm of the valley — Samstanling monastery among poplars at Sumur, and hot sulphur springs at Panamik, one of the highest in the world." },
      { title: "Shyok River Road", description: "The dramatic riverside route that links Nubra directly to Pangong Tso, so you don't backtrack over Khardung La. Raw, cliff-hugging, unforgettable." },
    ],
    knowBeforeYouGo: [
      { label: "Permits", note: "Inner Line Permit required for all visitors (arranged by us). Carry 4–6 photocopies and your original ID; checkpoints collect copies." },
      { label: "Altitude", note: "The valley floor (3,050m) is lower than Leh, which makes Nubra the ideal second stop — you sleep lower than you cross." },
      { label: "Facilities", note: "No ATMs beyond Diskit and patchy connectivity (postpaid Jio/Airtel only, and only in Diskit/Hunder). Fuel up in Leh; the Diskit pump is the valley's only one." },
    ],
    howToReach: "120–160 km from Leh depending on route: over Khardung La to Diskit/Hunder (5–6 hours with stops). We usually route onward to Pangong via the Shyok road rather than returning the same way.",
    bestTimeNote: "May to September. The dunes are at their photogenic best in June–August evenings; October brings gold poplars and thinning crowds.",
  },

  "pangong-tso": {
    tagline: "A 134-kilometre blade of impossible blue at 4,225 metres — the lake that launched a thousand road trips.",
    intro: [
      "No photograph prepares you for the colour. Pangong Tso shifts from steel grey to turquoise to a deep, saturated cobalt in the space of an afternoon, and the mountains around it are so bare that nothing distracts from the performance. At 4,225 metres, the lake runs 134 kilometres east into Tibet; only about a third of it is in India, which somehow makes the shoreline feel even more like an edge of the map.",
      "It is a brackish lake that still freezes solid every winter — solid enough to walk on — and in summer its shores host bar-headed geese and Brahminy ducks that migrate over the Himalayas to get here.",
      "Stay the night. Day-trippers see the lake at noon, when the light is flattest and the wind is up. The magic is at dawn: utterly still water, utterly silent shore, and colours that change by the minute as the sun clears the Changthang ranges.",
    ],
    highlights: [
      { title: "Dawn at Spangmik", description: "The classic first-light view from the lakeside camps — glassy water, pink summits, and a silence you can hear. The single best reason to overnight rather than day-trip." },
      { title: "Chang La Crossing", description: "The 5,300m-plus pass on the Leh approach, often snow-walled even in June. Army-run tea stalls near the top serve the highest cup of chai of your life." },
      { title: "Man & Merak Villages", description: "Further down the shore, these tiny Changpa villages offer homestays far from the camp clusters — the quiet, local way to experience the lake." },
      { title: "The Shyok Road", description: "The route in from Nubra hugs the Shyok river beneath vast rock walls — many travellers rate the drive as highly as the destination." },
      { title: "Winter Ice", description: "From January to March the lake freezes completely despite its salinity — an otherworldly white sheet that hosts the occasional ice-skating expedition." },
    ],
    knowBeforeYouGo: [
      { label: "Altitude", note: "You sleep at 4,225m — noticeably higher than Leh. We schedule Pangong after Nubra so your body steps up gradually. Nights are cold even in July (down to 0°C)." },
      { label: "Permits", note: "Inner Line Permit required (we arrange it). The lake is in a sensitive border zone; drone use is prohibited." },
      { label: "Facilities", note: "No ATMs, no fuel, minimal connectivity (BSNL/postpaid Jio at best in Spangmik). Camps run generators for limited evening hours; pack a power bank and a warm layer." },
    ],
    howToReach: "From Leh via Chang La: 160 km, 5–6 hours. From Nubra via the Shyok road: around 6 hours. Most of our circuits enter from Nubra and return to Leh via Chang La, so you never repeat a road.",
    bestTimeNote: "May to September for open roads and liquid, colour-shifting water. June–August is peak; September brings golden light and fewer camps.",
  },

  "tso-moriri": {
    tagline: "Pangong's introverted sibling — a Ramsar-protected lake at 4,522 metres where the Changthang keeps its nomads, its cranes, and its silence.",
    intro: [
      "Tso Moriri makes you work harder than Pangong — it's further, higher, and the road is rougher — and it rewards you with what Pangong has mostly lost: solitude. The lake sits at 4,522 metres inside the Changthang Wildlife Sanctuary, ringed by 6,000-metre peaks, and some evenings the only sounds are wind, water, and the bells of pashmina goats coming home to Korzok.",
      "Korzok village, on the northwest shore, is one of the highest permanently inhabited settlements on earth, and its small monastery has watched over the lake for centuries. Around it, Changpa nomads still move their herds between high pastures the way they have for generations — this is the heartland of authentic pashmina.",
      "Birders come a long way for this shoreline: it is one of the very few breeding grounds of the black-necked crane in India, and bar-headed geese nest here in summer.",
    ],
    highlights: [
      { title: "Korzok Village & Monastery", description: "A cluster of whitewashed homes and a centuries-old gompa at 4,560m — one of the highest year-round villages in the world, and your base for the lake." },
      { title: "Black-Necked Cranes", description: "Tso Moriri's wetlands are a designated Ramsar site and one of India's only breeding grounds for these rare, elegant high-altitude cranes." },
      { title: "Changpa Nomad Camps", description: "Yak-wool rebo tents dot the surrounding pastures in summer. With respect (and our local connections), you can visit and understand where true pashmina begins." },
      { title: "Tso Kar En Route", description: "The 'white lake' salt flats on the way in — a stark, wildlife-rich bonus stop where kiang (wild ass) herds graze against shimmering salt crusts." },
      { title: "Puga Valley", description: "A geothermal valley of steaming vents and hot springs on the eastern approach — proof the Changthang's stillness sits atop restless geology." },
    ],
    knowBeforeYouGo: [
      { label: "Altitude", note: "At 4,522m this is the highest overnight stop on any of our circuits. We only schedule it late in an itinerary, after Nubra and Pangong, and never on your first three days." },
      { label: "Permits", note: "Inner Line Permit required (arranged by us). The lake is a protected wetland — camping is restricted to designated areas away from the shoreline." },
      { label: "Facilities", note: "Korzok has basic homestays and eco-camps, no ATM, no fuel, and effectively no connectivity. This is the most remote night of your trip — and usually the most memorable." },
    ],
    howToReach: "220–240 km from Leh (7–8 hours) via Chumathang's hot springs along the Indus, or via Tso Kar off the Manali–Leh highway. Many of our routes link it directly from Hanle or Pangong through the Changthang.",
    bestTimeNote: "June to September only — the window when the road is reliable and Korzok's homestays operate. Even in August, pack for nights near freezing.",
  },

  hanle: {
    tagline: "India's first Dark Sky Reserve, a 17th-century monastery, and one of the world's highest observatories — under skies with almost nothing between you and the Milky Way.",
    intro: [
      "Hanle is what happens when altitude, dry air, and distance from everything combine perfectly. At roughly 4,500 metres on the Changthang plateau, this scatter of hamlets around a hilltop monastery has some of the darkest, clearest night skies on the planet — which is why the Indian Astronomical Observatory put one of the world's highest optical telescopes here, and why in 2022 the region became India's first notified Dark Sky Reserve.",
      "By day, Hanle is golden grassland, grazing kiang, and the whitewashed 17th-century Hanle Gompa rising out of the plain like a mirage. By night, the sky does things you may have never seen it do: the Milky Way casts shadows, satellites stitch across constellations, and on a new-moon night the star field goes all the way down to the horizon.",
      "We time our Hanle expeditions to the new moon and travel with stargazing gear. Villagers here run 'astro-homestays' with telescopes on their rooftops — tourism that funds dark-sky protection.",
    ],
    highlights: [
      { title: "The Night Sky", description: "The headline act. Within the Dark Sky Reserve, light is regulated for a 22-km radius — on a clear new-moon night you'll see the galactic core with your naked eye." },
      { title: "Indian Astronomical Observatory", description: "Perched on Digpa-ratsa Ri at ~4,500m, one of the highest optical telescope sites in the world. The summit road offers a staggering view over the Hanle plain." },
      { title: "Hanle Monastery", description: "A 17th-century gompa of the Drukpa lineage, built under King Sengge Namgyal — its hilltop position makes it the natural sunset point of the valley." },
      { title: "Astro-Homestays", description: "Local families trained as night-sky guides host you with rooftop telescopes — your stay directly funds the community that keeps these skies dark." },
      { title: "Umling La Push", description: "From Hanle, an optional day-run climbs to Umling La at ~5,798m — the highest motorable road in the world, built by the BRO. Bragging rights, guaranteed." },
    ],
    knowBeforeYouGo: [
      { label: "Permits", note: "Inner Line Permit required, and Hanle sits in a sensitive border zone — carry multiple permit copies. We handle the paperwork and the checkpoints." },
      { label: "Altitude", note: "You sleep at ~4,500m. Hanle only appears late in our itineraries, after full acclimatization. The Umling La excursion (5,798m) is strictly a short visit, never a stay." },
      { label: "Dark-Sky Etiquette", note: "After dusk, white light is restricted — use red-filter torches (we provide them). No drones, and headlights are dimmed inside the reserve villages." },
    ],
    howToReach: "About 250 km southeast of Leh (8–9 hours) via Chumathang and Nyoma along the Indus, or linked from Pangong through the Changthang. Fuel up fully in Karu; there are no pumps out here.",
    bestTimeNote: "May to September for access; plan around the new moon for the sky. Winter visits are possible for the hardy — the sky is even clearer, and the cold is serious.",
  },

  turtuk: {
    tagline: "India's northernmost village region — a Balti oasis of apricot orchards and stone lanes that opened to the world only in 2010.",
    intro: [
      "Keep driving past Hunder, down the Shyok gorge, and the landscape changes character: barley terraces, walnut shade, and streams channelled through stone lanes. This is Turtuk — culturally Baltistan, politically India since 1971, and open to travellers only since 2010. It remains one of the least-touristed inhabited corners of Ladakh.",
      "The village stacks itself in three tiers above the river, and its people — Balti-speaking, apricot-farming, endlessly hospitable — will likely invite you to try dried apricots and buckwheat pancakes before you've finished your first lane. The small Yabgo palace museum, kept by the descendant of Turtuk's old royal line, tells a frontier story no textbook does.",
      "A little further on lies Thang, the true last village, where an army viewpoint looks across the Line of Control. It is a sobering, moving place — and part of why we bring travellers here thoughtfully, with local homestay partners.",
    ],
    highlights: [
      { title: "The Three-Tier Village Walk", description: "Farol, Youl and Chutang — Turtuk's stone-laned tiers linked by footbridges over glacier streams, best explored slowly with a local guide and no agenda." },
      { title: "Apricot Orchards", description: "Turtuk's lower altitude (~2,900m) makes it Ladakh's orchard: apricots, walnuts, even buckwheat. July–August is harvest, and the dried apricots travel home well." },
      { title: "Yabgo Palace Museum", description: "The modest 16th-century palace of Turtuk's former royal family, opened as a museum by its living descendant — a personal, first-hand slice of Balti history." },
      { title: "Thang Village & LoC Viewpoint", description: "India's actual last village. From the army-managed viewpoint you look across the valley to villages on the other side of the Line of Control." },
      { title: "Balti Kitchen", description: "A cuisine you'll find nowhere else in India — buckwheat breads, apricot oil, kisir pancakes, and butter tea with a Baltistani accent." },
    ],
    knowBeforeYouGo: [
      { label: "Permits", note: "Inner Line Permit required, checked at Bogdang en route. Foreign nationals can visit Turtuk but not Thang viewpoint on some days — we confirm current rules before travel." },
      { label: "Culture", note: "Turtuk is a conservative Muslim Balti village. Dress modestly, ask before photographing people, and let homestay hosts guide the rhythm — that's the whole point of coming." },
      { label: "Altitude", note: "At ~2,900m Turtuk is the lowest overnight in Ladakh — a genuinely restful sleep after the high lakes, which is why we often place it mid-circuit." },
    ],
    howToReach: "About 90 minutes beyond Hunder along the Shyok river (roughly 205 km from Leh in total). The road is dramatic, occasionally rough, and entirely worth it.",
    bestTimeNote: "May to September. July and August add the apricot harvest; September is quieter with golden fields and warm days.",
  },

  "kargil-drass": {
    tagline: "The heroic middle of the Srinagar–Leh road — war memorials, the Suru Valley's hidden peaks, and one of the coldest inhabited towns on earth.",
    intro: [
      "Most travellers rush through Kargil at lunch. Slow down and the region unfolds: Drass, at around 3,280 metres, is among the coldest inhabited places in India, ringed by peaks whose names — Tiger Hill, Tololing — every Indian knows from 1999. The Kargil War Memorial at Drass, with those summits in view, is one of the most affecting stops on any Himalayan road.",
      "Kargil town itself (2,676m) is a green, riverine surprise — apricot orchards along the Suru, a bazaar that has fed travellers since Silk Route days, and a culture that bridges Ladakh and Baltistan. Push into the Suru Valley and you get the double reveal of Nun and Kun, both above 7,000 metres, from meadows that see almost no tourists.",
      "On the road east, the 9-metre Maitreya at Mulbekh — carved into living rock perhaps a millennium ago — signals your crossing back into Buddhist Ladakh.",
    ],
    highlights: [
      { title: "Kargil War Memorial, Drass", description: "The Army-maintained memorial beneath Tololing ridge honours the fallen of 1999. The evening retreat ceremony, when running, is deeply moving." },
      { title: "Suru Valley", description: "A green, glacier-fed valley running south towards Zanskar, with full-frontal views of Nun (7,135m) and Kun (7,077m) — Ladakh's highest massif — from Panikhar and Parkachik." },
      { title: "Mulbekh Chamba", description: "A 9-metre Maitreya Buddha carved into a roadside rock face, likely over a thousand years old — the great milestone between Muslim Kargil and Buddhist Ladakh." },
      { title: "Hunderman Village", description: "A 'museum village' above Kargil on the old Skardu road, abandoned homes preserved with belongings from before the border shifted — memory kept as heritage." },
      { title: "Lamayuru Moonland", description: "Just east of the district: the eroded lunar badlands and 1,000-year-old monastery of Lamayuru, the most dramatic single view on the Srinagar–Leh highway." },
    ],
    knowBeforeYouGo: [
      { label: "Permits", note: "No permit needed for Kargil, Drass, the Suru Valley or the main highway — this is the most freely travelled corridor in Ladakh." },
      { label: "Altitude", note: "Kargil (2,676m) is a natural acclimatization ladder on the Srinagar approach — one reason we rate that route for first-timers. Drass winters drop below -20°C; summers are mild." },
      { label: "Culture", note: "The region is largely Shia Muslim with Balti roots — a different Ladakh from Leh's Buddhist valleys, and part of what makes the full crossing so rich." },
    ],
    howToReach: "Kargil is the halfway halt on the 418-km Srinagar–Leh highway: about 200 km from Srinagar over Zoji La, and 215 km from Leh past Lamayuru. The road typically opens May/June to November.",
    bestTimeNote: "May to October. June–September for the Suru Valley meadows; July 26 (Kargil Vijay Diwas) sees commemorations at the Drass memorial.",
  },

  manali: {
    tagline: "The green gateway to the high Himalaya — deodar forests, the roaring Beas, and the tunnel that rewrote Himalayan road-tripping.",
    intro: [
      "Manali is where the subcontinent takes a breath before the big climb. At a gentle 2,050 metres among deodar cedars and apple orchards, it's the soft landing before Lahaul's moonscapes — and since the Atal Tunnel opened in 2020, the high country begins barely half an hour from Mall Road.",
      "Old Manali and Vashisht keep the town's slower soul: stone-and-timber kath-kuni houses, hot spring temples, cafés above the Beas where trip plans get drawn on napkins. The 16th-century Hadimba Temple sits in its own cathedral of cedars, and morning light there smells like resin and woodsmoke.",
      "For our Ladakh overland expeditions, Manali is day zero — briefing, equipment check, one good sleep at friendly altitude — before the most legendary road journey in India begins.",
    ],
    highlights: [
      { title: "Hadimba Temple", description: "A 1553 pagoda-style temple in a grove of giant deodars — Manali's most atmospheric corner, best visited at opening time before the crowds." },
      { title: "Atal Tunnel & Sissu", description: "The 9.02-km tunnel under the Rohtang range — among the world's longest highway tunnels at this altitude — delivers you from green Kullu to stark Lahaul in ten minutes. Sissu's waterfall is the classic first stop." },
      { title: "Old Manali & Vashisht", description: "Riverside lanes, hot-spring bathhouses, and the best cafés in the valley — the traveller's Manali, ten minutes and one bridge from the tourist one." },
      { title: "Solang Valley", description: "The adventure bowl northwest of town: paragliding, zip lines and ropeways in summer; skiing and snow play in winter." },
      { title: "Jogini Falls Walk", description: "An easy 2–3 hour round-trip walk from Vashisht through orchards to a waterfall shrine — the best acclimatization stroll before higher plans." },
    ],
    knowBeforeYouGo: [
      { label: "Altitude", note: "At 2,050m Manali needs no acclimatization — which is exactly why overland itineraries sleep here, then step up gradually via Jispa (3,200m) rather than flying straight to Leh." },
      { label: "Seasons", note: "Manali works year-round: green and lively April–June, monsoon-washed July–August (watch for landslides), golden in autumn, snowbound and romantic December–February." },
      { label: "Traffic", note: "May–June weekends get crowded. We schedule early-morning departures for Atal Tunnel and Solang to stay ahead of the day-trip wave." },
    ],
    howToReach: "540 km from Delhi (Volvo overnight or a full day's drive) via Chandigarh; the nearest airport is Bhuntar (Kullu), 50 km south. From Manali, Leh is 473 km north over the great highway.",
    bestTimeNote: "April to June and September to November for clear mountain days. For onward Ladakh overland trips, mid-June to mid-September is the reliable window.",
  },

  "bir-billing": {
    tagline: "The paragliding capital of India — a Tibetan monastery village where the Dhauladhar drops 1,000 metres of pure flight.",
    intro: [
      "Billing is a grassy launch at 2,400 metres on the Dhauladhar ridge. Bir is a village of monasteries and cafés 1,000 metres below. The space between them is why pilots from forty countries keep coming back: reliable thermals, an enormous landing zone, and ridge-to-valley views that make ten minutes in the air feel like a small lifetime.",
      "This is where India hosted its first Paragliding World Cup in 2015, and tandem flying here is genuinely world-class — you're strapped to professionals who fly this ridge every single day. No experience needed; just the willingness to run three steps off a mountain.",
      "On the ground, Bir's Tibetan colony slows you right down: prayer wheels at Chokling monastery, philosophy classes at Deer Park, and cinnamon rolls that have their own fan base. Add the Rajgundha valley trek and you have the perfect long weekend.",
    ],
    highlights: [
      { title: "Tandem Paragliding", description: "The classic 15–30 minute flight from Billing launch to Bir landing zone, with certified pilots and optional in-flight footage. October and spring offer the smoothest air." },
      { title: "Bir Tibetan Colony", description: "Chokling monastery's great stupa, the Deer Park Institute's courses, and a café culture (crepes to thukpa) that has made Bir a slow-travel legend." },
      { title: "Rajgundha Valley Trek", description: "An easy two-day walk (or 4x4 ride) behind the Billing ridge to a roadless meadow village — campfires, forest trails, and zero phone signal." },
      { title: "Baijnath Temple", description: "A beautifully preserved 13th-century stone Shiva temple 30 minutes away — one of Himachal's finest examples of Nagara architecture." },
      { title: "Sunset at Landing Site", description: "Every evening the landing meadow becomes the village common — gliders folding, chai flowing, and the Dhauladhar going purple behind the paddy fields." },
    ],
    knowBeforeYouGo: [
      { label: "Flying Conditions", note: "Flights are weather-dependent — mornings are calmest for tandems. We build a buffer day into flying itineraries so a windy afternoon never costs you the experience." },
      { label: "Fitness", note: "None needed for tandem flights beyond a few running steps at launch. Weight limits (roughly 20–95 kg) apply; tell us in advance and we'll confirm with the pilots." },
      { label: "Season Break", note: "Flying pauses during monsoon (July to mid-September). The village is still lovely then — but come for cafés and mist, not airtime." },
    ],
    howToReach: "About 500 km from Delhi (overnight Volvo to Bir/Baijnath) or 70 km from Dharamshala–Kangra airport. The Pathankot–Joginder Nagar narrow-gauge toy train also stops nearby at Ahju.",
    bestTimeNote: "October–November is world-cup season with the most reliable thermals; March–June is the second window. Skip July–August if flying is the goal.",
  },
};
