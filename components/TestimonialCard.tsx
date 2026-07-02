interface TestimonialCardProps {
  quote: string;
  name: string;
  location?: string;
  tripName?: string;
}

export default function TestimonialCard({
  quote,
  name,
  location,
  tripName,
}: TestimonialCardProps) {
  return (
    <blockquote className="flex flex-col items-center text-center">
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
        {tripName && (
          <p className="mt-1 text-caption uppercase tracking-caps text-saffron">
            {tripName}
          </p>
        )}
      </footer>
    </blockquote>
  );
}
