import Image from "next/image";

interface DestinationTileProps {
  title: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  region?: string;
}

export default function DestinationTile({
  title,
  slug,
  imageSrc,
  imageAlt,
  region,
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
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        {region && (
          <p className="mb-1 text-caption font-medium uppercase tracking-caps text-saffron">
            {region}
          </p>
        )}
        <h3 className="font-display text-h3 leading-heading text-snow">
          {title}
        </h3>
      </div>
    </a>
  );
}
