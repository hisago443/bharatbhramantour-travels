import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import { waLink } from "@/lib/config";
import { placeholderPackages, placeholderHeroImage } from "@/lib/placeholder-data";

const tripTypes = [
  { title: "Bike Expedition", slug: "bike-expedition" },
  { title: "Family", slug: "family" },
  { title: "Honeymoon", slug: "honeymoon" },
  { title: "Group & Corporate", slug: "group-corporate" },
  { title: "Photography", slug: "photography" },
  { title: "Spiritual", slug: "spiritual" },
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
      title: tt ? `${tt.title} Tours` : "Trip Type",
      description: `${tt?.title ?? "Specialized"} Ladakh and Himachal tour packages by Bharat Bhraman.`,
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
  const packages = placeholderPackages.slice(0, 4);

  if (!tripType) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-snow pt-20">
        <p className="text-h2 font-display text-night">Trip type not found</p>
      </main>
    );
  }

  return (
    <main>
      <Hero
        imageSrc={placeholderHeroImage}
        imageAlt={`${tripType.title} tours in Ladakh`}
        headline={`${tripType.title} Tours`}
        subline={`Curated ${tripType.title.toLowerCase()} experiences across Ladakh and Himachal Pradesh.`}
        height="inner"
      />

      <section className="bg-snow py-24 md:py-32">
        <Container>
          <FadeIn>
            <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
              {tripType.title} Packages
            </p>
            <h2 className="mb-12 font-display text-h2 leading-heading text-night">
              Recommended for You
            </h2>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg._id} delay={i * 80}>
                <PackageCard
                  title={pkg.title!}
                  slug={pkg.slug!.current}
                  imageSrc={placeholderHeroImage}
                  imageAlt={`${pkg.title}`}
                  durationDays={pkg.durationDays!}
                  routeLine={pkg.routeLine}
                  startingPrice={pkg.startingPrice!}
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
