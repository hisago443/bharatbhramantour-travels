"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/config";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const TRIP_STYLES = [
  "Couple / Honeymoon",
  "Family",
  "Friends Group",
  "Solo",
  "Bike Expedition",
  "Photography",
  "Corporate / Team",
  "Other",
];

interface EnquiryFormProps {
  packageName?: string;
  sourcePage?: string;
  compact?: boolean;
}

export default function EnquiryForm({
  packageName,
  sourcePage,
  compact = false,
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    name?: string;
    travelMonth?: string;
    groupSize?: string;
  }>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    setFormData({
      name: body.name as string,
      travelMonth: body.travelMonth as string,
      groupSize: body.groupSize as string,
    });

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...body,
          sourcePage: sourcePage || window.location.pathname,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const result = await res.json();
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    const waMessage = packageName
      ? `Hi, I just enquired about the ${packageName}${formData.travelMonth ? ` for ${formData.travelMonth}` : ""}${formData.groupSize ? `, group of ${formData.groupSize}` : ""}.`
      : `Hi, I just submitted an enquiry${formData.travelMonth ? ` for ${formData.travelMonth}` : ""}. Looking forward to hearing from you!`;

    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center bg-success text-snow text-h3">
          ✓
        </div>
        <h3 className="font-display text-h3 text-night">
          Thank you{formData.name ? `, ${formData.name}` : ""}!
        </h3>
        <p className="mt-4 max-w-md text-body text-charcoal/70">
          We&apos;ll reply within 12 hours with route ideas and a custom
          itinerary. In the meantime, you can continue the conversation on
          WhatsApp.
        </p>
        <a
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-[#25D366] px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-opacity hover:opacity-90"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  const inputClass =
    "w-full border border-stone bg-transparent px-4 py-3 text-body text-night placeholder:text-charcoal/40 focus:border-saffron focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — invisible to humans */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {packageName && (
        <input type="hidden" name="packageName" value={packageName} />
      )}

      <div className={`grid gap-6 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="mb-2 block text-small font-medium text-night">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-small font-medium text-night">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[+]?[0-9\s\-]{10,15}"
            title="Enter a valid phone number (10-15 digits)"
            className={inputClass}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-small font-medium text-night">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div className={`grid gap-6 ${compact ? "" : "sm:grid-cols-3"}`}>
        <div>
          <label htmlFor="travelMonth" className="mb-2 block text-small font-medium text-night">
            Travel Month
          </label>
          <select id="travelMonth" name="travelMonth" className={inputClass}>
            <option value="">Select</option>
            {MONTHS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="groupSize" className="mb-2 block text-small font-medium text-night">
            Group Size
          </label>
          <input
            type="number"
            id="groupSize"
            name="groupSize"
            min="1"
            max="50"
            className={inputClass}
            placeholder="2"
          />
        </div>
        <div>
          <label htmlFor="tripStyle" className="mb-2 block text-small font-medium text-night">
            Trip Style
          </label>
          <select id="tripStyle" name="tripStyle" className={inputClass}>
            <option value="">Select</option>
            {TRIP_STYLES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="message" className="mb-2 block text-small font-medium text-night">
            Tell Us About Your Dream Trip
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClass}
            placeholder="Destinations you're interested in, must-dos, any constraints..."
          />
        </div>
      )}

      {error && (
        <p className="text-small text-error">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`bg-saffron py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover disabled:opacity-50 ${
          compact ? "w-full" : "w-full sm:w-auto sm:px-12"
        }`}
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
