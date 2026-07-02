import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import { waLink } from "@/lib/config";
import {
  placeholderDestinations,
  placeholderPackages,
  destinationImages,
  placeholderHeroImage,
} from "@/lib/placeholder-data";

export function generateStaticParams() {
  return placeholderDestinations.map((d) => ({
    slug: d.slug!.current,
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const dest = placeholderDestinations.find((d) => d.slug?.current === slug);
    return {
      title: dest?.title ?? "Destination",
      description: `Explore ${dest?.title ?? "this destination"} — altitude, best months, permits, and packages.`,
    };
  });
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = placeholderDestinations.find((d) => d.slug?.current === slug);

  if (!dest) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-snow pt-20">
        <p className="text-h2 font-display text-night">Destination not found</p>
      </main>
    );
  }

  const relatedPackages = placeholderPackages.filter((pkg) =>
    pkg.title?.toLowerCase().includes(dest.title?.toLowerCase() ?? "")
  );

  return (
    <main>
      <Hero
        imageSrc={destinationImages[slug] || placeholderHeroImage}
        imageAlt={`${dest.title}, ${dest.region}`}
        headline={dest.title!}
        subline={`${dest.region} · ${dest.altitudeMeters?.toLocaleString()}m`}
        height="inner"
      />

      <section className="bg-snow py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="text-center">
                  <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                    Altitude
                  </p>
                  <p className="mt-1 font-display text-h3 text-night">
                    {dest.altitudeMeters?.toLocaleString()}m
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                    Best Months
                  </p>
                  <p className="mt-1 text-body text-charcoal">
                    {dest.bestMonths?.slice(0, 4).join(", ")}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                    Permit
                  </p>
                  <p className="mt-1 text-body text-charcoal">
                    {dest.permitRequired ? "Required" : "Not required"}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {relatedPackages.length > 0 && (
        <section className="bg-night py-24 md:py-32">
          <Container>
            <FadeIn>
              <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
                Packages covering {dest.title}
              </p>
              <h2 className="mb-12 font-display text-h2 leading-heading text-snow">
                Explore {dest.title}
              </h2>
            </FadeIn>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPackages.map((pkg, i) => (
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
      )}

      <CtaBand whatsappHref={waLink(`Hi, I want to visit ${dest.title}.`)} />
    </main>
  );
}
