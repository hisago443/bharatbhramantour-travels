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
import { placeholderPackages, placeholderHeroImage, packageHeroImages } from "@/lib/placeholder-data";

export function generateStaticParams() {
  return placeholderPackages.map((pkg) => ({
    slug: pkg.slug!.current,
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const pkg = placeholderPackages.find((p) => p.slug?.current === slug);
    return {
      title: pkg?.title ?? "Package",
      description: pkg?.summary ?? "Ladakh tour package details",
    };
  });
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = placeholderPackages.find((p) => p.slug?.current === slug);

  if (!pkg) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-snow pt-20">
        <p className="text-h2 font-display text-night">Package not found</p>
      </main>
    );
  }

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
      content: <p>{f.answer}</p>,
    })) ?? [];

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
      {pkg.faq && pkg.faq.length > 0 && <JsonLd data={faqPageJsonLd(pkg.faq)} />}
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src={packageHeroImages[pkg.slug!.current] || placeholderHeroImage}
          alt={`${pkg.title} — ${pkg.routeLine || "Ladakh tour"}`}
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
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <p className="text-h3 font-semibold text-snow">
                From ₹{pkg.startingPrice?.toLocaleString("en-IN")}
              </p>
              {pkg.priceNote && (
                <p className="text-small text-slate">{pkg.priceNote}</p>
              )}
            </div>
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

              {/* Itinerary */}
              {itineraryItems.length > 0 && (
                <FadeIn>
                  <div className="mt-16">
                    <h2 className="mb-8 font-display text-h2 leading-heading text-night">
                      Day-by-Day Itinerary
                    </h2>
                    <Accordion items={itineraryItems} />
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
                <p className="text-h3 font-semibold text-snow">
                  From ₹{pkg.startingPrice?.toLocaleString("en-IN")}
                </p>
                {pkg.priceNote && (
                  <p className="text-caption text-slate">{pkg.priceNote}</p>
                )}
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

      <CtaBand whatsappHref={waLink()} />
    </main>
  );
}
