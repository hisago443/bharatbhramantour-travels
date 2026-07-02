import type { Metadata } from "next";
import Container from "@/components/Container";
import GuideCard from "@/components/GuideCard";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import { waLink } from "@/lib/config";
import { placeholderHeroImage, destinationImages } from "@/lib/placeholder-data";
import { guideBodies } from "@/lib/guide-content";

export const metadata: Metadata = {
  title: "Guides — Know Before You Go",
  description:
    "Essential Ladakh travel guides: Inner Line Permits, acclimatization at 3,500m+, best months, road comparisons, mobile & ATM reality, and more.",
};

const guides = guideBodies;

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
                  imageSrc={destinationImages[guide.imageKey] || placeholderHeroImage}
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
