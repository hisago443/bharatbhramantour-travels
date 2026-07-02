import Image from "next/image";

interface DestinationTileProps {
  title: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  region?: string;
  altitudeMeters?: number;
}

export default function DestinationTile({
  title,
  slug,
  imageSrc,
  imageAlt,
  region,
  altitudeMeters,
}: DestinationTileProps) {
  return (
    <a
      href={`/destinations/${slug}`}
      className="group relative block aspect-[3/4] overflow-hidden"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="mb-1 text-caption font-medium uppercase tracking-caps text-saffron">
          {region}
          {altitudeMeters ? ` · ${altitudeMeters.toLocaleString()}m` : ""}
        </p>
        <h3 className="font-display text-h3 leading-heading text-snow">
          {title}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-caption font-semibold uppercase tracking-caps text-snow/90 opacity-0 transition-all duration-300 group-hover:max-h-8 group-hover:opacity-100">
          Explore →
        </p>
      </div>
    </a>
  );
}
