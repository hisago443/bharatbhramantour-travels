import Hero from "@/components/Hero";
import VideoHero from "@/components/VideoHero";
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
  placeholderDestinations,
  placeholderTestimonials,
  placeholderWhyUs,
  placeholderHeroImage,
  destinationImages,
} from "@/lib/placeholder-data";
import { sanityFetch } from "@/sanity/lib/client";
import { allPackagesQuery, signaturePackagesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Package } from "@/sanity/lib/types";

function WhyUsIcon({ name }: { name?: string }) {
  const cls = "h-6 w-6 text-saffron";
  switch (name) {
    case "mountain":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 21l4.5-9 3.5 5 4-7" /><path d="M2 21h20" /><path d="M15 10l2-4 5 15" /><path d="M2 21l6-10.5L11 16" />
        </svg>
      );
    case "heart":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "check":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

export default async function HomePage() {
  const signaturePackages = await sanityFetch<Package[]>(signaturePackagesQuery) || [];
  const allPackages = await sanityFetch<Package[]>(allPackagesQuery) || [];
  const destinations = placeholderDestinations;
  const testimonials = placeholderTestimonials;
  const whyUs = placeholderWhyUs;

  return (
    <main>
      <JsonLd data={travelAgencyJsonLd()} />
      {/* Hero with multi-video loop */}
      <VideoHero
        videos={[
          "/videos/hero-ladakh.mp4",
          "/videos/pangong-timelapse.mp4",
          "/videos/leh-monastery-aerial.mp4",
          "/videos/manali-aerial.mp4",
        ]}
        posterSrc={placeholderHeroImage}
        posterAlt="Aerial view of the Indus and Zanskar river confluence in Ladakh"
        height="full"
      >
        <Container className="pb-12 pt-24 text-center md:pb-20 md:pt-40">
          <h1 className="font-display text-hero leading-hero tracking-hero text-snow">
            The Himalayas, Properly.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body font-light leading-body text-stone">
            Acclimatization-first itineraries, local drivers who know every
            crossing, permits handled before you land.
          </p>
        </Container>
      </VideoHero>

      {/* Positioning Intro */}
      <section className="bg-snow py-24 md:py-32">
        <Container className="text-center">
          <FadeIn>
            <p className="mx-auto max-w-3xl font-display text-h2 leading-heading tracking-heading text-night">
              You don&apos;t come to Ladakh for a holiday. You come to stand at
              the edge of the world and{" "}
              <em className="text-lake">feel it stare back</em>.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-body leading-body text-charcoal/70">
              Bharat Bhraman is the operator that lives here — routes shaped
              around your body&apos;s need to adjust, vehicles equipped for every
              altitude, a team that knows every road by the sound of its gravel.
            </p>
          </FadeIn>

          {/* Editorial stats band */}
          <FadeIn delay={150}>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-y-10 border-t border-stone/60 pt-12 md:grid-cols-4">
              <div>
                <p className="font-display text-h1 leading-none text-night">14</p>
                <p className="mt-2 text-caption font-medium uppercase tracking-caps text-charcoal/60">
                  Destinations
                </p>
              </div>
              <div>
                <p className="font-display text-h1 leading-none text-night">
                  5,798<span className="text-h3">m</span>
                </p>
                <p className="mt-2 text-caption font-medium uppercase tracking-caps text-charcoal/60">
                  Highest Road We Drive
                </p>
              </div>
              <div>
                <p className="font-display text-h1 leading-none text-night">100%</p>
                <p className="mt-2 text-caption font-medium uppercase tracking-caps text-charcoal/60">
                  Permits Handled
                </p>
              </div>
              <div>
                <p className="font-display text-h1 leading-none text-night">24/7</p>
                <p className="mt-2 text-caption font-medium uppercase tracking-caps text-charcoal/60">
                  On-Road Support
                </p>
              </div>
            </div>
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
                    imageSrc={pkg.heroImage ? urlFor(pkg.heroImage).url() : placeholderHeroImage}
                    imageAlt={`${pkg.title} — ${pkg.routeLine || "Ladakh"}`}
                    durationDays={pkg.durationDays!}
                    routeLine={pkg.routeLine}
                    bestMonths={pkg.bestMonths}
                    startingPrice={pkg.startingPrice!}
                    isSignature
                    priority={i < 2}
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
                    imageSrc={pkg.heroImage ? urlFor(pkg.heroImage).url() : placeholderHeroImage}
                    imageAlt={`${pkg.title} — ${pkg.routeLine || "Ladakh"}`}
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
                  altitudeMeters={dest.altitudeMeters}
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
                    <WhyUsIcon name={item.icon} />
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
      <section className="bg-night py-24 md:py-32 overflow-hidden">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Traveller Stories"
              title="In Their Words"
              dark
            />
          </FadeIn>
        </Container>
        
        <div className="mt-16 flex overflow-hidden group">
          <div className="flex animate-marquee gap-8 w-max pr-8">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div key={`${t._id}-${idx}`} className="w-[85vw] max-w-[360px] shrink-0">
                <TestimonialCard
                  quote={t.quote!}
                  name={t.name!}
                  location={t.location}
                  tripName={t.tripTaken?.title}
                  tripDate={t.tripDate}
                />
              </div>
            ))}
          </div>
        </div>
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
