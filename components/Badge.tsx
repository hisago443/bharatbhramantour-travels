interface BadgeProps {
  children: React.ReactNode;
  variant?: "saffron" | "night" | "slate";
  className?: string;
}

export default function Badge({
  children,
  variant = "saffron",
  className = "",
}: BadgeProps) {
  const variants = {
    saffron: "bg-saffron text-snow",
    night: "bg-night text-snow",
    slate: "bg-slate/20 text-charcoal",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-caption font-semibold uppercase tracking-caps ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
