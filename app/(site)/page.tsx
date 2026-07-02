import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-night text-snow">
      <div className="max-w-[1280px] px-6 py-40 text-center">
        <p className="mb-6 text-caption font-medium uppercase tracking-caps text-slate">
          {siteConfig.tagline}
        </p>
        <h1 className="font-display text-hero leading-hero tracking-hero">
          {siteConfig.shortName}
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-body font-light leading-body text-stone">
          {siteConfig.description}
        </p>
        <a
          href="/contact"
          className="mt-12 inline-block bg-saffron px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover"
        >
          Plan My Trip
        </a>
      </div>
    </main>
  );
}
