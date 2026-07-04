interface TestimonialCardProps {
  quote: string;
  name: string;
  location?: string;
  tripName?: string;
  tripDate?: string;
}

function getInitials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({
  quote,
  name,
  location,
  tripName,
  tripDate,
}: TestimonialCardProps) {
  return (
    <blockquote className="flex flex-col items-center text-center">
      <div className="mb-6 flex h-14 w-14 items-center justify-center bg-saffron/20">
        <span className="font-display text-h4 text-saffron">
          {getInitials(name)}
        </span>
      </div>
      <p className="max-w-3xl font-display text-h3 italic leading-heading text-snow">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-8">
        <cite className="not-italic">
          <span className="text-body font-medium text-snow">{name}</span>
          {location && (
            <span className="text-small text-slate"> — {location}</span>
          )}
        </cite>
        {(tripName || tripDate) && (
          <p className="mt-1 text-caption uppercase tracking-caps text-saffron">
            {tripName}
            {tripName && tripDate && " · "}
            {tripDate}
          </p>
        )}
      </footer>
    </blockquote>
  );
}
