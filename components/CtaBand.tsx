import Container from "./Container";

interface CtaBandProps {
  headline?: string;
  subline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  whatsappHref?: string;
}

export default function CtaBand({
  headline = "Ready when the mountains are.",
  subline = "Tell us your dates, your pace, your dream — we handle the rest.",
  ctaLabel = "Plan My Trip",
  ctaHref = "/contact",
  whatsappHref,
}: CtaBandProps) {
  return (
    <section className="bg-night py-24 md:py-32">
      <Container className="text-center">
        <h2 className="font-display text-h2 leading-heading tracking-heading text-snow">
          {headline}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-body font-light leading-body text-stone">
          {subline}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={ctaHref}
            className="inline-block bg-saffron px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover"
          >
            {ctaLabel}
          </a>
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-snow/20 px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:border-snow/40"
            >
              WhatsApp Us
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
