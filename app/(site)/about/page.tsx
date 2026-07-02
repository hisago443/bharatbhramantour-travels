import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import { waLink } from "@/lib/config";
import { placeholderTestimonials, placeholderWhyUs } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bharat Bhraman Tour & Travels — a Himalayan travel team born in the mountains, specializing in acclimatization-first Ladakh and Himachal circuits.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-night pt-32 pb-20">
        <Container className="text-center">
          <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
            About Us
          </p>
          <h1 className="font-display text-h1 leading-heading tracking-heading text-snow">
            Born in the Himalayas
          </h1>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-snow py-24 md:py-32">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <p className="font-display text-h3 italic leading-heading text-night">
                We don&apos;t send you to the mountains — we take you there
                ourselves.
              </p>
              <div className="mt-8 space-y-6 text-body leading-body text-charcoal/80">
                <p>
                  Bharat Bhraman started the way most good things in Ladakh do —
                  around a cup of butter tea, with a conversation about doing
                  things properly. Our founders grew up driving these roads,
                  watching tourists struggle at altitude because nobody told them
                  to rest, seeing itineraries that treated Khardung La as a
                  checkbox instead of a 5,359-metre reality.
                </p>
                <p>
                  So we built something different. Every route we run is paced
                  for your body&apos;s adjustment. Every vehicle carries oxygen.
                  Every driver knows the water crossings and the shortcuts.
                  Every permit is handled before you land.
                </p>
                <p>
                  We specialise in what we know: Ladakh and Himachal Pradesh.
                  We don&apos;t do Goa, we don&apos;t do Kerala. We do the
                  Himalayas, and we do them properly.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Why Us */}
      <section className="bg-night py-24 md:py-32">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Why Us"
              title="What Sets Us Apart"
              dark
            />
          </FadeIn>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderWhyUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div>
                  <h3 className="text-body font-semibold text-snow">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-small font-light leading-body text-slate">
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
            <SectionHeading
              eyebrow="What Travellers Say"
              title="In Their Words"
              dark
            />
            <div className="flex flex-col items-center gap-16">
              {placeholderTestimonials.map((t) => (
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

      <CtaBand whatsappHref={waLink()} />
    </main>
  );
}
