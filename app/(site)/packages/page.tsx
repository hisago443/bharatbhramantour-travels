import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import PackagesWithFilters from "@/components/PackagesWithFilters";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import { waLink } from "@/lib/config";
import { placeholderPackages, placeholderHeroImage, packageCardImages } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Ladakh and Himachal Pradesh tour packages — from 3-day weekends to 10-day trans-Himalayan crossings. Acclimatization-paced, locally guided, no hidden costs.",
};

export default function PackagesPage() {
  const packages = placeholderPackages;

  return (
    <main>
      <section className="bg-night pt-32 pb-20">
        <Container className="text-center">
          <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
            Our Packages
          </p>
          <h1 className="font-display text-h1 leading-heading tracking-heading text-snow">
            Every Route, Your Pace
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body font-light leading-body text-stone">
            Choose your duration, your style, your season — we build the rest
            around how you want to feel when you get home.
          </p>
        </Container>
      </section>

      <section className="bg-snow py-24 md:py-32">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Signature Expeditions"
              title="Flagship Journeys"
            />
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {packages
              .filter((p) => p.isSignature)
              .map((pkg, i) => (
                <FadeIn key={pkg._id} delay={i * 100}>
                  <PackageCard
                    title={pkg.title!}
                    slug={pkg.slug!.current}
                    imageSrc={packageCardImages[pkg.slug!.current] || placeholderHeroImage}
                    imageAlt={`${pkg.title} — ${pkg.routeLine || "Ladakh"}`}
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

      <section className="bg-snow pb-24 md:pb-32">
        <Container>
          <PackagesWithFilters
            packages={packages}
            cardImages={packageCardImages}
            fallbackImage={placeholderHeroImage}
          />
        </Container>
      </section>

      <CtaBand whatsappHref={waLink()} />
    </main>
  );
}
