import type { PortableTextBlock } from "next-sanity";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt: string;
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface SeoFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
}

export interface Package {
  _id: string;
  _type: "package";
  title: string;
  slug: { current: string };
  heroImage: SanityImage;
  gallery?: SanityImage[];
  summary: string;
  overview?: PortableTextBlock[];
  durationDays: number;
  routeLine?: string;
  startingPrice: number;
  priceNote?: string;
  bestMonths?: string[];
  tripTypes?: { _id: string; title: string; slug: { current: string } }[];
  destinations?: { _id: string; title: string; slug: { current: string } }[];
  itinerary?: ItineraryDay[];
  inclusions?: string[];
  exclusions?: string[];
  isSignature?: boolean;
  fixedDepartures?: { startDate: string; endDate: string }[];
  faq?: { question: string; answer: string }[];
  seo?: SeoFields;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  description?: PortableTextBlock[];
  stayLocation?: string;
  altitudeMeters?: number;
  drivingHours?: number;
}

export interface Destination {
  _id: string;
  _type: "destination";
  title: string;
  slug: { current: string };
  region: "Ladakh" | "Himachal";
  heroImage: SanityImage;
  gallery?: SanityImage[];
  intro?: PortableTextBlock[];
  highlights?: {
    title: string;
    description?: string;
    image?: SanityImage;
  }[];
  altitudeMeters?: number;
  bestMonths?: string[];
  permitRequired?: boolean;
  permitNote?: string;
  howToReach?: PortableTextBlock[];
  seo?: SeoFields;
}

export interface TripType {
  _id: string;
  _type: "tripType";
  title: string;
  slug: { current: string };
  heroImage?: SanityImage;
  intro?: PortableTextBlock[];
  seo?: SeoFields;
}

export interface Guide {
  _id: string;
  _type: "guide";
  title: string;
  slug: { current: string };
  heroImage?: SanityImage;
  excerpt: string;
  body?: PortableTextBlock[];
  relatedPackages?: Package[];
  publishedAt: string;
  seo?: SeoFields;
}

export interface Testimonial {
  _id: string;
  _type: "testimonial";
  name: string;
  location?: string;
  tripTaken?: { title: string };
  quote: string;
  rating: number;
  photo?: SanityImage;
}

export interface FaqItem {
  _id: string;
  _type: "faqItem";
  question: string;
  answer: PortableTextBlock[];
  category: "permits" | "health" | "booking" | "payments" | "general";
}

export interface WhyUsItem {
  icon?: string;
  title: string;
  description?: string;
}

export interface SiteSettings {
  _id: string;
  siteTitle: string;
  tagline?: string;
  whatsappNumber?: string;
  phone?: string;
  email?: string;
  address?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    twitter?: string;
  };
  heroHome?: {
    image?: SanityImage;
    headline?: string;
    subline?: string;
  };
  whyUs?: WhyUsItem[];
  defaultSeo?: SeoFields;
}

export interface Enquiry {
  _id: string;
  name: string;
  phone: string;
  email: string;
  travelMonth?: string;
  groupSize?: number;
  tripStyle?: string;
  message?: string;
  sourcePage?: string;
  createdAt: string;
}
