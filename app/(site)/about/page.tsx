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
                A craving born in Spiti Valley to host the world with true local expertise.
              </p>
              <div className="mt-8 space-y-6 text-body leading-body text-charcoal/80">
                <p>
                  We are a local team from Himachal Pradesh, and for the last 10 years, 
                  we have lived and breathed Himalayan hospitality and tourism. The realization 
                  for Bharat Bhraman hit us while working in the hospitality business deep in 
                  Spiti Valley. We developed a deep craving to start our own agency—a place 
                  where we could cater to and host guests from all over the world with 
                  unmatched local expertise.
                </p>
                <p>
                  We wanted to build something where our guests only have to worry about 
                  feeling the mountains and experiencing their raw beauty. Leave the logistics, 
                  the terrain, and the unpredictability to us.
                </p>
                <p>
                  Because we are locals, our drivers get advance notice when roads are blocked 
                  or weather turns. Our primary fleet—built on the rugged reliability of the 
                  Innova Crysta and the iconic Royal Enfield—is equipped with full medical gear 
                  and kits for every journey. 
                </p>
                <p>
                  We don&apos;t just send you to the Himalayas. We are from the Himalayas, 
                  and we do it properly.
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
      <section className="bg-night py-24 md:py-32 overflow-hidden">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="What Travellers Say"
              title="In Their Words"
              dark
            />
          </FadeIn>
        </Container>

        <div className="mt-16 flex overflow-hidden group">
          <div className="flex animate-marquee gap-8 w-max pr-8">
            {[...placeholderTestimonials, ...placeholderTestimonials].map((t, idx) => (
              <div key={`${t._id}-${idx}`} className="w-[85vw] max-w-[360px] shrink-0">
                <TestimonialCard
                  quote={t.quote!}
                  name={t.name!}
                  location={t.location}
                  tripName={t.tripTaken?.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand whatsappHref={waLink()} />
    </main>
  );
}
