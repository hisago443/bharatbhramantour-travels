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
    <blockquote className="flex h-full flex-col justify-between rounded-xl bg-snow p-8 text-left shadow-lg transition-transform hover:-translate-y-1">
      <div className="relative flex flex-col">
        <svg
          className="absolute -left-2 -top-3 h-10 w-10 text-saffron/20"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="z-10 mt-6 font-body text-[15px] font-medium italic leading-relaxed text-charcoal/90">
          "{quote}"
        </p>
      </div>
      <footer className="mt-8 border-t border-stone/30 pt-6">
        <cite className="flex items-center gap-4 not-italic">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-night font-bold tracking-wider text-snow text-[11px]">
            {getInitials(name)}
          </div>
          <div>
            <span className="block font-body text-small font-bold text-night">
              {name}
            </span>
            {location && (
              <span className="block text-[11px] text-charcoal/60">{location}</span>
            )}
          </div>
        </cite>
        {(tripName || tripDate) && (
          <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.15em] text-saffron">
            {tripName}
            {tripName && tripDate && " · "}
            {tripDate}
          </p>
        )}
      </footer>
    </blockquote>
  );
}
