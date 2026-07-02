import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import DestinationTile from "@/components/DestinationTile";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import JsonLd, { travelAgencyJsonLd } from "@/components/JsonLd";
import { waLink } from "@/lib/config";
import {
  placeholderPackages,
  placeholderDestinations,
  placeholderTestimonials,
  placeholderWhyUs,
  placeholderHeroImage,
  destinationImages,
} from "@/lib/placeholder-data";

export default function HomePage() {
  const signaturePackages = placeholderPackages.filter((p) => p.isSignature);
  const allPackages = placeholderPackages;
  const destinations = placeholderDestinations;
  const testimonials = placeholderTestimonials;
  const whyUs = placeholderWhyUs;

  return (
    <main>
      <JsonLd data={travelAgencyJsonLd()} />
      {/* Hero */}
      <Hero
        imageSrc={placeholderHeroImage}
        imageAlt="Pangong Tso lake reflecting the Himalayan sky at dawn"
        headline="The Himalayas, Properly."
        subline="Acclimatization-first itineraries, local drivers who know every crossing, permits handled before you land."
        ctaLabel="Plan My Trip"
        ctaHref="/contact"
      />

      {/* Positioning Intro */}
      <section className="bg-snow py-24 md:py-32">
        <Container className="text-center">
          <FadeIn>
            <p className="mx-auto max-w-3xl font-display text-h2 leading-heading tracking-heading text-night">
              You don&apos;t come to Ladakh for a holiday. You come to stand at
              the edge of the world and feel it stare back.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-body leading-body text-charcoal/70">
              Bharat Bhraman is the operator that lives here — routes shaped
              around your body&apos;s need to adjust, vehicles equipped for every
              altitude, a team that knows every road by the sound of its gravel.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Signature Expeditions */}
      {signaturePackages.length > 0 && (
        <section className="bg-night py-24 md:py-32">
          <Container>
            <FadeIn>
              <SectionHeading
                eyebrow="Signature Expeditions"
                title="Flagship Journeys"
                description="Fixed-departure experiences designed around rare moments — new moon skies, golden-hour routes, last-village stays."
                dark
              />
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-2">
              {signaturePackages.map((pkg, i) => (
                <FadeIn key={pkg._id} delay={i * 100}>
                  <PackageCard
                    title={pkg.title!}
                    slug={pkg.slug!.current}
                    imageSrc={placeholderHeroImage}
                    imageAlt={`${pkg.title} hero image`}
                    durationDays={pkg.durationDays!}
                    routeLine={pkg.routeLine}
                    bestMonths={pkg.bestMonths}
                    startingPrice={pkg.startingPrice!}
                    isSignature
                  />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* All Packages Preview */}
      <section className="bg-snow py-24 md:py-32">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Our Packages"
              title="Find Your Route"
              description="Every itinerary paced for altitude, priced with no hidden costs, led by drivers who know the roads."
            />
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allPackages
              .filter((p) => !p.isSignature)
              .slice(0, 6)
              .map((pkg, i) => (
                <FadeIn key={pkg._id} delay={i * 80}>
                  <PackageCard
                    title={pkg.title!}
                    slug={pkg.slug!.current}
                    imageSrc={placeholderHeroImage}
                    imageAlt={`${pkg.title} hero image`}
                    durationDays={pkg.durationDays!}
                    routeLine={pkg.routeLine}
                    bestMonths={pkg.bestMonths}
                    startingPrice={pkg.startingPrice!}
                  />
                </FadeIn>
              ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/packages"
              className="inline-block border border-night px-8 py-4 text-small font-semibold uppercase tracking-caps text-night transition-colors hover:bg-night hover:text-snow"
            >
              View All Packages
            </a>
          </div>
        </Container>
      </section>

      {/* Destinations */}
      <section className="bg-night py-24 md:py-32">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Destinations"
              title="Where We Take You"
              dark
            />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 9).map((dest, i) => (
              <FadeIn key={dest._id} delay={i * 60}>
                <DestinationTile
                  title={dest.title!}
                  slug={dest.slug!.current}
                  imageSrc={destinationImages[dest.slug!.current] || placeholderHeroImage}
                  imageAlt={`${dest.title}, ${dest.region}`}
                  region={dest.region}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Us */}
      <section className="bg-snow py-24 md:py-32">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Why Bharat Bhraman"
              title="What Sets Us Apart"
            />
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-saffron/10">
                    <span className="text-h3 text-saffron">
                      {item.icon === "mountain" && "⛰"}
                      {item.icon === "heart" && "❤"}
                      {item.icon === "phone" && "📞"}
                      {item.icon === "shield" && "🛡"}
                      {item.icon === "check" && "✓"}
                    </span>
                  </div>
                  <h3 className="text-small font-semibold uppercase tracking-caps text-night">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-small leading-body text-charcoal/70">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-night py-24 md:py-32">
        <Container>
          <FadeIn>
            <div className="flex flex-col items-center gap-16">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t._id}
                  quote={t.quote!}
                  name={t.name!}
                  location={t.location}
                  tripName={t.tripTaken?.title}
                />
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA Band */}
      <CtaBand
        headline="Ready when the mountains are."
        subline="Tell us your dates, your pace, your dream — we handle the rest."
        whatsappHref={waLink()}
      />
    </main>
  );
}
