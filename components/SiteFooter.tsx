import Container from "./Container";
import { siteConfig } from "@/lib/config";

const exploreLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "All Packages", href: "/packages" },
  { label: "Travel Guides", href: "/guides" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Feedback", href: "/feedback" },
];

const popularPackages = [
  { label: "Leh–Nubra–Pangong Classic", href: "/packages/7-day-leh-nubra-pangong-classic-circuit" },
  { label: "Grand Ladakh", href: "/packages/9-day-grand-ladakh" },
  { label: "Manali to Leh Overland", href: "/packages/8-day-manali-to-leh-overland-expedition" },
  { label: "Hanle Dark Sky Expedition", href: "/packages/hanle-dark-sky-expedition" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-night pt-20 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-display text-h3 text-snow">Bharat Bhraman</p>
            <p className="mt-4 text-small font-light leading-body text-slate">
              {siteConfig.description}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
              Explore
            </p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-small font-light text-snow/70 transition-colors hover:text-snow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
              Popular Packages
            </p>
            <ul className="space-y-3">
              {popularPackages.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-small font-light text-snow/70 transition-colors hover:text-snow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-caption font-medium uppercase tracking-caps text-saffron">
              Get in Touch
            </p>
            <ul className="space-y-3 text-small font-light text-snow/70">
              <li>
                <a href="/contact" className="transition-colors hover:text-snow">
                  Plan My Trip
                </a>
              </li>
              <li>
                <a href="mailto:info@bharatbhramantours.com" className="transition-colors hover:text-snow">
                  info@bharatbhramantours.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-snow/10 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-caption text-snow/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-caption text-snow/40 transition-colors hover:text-snow/60">
              Privacy Policy
            </a>
            <a href="/terms" className="text-caption text-snow/40 transition-colors hover:text-snow/60">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
