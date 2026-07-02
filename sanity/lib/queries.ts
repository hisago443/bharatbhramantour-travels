import { groq } from "next-sanity";

export const allPackagesQuery = groq`
  *[_type == "package"] | order(durationDays asc) {
    _id,
    title,
    slug,
    heroImage,
    summary,
    durationDays,
    routeLine,
    startingPrice,
    priceNote,
    bestMonths,
    isSignature,
    "tripTypes": tripTypes[]->{ _id, title, slug },
  }
`;

export const packageBySlugQuery = groq`
  *[_type == "package" && slug.current == $slug][0] {
    ...,
    "tripTypes": tripTypes[]->{ _id, title, slug },
    "destinations": destinations[]->{ _id, title, slug },
  }
`;

export const allDestinationsQuery = groq`
  *[_type == "destination"] | order(title asc) {
    _id,
    title,
    slug,
    region,
    heroImage,
    altitudeMeters,
    bestMonths,
    permitRequired,
  }
`;

export const destinationBySlugQuery = groq`
  *[_type == "destination" && slug.current == $slug][0] {
    ...,
  }
`;

export const allGuidesQuery = groq`
  *[_type == "guide"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    heroImage,
    excerpt,
    publishedAt,
  }
`;

export const guideBySlugQuery = groq`
  *[_type == "guide" && slug.current == $slug][0] {
    ...,
    "relatedPackages": relatedPackages[]->{ _id, title, slug, heroImage, summary, durationDays, startingPrice },
  }
`;

export const tripTypeBySlugQuery = groq`
  *[_type == "tripType" && slug.current == $slug][0] {
    ...,
  }
`;

export const allTripTypesQuery = groq`
  *[_type == "tripType"] | order(title asc) {
    _id,
    title,
    slug,
    heroImage,
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    location,
    "tripTaken": tripTaken->{ title },
    quote,
    rating,
    photo,
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    ...,
  }
`;

export const faqByCategoryQuery = groq`
  *[_type == "faqItem" && category == $category] | order(_createdAt asc) {
    _id,
    question,
    answer,
    category,
  }
`;

export const allFaqQuery = groq`
  *[_type == "faqItem"] | order(category asc, _createdAt asc) {
    _id,
    question,
    answer,
    category,
  }
`;

export const signaturePackagesQuery = groq`
  *[_type == "package" && isSignature == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    heroImage,
    summary,
    durationDays,
    routeLine,
    startingPrice,
    priceNote,
    bestMonths,
    isSignature,
    fixedDepartures,
  }
`;
