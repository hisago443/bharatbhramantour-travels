import Image from "next/image";
import Badge from "./Badge";

interface PackageCardProps {
  title: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  durationDays: number;
  routeLine?: string;
  bestMonths?: string[];
  startingPrice: number;
  isSignature?: boolean;
}

export default function PackageCard({
  title,
  slug,
  imageSrc,
  imageAlt,
  durationDays,
  routeLine,
  bestMonths,
  startingPrice,
  isSignature,
}: PackageCardProps) {
  return (
    <a
      href={`/packages/${slug}`}
      className="group block overflow-hidden bg-snow"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
        {isSignature && (
          <div className="absolute left-4 top-4">
            <Badge variant="saffron">Signature</Badge>
          </div>
        )}
        <p className="absolute bottom-4 left-4 font-display text-h3 italic text-snow">
          {durationDays} days
        </p>
      </div>
      <div className="p-6">
        <h3 className="font-display text-h3 leading-heading text-night transition-colors group-hover:text-lake">
          {title}
        </h3>
        {routeLine && (
          <p className="mt-2 text-small text-charcoal/70">{routeLine}</p>
        )}
        {bestMonths && bestMonths.length > 0 && (
          <p className="mt-2 text-caption uppercase tracking-caps text-slate">
            Best: {bestMonths.slice(0, 3).join(" · ")}
          </p>
        )}
        <div className="mt-5 flex items-center justify-between border-t border-stone/60 pt-4">
          <p className="font-display text-h4 text-night">
            From ₹{startingPrice.toLocaleString("en-IN")}
          </p>
          <span className="relative text-caption font-semibold uppercase tracking-caps text-saffron">
            View Journey
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-saffron transition-all duration-300 group-hover:w-full" />
          </span>
        </div>
      </div>
    </a>
  );
}
