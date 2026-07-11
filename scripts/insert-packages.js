const fs = require('fs');

const PROJECT_ID = 'unwet288';
const DATASET = 'production';
const TOKEN = 'skHD4M3tSHfLfaMrxhnHQjgCwxNku81pKwTPMmolMeuydqGL6fQrJbJApH12T9Bv9XiQA5cGyu37vDelT6pZzRr6KuxEn5qaePIvpDCbvLENAPI04xnHfO78FQaBpu2TiQiOblZ54S4gXjJtNE3pYLpdWWJOaQt2HgZ5s95ulO7XeI0FaZoB';

const uploadAsset = async (filePath) => {
  const imageBuffer = fs.readFileSync(filePath);
  const response = await fetch(`https://${PROJECT_ID}.api.sanity.io/v2023-01-01/assets/images/${DATASET}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'image/png'
    },
    body: imageBuffer
  });
  const json = await response.json();
  if (json.document && json.document._id) {
    return json.document._id;
  }
  throw new Error(`Failed to upload asset: ${JSON.stringify(json)}`);
};

const createDocument = async (doc) => {
  const response = await fetch(`https://${PROJECT_ID}.api.sanity.io/v2023-01-01/data/mutate/${DATASET}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mutations: [{ create: doc }]
    })
  });
  const json = await response.json();
  console.log('Created doc response:', json);
};

