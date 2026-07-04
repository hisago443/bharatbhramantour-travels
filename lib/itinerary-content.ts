function unsplash(id: string, w = 700, q = 75) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

export interface ItineraryDayContent {
  description: string;
  highlights?: string[];
  image: string;
  imageAlt: string;
}

type ItineraryMap = Record<string, ItineraryDayContent[]>;

export const itineraryContent: ItineraryMap = {
  "7-day-leh-nubra-pangong-classic-circuit": [
    {
      description:
        "Land at Kushok Bakula Rimpochee Airport, one of the highest commercial airports in the world. Our driver meets you at arrivals. The rest of the day is yours to do absolutely nothing — and that's the point. Walk slowly to Changspa Road for a light meal, hydrate relentlessly, and let your body begin adjusting to 3,500 metres.",
      highlights: ["Airport pickup in private SUV", "Check into hotel by noon", "Light acclimatization walk to Changspa"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh town with mountains in the background",
    },
    {
      description:
        "A gentle day through Leh's living heritage. Climb the 500 steps to Shanti Stupa for panoramic valley views at golden hour. Explore the 17th-century Leh Palace — Ladakh's answer to the Potala. Finish at the Hall of Fame museum, built by the Indian Army, which tells the story of the region's military history with unexpected emotional weight.",
      highlights: ["Shanti Stupa sunrise views", "Leh Palace & Old Town bazaar", "Hall of Fame war museum"],
      image: unsplash("1599474924579-0be21bdb65a2"),
      imageAlt: "Shanti Stupa in Leh with prayer flags and mountain views",
    },
    {
      description:
        "The adventure begins. Cross the legendary Khardung La — one of the world's highest motorable passes at 5,359m. Stop at the top for photos (and a rush of altitude-thinned air), then descend into the Nubra Valley, a surreal desert of sand dunes and Bactrian camels flanked by the Karakoram Range. Evening at a riverside camp in Hunder.",
      highlights: ["Khardung La pass (5,359m)", "Bactrian camel ride at Hunder sand dunes", "Riverside camp under the stars"],
      image: unsplash("1741416075697-edc2a63aa226"),
      imageAlt: "Double-humped Bactrian camels at Hunder sand dunes, Nubra Valley",
    },
    {
      description:
        "Morning at the 350-year-old Diskit Monastery, perched on a cliff with a giant Maitreya Buddha overlooking the valley. Walk through the prayer halls and spin the ancient prayer wheels. Afternoon back at the dunes — this time in quieter light, perfect for photography or just sitting with the silence of the desert.",
      highlights: ["Diskit Monastery & 32m Maitreya Buddha", "Prayer wheel walk", "Sunset at Hunder dunes"],
      image: unsplash("1623834295108-3f46a08cf16e"),
      imageAlt: "Diskit Monastery perched on a hillside overlooking Nubra Valley",
    },
    {
      description:
        "The most dramatic drive of the trip. The Shyok road winds through narrow gorges, military checkpoints, and some of the most stark, sculptural landscape on earth — rock faces that look like they were carved by a giant. After six hours, the road crests a ridge and there it is: Pangong Tso, absurdly blue, stretching 134 kilometres into Tibet.",
      highlights: ["Shyok River road (scenic 6h drive)", "First view of Pangong Tso", "Lakeside camp at 4,225m"],
      image: unsplash("1635255506105-b74adbd94026"),
      imageAlt: "Pangong Tso lake with snow-capped mountains and brilliant blue water",
    },
    {
      description:
        "Wake before dawn to catch the lake at its most otherworldly — the colour shifts from grey to turquoise to deep blue as the sun moves. After breakfast, drive south over Chang La pass (5,360m) and descend back to Leh. The final evening is free — head to the old town for souvenirs, or sit on the hotel roof and watch the stars arrive.",
      highlights: ["Pangong sunrise — unmissable", "Chang La pass (5,360m)", "Farewell evening in Leh"],
      image: unsplash("1619837374214-f5b9eb80876d"),
      imageAlt: "Confluence of Indus and Zanskar rivers near Leh",
    },
    {
      description:
        "Airport transfer timed to your flight. If your flight is afternoon, there's time for a final walk through Leh's main bazaar — pick up apricot oil, pashmina, or prayer flags. We handle the checkout and luggage. You leave Ladakh a little quieter, a little braver, and very likely planning your next trip.",
      highlights: ["Leisurely morning", "Main bazaar shopping (optional)", "Airport drop"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh town with monasteries and mountains",
    },
  ],

  "9-day-grand-ladakh": [
    {
      description:
        "Arrive at Leh airport and transfer to your hotel. The air is thin and the light is sharp — take it slow. Your acclimatization starts now: gentle walks, hot soup, and no exertion. The view from your room is already worth the flight.",
      highlights: ["Airport pickup", "Hotel check-in", "Rest & hydrate"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh town panoramic view",
    },
    {
      description:
        "A full day exploring Leh's surroundings. Visit Shanti Stupa for valley views, the 9-storey Leh Palace, and the mystical Sangam — where the brown Indus meets the blue-green Zanskar in a visible colour line. Gurudwara Pathar Sahib sits inside a mountain cave with a fascinating origin story.",
      highlights: ["Shanti Stupa", "Leh Palace", "Sangam confluence", "Gurudwara Pathar Sahib"],
      image: unsplash("1619837374214-f5b9eb80876d"),
      imageAlt: "Indus and Zanskar river confluence in Ladakh",
    },
    {
      description:
        "Cross Khardung La at 5,359m into the otherworldly Nubra Valley. The descent reveals a hidden desert — sand dunes with snow-capped mountains behind them. Ride a double-humped Bactrian camel at sunset and sleep at a camp under some of the cleanest night sky on the planet.",
      highlights: ["Khardung La (5,359m)", "Hunder sand dunes", "Bactrian camel ride"],
      image: unsplash("1741416075697-edc2a63aa226"),
      imageAlt: "Bactrian camels at Hunder sand dunes",
    },
    {
      description:
        "The Shyok road from Nubra to Pangong is raw and dramatic — narrow gorges, military checkpoints, and landscapes that look like another planet. When the lake finally appears over the ridge, it earns every hour of the drive. Settle into a lakeside camp for the night.",
      highlights: ["Shyok River road", "Pangong Tso first view", "Lakeside overnight"],
      image: unsplash("1635255506105-b74adbd94026"),
      imageAlt: "Pangong Tso blue waters",
    },
    {
      description:
        "After sunrise at Pangong, drive south through the Changthang plateau to Hanle. The landscape opens into vast, treeless steppe — home to kiangs (Tibetan wild ass) and marmots. Hanle sits at 4,500m beneath one of the world's premier dark sky reserves.",
      highlights: ["Pangong sunrise", "Changthang plateau wildlife", "Arrive Hanle dark sky reserve"],
      image: unsplash("1717228237487-d4f126923a5e"),
      imageAlt: "Milky Way over mountain range at Hanle",
    },
    {
      description:
        "A rest day at Hanle. Visit the 17th-century Hanle Monastery on its hilltop perch, explore the village, and in the evening, experience the dark sky reserve. On a clear night, the Milky Way is visible to the naked eye — no telescope needed, though we can arrange one.",
      highlights: ["Hanle Monastery", "Village walk", "Milky Way viewing / telescope session"],
      image: unsplash("1717228237487-d4f126923a5e"),
      imageAlt: "Night sky with stars over Hanle",
    },
    {
      description:
        "Drive through the remote Changthang to Tso Moriri, arguably Ladakh's most beautiful lake. Smaller and more secluded than Pangong, Tso Moriri sits at 4,522m surrounded by snow peaks and home to bar-headed geese and Brahmin ducks. Camp at Korzok, the highest village with a permanent population in India.",
      highlights: ["Changthang steppe crossing", "Tso Moriri first view", "Korzok village (4,522m)"],
      image: unsplash("1600356033695-a003690a6351"),
      imageAlt: "Tso Moriri lake with snow-capped peaks",
    },
    {
      description:
        "A long drive back to Leh through the Chumur route — but with some of the trip's most varied scenery. High passes, nomadic Changpa settlements, and the gradual return to the Indus Valley. The final night in Leh is yours — pack the memories and your new favourite photos.",
      highlights: ["Tso Moriri sunrise", "Chumur route back to Leh", "Changpa nomad sightings"],
      image: unsplash("1694948055470-36d187668df1"),
      imageAlt: "Mountain highway in Ladakh",
    },
    {
      description:
        "Transfer to the airport for your departure. Nine days, five major lakes, two of the world's highest passes, and one very full camera roll. If your flight is later, browse Leh's artisan shops for a parting pashmina.",
      highlights: ["Airport transfer", "Optional bazaar visit"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh town morning light",
    },
  ],

  "6-day-ladakh-with-turtuk": [
    {
      description:
        "Arrive in Leh and take it easy. The altitude demands patience — your body needs a full day to start adjusting. Walk to a nearby café, sip butter tea, and watch the afternoon light paint the mountains amber.",
      highlights: ["Airport pickup", "Rest day", "Gentle walk around Changspa"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh town with mountains",
    },
    {
      description:
        "Cross Khardung La and descend into the Nubra Valley. The terrain shifts from barren rock to sand dunes impossibly nestled between ice-capped peaks. Set up at Hunder and take a camel ride through the dunes as the sun goes low.",
      highlights: ["Khardung La crossing", "Hunder dunes", "Bactrian camel ride"],
      image: unsplash("1741416075697-edc2a63aa226"),
      imageAlt: "Bactrian camels in Hunder dunes, Nubra",
    },
    {
      description:
        "Drive north along the Shyok River to Turtuk — India's last village before the Line of Control with Pakistan. Until 1971, Turtuk was part of Baltistan. The Balti culture here is completely distinct from the rest of Ladakh: different language, different food, different architecture. Walk through apricot orchards and stone houses.",
      highlights: ["Shyok River drive", "Turtuk village — India's northernmost settlement", "Balti culture immersion"],
      image: unsplash("1566323124805-757e5c41d37c"),
      imageAlt: "Mountain village near river in Ladakh",
    },
    {
      description:
        "Walk to Thang, the absolute last village — beyond this is no-man's land and then Pakistan. The village headman often welcomes visitors with apricot juice and stories. Spend the afternoon exploring Turtuk's heritage house museum and its tiny polo ground. A place that feels suspended in time.",
      highlights: ["Thang — India's last village", "Heritage house museum", "Apricot orchards & Balti hospitality"],
      image: unsplash("1694948056349-f91199dd8a3a"),
      imageAlt: "Mountain bridge and road in Ladakh",
    },
    {
      description:
        "Return south through Nubra, stopping at Diskit Monastery for the giant Maitreya Buddha and panoramic valley views. Then continue over Khardung La back to Leh. A long but spectacular day — the landscape changes character every hour.",
      highlights: ["Diskit Monastery", "Khardung La return", "Evening in Leh"],
      image: unsplash("1623834295108-3f46a08cf16e"),
      imageAlt: "Diskit Monastery with Maitreya Buddha statue",
    },
    {
      description:
        "Transfer to the airport. Six days that took you from India's ancient capital of Ladakh to its absolute frontier — and back.",
      highlights: ["Airport transfer", "Optional Leh bazaar shopping"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh old town",
    },
  ],

  "8-day-manali-to-leh-overland-expedition": [
    {
      description:
        "Arrive in Manali and check into your hotel in Old Manali or the Mall Road area. Evening briefing on the overland route, weather updates, and equipment check. If you have time, walk through Old Manali's cedar-lined lanes and grab dinner at a riverside café.",
      highlights: ["Hotel check-in", "Route briefing", "Old Manali exploration"],
      image: unsplash("1652543393067-281cea9b8c02"),
      imageAlt: "Manali town with mountains in the background",
    },
    {
      description:
        "The highway adventure begins. Drive through the Atal Tunnel — 9.02 km under the Rohtang massif, an engineering marvel that has transformed Lahaul access. Emerge into Sissu for chai by the waterfall, then continue to Jispa, a quiet meadow town on the Bhaga River. Night in a riverside camp.",
      highlights: ["Atal Tunnel (9.02 km)", "Sissu waterfall", "Jispa riverside camp"],
      image: unsplash("1694948055470-36d187668df1"),
      imageAlt: "Mountain highway road in Himachal Pradesh",
    },
    {
      description:
        "The wildest stretch of the highway. Climb through 21 hairpin bends at Gata Loops, cross Baralacha La (4,890m), and push through Zingzingbar to the tent colony at Sarchu. The landscape transitions from green Lahaul to the high-altitude desert of the Changthang. Overnight in Swiss-style tents.",
      highlights: ["Baralacha La (4,890m)", "21 Gata Loops hairpins", "Sarchu tent camp at 4,300m"],
      image: unsplash("1772165134215-eb8d3b5c758d"),
      imageAlt: "Snow-capped Ladakh peaks at golden hour",
    },
    {
      description:
        "The big push to Leh. Cross the More Plains — a high-altitude plateau so flat and vast it feels lunar — then climb Tanglang La (5,328m) before descending through Upshi into the Indus Valley. When you see the first Ladakhi village, you'll know you've arrived somewhere extraordinary.",
      highlights: ["More Plains — lunar landscape", "Tanglang La (5,328m)", "First view of the Indus Valley"],
      image: unsplash("1694948055470-36d187668df1"),
      imageAlt: "Vast mountain highway landscape",
    },
    {
      description:
        "A well-earned rest day in Leh. Your body has been climbing all week — today it catches up. Explore Leh Palace, climb Shanti Stupa, browse the old town bazaar, or simply sit on a rooftop with a book and the mountains.",
      highlights: ["Rest & acclimatize", "Leh Palace", "Shanti Stupa", "Old town bazaar"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh town with monastery and mountains",
    },
    {
      description:
        "North over Khardung La (5,359m) into Nubra Valley. The sand dunes at Hunder look impossible — desert in the middle of the Himalayas. Ride a Bactrian camel, visit Diskit Monastery, and camp under one of the darkest skies you've ever seen.",
      highlights: ["Khardung La (5,359m)", "Hunder sand dunes & camels", "Diskit Monastery"],
      image: unsplash("1741416075697-edc2a63aa226"),
      imageAlt: "Bactrian camels at Hunder dunes",
    },
    {
      description:
        "The Shyok road links Nubra to Pangong — a six-hour traverse through some of the most dramatic terrain in Asia. Narrow gorges give way to vast valleys, and then the lake appears: 134 km of blue that shifts shade with every passing cloud. Camp by the shore.",
      highlights: ["Shyok River gorge drive", "Pangong Tso — 134 km of blue", "Lakeside camp"],
      image: unsplash("1635255506105-b74adbd94026"),
      imageAlt: "Pangong Tso lake with brilliant blue water",
    },
    {
      description:
        "Sunrise at Pangong, then drive south over Chang La (5,360m) back to Leh. The last drive of the expedition — savour it. Airport transfer for your departure, carrying the memory of every pass, every lake, and every mountain that watched you drive by.",
      highlights: ["Pangong sunrise", "Chang La pass", "Airport transfer"],
      image: unsplash("1619837374214-f5b9eb80876d"),
      imageAlt: "Mountain river confluence landscape",
    },
  ],

  "5-day-leh-comfort": [
    {
      description:
        "Arrive in Leh and transfer to a comfortable hotel with heating and oxygen support. The first day is entirely about rest — no sightseeing, no excursions. Walk only short distances, drink warm fluids, and let your body recognise that it's at 3,500 metres now.",
      highlights: ["Airport pickup", "Heated hotel room", "Complete rest — no exertion"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh town with snow-capped peaks",
    },
    {
      description:
        "A gentle day around Leh. Visit Shanti Stupa in the soft morning light, explore Leh Palace at your own pace, and stop at the Hall of Fame. In the afternoon, drive to Magnetic Hill and Gurudwara Pathar Sahib — two of Ladakh's most photogenic stops, both easily accessible by road.",
      highlights: ["Shanti Stupa", "Leh Palace", "Hall of Fame", "Magnetic Hill & Gurudwara Pathar Sahib"],
      image: unsplash("1599474924579-0be21bdb65a2"),
      imageAlt: "Shanti Stupa with prayer flags",
    },
    {
      description:
        "The signature drive: through the Indus Valley to Sangam (where two rivers collide in visible colour) and then over Chang La (5,360m) to Pangong Tso. The lake is 134 km long, changes colour through the day, and is one of those places that justifies every uncomfortable flight and every hour of acclimatization.",
      highlights: ["Sangam — Indus–Zanskar confluence", "Chang La pass (5,360m)", "Pangong Tso lakeside camp"],
      image: unsplash("1635255506105-b74adbd94026"),
      imageAlt: "Pangong Tso with snow peaks",
    },
    {
      description:
        "Wake early for sunrise at Pangong — the lake turns from grey to silver to deep turquoise in about twenty minutes. After breakfast, drive back over Chang La to Leh. The return drive has different light and shadows, making it feel like a new road entirely.",
      highlights: ["Pangong sunrise shoot", "Chang La return crossing", "Evening at leisure in Leh"],
      image: unsplash("1619837374214-f5b9eb80876d"),
      imageAlt: "River confluence and mountain valley",
    },
    {
      description:
        "Airport transfer. A gentle five days that still manages to include one of the world's most stunning lakes, two high passes, and enough Ladakhi butter tea to last a lifetime.",
      highlights: ["Leisurely checkout", "Optional bazaar shopping", "Airport drop"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh morning light on mountains",
    },
  ],

  "10-day-trans-himalayan-crossing": [
    {
      description:
        "Arrive in Srinagar. If time permits, take a shikara ride on Dal Lake — houseboats, floating gardens, and the Zabarwan mountains reflected in still water. Evening at a houseboat or lake-facing hotel.",
      highlights: ["Airport pickup", "Dal Lake shikara ride (optional)", "Mughal Gardens visit"],
      image: unsplash("1587474260584-136574528ed5"),
      imageAlt: "Dal Lake with houseboats and mountains, Srinagar",
    },
    {
      description:
        "The highway to Ladakh begins. Drive through Sonamarg (the 'meadow of gold'), cross the formidable Zoji La pass, descend through Drass — the second coldest inhabited place on earth — and reach Kargil by evening. Stop at the Drass War Memorial, a solemn tribute to the 1999 conflict.",
      highlights: ["Sonamarg meadows", "Zoji La pass", "Drass War Memorial", "Kargil town"],
      image: unsplash("1566323124805-757e5c41d37c"),
      imageAlt: "Mountain road with river and bridge in Kargil region",
    },
    {
      description:
        "Drive from Kargil through the moonscape of Lamayuru — rock formations eroded into shapes that look like a melted city. Visit the 11th-century Lamayuru Monastery, one of the oldest in Ladakh, perched impossibly on a cliff above the 'moonland'. Overnight in Lamayuru.",
      highlights: ["Moonland landscape", "Lamayuru Monastery (11th century)", "Cliffside monastery views"],
      image: unsplash("1632649276640-b78f56fbb68f"),
      imageAlt: "Lamayuru Monastery perched on dramatic moonscape cliffs",
    },
    {
      description:
        "Continue to Leh via Alchi — home to 1,000-year-old Buddhist frescoes that rival anything in Tibet. Stop at Magnetic Hill for the optical illusion, Gurudwara Pathar Sahib, and the Sangam confluence. Arrive in Leh by evening, the Indus Valley opening up around you.",
      highlights: ["Alchi Monastery frescoes", "Magnetic Hill", "Sangam confluence", "Arrive Leh"],
      image: unsplash("1619837374214-f5b9eb80876d"),
      imageAlt: "Indus and Zanskar river confluence",
    },
    {
      description:
        "A rest day in Leh — essential after three days of mountain driving. Explore the old town, climb to Leh Palace, or visit Thiksey Monastery (a mini Potala Palace). The main bazaar has Tibetan silver, pashmina, and dried apricots from Nubra.",
      highlights: ["Rest & acclimatize", "Thiksey Monastery", "Leh Palace & old town"],
      image: unsplash("1599474924579-0be21bdb65a2"),
      imageAlt: "Buddhist monastery with prayer flags in Leh",
    },
    {
      description:
        "Cross Khardung La into Nubra Valley. The sand dunes at Hunder and the Bactrian camels are surreal — a desert ecosystem at 3,050m flanked by glaciers. Visit Diskit Monastery for the 32m Maitreya Buddha overlooking the valley. Camp overnight.",
      highlights: ["Khardung La (5,359m)", "Hunder sand dunes & camels", "Diskit Monastery"],
      image: unsplash("1741416075697-edc2a63aa226"),
      imageAlt: "Bactrian camels at Hunder sand dunes",
    },
    {
      description:
        "Drive the Shyok road from Nubra to Pangong Tso. Six hours through some of the most dramatic landscape you'll ever see — narrow gorges, military convoys, and then the impossible blue of the lake appearing over a ridge. Camp by the shore.",
      highlights: ["Shyok River road", "Pangong Tso arrival", "Lakeside camp"],
      image: unsplash("1635255506105-b74adbd94026"),
      imageAlt: "Pangong Tso lake",
    },
    {
      description:
        "Sunrise at Pangong, then over Chang La (5,360m) back to Leh. The light is different every time you cross a pass — this morning's will be long and golden. Final night in Leh before the highway south.",
      highlights: ["Pangong sunrise", "Chang La crossing", "Last evening in Leh"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Mountain town at golden hour",
    },
    {
      description:
        "The legendary Leh–Manali highway south. Cross Tanglang La and the More Plains, descend through Sarchu and the 21 Gata Loops, and overnight in Jispa. The highway is a non-stop reel of passes, plains, and scenery that changes every thirty minutes.",
      highlights: ["Tanglang La (5,328m)", "More Plains", "Gata Loops", "Jispa overnight"],
      image: unsplash("1772165134215-eb8d3b5c758d"),
      imageAlt: "Snow-capped peaks along the highway",
    },
    {
      description:
        "Through the Atal Tunnel back to Manali. The green returns — after a week in the high desert, the pine forests and rivers of Kullu Valley feel almost tropical. Airport or bus station transfer for your departure. Ten days, two highways, and the entire spine of the Himalayas.",
      highlights: ["Atal Tunnel crossing", "Arrive Manali", "Departure transfer"],
      image: unsplash("1652543393067-281cea9b8c02"),
      imageAlt: "Manali mountain town with green valleys",
    },
  ],

  "3-day-bir-billing-paragliding-weekend": [
    {
      description:
        "Arrive in Bir and check into a cosy guesthouse in the Tibetan colony. Explore the Chokling Monastery, browse the craft cooperatives, and settle into Bir's café culture — wood-fired pizza, Tibetan thukpa, and pour-over coffee from local roasters. Evening walk through the tea gardens.",
      highlights: ["Chokling Monastery", "Tibetan colony walk", "Bir café trail"],
      image: unsplash("1625124313248-903aa145ac51"),
      imageAlt: "Paragliding over green mountains in Bir Billing",
    },
    {
      description:
        "The main event. Drive up to Billing (2,400m), the launch site of the 2015 Paragliding World Cup. After a brief safety briefing, run off the edge of the mountain with your certified tandem pilot. The flight lasts 15–25 minutes — soaring over the Kangra Valley with the Dhauladhar Range as your backdrop. Afternoon: optional trek to Rajgundha meadow.",
      highlights: ["Billing takeoff at 2,400m", "15–25 min tandem paragliding flight", "GoPro video included", "Optional Rajgundha trek"],
      image: unsplash("1625124313248-903aa145ac51"),
      imageAlt: "Paraglider flying over Bir valley",
    },
    {
      description:
        "A leisurely morning in Bir. Visit the Deer Park Institute (founded by Dzongsar Khyentse Rinpoche), walk through the landing site meadows, and grab a final meal at one of Bir's legendary cafés. Depart for Dharamshala, Chandigarh, or your onward journey.",
      highlights: ["Deer Park Institute", "Landing site meadow walk", "Departure transfer"],
      image: unsplash("1625124313248-903aa145ac51"),
      imageAlt: "Bir village with mountains and greenery",
    },
  ],

  "5-day-manali-sissu-jispa-getaway": [
    {
      description:
        "Arrive in Manali and settle in. Walk through Old Manali's narrow lanes lined with cedar trees, guesthouses, and riverside cafés. Visit the ancient Hadimba Temple — a 16th-century pagoda-style shrine surrounded by deodar forest. Evening bonfire (seasonal).",
      highlights: ["Old Manali walk", "Hadimba Temple", "Riverside cafés"],
      image: unsplash("1652543393067-281cea9b8c02"),
      imageAlt: "Manali town with mountains",
    },
    {
      description:
        "Drive through the Atal Tunnel — 9 km of engineering marvel that has opened up Lahaul Valley year-round. Emerge on the other side into a different world: drier, starker, with the Chandra River carving through the valley. Stop at Sissu waterfall — a fierce cascade visible right from the highway — and visit the ruins of Gondla Fort.",
      highlights: ["Atal Tunnel (9 km)", "Sissu waterfall", "Gondla Fort ruins"],
      image: unsplash("1694948055470-36d187668df1"),
      imageAlt: "Mountain highway through Lahaul Valley",
    },
    {
      description:
        "Continue to Jispa, a quiet meadow town on the Bhaga River. This is where the Manali–Leh highway rests before climbing to the big passes. Walk along the river, photograph the mountains reflected in the water, and enjoy the deep silence of a place with no traffic, no crowds, and no agenda.",
      highlights: ["Jispa meadows", "Bhaga River walk", "Mountain photography"],
      image: unsplash("1772165134215-eb8d3b5c758d"),
      imageAlt: "Snow-capped peaks and river meadows",
    },
    {
      description:
        "Drive to Keylong, the district capital of Lahaul, and visit the Kardang Monastery across the river. Return via the Atal Tunnel to Manali. The contrast between Lahaul's barren beauty and Kullu Valley's green lushness is striking every time you cross.",
      highlights: ["Keylong town", "Kardang Monastery", "Return through Atal Tunnel"],
      image: unsplash("1694948055470-36d187668df1"),
      imageAlt: "Himalayan mountain road landscape",
    },
    {
      description:
        "A free morning in Manali. Choose your adventure: Solang Valley (cable car, zorbing), a walk to Jogini Waterfall, or just coffee and a book in Old Manali. Departure transfer in the afternoon.",
      highlights: ["Solang Valley (optional)", "Jogini Waterfall (optional)", "Departure transfer"],
      image: unsplash("1652543393067-281cea9b8c02"),
      imageAlt: "Manali valley with mountain backdrop",
    },
  ],

  "hanle-dark-sky-expedition": [
    {
      description:
        "Arrive in Leh and acclimatize. This expedition goes to 4,500m+ and includes India's highest roads — the rest day isn't optional, it's essential. Walk gently, hydrate, and watch the sunset paint the Stok Range golden from your hotel roof.",
      highlights: ["Airport pickup", "Acclimatization rest", "Stok Range sunset views"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh town with golden-hour mountains",
    },
    {
      description:
        "Cross Khardung La (5,359m) into Nubra Valley. The desert-in-the-mountains terrain of Hunder never loses its shock value. Bactrian camels, sand dunes, and the Karakoram Range behind them. Evening at camp with the first taste of Ladakh's unpolluted night sky.",
      highlights: ["Khardung La (5,359m)", "Hunder dunes & camels", "First clear night sky"],
      image: unsplash("1741416075697-edc2a63aa226"),
      imageAlt: "Bactrian camels at Hunder dunes",
    },
    {
      description:
        "Drive the Shyok road to Pangong Tso — six hours through stark gorges and military outposts, then the lake appears in its absurd, impossible blue. This is a transit day, but the scenery does not let up for a single kilometre. Lakeside camp at 4,225m.",
      highlights: ["Shyok road drive", "Pangong Tso arrival", "Lakeside camp"],
      image: unsplash("1635255506105-b74adbd94026"),
      imageAlt: "Pangong Tso blue waters and mountains",
    },
    {
      description:
        "Leave Pangong and drive south through the high Changthang plateau to Hanle — one of the world's highest dark sky reserves. The Indian Astronomical Observatory sits here at 4,500m, and the sky above it is cleaner than almost anywhere else on earth. Check into Hanle homestay.",
      highlights: ["Changthang plateau crossing", "Indian Astronomical Observatory", "Arrive Hanle (4,500m)"],
      image: unsplash("1717228237487-d4f126923a5e"),
      imageAlt: "Milky Way over Hanle observatory",
    },
    {
      description:
        "The centrepiece of the expedition. Morning visit to the 17th-century Hanle Monastery with panoramic views of the empty plateau. Optional push to Umling La (5,798m) — the world's highest motorable road. Evening: telescope session at the observatory and Milky Way photography under one of the darkest skies on the planet.",
      highlights: ["Hanle Monastery", "Optional Umling La (5,798m)", "Telescope astronomy session", "Milky Way photography"],
      image: unsplash("1717228237487-d4f126923a5e"),
      imageAlt: "Star-filled dark sky over Hanle",
    },
    {
      description:
        "Drive from Hanle back to Leh via the Chumur route — a seven-hour crossing through high passes and nomadic grazing grounds. Kiang (Tibetan wild ass) and marmots are common along this stretch. Airport transfer for your departure. You leave Hanle with a new sense of how small your world usually is.",
      highlights: ["Chumur route", "Wildlife spotting — kiang, marmots", "Airport transfer"],
      image: unsplash("1694948055470-36d187668df1"),
      imageAlt: "High-altitude road through barren plateau",
    },
  ],

  "ladakh-photography-expedition": [
    {
      description:
        "Arrive in Leh and acclimatize. Use the afternoon for a golden-hour recce — scout locations from your hotel roof, test your camera settings in the sharp Ladakhi light, and plan your shooting strategy for the week ahead.",
      highlights: ["Airport pickup", "Golden-hour light test", "Location scouting"],
      image: unsplash("1695876670020-e2c2ac5a21ce"),
      imageAlt: "Leh panorama in golden hour light",
    },
    {
      description:
        "Pre-dawn drive to Thiksey Monastery for sunrise — the monks begin their prayers as the first light hits the gompa. The resemblance to Lhasa's Potala Palace is striking. Continue to Hemis (Ladakh's wealthiest monastery) and Stakna, perched on a cliff above the Indus. Every monastery is timed for the best light.",
      highlights: ["Thiksey sunrise (5:30 AM call)", "Hemis Monastery", "Stakna Monastery over the Indus"],
      image: unsplash("1599474924579-0be21bdb65a2"),
      imageAlt: "Monastery with prayer flags at sunrise",
    },
    {
      description:
        "Over Khardung La to Nubra — but the photography itinerary routes you to arrive at the dunes for golden hour. The double-humped camels against the sand and snow peaks at sunset are one of Ladakh's most iconic shots. Tripods out, long exposures as the light fades to violet.",
      highlights: ["Khardung La", "Hunder dunes at golden hour", "Camel silhouettes at sunset"],
      image: unsplash("1741416075697-edc2a63aa226"),
      imageAlt: "Bactrian camels silhouetted at sunset, Hunder",
    },
    {
      description:
        "Dawn at the dunes for a different colour palette — cool blues and pinks before the sun clears the mountains. Then the Shyok road to Pangong, arriving as the afternoon light gives the lake its deepest blue. Set up camp and shoot the shoreline as the colours shift through sunset.",
      highlights: ["Dawn dunes shoot", "Shyok road scenics", "Pangong blue-hour shoot"],
      image: unsplash("1635255506105-b74adbd94026"),
      imageAlt: "Pangong Tso in deep afternoon blue",
    },
    {
      description:
        "Pangong sunrise is unmissable — the lake shifts through a dozen shades in twenty minutes. Then south to Hanle through the Changthang plateau. The landscape is minimal and vast, perfect for wide-angle work. Arrive at Hanle for the dark sky reserve.",
      highlights: ["Pangong sunrise shoot", "Changthang minimalist landscapes", "Arrive Hanle"],
      image: unsplash("1717228237487-d4f126923a5e"),
      imageAlt: "Milky Way over the Hanle plateau",
    },
    {
      description:
        "The night photography centrepiece. Hanle's dark sky reserve has a Bortle Scale rating of 1 — the darkest possible. After scouting compositions during the day, set up for a Milky Way shoot after astronomical twilight. Long exposures, star trails, and the observatory silhouette against the galaxy.",
      highlights: ["Hanle Monastery portraits", "Milky Way shoot (Bortle 1 sky)", "Star trail long exposures"],
      image: unsplash("1717228237487-d4f126923a5e"),
      imageAlt: "Night sky photography at Hanle",
    },
    {
      description:
        "Drive to Tso Moriri via the Changthang steppe. Nomadic Changpa camps, wild kiangs, and marmots along the way. Arrive at Tso Moriri for sunset — the lake is smaller and more intimate than Pangong, surrounded by snow peaks and home to bar-headed geese. Camp at Korzok.",
      highlights: ["Changpa nomad portraits", "Wildlife photography — kiang, marmots", "Tso Moriri sunset"],
      image: unsplash("1600356033695-a003690a6351"),
      imageAlt: "Tso Moriri lake surrounded by snow peaks",
    },
    {
      description:
        "Tso Moriri at sunrise, then the long drive back to Leh through Chumur. Afternoon portfolio review and image-sharing session. Airport transfer. Eight days of golden hours, dark skies, and a memory card full of the Himalayas at their most photogenic.",
      highlights: ["Tso Moriri sunrise", "Portfolio review", "Airport transfer"],
      image: unsplash("1694948055470-36d187668df1"),
      imageAlt: "Himalayan mountain road in golden light",
    },
  ],
};
