import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PackageCard from "@/components/PackageCard";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import BackButton from "@/components/BackButton";
import VideoHero from "@/components/VideoHero";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { waLink } from "@/lib/config";
import {
  placeholderDestinations,
  placeholderPackages,
  destinationHeroImages,
  placeholderHeroImage,
  packageCardImages,
  destinationVideos,
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

      {/* Hero with video loop */}
      <div className="relative">
        <div className="absolute left-6 top-20 z-20 md:left-8 md:top-24">
          <BackButton className="text-snow/70 hover:text-snow" />
        </div>
        <VideoHero
          videos={destinationVideos[slug] || []}
          posterSrc={destinationHeroImages[slug] || placeholderHeroImage}
          posterAlt={`${dest.title}, ${dest.region}`}
        >
          <Container className="pb-16 pt-28">
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
      </VideoHero>
      </div>

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
                {relatedPackages.length > 0 && (
                  <div className="bg-night p-6">
                    <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                      Packages
                    </p>
                    <p className="mt-1 text-body text-snow">
                      {relatedPackages.length} trip{relatedPackages.length > 1 ? "s" : ""} through here
                    </p>
                  </div>
                )}
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

      {/* Flora & Fauna */}
      {content && content.floraFauna.length > 0 && (
        <section className="bg-snow py-20 md:py-28">
          <Container>
            <FadeIn>
              <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                The Natural World
              </p>
              <h2 className="mb-14 font-display text-h2 leading-heading text-night">
                Flora &amp; Fauna
              </h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-2">
              {content.floraFauna.map((item, i) => (
                <FadeIn key={item.heading} delay={i * 80}>
                  <div className="group overflow-hidden bg-night">
                    {item.image && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageAlt || item.heading}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <div className="p-6 md:p-8">
                      <h3 className="font-display text-h4 text-saffron">{item.heading}</h3>
                      <p className="mt-3 text-small leading-body text-stone">{item.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* History & Culture */}
      {content && content.historyCulture.length > 0 && (
        <section className="bg-night py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                  Heritage
                </p>
                <h2 className="mb-10 font-display text-h2 leading-heading text-snow">
                  History &amp; Culture
                </h2>
              </FadeIn>
              <div className="space-y-6">
                {content.historyCulture.map((para, i) => (
                  <FadeIn key={i} delay={i * 60}>
                    <p className={`leading-body ${i === 0 ? "font-display text-h3 leading-snug text-snow" : "text-body font-light text-stone"}`}>
                      {para}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Local Cuisine */}
      {content && content.localCuisine.length > 0 && (
        <section className="bg-snow py-20 md:py-28">
          <Container>
            <FadeIn>
              <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                Taste the Place
              </p>
              <h2 className="mb-14 font-display text-h2 leading-heading text-night">
                Local Cuisine
              </h2>
            </FadeIn>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {content.localCuisine.map((item, i) => (
                <FadeIn key={item.dish} delay={i * 60}>
                  <div className="group overflow-hidden bg-night">
                    {item.image && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageAlt || item.dish}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-6 md:p-8">
                      <h3 className="font-display text-h3 italic text-saffron">{item.dish}</h3>
                      <p className="mt-3 text-small leading-body text-stone">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Geography & Fun Facts */}
      {content && (content.geography.length > 0 || content.funFacts.length > 0) && (
        <section className="bg-night py-20 md:py-28">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2">
              {content.geography.length > 0 && (
                <FadeIn>
                  <div>
                    <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                      Landscape
                    </p>
                    <h2 className="mb-8 font-display text-h2 leading-heading text-snow">
                      Geography &amp; Climate
                    </h2>
                    <div className="space-y-5">
                      {content.geography.map((para, i) => (
                        <p key={i} className="text-body leading-body font-light text-stone">{para}</p>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}
              {content.funFacts.length > 0 && (
                <FadeIn delay={150}>
                  <div>
                    <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                      Did You Know?
                    </p>
                    <h2 className="mb-8 font-display text-h2 leading-heading text-snow">
                      Fascinating Facts
                    </h2>
                    <ul className="space-y-4">
                      {content.funFacts.map((fact, i) => (
                        <li key={i} className="flex items-start gap-4 text-body leading-body font-light text-stone">
                          <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center bg-saffron text-caption font-semibold text-snow">
                            {i + 1}
                          </span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              )}
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
