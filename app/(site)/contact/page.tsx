import type { Metadata } from "next";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { waLink } from "@/lib/config";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact — Plan My Trip",
  description:
    "Tell us your dates, your pace, your dream. We reply within 12 hours with a custom itinerary.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-night pt-32 pb-20">
        <Container className="text-center">
          <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
            Plan My Trip
          </p>
          <h1 className="font-display text-h1 leading-heading tracking-heading text-snow">
            Let&apos;s Build Your Journey
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body font-light leading-body text-stone">
            Fill in the form or message us on WhatsApp — we reply within 12
            hours with a custom itinerary shaped to your pace and budget.
          </p>
        </Container>
      </section>

      <section className="bg-snow py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_400px]">
            <FadeIn>
              <EnquiryForm />
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-8">
                {/* WhatsApp option */}
                <div className="bg-night p-8">
                  <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                    Prefer WhatsApp?
                  </p>
                  <p className="mt-3 text-body font-light text-snow">
                    Message us directly for a faster conversation.
                  </p>
                  <a
                    href={waLink("Hi, I'd like to plan a trip to Ladakh.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-[#25D366] px-6 py-3 text-small font-semibold uppercase tracking-caps text-snow transition-opacity hover:opacity-90"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                {/* What happens next */}
                <div className="bg-night/5 p-8">
                  <p className="text-caption font-medium uppercase tracking-caps text-saffron">
                    What Happens Next
                  </p>
                  <ol className="mt-4 space-y-4">
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-saffron text-small font-semibold text-snow">
                        1
                      </span>
                      <div>
                        <p className="text-body font-medium text-night">
                          We reply within 12 hours
                        </p>
                        <p className="text-small text-charcoal/70">
                          With clarifying questions and initial route ideas.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-saffron text-small font-semibold text-snow">
                        2
                      </span>
                      <div>
                        <p className="text-body font-medium text-night">
                          Custom itinerary
                        </p>
                        <p className="text-small text-charcoal/70">
                          A day-by-day plan with pricing, inclusions, and alternatives.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-saffron text-small font-semibold text-snow">
                        3
                      </span>
                      <div>
                        <p className="text-body font-medium text-night">
                          Refine together
                        </p>
                        <p className="text-small text-charcoal/70">
                          Adjust dates, add destinations, pick your vehicle — until it fits.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
