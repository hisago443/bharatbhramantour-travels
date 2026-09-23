"use client";

import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/config";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-night" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-h3 text-snow">
          Bharat Bhraman
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-small font-medium uppercase tracking-caps text-snow/80 transition-colors hover:text-snow"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className="hidden items-center gap-1.5 text-caption font-medium text-snow/70 transition-colors hover:text-snow xl:flex"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {siteConfig.phone}
          </a>
          <a
            href="/contact"
            className="hidden bg-saffron px-6 py-3 text-caption font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover lg:inline-block"
          >
            Plan My Trip
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-snow transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-snow transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-snow transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center bg-night lg:hidden">
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-h2 text-snow transition-colors hover:text-saffron"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-12 bg-saffron px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover"
          >
            Plan My Trip
          </a>
        </div>
      )}
    </header>
  );
}
