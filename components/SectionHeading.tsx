interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const textColor = dark ? "text-snow" : "text-night";
  const mutedColor = dark ? "text-slate" : "text-charcoal/60";
  const eyebrowColor = dark ? "text-saffron" : "text-saffron";

  return (
    <div className={`mb-16 max-w-3xl ${align === "center" ? "mx-auto" : ""} ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-caption font-medium uppercase tracking-caps ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-h2 leading-heading tracking-heading ${textColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-body leading-body ${dark ? "font-light" : "font-normal"} ${mutedColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
