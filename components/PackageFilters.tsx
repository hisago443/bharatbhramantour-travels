"use client";

import { useState } from "react";

const durations = [
  { label: "All", value: "all" },
  { label: "3–5 Days", value: "short" },
  { label: "6–7 Days", value: "medium" },
  { label: "8+ Days", value: "long" },
] as const;

const regions = [
  { label: "All", value: "all" },
  { label: "Ladakh", value: "ladakh" },
  { label: "Himachal", value: "himachal" },
] as const;

interface PackageForFilter {
  _id?: string;
  durationDays?: number;
  routeLine?: string;
  title?: string;
}

function matchesDuration(pkg: PackageForFilter, filter: string) {
  const d = pkg.durationDays ?? 0;
  if (filter === "all") return true;
  if (filter === "short") return d >= 1 && d <= 5;
  if (filter === "medium") return d >= 6 && d <= 7;
  return d >= 8;
}

function matchesRegion(pkg: PackageForFilter, filter: string) {
  if (filter === "all") return true;
  const text = `${pkg.title ?? ""} ${pkg.routeLine ?? ""}`.toLowerCase();
  if (filter === "ladakh") return text.includes("leh") || text.includes("ladakh") || text.includes("nubra") || text.includes("pangong") || text.includes("hanle") || text.includes("kargil") || text.includes("turtuk");
  return text.includes("manali") || text.includes("bir") || text.includes("billing") || text.includes("himachal") || text.includes("sissu") || text.includes("jispa");
}

export function usePackageFilters<T extends PackageForFilter>(packages: T[]) {
  const [duration, setDuration] = useState("all");
  const [region, setRegion] = useState("all");

  const filtered = packages.filter(
    (pkg) => matchesDuration(pkg, duration) && matchesRegion(pkg, region)
  );

  return { duration, setDuration, region, setRegion, filtered };
}

export default function PackageFilters({
  duration,
  setDuration,
  region,
  setRegion,
}: {
  duration: string;
  setDuration: (v: string) => void;
  region: string;
  setRegion: (v: string) => void;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-center gap-3">
      <span className="mr-2 text-caption font-medium uppercase tracking-caps text-charcoal/50">
        Duration
      </span>
      {durations.map((d) => (
        <button
          key={d.value}
          onClick={() => setDuration(d.value)}
          className={`px-4 py-2 text-caption font-medium uppercase tracking-caps transition-colors ${
            duration === d.value
              ? "bg-night text-snow"
              : "bg-stone/30 text-charcoal/70 hover:bg-stone/50"
          }`}
        >
          {d.label}
        </button>
      ))}
      <span className="ml-4 mr-2 text-caption font-medium uppercase tracking-caps text-charcoal/50">
        Region
      </span>
      {regions.map((r) => (
        <button
          key={r.value}
          onClick={() => setRegion(r.value)}
          className={`px-4 py-2 text-caption font-medium uppercase tracking-caps transition-colors ${
            region === r.value
              ? "bg-night text-snow"
              : "bg-stone/30 text-charcoal/70 hover:bg-stone/50"
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
