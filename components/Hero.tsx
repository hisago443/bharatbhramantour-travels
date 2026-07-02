import Image from "next/image";

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  subline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  height?: "full" | "inner";
  overlay?: boolean;
}

export default function Hero({
  imageSrc,
  imageAlt,
  headline,
  subline,
  ctaLabel,
  ctaHref,
  height = "full",
  overlay = true,
}: HeroProps) {
  const heightClass = height === "full" ? "min-h-[85vh]" : "min-h-[60vh]";

  return (
    <section className={`relative flex items-center justify-center ${heightClass} overflow-hidden`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover animate-ken-burns"
        sizes="100vw"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/30 to-transparent" />
      )}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center text-snow">
        <h1 className="font-display text-hero leading-hero tracking-hero">
          {headline}
        </h1>
        {subline && (
          <p className="mx-auto mt-6 max-w-2xl text-body font-light leading-body text-stone">
            {subline}
          </p>
        )}
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="mt-10 inline-block bg-saffron px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
