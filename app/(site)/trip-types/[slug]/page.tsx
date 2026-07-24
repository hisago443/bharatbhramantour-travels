import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import BackButton from "@/components/BackButton";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import { waLink } from "@/lib/config";
import {
  placeholderPackages,
  placeholderHeroImage,
  packageCardImages,
  destinationHeroImages,
} from "@/lib/placeholder-data";

const tripTypes = [
  {
    title: "Bike Expedition",
    slug: "bike-expedition",
    heroKey: "manali",
    intro:
      "The Manali–Leh and Srinagar–Leh highways are the two greatest motorcycle journeys in India, and we've been supporting riders on them for years. Our bike expeditions run with a backup vehicle, a mechanic on call, luggage transfer, oxygen on board, and fuel planning for the famous 365-km dry stretch — so all you carry is the ride itself.",
    matchSlugs: ["8-day-manali-to-leh-overland-expedition", "10-day-trans-himalayan-crossing", "9-day-grand-ladakh"],
  },
  {
    title: "Family",
    slug: "family",
    heroKey: "leh",
    intro:
      "Ladakh with parents or kids isn't just possible — done right, it's the family trip everyone measures the rest against. We pace these itineraries gently: extra acclimatization time, comfortable hotels over camps where it matters, shorter driving days, oxygen-equipped vehicles, and a driver who doubles as the calmest tour manager in the Himalayas.",
    matchSlugs: ["5-day-leh-comfort", "7-day-leh-nubra-pangong-classic-circuit", "5-day-manali-sissu-jispa-getaway"],
  },
  {
    title: "Honeymoon",
    slug: "honeymoon",
    heroKey: "pangong-tso",
    intro:
      "Dawn at Pangong with the shore to yourselves. A private candle-lit dinner at a Nubra camp under more stars than you've ever seen. Our honeymoon circuits trade big-group energy for privacy — the best rooms in the best camps, unhurried mornings, and a route built around golden light rather than checklists.",
    matchSlugs: ["7-day-leh-nubra-pangong-classic-circuit", "9-day-grand-ladakh", "5-day-manali-sissu-jispa-getaway"],
  },
  {
    title: "Group & Corporate",
    slug: "group-corporate",
    heroKey: "nubra-valley",
    intro:
      "From college batches to leadership offsites, we run group departures with the logistics muscle they need: multiple vehicles in convoy, bulk permits filed in one shot, camp buyouts for privacy, and an on-ground coordinator so the organiser actually gets to enjoy the trip too.",
    matchSlugs: ["7-day-leh-nubra-pangong-classic-circuit", "8-day-manali-to-leh-overland-expedition", "3-day-bir-billing-paragliding-weekend"],
  },
  {
    title: "Photography",
    slug: "photography",
    heroKey: "hanle",
    intro:
      "Ladakh rewards photographers who are in the right place at the right hour — which is a routing problem, and routing is what we do. Our photography expeditions schedule monasteries at morning prayer, dunes at golden hour, Pangong at dawn, and Hanle on the new moon, with drivers who understand that 'stop here' is a complete sentence.",
    matchSlugs: ["ladakh-photography-expedition", "hanle-dark-sky-expedition", "9-day-grand-ladakh"],
  },
  {
    title: "Spiritual",
    slug: "spiritual",
    heroKey: "leh",
    intro:
      "Ladakh's monasteries aren't museums — they're living centres of a thousand-year-old Buddhist tradition, and visiting them well takes local knowledge. We time visits to morning prayers at Thiksey, arrange quiet audiences where appropriate, include Gurudwara Pathar Sahib on the Srinagar road, and keep the pace contemplative rather than checklist-driven.",
    matchSlugs: ["7-day-leh-nubra-pangong-classic-circuit", "10-day-trans-himalayan-crossing", "5-day-leh-comfort"],
  },
];

export function generateStaticParams() {
  return tripTypes.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const tt = tripTypes.find((t) => t.slug === slug);
    return {
      title: tt ? `${tt.title} Tours in Ladakh & Himachal` : "Trip Type",
      description: tt?.intro.slice(0, 155) ?? `Specialized Ladakh and Himachal tour packages by Bharat Bhraman.`,
    };
  });
}

export default async function TripTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tripType = tripTypes.find((t) => t.slug === slug);

  if (!tripType) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-snow pt-20">
        <p className="text-h2 font-display text-night">Trip type not found</p>
      </main>
    );
  }

  const packages = tripType.matchSlugs
    .map((s) => placeholderPackages.find((p) => p.slug?.current === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main>
      <Hero
        imageSrc={destinationHeroImages[tripType.heroKey] || placeholderHeroImage}
        imageAlt={`${tripType.title} tours in Ladakh`}
        headline={`${tripType.title} Tours`}
        subline={`Curated ${tripType.title.toLowerCase()} experiences across Ladakh and Himachal Pradesh.`}
        height="inner"
      />

      {/* Back button + Editorial intro */}
      <section className="bg-snow py-20 md:py-24">
        <Container>
          <BackButton className="mb-10 text-charcoal/60 hover:text-night" />
          <FadeIn>
            <p className="mx-auto max-w-3xl text-center font-display text-h3 leading-snug text-night">
              {tripType.intro}
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-night py-20 md:py-28">
        <Container>
          <FadeIn>
            <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
              {tripType.title} Packages
            </p>
            <h2 className="mb-12 font-display text-h2 leading-heading text-snow">
              Recommended for You
            </h2>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg._id} delay={i * 80}>
                <PackageCard
                  title={pkg.title!}
                  slug={pkg.slug!.current}
                  imageSrc={packageCardImages[pkg.slug!.current] || placeholderHeroImage}
                  imageAlt={`${pkg.title} — ${pkg.routeLine || "Ladakh"}`}
                  durationDays={pkg.durationDays!}
                  routeLine={pkg.routeLine}
                  isSignature={pkg.isSignature}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        headline={`Let's plan your ${tripType.title.toLowerCase()} trip.`}
        subline="Tell us your dates and group — we'll shape the route around you."
        whatsappHref={waLink(`Hi, I'm interested in a ${tripType.title} trip.`)}
      />
    </main>
  );
}
