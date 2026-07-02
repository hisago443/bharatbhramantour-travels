import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PackageCard from "@/components/PackageCard";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { waLink } from "@/lib/config";
import {
  placeholderDestinations,
  placeholderPackages,
  destinationHeroImages,
  placeholderHeroImage,
  packageCardImages,
} from "@/lib/placeholder-data";
import { destinationContent } from "@/lib/destination-content";

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
    const content = destinationContent[slug];
    return {
      title: dest ? `${dest.title} — Travel Guide & Tours` : "Destination",
      description:
        content?.tagline ??
        `Explore ${dest?.title ?? "this destination"} — altitude, best months, permits, and packages.`,
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
  const content = destinationContent[slug];

  if (!dest) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-snow pt-20">
        <p className="text-h2 font-display text-night">Destination not found</p>
      </main>
    );
  }

  const relatedPackages = placeholderPackages.filter(
    (pkg) =>
      pkg.title?.toLowerCase().includes(dest.title?.toLowerCase().split(" ")[0] ?? "") ||
      pkg.routeLine?.toLowerCase().includes(dest.title?.toLowerCase().split(" ")[0] ?? "")
  );

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://bharatbhramantours.com" },
          { name: "Destinations", url: "https://bharatbhramantours.com/destinations" },
          { name: dest.title!, url: `https://bharatbhramantours.com/destinations/${slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <Image
          src={destinationHeroImages[slug] || placeholderHeroImage}
          alt={`${dest.title}, ${dest.region}`}
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-night/10" />
        <Container className="relative z-10 pb-16 pt-40">
          <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
            {dest.region} · {dest.altitudeMeters?.toLocaleString()}m
          </p>
          <h1 className="max-w-3xl font-display text-hero leading-hero tracking-hero text-snow">
            {dest.title}
          </h1>
          {content && (
            <p className="mt-6 max-w-2xl text-body font-light leading-body text-stone">
              {content.tagline}
            </p>
          )}
        </Container>
      </section>

      {/* Editorial intro + stats */}
      <section className="bg-snow py-20 md:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
            <FadeIn>
              <div className="space-y-6">
                {(content?.intro ?? []).map((para, i) =>
                  i === 0 ? (
                    <p
                      key={i}
                      className="font-display text-h3 leading-snug text-night"
                    >
                      {para}
                    </p>
                  ) : (
                    <p key={i} className="text-body leading-body text-charcoal/80">
                      {para}
                    </p>
                  )
                )}
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-px bg-stone/40">
                <div className="bg-night p-6">
                  <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                    Altitude
                  </p>
                  <p className="mt-1 font-display text-h2 text-snow">
                    {dest.altitudeMeters?.toLocaleString()}m
                  </p>
                </div>
                <div className="bg-night p-6">
                  <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                    Best Months
                  </p>
                  <p className="mt-1 text-body text-snow">
                    {dest.bestMonths?.slice(0, 6).join(" · ")}
                  </p>
                </div>
                <div className="bg-night p-6">
                  <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                    Permit
                  </p>
                  <p className="mt-1 text-body text-snow">
                    {dest.permitRequired
                      ? "Inner Line Permit — we arrange it"
                      : "No permit required"}
                  </p>
                </div>
                <div className="bg-night p-6">
                  <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                    Region
                  </p>
                  <p className="mt-1 text-body text-snow">{dest.region}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      {content && content.highlights.length > 0 && (
        <section className="bg-night py-20 md:py-28">
          <Container>
            <FadeIn>
              <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                Don&apos;t Miss
              </p>
              <h2 className="mb-14 font-display text-h2 leading-heading text-snow">
                {dest.title}, Properly
              </h2>
            </FadeIn>
            <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {content.highlights.map((h, i) => (
                <FadeIn key={h.title} delay={i * 80}>
                  <div className="border-t border-snow/15 pt-6">
                    <p className="font-display text-h4 italic text-saffron">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-h3 leading-heading text-snow">
                      {h.title}
                    </h3>
                    <p className="mt-3 text-small leading-body text-slate">
                      {h.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Know before you go + How to reach */}
      {content && (
        <section className="bg-snow py-20 md:py-28">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2">
              <FadeIn>
                <div>
                  <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                    Know Before You Go
                  </p>
                  <h2 className="mb-8 font-display text-h2 leading-heading text-night">
                    The Practical Bits
                  </h2>
                  <div className="space-y-8">
                    {content.knowBeforeYouGo.map((item) => (
                      <div key={item.label} className="border-l-2 border-saffron pl-6">
                        <h3 className="text-small font-semibold uppercase tracking-caps text-night">
                          {item.label}
                        </h3>
                        <p className="mt-2 text-body leading-body text-charcoal/80">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={150}>
                <div>
                  <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                    Getting There
                  </p>
                  <h2 className="mb-8 font-display text-h2 leading-heading text-night">
                    How to Reach
                  </h2>
                  <p className="text-body leading-body text-charcoal/80">
                    {content.howToReach}
                  </p>
                  <div className="mt-10 bg-pine p-8">
                    <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                      Best Time to Visit
                    </p>
                    <p className="mt-3 text-body leading-body text-snow">
                      {content.bestTimeNote}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      )}

      {/* Related packages */}
      {relatedPackages.length > 0 && (
        <section className="bg-night py-20 md:py-28">
          <Container>
            <FadeIn>
              <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                Journeys through {dest.title}
              </p>
              <h2 className="mb-12 font-display text-h2 leading-heading text-snow">
                Travel It With Us
              </h2>
            </FadeIn>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPackages.slice(0, 3).map((pkg, i) => (
                <FadeIn key={pkg._id} delay={i * 80}>
                  <PackageCard
                    title={pkg.title!}
                    slug={pkg.slug!.current}
                    imageSrc={packageCardImages[pkg.slug!.current] || placeholderHeroImage}
                    imageAlt={`${pkg.title} — ${pkg.routeLine || "Ladakh"}`}
                    durationDays={pkg.durationDays!}
                    routeLine={pkg.routeLine}
                    startingPrice={pkg.startingPrice!}
                    isSignature={pkg.isSignature}
                  />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        headline={`Ready for ${dest.title}?`}
        subline="Tell us your dates and pace — we'll build the route around you."
        whatsappHref={waLink(`Hi, I want to visit ${dest.title}.`)}
      />
    </main>
  );
}
