"use client";

import PackageCard from "./PackageCard";
import PackageFilters, { usePackageFilters } from "./PackageFilters";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { urlFor } from "@/sanity/lib/image";

interface PackageData {
  _id?: string;
  title?: string;
  slug?: { current: string };
  durationDays?: number;
  routeLine?: string;
  bestMonths?: string[];
  startingPrice?: number;
  isSignature?: boolean;
  heroImage?: any;
}

export default function PackagesWithFilters({
  packages,
  fallbackImage,
}: {
  packages: PackageData[];
  fallbackImage: string;
}) {
  const nonSignature = packages.filter((p) => !p.isSignature);
  const { duration, setDuration, region, setRegion, filtered } =
    usePackageFilters(nonSignature);

  return (
    <>
      <FadeIn>
        <SectionHeading eyebrow="All Packages" title="Find Your Route" />
      </FadeIn>
      <PackageFilters
        duration={duration}
        setDuration={setDuration}
        region={region}
        setRegion={setRegion}
      />
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-body text-charcoal/60">
          No packages match these filters. Try a different combination.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pkg, i) => (
            <FadeIn key={pkg._id} delay={i * 80}>
              <PackageCard
                title={pkg.title!}
                slug={pkg.slug!.current}
                imageSrc={pkg.heroImage ? urlFor(pkg.heroImage).url() : fallbackImage}
                imageAlt={`${pkg.title} — ${pkg.routeLine || "Ladakh"}`}
                durationDays={pkg.durationDays!}
                routeLine={pkg.routeLine}
                bestMonths={pkg.bestMonths}
              />
            </FadeIn>
          ))}
        </div>
      )}
    </>
  );
}
