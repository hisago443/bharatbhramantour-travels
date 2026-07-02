import type { Metadata } from "next";
import Container from "@/components/Container";
import DestinationTile from "@/components/DestinationTile";
import FadeIn from "@/components/FadeIn";
import CtaBand from "@/components/CtaBand";
import { waLink } from "@/lib/config";
import { placeholderDestinations, destinationImages, placeholderHeroImage } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Ladakh and Himachal Pradesh — Leh, Nubra Valley, Pangong Tso, Tso Moriri, Hanle, Turtuk, Manali, Bir Billing and more.",
};

export default function DestinationsPage() {
  const ladakh = placeholderDestinations.filter((d) => d.region === "Ladakh");
  const himachal = placeholderDestinations.filter((d) => d.region === "Himachal");

  return (
    <main>
      <section className="bg-night pt-32 pb-20">
        <Container className="text-center">
          <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
            Destinations
          </p>
          <h1 className="font-display text-h1 leading-heading tracking-heading text-snow">
            Where We Take You
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body font-light leading-body text-stone">
            From the high passes of Ladakh to the paragliding skies of Bir
            Billing — every place we operate, we know by heart.
          </p>
        </Container>
      </section>

      <section className="bg-snow py-24 md:py-32">
        <Container>
          <FadeIn>
            <p className="mb-8 text-caption font-medium uppercase tracking-caps text-saffron">
              Ladakh
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ladakh.map((dest, i) => (
              <FadeIn key={dest._id} delay={i * 60}>
                <DestinationTile
                  title={dest.title!}
                  slug={dest.slug!.current}
                  imageSrc={destinationImages[dest.slug!.current] || placeholderHeroImage}
                  imageAlt={`${dest.title}, Ladakh`}
                  region={dest.region}
                  altitudeMeters={dest.altitudeMeters}
                />
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="mb-8 mt-20 text-caption font-medium uppercase tracking-caps text-saffron">
              Himachal Pradesh
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {himachal.map((dest, i) => (
              <FadeIn key={dest._id} delay={i * 60}>
                <DestinationTile
                  title={dest.title!}
                  slug={dest.slug!.current}
                  imageSrc={destinationImages[dest.slug!.current] || placeholderHeroImage}
                  imageAlt={`${dest.title}, Himachal Pradesh`}
                  region={dest.region}
                  altitudeMeters={dest.altitudeMeters}
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
