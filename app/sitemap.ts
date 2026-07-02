import type { MetadataRoute } from "next";
import { placeholderPackages, placeholderDestinations } from "@/lib/placeholder-data";

const BASE_URL = "https://bharatbhramantours.com";

const guides = [
  "inner-line-permit-ladakh",
  "acclimatization-ladakh",
  "best-time-ladakh",
  "manali-leh-vs-srinagar-leh",
  "pangong-vs-tso-moriri-vs-hanle",
  "turtuk-thang-last-villages",
];

const tripTypes = [
  "bike-expedition",
  "family",
  "honeymoon",
  "group-corporate",
  "photography",
  "spiritual",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/packages`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/destinations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/guides`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const packagePages: MetadataRoute.Sitemap = placeholderPackages.map((pkg) => ({
    url: `${BASE_URL}/packages/${pkg.slug!.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const destinationPages: MetadataRoute.Sitemap = placeholderDestinations.map((dest) => ({
    url: `${BASE_URL}/destinations/${dest.slug!.current}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const tripTypePages: MetadataRoute.Sitemap = tripTypes.map((slug) => ({
    url: `${BASE_URL}/trip-types/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...packagePages, ...destinationPages, ...guidePages, ...tripTypePages];
}
