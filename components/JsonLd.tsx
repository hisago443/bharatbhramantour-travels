interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function travelAgencyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Bharat Bhraman Tour & Travels",
    description:
      "Premium Ladakh and Himachal Pradesh tours with acclimatization-first itineraries, local drivers, and permits handled.",
    url: "https://bharatbhramantours.com",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Ladakh, India" },
      { "@type": "AdministrativeArea", name: "Himachal Pradesh, India" },
    ],
    priceRange: "₹₹-₹₹₹",
  };
}

export function touristTripJsonLd(pkg: {
  title: string;
  slug: string;
  summary: string;
  durationDays: number;
  startingPrice: number;
  routeLine?: string;
  itinerary?: { dayNumber: number; title: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.summary,
    url: `https://bharatbhramantours.com/packages/${pkg.slug}`,
    touristType: "Adventure tourism",
    itinerary: pkg.itinerary
      ? {
          "@type": "ItemList",
          itemListElement: pkg.itinerary.map((day) => ({
            "@type": "ListItem",
            position: day.dayNumber,
            name: `Day ${day.dayNumber}: ${day.title}`,
          })),
        }
      : undefined,
    offers: {
      "@type": "Offer",
      price: pkg.startingPrice,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Bharat Bhraman Tour & Travels",
      url: "https://bharatbhramantours.com",
    },
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
