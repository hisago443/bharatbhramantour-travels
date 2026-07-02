import type { Metadata } from "next";
import Container from "@/components/Container";
import GuideCard from "@/components/GuideCard";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import { waLink } from "@/lib/config";
import { placeholderHeroImage } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Guides — Know Before You Go",
  description:
    "Essential Ladakh travel guides: Inner Line Permits, acclimatization at 3,500m+, best months, road comparisons, mobile & ATM reality, and more.",
};

const guides = [
  { title: "Inner Line Permit for Ladakh: Complete Guide", slug: "inner-line-permit-ladakh", excerpt: "Who needs it, how to apply, current costs, and the areas it covers — everything about the ILP for domestic and international travellers." },
  { title: "Acclimatization in Ladakh: How to Not Ruin Your Trip", slug: "acclimatization-ladakh", excerpt: "Leh sits at 3,500m. Your body needs time. Here's how to pace your first 48 hours, what AMS feels like, and when to take Diamox." },
  { title: "Best Time to Visit Ladakh: Month-by-Month", slug: "best-time-ladakh", excerpt: "May is opening season, June–September is peak, October is closing. Each month brings different roads, crowds, and colours." },
  { title: "Manali–Leh vs Srinagar–Leh: Which Road and Why", slug: "manali-leh-vs-srinagar-leh", excerpt: "Two legendary highways into Ladakh. One climbs through Lahaul and 5 passes. The other winds through Kashmir and Kargil. How to choose." },
  { title: "Pangong vs Tso Moriri vs Hanle: Choosing Your Lakes", slug: "pangong-vs-tso-moriri-vs-hanle", excerpt: "Three very different high-altitude experiences. Pangong is the icon, Tso Moriri is the quiet one, Hanle is the dark sky." },
  { title: "Turtuk & Thang: Visiting India's Last Villages", slug: "turtuk-thang-last-villages", excerpt: "Opened to tourists in 2010, these Balti villages near the LoC offer apricot orchards, warm hospitality, and a respectful-tourism perspective." },
];

export default function GuidesPage() {
  return (
    <main>
      <section className="bg-night pt-32 pb-20">
        <Container className="text-center">
          <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
            Know Before You Go
          </p>
          <h1 className="font-display text-h1 leading-heading tracking-heading text-snow">
            Travel Guides
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body font-light leading-body text-stone">
            Practical, honest information from people who live and work in the
            Himalayas — permits, altitude, roads, connectivity, and everything
            you actually need to know.
          </p>
        </Container>
      </section>

      <section className="bg-snow py-24 md:py-32">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, i) => (
              <FadeIn key={guide.slug} delay={i * 80}>
                <GuideCard
                  title={guide.title}
                  slug={guide.slug}
                  imageSrc={placeholderHeroImage}
                  imageAlt={guide.title}
                  excerpt={guide.excerpt}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand whatsappHref={waLink()} />
    </main>
  );
}
