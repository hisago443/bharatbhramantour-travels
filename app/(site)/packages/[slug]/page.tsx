import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import Accordion from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import BackButton from "@/components/BackButton";
import FadeIn from "@/components/FadeIn";
import JsonLd, { touristTripJsonLd, faqPageJsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { waLink } from "@/lib/config";
import { placeholderDestinations, placeholderHeroImage, destinationImages } from "@/lib/placeholder-data";
import { sanityFetch } from "@/sanity/lib/client";
import { packageBySlugQuery, allPackagesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import type { Package } from "@/sanity/lib/types";

function AltitudeProfile({ days }: { days: { dayNumber: number; title: string; altitudeMeters?: number; stayLocation?: string }[] }) {
  const altitudes = days.map((d) => d.altitudeMeters ?? 0);
  const max = Math.max(...altitudes);
  const min = Math.min(...altitudes);
  const range = max - min || 1;

  return (
    <div className="overflow-hidden bg-night/5 p-4 sm:p-6">
      <div className="flex items-end gap-1.5 sm:gap-3" style={{ height: 180 }}>
        {days.map((day) => {
          const alt = day.altitudeMeters ?? 0;
          const pct = 30 + ((alt - min) / range) * 65;
          return (
            <div key={day.dayNumber} className="group relative flex flex-1 flex-col items-center">
              <div className="mb-1 text-[10px] font-semibold text-night sm:text-caption">
                {alt.toLocaleString()}m
              </div>
              <div
                className="w-full bg-saffron transition-colors group-hover:bg-saffron-hover"
                style={{ height: `${pct}%` }}
              />
              <span className="mt-2 text-[10px] font-medium text-charcoal/70 sm:text-caption">
                D{day.dayNumber}
              </span>
            </div>
          );
      })}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const packages = await sanityFetch<Package[]>(allPackagesQuery);
  return (packages || []).map((pkg) => ({
    slug: pkg.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await sanityFetch<Package>(packageBySlugQuery, { slug });
  return {
    title: pkg?.title ?? "Package",
    description: pkg?.summary ?? "Ladakh tour package details",
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = await sanityFetch<Package>(packageBySlugQuery, { slug });

  if (!pkg) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-snow pt-20">
        <p className="text-h2 font-display text-night">Package not found</p>
      </main>
    );
  }

  const routeText = `${pkg.title ?? ""} ${pkg.routeLine ?? ""}`.toLowerCase();
  const relatedDestinations = placeholderDestinations.filter((d) => {
    const name = (d.title ?? "").toLowerCase().split(" ")[0];
    return name.length > 2 && routeText.includes(name);
  });

  const itineraryItems =
    pkg.itinerary?.map((day) => ({
      id: `day-${day.dayNumber}`,
      title: `Day ${day.dayNumber}: ${day.title}`,
      content: (
        <div className="space-y-2">
          {day.stayLocation && (
            <p className="text-small text-charcoal/70">
              <span className="font-medium">Stay:</span> {day.stayLocation}
            </p>
          )}
          {day.altitudeMeters && (
            <p className="text-small text-charcoal/70">
              <span className="font-medium">Altitude:</span>{" "}
              {day.altitudeMeters.toLocaleString()}m
            </p>
          )}
          {day.drivingHours && (
            <p className="text-small text-charcoal/70">
              <span className="font-medium">Drive:</span> ~{day.drivingHours}h
            </p>
          )}
        </div>
      ),
    })) ?? [];

  const faqItems =
    pkg.faq?.map((f, i) => ({
      id: `faq-${i}`,
      title: f.question,
      content: <p>{f.answer as unknown as string}</p>,
    })) ?? [];

  const heroImageUrl = pkg.heroImage ? urlFor(pkg.heroImage).url() : placeholderHeroImage;

  return (
    <main>
      <JsonLd
        data={touristTripJsonLd({
          title: pkg.title!,
          slug: pkg.slug!.current,
          summary: pkg.summary!,
          durationDays: pkg.durationDays!,
          startingPrice: pkg.startingPrice!,
          routeLine: pkg.routeLine,
          itinerary: pkg.itinerary,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://bharatbhramantours.com" },
          { name: "Packages", url: "https://bharatbhramantours.com/packages" },
          { name: pkg.title!, url: `https://bharatbhramantours.com/packages/${pkg.slug!.current}` },
        ])}
      />
      {pkg.faq && pkg.faq.length > 0 && <JsonLd data={faqPageJsonLd(pkg.faq as any)} />}
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src={heroImageUrl}
          alt={pkg.heroImage?.alt || `${pkg.title} — ${pkg.routeLine || "Ladakh tour"}`}
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/30 to-transparent" />
        <Container className="relative z-10 pb-16 pt-24">
          <BackButton className="mb-10 text-snow/70 hover:text-snow" />
          <div className="max-w-3xl">
            {pkg.isSignature && <Badge variant="saffron" className="mb-4">Signature Expedition</Badge>}
            <Badge variant="night" className="mb-4 ml-2">{pkg.durationDays} Days</Badge>
            <h1 className="font-display text-h1 leading-heading tracking-heading text-snow">
              {pkg.title}
            </h1>
            {pkg.routeLine && (
              <p className="mt-4 text-body font-light text-stone">{pkg.routeLine}</p>
            )}
            {pkg.bestMonths && pkg.bestMonths.length > 0 && (
              <p className="mt-3 text-small text-slate">
                Best months: {pkg.bestMonths.join(", ")}
              </p>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-snow py-16 md:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_360px]">
            {/* Main content */}
            <div>
              {/* Overview */}
              <FadeIn>
                <div className="prose prose-lg max-w-none text-charcoal/80">
                  <p>{pkg.summary}</p>
                </div>
              </FadeIn>

              {/* Itinerary — visual timeline */}
              {pkg.itinerary && pkg.itinerary.length > 0 && (
                <div className="mt-16">
                  <FadeIn>
                    <h2 className="mb-10 font-display text-h2 leading-heading text-night">
                      Day-by-Day Itinerary
                    </h2>
                  </FadeIn>

                  <div className="space-y-0">
                    {pkg.itinerary.map((day, idx) => {
                      return (
                        <FadeIn key={day.dayNumber} delay={idx * 60}>
                          <div className="relative border-l-2 border-saffron/30 pb-12 pl-8 last:pb-0 sm:pl-10">
                            {/* Timeline dot */}
                            <div className="absolute -left-[9px] top-0 h-4 w-4 border-2 border-saffron bg-snow" />

                            {/* Day badge */}
                            <p className="mb-3 text-caption font-semibold uppercase tracking-caps text-saffron">
                              Day {day.dayNumber}
                            </p>

                            {/* Title */}
                            <h3 className="mb-4 font-display text-h3 leading-heading text-night">
                              {day.title}
                            </h3>

                            {/* Description */}
                            {day.description && (
                              <div className="mb-4 text-body leading-relaxed text-charcoal/80 prose prose-sm max-w-none">
                                <PortableText value={day.description} />
                              </div>
                            )}

                            {/* Meta chips */}
                            <div className="flex flex-wrap gap-3">
                              {day.stayLocation && (
                                <span className="inline-flex items-center gap-1.5 bg-night/5 px-3 py-1.5 text-caption text-charcoal/70">
                                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg>
                                  {day.stayLocation}
                                </span>
                              )}
                              {day.altitudeMeters && (
                                <span className="inline-flex items-center gap-1.5 bg-night/5 px-3 py-1.5 text-caption text-charcoal/70">
                                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 21l4.5-9 3.5 5 4-7M2 21h20" /></svg>
                                  {day.altitudeMeters.toLocaleString()}m
                                </span>
                              )}
                              {day.drivingHours && (
                                <span className="inline-flex items-center gap-1.5 bg-night/5 px-3 py-1.5 text-caption text-charcoal/70">
                                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                  ~{day.drivingHours}h drive
                                </span>
                              )}
                            </div>
                          </div>
                        </FadeIn>
                      );
                    })}
                  </div>

                  {/* Collapsed accordion fallback for quick scanning */}
                  {itineraryItems.length > 0 && (
                    <details className="mt-8">
                      <summary className="cursor-pointer text-small font-medium text-saffron hover:text-saffron-hover">
                        Quick overview (expandable list)
                      </summary>
                      <div className="mt-4">
                        <Accordion items={itineraryItems} />
                      </div>
                    </details>
                  )}
                </div>
              )}

              {/* Altitude Profile */}
              {pkg.itinerary && pkg.itinerary.length > 1 && (
                <FadeIn>
                  <div className="mt-16">
                    <h2 className="mb-2 font-display text-h3 leading-heading text-night">
                      Altitude Profile
                    </h2>
                    <p className="mb-6 text-small text-charcoal/60">
                      Metres above sea level per day — see how the route builds altitude gradually.
                    </p>
                    <AltitudeProfile days={pkg.itinerary} />
                  </div>
                </FadeIn>
              )}

              {/* Inclusions / Exclusions */}
              {(pkg.inclusions || pkg.exclusions) && (
                <FadeIn>
                  <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {pkg.inclusions && (
                      <div>
                        <h3 className="mb-4 font-display text-h3 text-night">
                          Included
                        </h3>
                        <ul className="space-y-2">
                          {pkg.inclusions.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-body text-charcoal/80"
                            >
                              <span className="mt-1 text-success">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {pkg.exclusions && (
                      <div>
                        <h3 className="mb-4 font-display text-h3 text-night">
                          Not Included
                        </h3>
                        <ul className="space-y-2">
                          {pkg.exclusions.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-body text-charcoal/80"
                            >
                              <span className="mt-1 text-error">✗</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </FadeIn>
              )}

              {/* FAQ */}
              {faqItems.length > 0 && (
                <FadeIn>
                  <div className="mt-16">
                    <h2 className="mb-8 font-display text-h2 leading-heading text-night">
                      Frequently Asked Questions
                    </h2>
                    <Accordion items={faqItems} />
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Sticky sidebar (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6 bg-night p-8">
                <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                  {pkg.durationDays} Days
                </p>
                <p className="font-display text-h3 text-snow">{pkg.title}</p>
                <a
                  href="/contact"
                  className="block w-full bg-saffron py-4 text-center text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover"
                >
                  Plan My Trip
                </a>
                <a
                  href={waLink(`Hi, I'm interested in the ${pkg.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-snow/20 py-4 text-center text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:border-snow/40"
                >
                  WhatsApp Us
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 bg-night p-4 lg:hidden">
        <a
          href="/contact"
          className="flex-1 bg-saffron py-3 text-center text-small font-semibold uppercase tracking-caps text-snow"
        >
          Plan My Trip
        </a>
        <a
          href={waLink(`Hi, I'm interested in the ${pkg.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border border-snow/20 py-3 text-center text-small font-semibold uppercase tracking-caps text-snow"
        >
          WhatsApp
        </a>
      </div>

      {/* Destinations on this route */}
      {relatedDestinations.length > 0 && (
        <section className="bg-night py-16 md:py-24">
          <Container>
            <FadeIn>
              <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
                Destinations on This Route
              </p>
              <h2 className="mb-10 font-display text-h2 leading-heading text-snow">
                Places You&apos;ll Visit
              </h2>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDestinations.map((dest, i) => (
                <FadeIn key={dest._id} delay={i * 60}>
                  <a
                    href={`/destinations/${dest.slug!.current}`}
                    className="group relative block aspect-[16/9] overflow-hidden"
                  >
                    <Image
                      src={destinationImages[dest.slug!.current] || placeholderHeroImage}
                      alt={`${dest.title}, ${dest.region}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="font-display text-h3 text-snow">{dest.title}</p>
                      <p className="text-caption text-snow/70">
                        {dest.altitudeMeters?.toLocaleString()}m · {dest.region}
                      </p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand whatsappHref={waLink()} />
    </main>
  );
}
