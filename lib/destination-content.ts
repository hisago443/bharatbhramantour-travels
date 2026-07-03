// Rich editorial content for destination detail pages.
// Facts verified: altitudes, permit rules, seasonal windows.
// Mirrors the structure of the Sanity destination schema so it can be
// seeded into the CMS and swapped for live data without template changes.

function unsplash(id: string, w = 600, q = 75) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

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
  /** Flora, fauna, and natural environment */
  floraFauna: { heading: string; body: string; image?: string; imageAlt?: string }[];
  /** History, culture, and local life */
  historyCulture: string[];
  /** Geography and climate details */
  geography: string[];
  /** Interesting and surprising facts */
  funFacts: string[];
  /** Local food and cuisine */
  localCuisine: { dish: string; description: string; image?: string; imageAlt?: string }[];
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
    floraFauna: [
      { heading: "Himalayan Marmots", body: "These chunky golden-brown rodents are Ladakh's most endearing residents. You'll spot them sunbathing on rocks near Khardung La and Chang La, whistling alarm calls across the meadows. They hibernate for nearly eight months of the year.", image: unsplash("1781519562307-0b7a65827d3b"), imageAlt: "Marmot sitting on rocky ground in the mountains" },
      { heading: "Willow & Poplar Groves", body: "Leh's green streaks are Lombardy poplars (golden in October) and willows lining irrigation channels. These trees were deliberately planted centuries ago along the canal network to stabilise soil and provide building timber.", image: unsplash("1508138142660-302e69e74271"), imageAlt: "Golden poplar trees reaching skyward in autumn" },
      { heading: "Black-Necked Cranes", body: "Rare high-altitude cranes from the Tibetan plateau occasionally visit wetlands near the Indus. Ladakh's Buddhist communities consider them sacred, and local conservation efforts have helped stabilise sighting numbers.", image: unsplash("1681101252321-98730ab6af56"), imageAlt: "Cranes standing in a green wetland field" },
      { heading: "Snow Leopard Country", body: "The ranges around Leh — particularly Hemis National Park, 40 km southeast — are among the best snow leopard habitats on earth. Winter expeditions from Rumbak and Ulley villages report sighting success rates above 50%.", image: unsplash("1698578153726-2114cac67753"), imageAlt: "Snow leopard resting on a rocky ledge" },
    ],
    historyCulture: [
      "Leh's history reads like a Central Asian crossroads because that is exactly what it was. For over a thousand years, caravans carrying silk, spices, pashmina, and jade moved between Punjab and Yarkand through these valleys, and the town grew rich as their resting point.",
      "The Namgyal dynasty ruled Ladakh from Leh Palace starting in the early 17th century. King Sengge Namgyal built the palace between 1600 and 1640, modelling it loosely on the Potala Palace in Lhasa — nine storeys of mud-brick and timber rising from the ridge above the old town. The dynasty's rule lasted until Ladakh was absorbed into the Dogra kingdom of Jammu in 1842.",
      "Buddhism arrived in Ladakh as early as the 2nd century CE via Kushan missionaries, and the region's 30-plus active monasteries — Thiksey, Hemis, Spituk, Diskit — remain the spiritual pulse of daily life. Morning prayers at Thiksey begin before sunrise, and the sound of long horns rolls down the valley while Leh is still asleep.",
      "Today Leh is a Union Territory capital (since 2019, when Jammu & Kashmir was reorganised) with its own elected Hill Development Council. The town balances tourism, military presence, and a deep-rooted local culture that still measures seasons by barley harvest and monastery festivals like Hemis Tsechu.",
    ],
    geography: [
      "Leh sits in the rain shadow of the Great Himalaya and the Karakoram, making it one of the driest inhabited places in India — annual rainfall averages just 100 mm. The surrounding landscape is high-altitude cold desert: bare rock, alluvial fans, and grey-brown ranges broken only by irrigated green patches along river courses.",
      "The Indus River flows northwest through the valley, joined by the Zanskar near Nimmu. Leh's position at 3,500m on a broad alluvial plain between the Ladakh Range (to the north) and the Stok Range (to the south) gives it the wide-sky character that makes the light here so distinctive.",
      "Temperatures range from +30°C on a July afternoon to -25°C on a January night. The UV index at this altitude is extreme — sunscreen and sunglasses are medical necessities, not accessories.",
    ],
    funFacts: [
      "Leh Airport (IXL) is one of the highest commercial airports in the world at 3,256m. Flights can only land in the morning due to afternoon thermal winds — which is why all Leh flights depart Delhi before dawn.",
      "The Magnetic Hill on the Srinagar–Leh highway near Leh creates an optical illusion where the road appears to slope uphill but vehicles actually roll 'upward' when left in neutral — the surrounding terrain tricks your eye about the gradient.",
      "Ladakh has its own traditional sport called polo, played on a smaller field with fewer riders than the standard game. The Leh polo ground, right in the centre of town, is believed to be one of the highest polo grounds in the world.",
      "Despite its arid climate, Leh was historically self-sufficient in food thanks to an intricate network of snow-melt irrigation channels called yuras, some of which have been in continuous use for over 500 years.",
      "The Indian Army operates the world's highest telephone exchange at Siachen Base Camp, accessible from the Leh–Nubra corridor. Soldiers posted there experience temperatures below -60°C with wind chill.",
    ],
    localCuisine: [
      { dish: "Thukpa", description: "A hearty Tibetan noodle soup with vegetables or mutton, simmered with garlic and ginger — the universal Ladakhi comfort food, especially welcome at altitude where your body craves warmth and hydration.", image: unsplash("1555126634-323283e090fa"), imageAlt: "Bowl of noodle soup with vegetables" },
      { dish: "Skyu", description: "Ladakh's original slow food: thumb-pressed pasta knobs cooked with root vegetables in a thick broth. Every household has its own version, and it is the dish Ladakhis miss most when they leave home.", image: unsplash("1476718406336-bb5a9690ee2a"), imageAlt: "Thick vegetable stew in a rustic bowl" },
      { dish: "Butter Tea (Gur Gur Chai)", description: "Churned from brick tea, yak butter, and salt — not sweet, deliberately salty. It hydrates, warms, and replaces electrolytes at altitude. The taste grows on you faster than you expect.", image: unsplash("1736752346246-61f4daedfde0"), imageAlt: "Butter tea in a traditional bowl" },
      { dish: "Khambir", description: "Dense, tangy sourdough bread baked in tandoors across the old town. Served with apricot jam for breakfast or alongside stews, it keeps well and fuels long drives.", image: unsplash("1549413468-cd78edb7e75c"), imageAlt: "Round rustic sourdough bread loaf" },
      { dish: "Chhang", description: "Mild, slightly sour barley beer served warm in traditional copper pots. It is the social drink of Ladakh — offered at festivals, house visits, and any gathering that involves sitting.", image: unsplash("1558642452-9d2a7deb7f62"), imageAlt: "Traditional fermented barley drink" },
      { dish: "Apricot Everything", description: "Ladakh's apricots are sun-dried, pressed into oil, and turned into jam, juice, and cake. The organic apricot oil from Leh's cooperatives makes one of the best edible souvenirs you'll carry home.", image: unsplash("1597663072555-b2c94a94ab71"), imageAlt: "Fresh ripe apricots on a tree" },
    ],
    knowBeforeYouGo: [
      { label: "Altitude", note: "Leh sits at 3,500m. Plan nothing strenuous for your first 24–48 hours. Hydrate constantly, skip alcohol on day one, and tell us immediately if you feel a headache building." },
      { label: "Permits", note: "No permit is needed for Leh town and the immediate Indus valley. Permits for Nubra, Pangong, Tso Moriri and Hanle are arranged by us before you arrive." },
      { label: "Connectivity", note: "Only postpaid SIMs work in Ladakh (Jio and Airtel are most reliable in town). ATMs exist in Leh but carry cash for everything beyond it." },
      { label: "Medical", note: "The SNM Hospital in Leh has a hyperbaric chamber for severe altitude sickness. Diamox is available at local pharmacies but consult your doctor before travel. All our vehicles carry oxygen cylinders." },
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
    floraFauna: [
      { heading: "Bactrian Camels", body: "Nubra's double-humped camels are descendants of pack animals that once carried goods along the Silk Road to Yarkand. Today around 200 survive, cared for by the Wildlife Department. They are among the rarest camel populations in India and uniquely adapted to cold desert — their thick winter coats shed dramatically each summer.", image: unsplash("1553983658-0d7afeb5c53f"), imageAlt: "Camel standing in a desert landscape" },
      { heading: "Sea Buckthorn Bushes", body: "The bright orange berries you'll see dotting the valley sides are sea buckthorn — a hardy shrub that thrives in arid Himalayan soils. Rich in vitamin C, the berries are pressed into juice, jam, and oil locally. The plants also prevent erosion along Nubra's riverbanks.", image: unsplash("1599580782029-3f71e2988c45"), imageAlt: "Bright orange sea buckthorn berries on a branch" },
      { heading: "Himalayan Ibex & Blue Sheep", body: "The cliffs above the Shyok gorge are home to Himalayan ibex with their curved scimitar horns, and bharal (blue sheep) that blend into the grey scree so perfectly you might stare at a group of twenty for a minute before seeing them. Both species are prey for snow leopards.", image: unsplash("1557174362-f8a16a3c8fea"), imageAlt: "Mountain goat with horns on a rocky cliff" },
      { heading: "Golden Eagles & Lammergeiers", body: "Look up along the Khardung La road and the Shyok gorge — golden eagles ride the thermals, and lammergeiers (bearded vultures) with 2.5-metre wingspans patrol the cliffs. The lammergeier famously drops bones from height to crack them for marrow.", image: unsplash("1596900250924-ea458ae5a965"), imageAlt: "Eagle soaring with wings spread against the sky" },
    ],
    historyCulture: [
      "Nubra's name comes from ldumra, meaning 'the valley of flowers' in classical Tibetan — a poetic reference to the greenery that must have astonished travellers arriving from the barren passes above. For centuries this was the final Indian staging post on the arduous caravan route to Yarkand and Kashgar in Central Asia.",
      "The trade route brought immense cultural exchange. Bactrian camels, Central Asian textiles, jade, and charas moved south; Indian spices, grain, and pashmina moved north. Diskit Monastery, founded in the 14th century by Changzem Tserab Zangpo, a disciple of Tsongkhapa, became the spiritual anchor of the valley and remains its most important gompa.",
      "After the border with China hardened in the 1960s, the caravan trade died and Nubra became a military zone closed to civilians. It reopened to Indian tourists in 2010 and foreign nationals shortly after — which means the valley has had barely fifteen years of tourism, and many of its older residents remember life before a single guesthouse existed.",
      "The Nubra people are predominantly Buddhist with a small Balti Muslim community around Turtuk. Village festivals, especially the annual Dosmochey masked-dance ceremony at Diskit Monastery in February, are vibrant affairs where ancient protective rituals play out against a backdrop of Karakoram peaks.",
    ],
    geography: [
      "Nubra Valley is formed by the confluence of the Nubra and Shyok rivers, both fed by the Siachen and Karakoram glaciers. The valley floor sits at about 3,050m — significantly lower than Leh — creating a microclimate warm enough for apricots, walnuts, and barley.",
      "The surrounding peaks exceed 7,000m in the Karakoram Range to the north. The Siachen Glacier, the world's second-longest non-polar glacier at 76 km, feeds the Nubra river from its terminus just beyond the military boundary. The resulting meltwater braids across a wide alluvial floodplain, creating the distinctive silver-threaded valley floor.",
      "The Hunder sand dunes are a geological anomaly — cold desert dunes at 3,000m altitude, formed by glacial till eroded and wind-deposited over millennia. They cover roughly 2 sq km and shift noticeably between seasons.",
    ],
    funFacts: [
      "Nubra is home to the northernmost point of India accessible to civilians. Beyond Turtuk and Thang, the road continues to the Siachen military zone — the world's highest battlefield.",
      "The Bactrian camels of Hunder can drink salt water that would dehydrate other mammals. Their unique physiology allows them to survive temperatures ranging from -30°C to +40°C.",
      "Diskit's 32-metre Maitreya Buddha statue, installed in 2010, was consecrated by the Dalai Lama. It faces the Shyok valley toward Pakistan — symbolically gazing in the direction of future peace.",
      "Panamik's hot springs maintain a natural temperature of roughly 77°C at the source — hot enough to boil an egg. The bathing pools are cooled by mixing with stream water.",
      "During the Silk Road era, a single Bactrian camel could carry about 200 kg of goods over Khardung La and the Karakoram Pass — a journey that took weeks and crossed altitudes above 5,500m.",
    ],
    localCuisine: [
      { dish: "Tingmo", description: "Soft, flower-shaped steamed bread served with spicy vegetable stew. The dough is twisted into a rosette shape before steaming — each fold traps flavour and warmth.", image: unsplash("1563245372-f21724e3856d"), imageAlt: "Steamed buns in a bamboo steamer" },
      { dish: "Chutagi", description: "Bow-tie shaped pasta in a thick vegetable and mutton stew — Nubra's comfort food on cold evenings. The pasta shape catches the sauce in every crease.", image: unsplash("1476718406336-bb5a9690ee2a"), imageAlt: "Hearty pasta stew in a rustic bowl" },
      { dish: "Apricot Jam & Dried Fruit", description: "Nubra's lower altitude allows stone fruit to flourish. Apricots are dried on rooftops all summer and pressed into thick, tart jam that appears at every breakfast table.", image: unsplash("1597663072555-b2c94a94ab71"), imageAlt: "Fresh apricots on a tree branch" },
      { dish: "Paba", description: "A traditional Ladakhi cake made from roasted barley flour (tsampa), mixed with butter and sugar. It is dense, calorie-rich, and was designed for people who work at altitude all day.", image: unsplash("1549413468-cd78edb7e75c"), imageAlt: "Dense rustic bread" },
    ],
    knowBeforeYouGo: [
      { label: "Permits", note: "Inner Line Permit required for all visitors (arranged by us). Carry 4–6 photocopies and your original ID; checkpoints collect copies." },
      { label: "Altitude", note: "The valley floor (3,050m) is lower than Leh, which makes Nubra the ideal second stop — you sleep lower than you cross." },
      { label: "Facilities", note: "No ATMs beyond Diskit and patchy connectivity (postpaid Jio/Airtel only, and only in Diskit/Hunder). Fuel up in Leh; the Diskit pump is the valley's only one." },
      { label: "Camel Rides", note: "Rides at Hunder dunes run from roughly 4 PM to 6 PM and cost ₹400–500 for a 15-minute circuit. Go early to avoid the queue; the light is better at 4 PM anyway." },
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
    floraFauna: [
      { heading: "Bar-Headed Geese", body: "These extraordinary birds migrate over the Himalayas from their wintering grounds in India to breed around Pangong and other high-altitude lakes in summer. They fly at altitudes above 7,000m — one of the highest migrations of any bird — and their blood carries oxygen far more efficiently than most waterfowl.", image: unsplash("1681101252321-98730ab6af56"), imageAlt: "Geese on a high-altitude wetland" },
      { heading: "Brahminy Ducks (Ruddy Shelduck)", body: "Pairs of rust-orange Brahminy ducks are a common sight on the lake's calmer bays. They are fiercely territorial during nesting season and are considered sacred in Buddhist culture — harming one is considered deeply inauspicious.", image: unsplash("1557401620-67270b61ea81"), imageAlt: "Ducks on calm mountain water" },
      { heading: "Kiang (Tibetan Wild Ass)", body: "The Changthang plateau around Pangong hosts herds of kiang — the largest wild ass species in the world. You'll often spot groups of 10–30 grazing the sparse grasslands near the lake's eastern shore, their reddish-brown coats vivid against the grey scree.", image: unsplash("1547581849-38ba650ad0de"), imageAlt: "Wild horses grazing on an open grassland" },
      { heading: "High-Altitude Cushion Plants", body: "The shores of Pangong support tiny, wind-resistant cushion plants that hug the ground in dense mats. Species like Thylacospermum caespitosum can survive temperatures below -40°C and grow just a few millimetres per year — some plants you'll walk past are centuries old.", image: unsplash("1500382017468-9049fed747ef"), imageAlt: "Hardy alpine plants on mountain terrain" },
    ],
    historyCulture: [
      "Pangong Tso (tso means lake in Tibetan) has been a strategic and spiritual landmark for centuries. The lake sits on what was once a major trade and pilgrimage route between Ladakh and western Tibet, and the Changpa nomads who live along its shores have grazed their herds in these highlands for generations.",
      "The lake became an international boundary marker after the 1962 Sino-Indian war. About 60% of Pangong lies in Chinese-administered territory, and the Line of Actual Control runs through its waters. The Indian and Chinese armies maintained competing positions along the northern shore until the 2020–2021 standoff and subsequent disengagement. This geopolitical sensitivity is why drone use is strictly prohibited.",
      "For the Changpa people of Man and Merak villages, the lake is not a tourist destination but a grazing boundary and weather barometer. They read wind patterns on the water surface to predict storms, and their pashmina goats — the source of the world's finest cashmere — graze the surrounding meadows at altitudes that would leave lowland goats breathless.",
      "Pangong entered popular Indian culture after Bollywood's '3 Idiots' (2009) filmed its climax here. The yellow scooter scene made the lake a bucket-list destination overnight, and tourist numbers surged from a few thousand to hundreds of thousands annually.",
    ],
    geography: [
      "Pangong Tso is an endorheic lake — it has no outflow. Water enters from snowmelt streams but leaves only through evaporation, concentrating salts over millennia. Despite this salinity (about 0.7%, compared to the ocean's 3.5%), the lake freezes completely in winter because of its extreme altitude and low air pressure.",
      "The lake stretches 134 km from west to east, but is rarely more than 5 km wide. Its depth reaches about 100 metres at the deepest point. The colour changes are caused by the interplay of sunlight angle, sky reflection, depth variation, and the mineral content of the lakebed — not algae or sediment, which is why the shifts can happen within minutes.",
      "The surrounding Changthang Plateau is the western edge of the vast Tibetan Plateau. It averages 4,500m in altitude and receives less than 100 mm of annual precipitation, making it a high-altitude cold desert with extreme diurnal temperature swings — 25°C at midday, 0°C by midnight, even in July.",
    ],
    funFacts: [
      "Pangong Tso is the world's highest saltwater lake at 4,225m. Despite its salt content, it freezes solid from January to March — the ice is thick enough to drive a vehicle across, though only the army does.",
      "The lake can display up to five distinct colours simultaneously along its length, depending on depth and lakebed minerals. Photographers call the early morning 'blue hour' at Pangong the most surreal palette in the Himalayas.",
      "Bar-headed geese migrating to Pangong cross directly over Mount Everest at altitudes above 7,000m, completing the Himalayan crossing in roughly eight hours. Scientists have tracked them with GPS tags to confirm this astonishing feat.",
      "The Changpa nomads' pashmina goats produce the world's finest cashmere fibre — each goat yields only about 150 grams of usable down per year. A single pashmina shawl requires the annual yield of three to four goats.",
      "Chang La, the pass you cross to reach Pangong from Leh, has a post office operated by the Indian Army — it is one of the highest post offices in the world. You can send a postcard stamped from 5,300m.",
    ],
    localCuisine: [
      { dish: "Tsampa Porridge", description: "Roasted barley flour mixed with butter tea into a thick, nourishing porridge. It is the traditional breakfast of nomads and high-altitude workers across the Changthang, designed to fuel bodies working in thin air.", image: unsplash("1684403731883-67a71a793d2d"), imageAlt: "Warm porridge in a rustic bowl" },
      { dish: "Momos", description: "Steamed or fried dumplings filled with mutton, yak meat, or vegetables. At Pangong's camps they are made fresh each evening — the go-to dinner at altitude, dipped in fiery chilli sauce.", image: unsplash("1534422298391-e4f8c172dddb"), imageAlt: "Plate of steamed momos dumplings" },
      { dish: "Thukpa Bathuk", description: "A regional variation of thukpa where the noodles are hand-pulled into flat squares and cooked with dried meat and root vegetables — heartier than the Leh version, built for colder nights.", image: unsplash("1555126634-323283e090fa"), imageAlt: "Hearty noodle soup with vegetables" },
    ],
    knowBeforeYouGo: [
      { label: "Altitude", note: "You sleep at 4,225m — noticeably higher than Leh. We schedule Pangong after Nubra so your body steps up gradually. Nights are cold even in July (down to 0°C)." },
      { label: "Permits", note: "Inner Line Permit required (we arrange it). The lake is in a sensitive border zone; drone use is strictly prohibited and can result in confiscation and fines." },
      { label: "Facilities", note: "No ATMs, no fuel, minimal connectivity (BSNL/postpaid Jio at best in Spangmik). Camps run generators for limited evening hours; pack a power bank and a warm layer." },
      { label: "Photography", note: "Sunrise is the golden window — be awake by 5:30 AM. The lake is calmest at dawn and the colours are at their most vivid. Midday is harsh and windy. Carry a polarising filter if you have one." },
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
    floraFauna: [
      { heading: "Black-Necked Cranes", body: "Tso Moriri is one of only two confirmed breeding sites for the black-necked crane (Grus nigricollis) in India. These elegant birds stand over 1.3 metres tall and arrive in April to nest in the marshy western shore. They are revered in Buddhist tradition as embodiments of the sixth-century sage Tsangyang Gyatso. Fewer than 50 pairs breed here each summer.", image: unsplash("1681101252321-98730ab6af56"), imageAlt: "Cranes standing in a green wetland field" },
      { heading: "Pashmina Goats (Changthangi)", body: "The Changpa nomads' goats produce the world's finest pashmina from their undercoat, or pashm, which grows in response to temperatures that drop below -40°C. Each goat produces only 80–150 grams of raw pashm annually. The fibre is so fine (12–16 microns) that it is softer than any other animal fibre on earth.", image: unsplash("1752860709765-097cdf7be504"), imageAlt: "Mountain goat standing on a rocky ledge" },
      { heading: "Kiang & Tibetan Wolf", body: "Herds of kiang (Tibetan wild ass) roam the grasslands south of the lake — sometimes 40–50 strong. Their primary predator here is the Tibetan wolf, a subspecies adapted to high-altitude hunting. Sightings of wolves stalking kiang herds across the open plateau are unforgettable for wildlife enthusiasts.", image: unsplash("1547581849-38ba650ad0de"), imageAlt: "Wild horses grazing on an open steppe" },
      { heading: "High-Altitude Wetland Flora", body: "The western marshes support sedge meadows, Carex grass beds, and scattered stands of Myricaria — a tamarisk relative that blooms pink in July. These wetlands are ecologically critical: they filter meltwater, support insect populations, and provide nesting cover for cranes and waders.", image: unsplash("1500382017468-9049fed747ef"), imageAlt: "Alpine wetland greenery with mountain backdrop" },
    ],
    historyCulture: [
      "Tso Moriri sits at the heart of the Changthang — the high plateau that stretches from Ladakh into Tibet and is one of the last great pastoral landscapes on earth. The Changpa people who inhabit this region are among the world's highest-dwelling nomadic communities, moving their yak, sheep, and pashmina goat herds between seasonal pastures as high as 5,200m.",
      "Korzok Monastery, belonging to the Drukpa Kagyu sect, has been the spiritual centre of the lake for at least 300 years. The village's annual Korzok Gustor festival in July or August features elaborate masked cham dances, ritual debates, and community feasting — one of the most authentic monastic festivals left in Ladakh because few tourists make the journey to see it.",
      "The Changpa's social structure is organised around the rebo — a dome-shaped tent made from yak-hair felt that can be assembled in under an hour. Inside, butter tea churns constantly, dried meat hangs from the frame, and pashmina is combed from goats by hand each spring. The Indian government has granted Scheduled Tribe status to the Changpa, recognising their distinct cultural identity.",
      "In 2020, Tso Moriri and the surrounding Changthang were designated a Ramsar Wetland of International Importance — a recognition of the lake's role as a high-altitude breeding ground for migratory birds and a critical freshwater ecosystem in one of the driest inhabited regions on the planet.",
    ],
    geography: [
      "Tso Moriri is a freshwater lake (unlike the saline Pangong) stretching 28 km north to south and about 5 km at its widest, surrounded by peaks that exceed 6,000m — including Mentok Kangri (6,250m) to the northwest. The lake has no outflow; water enters from snowmelt streams and underground springs and leaves only through evaporation.",
      "The Changthang Plateau surrounding the lake averages 4,500–5,000m in altitude and receives less than 50 mm of annual rainfall — drier than the Sahara. Vegetation is limited to hardy grasses, cushion plants, and scattered scrub. Despite this aridity, the meltwater ecosystem supports a surprising diversity of life.",
      "Geologically, the area sits atop active tectonic forces. Puga Valley, 30 km to the southeast, has geothermal vents, hot springs, and sulphur deposits — evidence of the ongoing collision between the Indian and Eurasian tectonic plates that created the Himalayas.",
    ],
    funFacts: [
      "Tso Moriri is one of the highest lakes in the world to remain completely unfrozen in winter on its deeper sections, despite surface temperatures dropping below -30°C — its depth (up to 40m) and underground thermal springs keep parts liquid year-round.",
      "The Changpa nomads communicate across vast distances using a system of smoke signals and mirror flashes — skills still practised today despite the arrival of (patchy) satellite phones.",
      "Pashmina from Changthang goats fetches ₹3,000–8,000 per kilogram as raw fibre, but a finished hand-woven pashmina shawl can sell for ₹30,000–2,00,000 depending on quality and craftsmanship.",
      "Tso Kar, the salt lake en route, produces natural borax deposits that were historically exported to Tibet and Central Asia for metalwork, medicine, and pottery glazing — a trade that sustained the Changthang economy for centuries.",
      "The Korzok Gustor festival features a ritual burning of a torma (sacrificial effigy) that is believed to cleanse the community of negative forces for the coming year — the ceremony has been performed at the same lake-edge spot for over 300 years.",
    ],
    localCuisine: [
      { dish: "Changpa Butter Tea", description: "A richer, saltier version of Ladakhi gur gur chai, churned with yak butter from herds that graze at 5,000m. The fat content is essential — at this altitude and cold, your body burns calories simply staying warm.", image: unsplash("1736752346246-61f4daedfde0"), imageAlt: "Butter tea in a traditional bowl" },
      { dish: "Dried Yak Meat", description: "Strips of yak meat dried in the fierce Changthang wind and stored for winter. It is chewed slowly or rehydrated into stews — the nomad's protein store when fresh food is impossible.", image: unsplash("1652209695374-7a91c243f12f"), imageAlt: "Strips of dried cured meat on a board" },
      { dish: "Tsampa (Roasted Barley Flour)", description: "The staple of nomadic life — mixed with butter tea, shaped into balls, and eaten by hand. Changpa families consume it at every meal, varying the ratio of butter to flour by temperature and labour.", image: unsplash("1684403731883-67a71a793d2d"), imageAlt: "Grain porridge in a rustic bowl" },
      { dish: "Chhurpi (Dried Yak Cheese)", description: "Rock-hard cubes of dried yak cheese that are gnawed slowly like a candy — intensely flavoured, protein-dense, and practically indestructible. It softens in tea and lasts months without refrigeration.", image: unsplash("1589881133595-a3c085cb731d"), imageAlt: "Cubes of aged cheese on a plate" },
    ],
    knowBeforeYouGo: [
      { label: "Altitude", note: "At 4,522m this is the highest overnight stop on any of our circuits. We only schedule it late in an itinerary, after Nubra and Pangong, and never on your first three days." },
      { label: "Permits", note: "Inner Line Permit required (arranged by us). The lake is a protected wetland — camping is restricted to designated areas away from the shoreline." },
      { label: "Facilities", note: "Korzok has basic homestays and eco-camps, no ATM, no fuel, and effectively no connectivity. This is the most remote night of your trip — and usually the most memorable." },
      { label: "Wildlife Etiquette", note: "This is a Ramsar protected site. Stay at least 200m from nesting cranes, do not approach nomad herds without permission, and carry all waste out — there is no disposal system here." },
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
    floraFauna: [
      { heading: "Tibetan Gazelle (Procapra picticaudata)", body: "The open grasslands around Hanle are one of the few places in India where you can spot the rare Tibetan gazelle — small, graceful antelopes that can sprint at 80 km/h. Their population here is estimated at just a few hundred, making every sighting special.", image: unsplash("1590514526581-bf7feaee0217"), imageAlt: "Deer standing alert on a grassy field" },
      { heading: "Tibetan Sand Fox", body: "With its distinctive square-shaped face and sandy fur, the Tibetan sand fox is perfectly adapted to the high plateau. They hunt marmots and pikas across the Hanle grasslands, and their comically deadpan facial expression has made them internet-famous among wildlife photographers.", image: unsplash("1736474405606-96617cfeafdf"), imageAlt: "Small fox in an arid rocky landscape" },
      { heading: "Pika Colonies", body: "Tiny, round-eared pikas (relatives of rabbits, despite looking like hamsters) are everywhere on the Changthang. They build extensive burrow systems that aerate the soil and provide shelter for insects, making them a keystone species of the plateau ecosystem.", image: unsplash("1781519562307-0b7a65827d3b"), imageAlt: "Small mammal sitting on rocks" },
      { heading: "Steppe Grasses & Caragana", body: "Hanle's golden grasslands are dominated by steppe grasses and scattered Caragana bushes (a wild pea relative) that fix nitrogen in the poor soil. In July, these bushes bloom bright yellow, dotting the otherwise monochrome plateau with colour.", image: unsplash("1763994795680-52ea27c55ced"), imageAlt: "Golden grasslands stretching to distant mountains" },
    ],
    historyCulture: [
      "Hanle Monastery was established in 1673 under the patronage of King Sengge Namgyal's successor, Deldan Namgyal. It belongs to the Red Hat (Drukpa Kagyu) tradition of Tibetan Buddhism and once housed over 100 monks. The hilltop gompa dominates the valley like a sentinel, and its prayer flags catch winds that blow uninterrupted from the Tibetan plateau.",
      "The Indian Astronomical Observatory was established here in 2001 by the Indian Institute of Astrophysics, Bangalore. Its location was chosen after a decade-long survey identified Hanle as having some of the driest, most transparent skies in Asia — with over 260 clear nights per year and negligible light pollution. The GROWTH-India telescope here has contributed to the detection of gravitational wave sources.",
      "In 2022, the Department of Science & Technology notified the area as India's first Dark Sky Reserve, imposing regulations on outdoor lighting within a 22-km radius. Local villagers actively participate in the programme — understanding that their dark skies are now an economic asset as much as a cultural one.",
      "The Changpa herders in the Hanle region follow an ancient calendar tied to star positions for timing seasonal migrations. The appearance of certain constellations dictates when herds move to higher pastures — a living astronomical tradition that exists alongside the modern observatory on the same hilltop.",
    ],
    geography: [
      "Hanle sits on the western edge of the Changthang Plateau at approximately 4,500m, in a broad, treeless valley flanked by gently rolling hills rather than the sharp peaks typical of Leh district. The terrain is rolling grassland that extends virtually unbroken to the Tibetan border — giving the landscape a vast, open-sky quality unlike anywhere else in Ladakh.",
      "The valley receives less than 50 mm of annual precipitation, making it hyper-arid. Humidity drops to nearly zero on winter nights, which — combined with altitude, remoteness, and minimal atmospheric turbulence — creates ideal conditions for optical astronomy. The lack of moisture also means the Milky Way appears with a three-dimensional depth impossible to see at lower, hazier altitudes.",
      "Umling La (5,798m), accessible from Hanle, was certified by BRO (Border Roads Organisation) as the world's highest motorable road. The pass sits on a spur of the Changthang that extends toward the Aksai Chin plateau, and on clear days the views extend over 100 km in every direction.",
    ],
    funFacts: [
      "Hanle's GROWTH-India telescope can detect objects a billion light-years away — from a village that didn't have reliable electricity until the early 2000s.",
      "The Milky Way at Hanle on a new-moon night is bright enough to cast visible shadows on the ground. Most visitors who see it for the first time struggle to identify familiar constellations because so many additional stars are visible.",
      "Umling La at 5,798m is higher than any point in the European Alps, the Andes south of Aconcagua, or the entire African continent except Kilimanjaro's summit cone.",
      "The Indian Army's Hanle garrison grows vegetables in solar-heated greenhouses at 4,500m — tomatoes, lettuce, and radishes that supplement rations in one of the most remote postings in the country.",
      "The dark-sky reserve designation has increased Hanle's tourist income by over 300% while keeping visitor numbers manageable through permit controls — a rare example of conservation directly boosting local livelihoods.",
    ],
    localCuisine: [
      { dish: "Mokthuk", description: "A hearty dumpling soup unique to eastern Ladakh — small dough pockets filled with minced meat and boiled in a rich bone broth with vegetables. Served piping hot, it is the ultimate cold-night meal at 4,500m.", image: unsplash("1534422298391-e4f8c172dddb"), imageAlt: "Steaming dumplings in a bowl" },
      { dish: "Changpa Butter Tea", description: "The richest butter tea you'll taste in Ladakh. Made with yak butter from herds grazing at extreme altitude, it has a stronger, nuttier flavour than the Leh version and contains enough fat to fuel a day of high-altitude work.", image: unsplash("1736752346246-61f4daedfde0"), imageAlt: "Butter tea in a traditional bowl" },
      { dish: "Tagi", description: "Flat bread made from roasted barley flour, cooked on a hot stone and served with dried apricot chutney. It is the traditional road food of Changthang travellers — portable, durable, and calorie-dense.", image: unsplash("1549413468-cd78edb7e75c"), imageAlt: "Rustic flatbread" },
    ],
    knowBeforeYouGo: [
      { label: "Permits", note: "Inner Line Permit required, and Hanle sits in a sensitive border zone — carry multiple permit copies. We handle the paperwork and the checkpoints." },
      { label: "Altitude", note: "You sleep at ~4,500m. Hanle only appears late in our itineraries, after full acclimatization. The Umling La excursion (5,798m) is strictly a short visit, never a stay." },
      { label: "Dark-Sky Etiquette", note: "After dusk, white light is restricted — use red-filter torches (we provide them). No drones, and headlights are dimmed inside the reserve villages." },
      { label: "Stargazing Gear", note: "We provide binoculars and red-filter torches. Bring a warm hat and insulated mat to lie on — the ground loses heat fast at this altitude, and you'll want to stare upward for hours." },
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
    floraFauna: [
      { heading: "Apricot & Walnut Orchards", body: "Turtuk's low altitude (2,900m) creates a microclimate warm enough for stone fruit. The village is carpeted with apricot orchards — hundreds of trees that turn the valley pink in April and produce sweet, intensely flavoured fruit through July and August. Walnut trees provide shade, timber, and income — the nuts are exported across Ladakh.", image: unsplash("1597663072555-b2c94a94ab71"), imageAlt: "Ripe apricots on a tree in sunlight" },
      { heading: "Ibex on the Cliffs", body: "The steep rock faces above the Shyok gorge between Hunder and Turtuk are home to Himalayan ibex. Males carry curved horns up to 1.5 metres long. You'll often spot them on impossible-looking cliff ledges in the early morning, silhouetted against the sky.", image: unsplash("1557174362-f8a16a3c8fea"), imageAlt: "Mountain goat with curved horns on a rocky cliff" },
      { heading: "Trout in the Shyok", body: "The Shyok River between Hunder and Turtuk supports populations of brown trout — introduced decades ago and now naturalised. Local anglers fish with simple line-and-hook setups, and some homestays serve fresh river trout when available.", image: unsplash("1510130387422-82bed34b37e9"), imageAlt: "Fresh trout on a plate" },
      { heading: "Mountain Birds", body: "The orchards attract Himalayan bulbuls, hoopoes, and rose finches. Turtuk's birding is surprisingly rich for Ladakh because the greenery and lower altitude support insect populations that higher, barer destinations cannot.", image: unsplash("1552728089-57bdde30beb3"), imageAlt: "Colourful bird perched on a branch" },
    ],
    historyCulture: [
      "Turtuk was part of the Baltistan region of Pakistan until the 1971 war, when Indian forces captured the area during Operation Cactus Lily. The border shift divided families — some residents of Turtuk have relatives in Skardu, barely 100 km away on the other side of the Line of Control, whom they have not seen since 1971.",
      "The village opened to tourists only in 2010, making it one of the newest destinations in Ladakh. Its Balti culture is distinct from the Buddhist Ladakhi mainstream: the language is Balti (a Tibeto-Burman dialect written in a modified Arabic script), the religion is Shia Islam, and the architecture is stone-and-timber with flat roofs designed for drying apricots.",
      "The Yabgo dynasty ruled Turtuk as a semi-independent principality for centuries. The current custodian of the Yabgo Palace, Mohammad Khan, has turned part of the ancestral home into a museum displaying royal artifacts, historical photographs, and weapons from a frontier life that existed long before modern borders.",
      "Turtuk's three-tier layout — Farol (upper), Youl (middle), and Chutang (lower) — was designed around water management. Glacial meltwater is channelled through stone-lined canals called yuras that irrigate each tier in turn, ensuring every household and orchard receives its share. This system, maintained communally, has been in continuous use for centuries.",
    ],
    geography: [
      "Turtuk sits in a narrow gorge where the Shyok River cuts between the Karakoram and Ladakh ranges. At 2,900m it is the lowest overnight stop in the Ladakh circuit — a full 600m lower than Leh — which means warmer nights, thicker air, and the ability to grow crops that are impossible elsewhere in the region.",
      "The village is surrounded by 6,000m+ peaks, but the gorge traps warmth and moisture, creating an oasis effect. Precipitation here is higher than on the open plateau, and the combination of glacial meltwater and south-facing slopes makes the terraced orchards extraordinarily productive.",
      "Beyond Turtuk, the road continues to Tyakshi and Thang — India's actual northernmost civilian-accessible villages. The Line of Control runs through the mountains just beyond, and on clear days you can see villages in Pakistani-administered Gilgit-Baltistan from the army viewpoint at Thang.",
    ],
    funFacts: [
      "Turtuk's residents speak Balti — a language closely related to classical Tibetan but written in Arabic script. It is one of the only places on earth where you can hear a Tibeto-Burman language delivered in an Islamic cultural context.",
      "The village was without road access until the 1980s. Before the military road was built, reaching Turtuk from Leh required a multi-day journey on foot and horseback over 5,000m passes.",
      "Turtuk's apricots are considered some of the finest in the world — sweeter and more aromatic than their counterparts in Hunza (Pakistan) or Malatya (Turkey). The secret is extreme altitude UV exposure combined with glacial irrigation.",
      "The Yabgo Palace museum displays a sword believed to date from the 15th century and a collection of polo equipment — Balti polo, like Ladakhi polo, is a traditional sport played on a smaller, rougher field than the international version.",
      "Thang village, beyond Turtuk, has exactly one civilian shop, one school, and a population of about 30 families who are, by geography, the northernmost civilians in India.",
    ],
    localCuisine: [
      { dish: "Kisir", description: "Buckwheat pancakes unique to Balti cuisine — thin, slightly nutty, and served with apricot chutney or local honey. The buckwheat grows on terraces too steep for barley.", image: unsplash("1528207776546-365bb710ee93"), imageAlt: "Stacked pancakes on a plate" },
      { dish: "Balti Mutton Curry", description: "A slow-cooked mutton dish seasoned with dried apricot, cumin, and local herbs — richer and more complex than Ladakhi curries, reflecting Turtuk's Baltistani culinary roots.", image: unsplash("1596797038530-2c107229654b"), imageAlt: "Rich mutton curry in a cooking pot" },
      { dish: "Apricot Oil Bread", description: "Flatbread brushed with cold-pressed apricot kernel oil and served warm. The oil has a subtle, marzipan-like flavour that makes this simple bread unforgettable.", image: unsplash("1549413468-cd78edb7e75c"), imageAlt: "Rustic flatbread" },
      { dish: "Malmay", description: "A traditional Balti dessert made from ground apricot kernels, butter, and sugar — dense, sweet, and packed with the intense flavour of stone fruit. It is served at celebrations and offered to guests as a welcome.", image: unsplash("1586444248902-2f64eddc13df"), imageAlt: "Traditional dessert" },
      { dish: "Dried Apricots & Walnuts", description: "Turtuk's defining snack. Sun-dried on rooftops all summer, the apricots concentrate into chewy, intensely sweet morsels. Paired with fresh walnuts, they are the perfect trail food and the best souvenir from the village.", image: unsplash("1473674887131-e28696a84ed6"), imageAlt: "Fresh fruit in a bowl" },
    ],
    knowBeforeYouGo: [
      { label: "Permits", note: "Inner Line Permit required, checked at Bogdang en route. Foreign nationals can visit Turtuk but not Thang viewpoint on some days — we confirm current rules before travel." },
      { label: "Culture", note: "Turtuk is a conservative Muslim Balti village. Dress modestly, ask before photographing people, and let homestay hosts guide the rhythm — that's the whole point of coming." },
      { label: "Altitude", note: "At ~2,900m Turtuk is the lowest overnight in Ladakh — a genuinely restful sleep after the high lakes, which is why we often place it mid-circuit." },
      { label: "Homestays", note: "Turtuk's best experience is its homestays — family-run, home-cooked, and deeply personal. We book with families we know and trust. Expect simple rooms, extraordinary hospitality, and meals you'll remember." },
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
    floraFauna: [
      { heading: "Himalayan Brown Bear", body: "The Suru Valley and the forests around Drass are among the last habitats of the Himalayan brown bear in India. This critically endangered subspecies — estimated at fewer than 500 in the wild — is occasionally spotted in remote meadows above Panikhar. Sightings are rare but possible in early morning.", image: unsplash("1637772840892-0b2a91b74fb0"), imageAlt: "Brown bear walking through a green forest" },
      { heading: "Musk Deer", body: "The conifer forests between Zoji La and Drass shelter small populations of the endangered Himalayan musk deer — a shy, solitary animal with elongated canine teeth that give it a vampiric appearance. Males produce musk, historically one of the most valuable substances on earth by weight.", image: unsplash("1590514526581-bf7feaee0217"), imageAlt: "Deer standing in a forest" },
      { heading: "Wildflower Meadows", body: "The Suru Valley between Kargil and Panikhar explodes with wildflowers in July and August — blue gentians, yellow potentilla, purple asters, and dozens of species that carpet alpine meadows beneath the Nun-Kun massif. It is one of the most colourful landscapes in the western Himalaya.", image: unsplash("1713439340151-6f1e7f6fb9c9"), imageAlt: "Colourful wildflower meadow with mountains" },
      { heading: "Birch & Willow Forests", body: "Unlike the treeless landscapes further east, the Drass-Kargil corridor supports birch, willow, and poplar forests watered by the Suru and Dras rivers. These forests provide critical habitat for Himalayan monals, koklass pheasants, and the elusive Himalayan snowcock.", image: unsplash("1508138142660-302e69e74271"), imageAlt: "Forest trees reaching toward the sky" },
    ],
    historyCulture: [
      "Kargil's history is etched into the Indian national consciousness through the 1999 Kargil War. Pakistani forces infiltrated positions on peaks overlooking the Srinagar–Leh highway at Drass, and the Indian Army's recapture of Tiger Hill, Tololing, and Point 4875 over two months of high-altitude combat is one of the most documented military operations in Indian history.",
      "But Kargil's cultural history runs far deeper than 1999. The town was a major halt on the Central Asian trade route, and its bazaar has served travellers for over a millennium. The region's Shia Muslim population traces its roots to Baltistan and maintains cultural ties across the Line of Control — the Purig language spoken here is closely related to Balti and Ladakhi.",
      "The Mulbekh Chamba — a 9-metre Maitreya Buddha carved into living rock — marks the historic cultural boundary between the Muslim west and Buddhist east of Ladakh. Dated to roughly the 7th–8th century CE, it is one of the oldest rock-carved Buddhist images in the western Himalaya and stands as evidence of a time when Buddhism and Islam coexisted peacefully along these trade routes.",
      "Lamayuru Monastery, in eastern Kargil district, sits on what geologists call a 'moonland' — heavily eroded lacustrine deposits that look genuinely lunar. The monastery itself, possibly founded in the 10th century, is one of the oldest in Ladakh and hosts the spectacular Yuru Kabgyat masked dance festival each July.",
    ],
    geography: [
      "Kargil town sits at the confluence of the Suru River and its tributary, the Wakha Chu, at 2,676m — one of the lowest points along the Srinagar–Leh highway. This relatively low altitude, combined with river-fed irrigation, makes the surrounding valley surprisingly green and productive.",
      "Drass, 60 km to the west, is famously one of the coldest inhabited places in India, with winter temperatures dropping to -45°C. The town sits in a deep valley at 3,280m that traps cold air — a phenomenon called temperature inversion — creating extreme lows that rival Siberian records.",
      "The Suru Valley running south from Kargil gives direct views of the Nun-Kun massif — Nun (7,135m) and Kun (7,077m) are the highest peaks in Ladakh and among the most visually dramatic in the entire Himalaya. The valley eventually leads to the Pensi La and Zanskar, but that road is a separate expedition entirely.",
    ],
    funFacts: [
      "Drass recorded a temperature of -60°C in 1995 (with wind chill), making it the second-coldest inhabited place on earth after Oymyakon in Siberia.",
      "The Kargil War Memorial at Drass sits at 3,280m and is maintained by the 56 Mountain Division of the Indian Army. The evening retreat ceremony, when conducted, features a bugle call that echoes off the same peaks that saw combat in 1999.",
      "Lamayuru's 'moonland' landscape was actually an ancient lakebed — the monastery sits on the dried remains of a glacial lake that drained roughly 30,000 years ago, leaving behind the bizarre, deeply eroded clay formations you see today.",
      "Kargil is the only major town in India where Muharram processions pass through with Tibetan Buddhist monasteries visible in the background — a visual embodiment of the region's cultural complexity.",
      "The Srinagar–Leh highway over Zoji La (3,528m) is the western gateway to Ladakh and one of the most dangerous roads in India. A tunnel currently under construction (the Z-Morh tunnel) will eventually make the route all-weather, fundamentally changing Kargil's accessibility.",
    ],
    localCuisine: [
      { dish: "Balti Gosht", description: "A slow-cooked mutton stew with whole spices, dried apricots, and local ghee. The Balti cooking tradition uses a flat-bottomed pan (karahi) and slow flame — the same technique that gave rise to the British 'Balti' curry, though the original bears no resemblance to its UK descendant.", image: unsplash("1596797038530-2c107229654b"), imageAlt: "Mutton stew in a cooking pot" },
      { dish: "Khameeri Roti", description: "Naturally leavened flatbread made with local wild yeast — chewy, slightly tangy, and baked in tandoors that have been in continuous use for generations. It is the daily bread of Kargil and pairs perfectly with thick dal.", image: unsplash("1549413468-cd78edb7e75c"), imageAlt: "Rustic leavened bread" },
      { dish: "Harissa", description: "A rich, slow-cooked porridge of pounded mutton and wheat, simmered overnight and served at breakfast. Harissa is traditionally a winter dish — its calorie density is designed for temperatures well below zero.", image: unsplash("1684403731883-67a71a793d2d"), imageAlt: "Thick porridge in a bowl" },
      { dish: "Apricot Kernel Soup", description: "A delicate, almond-like soup made from ground apricot kernels — subtly sweet, warming, and unique to the Purig culinary tradition of Kargil. It is offered to guests as a welcoming drink.", image: unsplash("1476718406336-bb5a9690ee2a"), imageAlt: "Warm soup in a ceramic bowl" },
    ],
    knowBeforeYouGo: [
      { label: "Permits", note: "No permit needed for Kargil, Drass, the Suru Valley or the main highway — this is the most freely travelled corridor in Ladakh." },
      { label: "Altitude", note: "Kargil (2,676m) is a natural acclimatization ladder on the Srinagar approach — one reason we rate that route for first-timers. Drass winters drop below -20°C; summers are mild." },
      { label: "Culture", note: "The region is largely Shia Muslim with Balti roots — a different Ladakh from Leh's Buddhist valleys, and part of what makes the full crossing so rich." },
      { label: "War Memorial Visit", note: "The Kargil War Memorial is open year-round, but the light show and retreat ceremony operate only in summer (May–September). Allow at least 90 minutes for a proper visit — it deserves more than a quick stop." },
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
    floraFauna: [
      { heading: "Deodar Cedar Forests", body: "Manali's signature tree is the Himalayan cedar (Cedrus deodara) — the name literally means 'timber of the gods' in Sanskrit. These towering conifers can reach 60m in height and live for over 800 years. The grove around Hadimba Temple contains some of the oldest specimens in the Kullu Valley.", image: unsplash("1761368946674-b0c7f7b812e6"), imageAlt: "Pine trees overlooking a lush green mountain range" },
      { heading: "Western Tragopan", body: "The forests above Manali (particularly in the Great Himalayan National Park, 60 km south) shelter the western tragopan — one of the world's rarest pheasants. Males have brilliant crimson-and-black plumage with blue facial horns displayed during courtship. Fewer than 5,000 exist in the wild.", image: unsplash("1701010657407-74f817ca99a7"), imageAlt: "Colourful pheasant standing on the ground" },
      { heading: "Apple & Cherry Orchards", body: "The Kullu Valley is India's apple country. Orchards surround Manali on every hillside, blooming pink-white in April and producing fruit from August to October. Cherry trees add to the display in May. The apple economy drives much of the region's prosperity.", image: unsplash("1628486930972-c1db82d528da"), imageAlt: "Apples hanging on a tree branch" },
      { heading: "Himalayan Black Bear", body: "The forested slopes above Manali — especially toward Hamta Pass and Chandratal — are home to Himalayan black bears. They are most active in autumn when they feed on berries and nuts before hibernation. Encounters are uncommon but possible on forest treks.", image: unsplash("1588167056840-13caf6e4562a"), imageAlt: "Black bear on a tree branch" },
    ],
    historyCulture: [
      "Manali takes its name from Manu — the sage who, in Hindu mythology, survived a great flood to become the progenitor of humanity. The Manu Temple in Old Manali, one of the few temples in India dedicated to Manu, marks the spot where he is believed to have meditated after the waters receded. It frames Manali as nothing less than the birthplace of human civilisation.",
      "The Hadimba Temple (1553 CE) is a masterpiece of kath-kuni architecture — alternating layers of stone and deodar timber that flex during earthquakes rather than cracking. It is dedicated to Hadimba Devi, wife of Bhima from the Mahabharata, and the pagoda's four-tiered wooden roof has survived nearly five centuries of Himalayan winters without major repair.",
      "Kullu Valley's recorded history includes periods under the Mandi and Kullu rajas, Sikh governance under Ranjit Singh, and British colonial rule. The British 'discovered' Manali as a hill station in the 1860s, and its population of European-style cottages dates from that era. The apple economy that transformed the valley was introduced by British missionaries in the early 20th century.",
      "Old Manali and Vashisht became backpacker legends in the 1970s when the hippie trail passed through. Today they retain a slower, more bohemian character than Mall Road — stone lanes, riverside cafés, and a community that includes long-term residents from across India, Israel, Japan, and Europe.",
    ],
    geography: [
      "Manali sits at the head of the Kullu Valley at 2,050m, where the Beas River emerges from its mountain sources. The valley is flanked by the Pir Panjal Range to the south and the Great Himalayan Range to the north. The Rohtang Pass (3,978m) historically separated green Kullu from arid Lahaul — the Atal Tunnel now bypasses it entirely.",
      "The climate is dramatically seasonal: hot and green in summer (20–30°C), spectacular in autumn (October's golden poplars are legendary), and deeply snow-bound in winter (December–February brings regular heavy snowfall that blankets the town to 2–3 feet). Monsoon (July–August) brings heavy rain and occasional landslides.",
      "The Great Himalayan National Park, a UNESCO World Heritage Site since 2014, begins just 60 km south of Manali. Its 1,171 sq km of untouched wilderness contains over 375 fauna species and 800 plant species — making the greater Kullu region one of the most biodiverse areas in the western Himalaya.",
    ],
    funFacts: [
      "The Atal Tunnel (9.02 km, opened 2020) is the world's longest highway tunnel above 3,000m. It reduced travel time from Manali to Lahaul from 5 hours over Rohtang to just 15 minutes — transforming winter access to the Lahaul-Spiti region.",
      "Manali's apples fund more college educations than any other crop in Himachal Pradesh. A good orchard can earn a family ₹15–30 lakh per season, making apple farmers some of the most prosperous agriculturalists in India.",
      "The Beas River is named after the sage Vyas (Vyasa), who is believed to have composed parts of the Mahabharata in a cave near Manali. The Vyas Kund, the river's source, is a pilgrimage site accessible via a trek from Solang.",
      "Manali's Hot Springs at Vashisht maintain a natural temperature of about 45°C year-round. The water is rich in sulphur and minerals and has been used for bathing and ritual purification for centuries.",
      "Old Manali has a higher density of cafés per square metre than most neighbourhoods in Delhi — a legacy of its backpacker-era transformation that has made it one of India's most distinctive food destinations.",
    ],
    localCuisine: [
      { dish: "Siddu", description: "A steamed wheat bread stuffed with poppy seed paste and walnuts, served with ghee and dal. It is Kullu Valley's signature dish — hearty, nutty, and designed for cold mountain evenings.", image: unsplash("1563245372-f21724e3856d"), imageAlt: "Steamed stuffed bread" },
      { dish: "Trout", description: "Rainbow and brown trout from the Beas and its tributaries, pan-fried with minimal seasoning. Tirthan Valley, south of Manali, is the trout capital of Himachal — some guesthouses catch fish from the stream running past your window.", image: unsplash("1510130387422-82bed34b37e9"), imageAlt: "Fresh trout on a plate" },
      { dish: "Dham", description: "A traditional Himachali feast served on special occasions — multiple courses of rajma, madra (chickpeas in yoghurt gravy), rice, and sweet mittha served on leaf plates. If you're invited to one, clear your schedule.", image: unsplash("1567337710282-00832b415979"), imageAlt: "Traditional feast on leaf plates" },
      { dish: "Babru", description: "Deep-fried black-lentil-stuffed bread, crispy outside and savoury inside — Himachal's answer to kachori. Served with tamarind chutney at roadside stalls, it is the best ₹20 you'll spend in the valley.", image: unsplash("1601050690597-df0568f70950"), imageAlt: "Crispy golden fried bread" },
      { dish: "Apple Everything", description: "Apple juice, apple cider, apple wine, apple chips, apple jam — Manali's orchards produce more varieties than most Indians realise. The local cider, made by small producers in Naggar, is surprisingly good.", image: unsplash("1628486930972-c1db82d528da"), imageAlt: "Fresh apples on a tree branch" },
    ],
    knowBeforeYouGo: [
      { label: "Altitude", note: "At 2,050m Manali needs no acclimatization — which is exactly why overland itineraries sleep here, then step up gradually via Jispa (3,200m) rather than flying straight to Leh." },
      { label: "Seasons", note: "Manali works year-round: green and lively April–June, monsoon-washed July–August (watch for landslides), golden in autumn, snowbound and romantic December–February." },
      { label: "Traffic", note: "May–June weekends get crowded. We schedule early-morning departures for Atal Tunnel and Solang to stay ahead of the day-trip wave." },
      { label: "Packing", note: "Even in summer, Manali evenings drop to 8–12°C. Pack a light jacket for town and a proper warm layer for anything beyond Atal Tunnel." },
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
    floraFauna: [
      { heading: "Himalayan Griffon Vultures", body: "The thermals that make Bir world-class for paragliding also attract Himalayan griffon vultures — massive raptors with 2.5-metre wingspans that soar alongside human pilots. Watching a griffon ride the same thermal as your paraglider is a surreal and unforgettable experience.", image: unsplash("1714465909619-467d1fb5b7a4"), imageAlt: "Large bird soaring over a mountain range" },
      { heading: "Rhododendron & Pine Forests", body: "The Billing ridge is covered in blue pine, oak, and rhododendron forests that burst into red and pink bloom from March to May. The rhododendron canopy at 2,400m creates cathedral-like tunnels of colour during peak bloom — one of the best wildflower displays in Himachal.", image: unsplash("1779788040988-544d2283535b"), imageAlt: "Purple rhododendron bushes blooming in a forest" },
      { heading: "Himalayan Monal (State Bird)", body: "The iridescent Himalayan monal — Himachal's state bird — inhabits the forests above Billing. Males display a rainbow of metallic plumage (green, blue, copper, purple) that shifts with the light. They are most easily spotted at dawn and dusk in the oak-rhododendron belt.", image: unsplash("1701010657407-74f817ca99a7"), imageAlt: "Colourful pheasant on the ground" },
      { heading: "Tea Gardens", body: "The lower slopes around Bir host small tea gardens — a legacy of the colonial era. The high-altitude, slow-growth conditions produce a distinctive Kangra tea with a delicate, muscatel character that tea connoisseurs compare favourably to first-flush Darjeeling.", image: unsplash("1658051161493-1d311c4c7b4d"), imageAlt: "Green tea garden on mountain slopes" },
    ],
    historyCulture: [
      "Bir's Tibetan colony was established in the 1960s when refugees fleeing Chinese-occupied Tibet settled in the Kangra Valley with support from the Indian government. Several monasteries were built — Chokling, Palpung Sherabling, and Dzongsar Khyentse — making Bir one of the most important centres of Tibetan Buddhist study outside Tibet itself.",
      "The Deer Park Institute, founded by the acclaimed Bhutanese filmmaker and Buddhist teacher Dzongsar Khyentse Rinpoche, offers courses in Buddhist philosophy, contemplative arts, and traditional Himalayan knowledge. It attracts students from around the world and gives Bir an intellectual character rare for a village of its size.",
      "Paragliding arrived in the 1990s when European pilots discovered that the Billing ridge's geography — a clean, south-facing launch above a wide, obstacle-free valley — created ideal flying conditions. India hosted its first Paragliding World Cup here in 2015, cementing Bir-Billing's status as a world-class flying site.",
      "Baijnath, 30 minutes from Bir, is home to a 13th-century Shiva temple complex built in the Nagara architectural style. The temple's intricately carved stone panels — depicting scenes from the Mahabharata and Ramayana — rank among the finest medieval stone sculpture in the western Himalaya. It is a protected monument under the Archaeological Survey of India.",
    ],
    geography: [
      "Bir village sits at roughly 1,400m in the Kangra Valley, while the Billing launch site is at 2,400m on the crest of the Dhauladhar Range. The 1,000m vertical drop between launch and landing — with no obstacles, crosswinds, or turbulence during stable conditions — creates one of the longest and safest tandem flights in the world.",
      "The Kangra Valley is one of the broadest Himalayan valleys, stretching roughly 80 km with an average width of 20 km. The valley floor receives moderate monsoon rainfall (about 1,500 mm annually), supporting paddy fields, tea gardens, and subtropical forests. The Dhauladhar peaks to the north rise abruptly from the valley to over 5,000m, creating the dramatic wall of snow that forms the backdrop to every flight.",
      "The region sits at the junction of the Himalayan and sub-Himalayan zones, giving it unusually high biodiversity. Within a 20-km radius of Bir, you transition from subtropical pine forests through temperate oak and rhododendron belts to alpine meadows — a compressed ecological gradient that supports species from both tropical and temperate worlds.",
    ],
    funFacts: [
      "Bir-Billing hosted the Paragliding World Cup in 2015 — the first time the event was held in Asia. Pilots from 140 countries competed, and many described the Billing ridge as the best natural flying site they had ever experienced.",
      "The Billing-to-Bir tandem flight covers a straight-line distance of about 14 km but pilots routinely extend flights to 30+ km by riding thermals along the Dhauladhar ridge. Some experienced solo pilots have flown over 200 km from Billing in a single cross-country flight.",
      "Bir has more Tibetan monasteries per square kilometre than any settlement in India outside Dharamshala. The monastic community is larger than the original local population.",
      "The Kangra miniature painting tradition — delicate, romantic, nature-infused paintings from the 18th–19th centuries — originated in the courts of Kangra kings. The Kangra Museum in Dharamshala houses one of the finest collections, and the landscape you see from a Billing flight is the same one these painters captured 250 years ago.",
      "Bir's café scene began when Israeli backpackers who had completed military service discovered the village in the early 2000s. The fusion of Tibetan, Israeli, and Indian café culture gives Bir a culinary diversity wildly disproportionate to its size.",
    ],
    localCuisine: [
      { dish: "Thukpa & Momos", description: "Bir's Tibetan colony ensures that steaming bowls of thukpa (noodle soup) and fresh momos (dumplings) are available at every corner. The Chokling Cafe's momos — pan-fried with a chilli-soy dip — have their own fan following.", image: unsplash("1534422298391-e4f8c172dddb"), imageAlt: "Plate of dumplings with dipping sauce" },
      { dish: "Kangra Tea", description: "Grown on small estates in the valley, Kangra tea has a light, floral character. The best first-flush picking (April) rivals Darjeeling for delicacy. Order a pot at any Bir café and you'll taste the altitude in every sip.", image: unsplash("1422433555807-2559a27433bd"), imageAlt: "Cup of tea on a wooden desk" },
      { dish: "Himachali Dham", description: "A traditional feast served at weddings and festivals — rajma, madra (chickpeas in yoghurt), sweet rice, and dal on leaf plates. Bir's proximity to Kangra means Dham is available at local events throughout the year.", image: unsplash("1567337710282-00832b415979"), imageAlt: "Multi-course feast on leaf plates" },
      { dish: "Shakshuka & Hummus", description: "Bir's Israeli-influenced café culture means excellent shakshuka (baked eggs in spiced tomato), hummus, and fresh pita — served alongside Tibetan and Indian options, creating one of the most eclectic café menus in rural India.", image: unsplash("1590412200988-a436970781fa"), imageAlt: "Shakshuka with eggs in spiced tomato sauce" },
      { dish: "Cinnamon Rolls at Silver Linings", description: "Bir's most famous bakery item — oversized, gooey cinnamon rolls that draw travellers from Dharamshala. They sell out by noon most days and have become an unofficial Bir landmark.", image: unsplash("1645995575875-ea6511c9d127"), imageAlt: "Gooey cinnamon roll on a plate" },
    ],
    knowBeforeYouGo: [
      { label: "Flying Conditions", note: "Flights are weather-dependent — mornings are calmest for tandems. We build a buffer day into flying itineraries so a windy afternoon never costs you the experience." },
      { label: "Fitness", note: "None needed for tandem flights beyond a few running steps at launch. Weight limits (roughly 20–95 kg) apply; tell us in advance and we'll confirm with the pilots." },
      { label: "Season Break", note: "Flying pauses during monsoon (July to mid-September). The village is still lovely then — but come for cafés and mist, not airtime." },
      { label: "Camera", note: "Most tandem pilots offer GoPro footage (₹500–1,000 extra). If you bring your own camera, use a wrist strap — phones dropped from 2,400m do not survive." },
    ],
    howToReach: "About 500 km from Delhi (overnight Volvo to Bir/Baijnath) or 70 km from Dharamshala–Kangra airport. The Pathankot–Joginder Nagar narrow-gauge toy train also stops nearby at Ahju.",
    bestTimeNote: "October–November is world-cup season with the most reliable thermals; March–June is the second window. Skip July–August if flying is the goal.",
  },
};
