import type { Metadata } from "next";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import { waLink } from "@/lib/config";

const guides = [
  { title: "Inner Line Permit for Ladakh: Complete Guide", slug: "inner-line-permit-ladakh" },
  { title: "Acclimatization in Ladakh: How to Not Ruin Your Trip", slug: "acclimatization-ladakh" },
  { title: "Best Time to Visit Ladakh: Month-by-Month", slug: "best-time-ladakh" },
  { title: "Manali–Leh vs Srinagar–Leh: Which Road and Why", slug: "manali-leh-vs-srinagar-leh" },
  { title: "Pangong vs Tso Moriri vs Hanle: Choosing Your Lakes", slug: "pangong-vs-tso-moriri-vs-hanle" },
  { title: "Turtuk & Thang: Visiting India's Last Villages", slug: "turtuk-thang-last-villages" },
];

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const guide = guides.find((g) => g.slug === slug);
    return {
      title: guide?.title ?? "Guide",
      description: `${guide?.title ?? "Travel guide"} — practical information for your Ladakh trip.`,
    };
  });
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-snow pt-20">
        <p className="text-h2 font-display text-night">Guide not found</p>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-night pt-32 pb-20">
        <Container className="text-center">
          <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
            Know Before You Go
          </p>
          <h1 className="mx-auto max-w-3xl font-display text-h1 leading-heading tracking-heading text-snow">
            {guide.title}
          </h1>
        </Container>
      </section>

      <section className="bg-snow py-24 md:py-32">
        <Container>
          <FadeIn>
            <article className="mx-auto max-w-3xl">
              <p className="text-body leading-body text-charcoal/80">
                This guide will be populated with content from Sanity CMS. The
                full article including practical tips, current regulations, and
                related packages will appear here once the CMS is connected.
              </p>
              <div className="mt-12 border-t border-stone pt-12 text-center">
                <p className="text-body text-charcoal/70">
                  Have questions? Our team knows these routes by heart.
                </p>
                <a
                  href="/contact"
                  className="mt-6 inline-block bg-saffron px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover"
                >
                  Ask Us Anything
                </a>
              </div>
            </article>
          </FadeIn>
        </Container>
      </section>

      <CtaBand whatsappHref={waLink()} />
    </main>
  );
}
