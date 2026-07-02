export const siteConfig = {
  name: "Bharat Bhraman Tour & Travels",
  shortName: "Bharat Bhraman",
  tagline: "The Himalayas, properly.",
  description:
    "Premium Ladakh and Himachal Pradesh tours — acclimatization-first itineraries, local Himalayan team, permits handled.",
  url: "https://bharatbhramantours.com",
} as const;

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "91XXXXXXXXXX";

export function waLink(message = "Hi, I'd like to plan a trip to Ladakh.") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
