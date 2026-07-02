import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import GuideCard from "@/components/GuideCard";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { waLink } from "@/lib/config";
import { guideBodies } from "@/lib/guide-content";
import { destinationImages, placeholderHeroImage } from "@/lib/placeholder-data";

export function generateStaticParams() {
  return guideBodies.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const guide = guideBodies.find((g) => g.slug === slug);
    return {
      title: guide?.title ?? "Guide",
      description: guide?.excerpt ?? "Practical information for your Ladakh trip.",
    };
  });
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guideBodies.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-snow pt-20">
        <p className="text-h2 font-display text-night">Guide not found</p>
      </main>
    );
  }

  const otherGuides = guideBodies.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "https://bharatbhramantours.com" },
          { name: "Guides", url: "https://bharatbhramantours.com/guides" },
          { name: guide.title, url: `https://bharatbhramantours.com/guides/${slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden">
        <Image
          src={destinationImages[guide.imageKey] || placeholderHeroImage}
          alt={guide.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/40 to-night/20" />
        <Container className="relative z-10 pb-16 pt-40">
          <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
            Know Before You Go · {guide.readMinutes} min read
          </p>
          <h1 className="max-w-3xl font-display text-h1 leading-heading tracking-heading text-snow">
            {guide.title}
          </h1>
        </Container>
      </section>

      {/* Article body */}
      <section className="bg-snow py-20 md:py-28">
        <Container>
          <article className="mx-auto max-w-3xl">
            <FadeIn>
              <p className="font-display text-h3 leading-snug text-night">
                {guide.excerpt}
              </p>
            </FadeIn>

            {guide.sections.map((section, i) => (
              <FadeIn key={section.heading} delay={Math.min(i * 60, 200)}>
                <div className="mt-14">
                  <h2 className="font-display text-h2 leading-heading text-night">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className="mt-5 text-body leading-body text-charcoal/80"
                    >
                      {para}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-body leading-body text-charcoal/80"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-none bg-saffron" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}

            <FadeIn>
              <div className="mt-16 bg-night p-8 text-center md:p-12">
                <p className="font-display text-h3 italic text-snow">
                  Still have questions?
                </p>
                <p className="mt-3 text-body font-light text-stone">
                  Our team lives on these routes. Ask us anything — permits,
                  altitude, road status, the works.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-block bg-saffron px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover"
                  >
                    Plan My Trip
                  </a>
                  <a
                    href={waLink(`Hi, I have a question about: ${guide.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-snow/20 px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:border-snow/40"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </FadeIn>
          </article>
        </Container>
      </section>

      {/* More guides */}
      <section className="bg-night py-20 md:py-28">
        <Container>
          <FadeIn>
            <p className="mb-3 text-caption font-medium uppercase tracking-caps text-saffron">
              Keep Reading
            </p>
            <h2 className="mb-12 font-display text-h2 leading-heading text-snow">
              More From the Guidebook
            </h2>
          </FadeIn>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {otherGuides.map((g, i) => (
              <FadeIn key={g.slug} delay={i * 80}>
                <GuideCard
                  title={g.title}
                  slug={g.slug}
                  imageSrc={destinationImages[g.imageKey] || placeholderHeroImage}
                  imageAlt={g.title}
                  excerpt={g.excerpt}
                  dark
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