const main = async () => {
  console.log('Uploading images...');
  const grandLadakhImgId = await uploadAsset('C:\\Users\\pansh\\.gemini\\antigravity\\brain\\444d6f0f-dda0-43cc-9adb-1aee4267de91\\grand_ladakh_1783760928410.png');
  const manaliLehImgId = await uploadAsset('C:\\Users\\pansh\\.gemini\\antigravity\\brain\\444d6f0f-dda0-43cc-9adb-1aee4267de91\\manali_leh_1783760939372.png');
  const comfortPangongImgId = await uploadAsset('C:\\Users\\pansh\\.gemini\\antigravity\\brain\\444d6f0f-dda0-43cc-9adb-1aee4267de91\\comfort_pangong_1783760950590.png');
  
  console.log('Images uploaded', {grandLadakhImgId, manaliLehImgId, comfortPangongImgId});

  const packages = [
    {
      _type: 'package',
      title: '9-Day Grand Ladakh Tour',
      slug: { _type: 'slug', current: 'grand-ladakh-tour' },
      heroImage: { _type: 'image', asset: { _type: 'reference', _ref: grandLadakhImgId }, alt: 'Grand Ladakh Tour' },
      summary: 'Grand Ladakh Tour covering Leh, Nubra, Pangong, Hanley, and Tsomoriri.',
      durationDays: 9,
      routeLine: 'Leh → Nubra → Turtuk → Pangong → Hanley → Tsomoriri → Leh',
      startingPrice: 65000,
      priceNote: 'Per person, MAP (Breakfast, Dinner), Crysta cab',
      inclusions: ['Breakfast', 'Dinner', 'Welcome drink', 'Tea/Coffee', 'Crysta Cab'],
      isSignature: true,
      itinerary: [
        { _key: 'day1', dayNumber: 1, title: 'Arrive in Leh', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Arrive in Ladakh, transfer to hotel.' }] }] },
        { _key: 'day2', dayNumber: 2, title: 'Leh Local Sightseeing', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Visit Gurudwara Pathar Sahib, Magnetic hill, Sangam, Shanti Stupa, Hall of fame.' }] }] },
        { _key: 'day3', dayNumber: 3, title: 'Leh to Nubra via Khardungla pass', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Sand dunes, ATV ride, Yak ride (rides at your own expense).' }] }] },
        { _key: 'day4', dayNumber: 4, title: 'Hunder to Turtuk', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Visit Turtuk, the last village of India.' }] }] },
        { _key: 'day5', dayNumber: 5, title: 'Turtuk to Pangong via Shyok River', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Pangong shooting point, take photos.' }] }] },
        { _key: 'day6', dayNumber: 6, title: 'Pangong to Hanley', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'World highest observatory and seeing galaxy after midnight.' }] }] },
        { _key: 'day7', dayNumber: 7, title: 'Hanley to Tsomoriri', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Visit Korzok, the hidden gem.' }] }] },
        { _key: 'day8', dayNumber: 8, title: 'Tsomoriri to Leh', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Visit a market, Thiksey Monastery, Shey Palace, Rancho School.' }] }] },
        { _key: 'day9', dayNumber: 9, title: 'Departure Day', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'We will drop you at the airport.' }] }] },
      ]
    },
    {
      _type: 'package',
      title: '11-Day Manali to Leh Overland Itinerary',
      slug: { _type: 'slug', current: 'manali-to-leh-overland' },
      heroImage: { _type: 'image', asset: { _type: 'reference', _ref: manaliLehImgId }, alt: 'Manali to Leh Overland' },
      summary: 'An incredible overland journey from Manali to Leh via Zanskar.',
      durationDays: 11,
      routeLine: 'Leh → Nubra → Turtuk → Pangong → Hanley → Tsomoriri → Zanskar → Manali',
      startingPrice: 89999,
      priceNote: 'Per person',
      isSignature: true,
      itinerary: [
        { _key: 'day1', dayNumber: 1, title: 'Arrive in Leh', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Leh arrival.' }] }] },
        { _key: 'day2', dayNumber: 2, title: 'Local Sightseeing', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Local sightseeing in Leh.' }] }] },
        { _key: 'day3', dayNumber: 3, title: 'Leh to Hunder', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Leh to Hunder.' }] }] },
        { _key: 'day4', dayNumber: 4, title: 'Hunder to Turtuk', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Hunder to Turtuk.' }] }] },
        { _key: 'day5', dayNumber: 5, title: 'Turtuk to Pangong', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Turtuk to Pangong.' }] }] },
        { _key: 'day6', dayNumber: 6, title: 'Pangong to Umlingla and Hanley', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Pangong to Umlingla and Hanley.' }] }] },
        { _key: 'day7', dayNumber: 7, title: 'Hanley to Tsomoriri', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Hanley to Tsomoriri.' }] }] },
        { _key: 'day8', dayNumber: 8, title: 'Tsomoriri to Leh', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Rancho school, Hall of Fame, Shey Palace.' }] }] },
        { _key: 'day9', dayNumber: 9, title: 'Leh to Zanskar Green Valley', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Leh to Zanskar Green Valley.' }] }] },
        { _key: 'day10', dayNumber: 10, title: 'Zanskar to Manali', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Zanskar to Manali.' }] }] },
        { _key: 'day11', dayNumber: 11, title: 'Departure Day', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Departure.' }] }] },
      ]
    },
    {
      _type: 'package',
      title: '6-Day Leh Comfort Pangong Tour',
      slug: { _type: 'slug', current: 'leh-comfort-pangong' },
      heroImage: { _type: 'image', asset: { _type: 'reference', _ref: comfortPangongImgId }, alt: 'Leh Comfort Pangong' },
      summary: 'A comfortable 6-day tour of Leh, Nubra, and Pangong.',
      durationDays: 6,
      routeLine: 'Leh → Nubra → Pangong → Leh',
      startingPrice: 39999,
      priceNote: 'Per person, MAP (Breakfast, Dinner), Ertiga cab',
      inclusions: ['Breakfast', 'Dinner', 'Ertiga Cab'],
      isSignature: false,
      itinerary: [
        { _key: 'day1', dayNumber: 1, title: 'Arrive in Ladakh', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Arrival in Ladakh.' }] }] },
        { _key: 'day2', dayNumber: 2, title: 'Local Sightseeing', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Hall of fame, Shanti Stupa.' }] }] },
        { _key: 'day3', dayNumber: 3, title: 'Leh to Nubra via Khardung-la', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Drive to Nubra.' }] }] },
        { _key: 'day4', dayNumber: 4, title: 'Nubra to Pangong via Shyok', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Take some photos at shooting point.' }] }] },
        { _key: 'day5', dayNumber: 5, title: 'Pangong to Leh', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Thiksey Monastery, Shey Palace, Rancho School.' }] }] },
        { _key: 'day6', dayNumber: 6, title: 'Departure Day', description: [{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Departure.' }] }] },
      ]
    }
  ];

  for (const pkg of packages) {
    await createDocument(pkg);
  }
};

main().catch(console.error);
