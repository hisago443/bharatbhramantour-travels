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
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-4 top-4">
          {isSignature ? (
            <Badge variant="saffron">Signature</Badge>
          ) : (
            <Badge variant="night">{durationDays} Days</Badge>
          )}
        </div>
      </div>
      <div className="p-6">
        {isSignature && (
          <p className="mb-2 text-caption font-medium uppercase tracking-caps text-saffron">
            Signature Expedition
          </p>
        )}
        <h3 className="font-display text-h3 leading-heading text-night">
          {title}
        </h3>
        {routeLine && (
          <p className="mt-2 text-small text-charcoal/70">{routeLine}</p>
        )}
        {bestMonths && bestMonths.length > 0 && (
          <p className="mt-2 text-caption text-slate">
            Best: {bestMonths.slice(0, 3).join(", ")}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-body font-semibold text-night">
            From ₹{startingPrice.toLocaleString("en-IN")}
          </p>
          <span className="text-small font-medium uppercase tracking-caps text-saffron transition-colors group-hover:text-saffron-hover">
            View Details
          </span>
        </div>
      </div>
    </a>
  );
}
