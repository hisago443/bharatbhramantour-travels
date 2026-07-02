import Image from "next/image";

interface GuideCardProps {
  title: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  excerpt: string;
}

export default function GuideCard({
  title,
  slug,
  imageSrc,
  imageAlt,
  excerpt,
}: GuideCardProps) {
  return (
    <a href={`/guides/${slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4">
        <p className="mb-2 text-caption font-medium uppercase tracking-caps text-saffron">
          Know Before You Go
        </p>
        <h3 className="font-display text-h3 leading-heading text-night group-hover:text-lake transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-small leading-body text-charcoal/70 line-clamp-3">
          {excerpt}
        </p>
      </div>
    </a>
  );
}
