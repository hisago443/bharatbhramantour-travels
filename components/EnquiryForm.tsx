"use client";

import { useState, type FormEvent } from "react";

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

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silently handle — form still accessible
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center bg-success text-snow text-h3">
          ✓
        </div>
        <h3 className="font-display text-h3 text-night">
          Thank you! We&apos;ll be in touch.
        </h3>
        <p className="mt-4 text-body text-charcoal/70">
          Expect a reply within 12 hours with route ideas and next steps.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-stone bg-transparent px-4 py-3 text-body text-night placeholder:text-charcoal/40 focus:border-saffron focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
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
            className={inputClass}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-small font-medium text-night">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
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

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-saffron py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover disabled:opacity-50 sm:w-auto sm:px-12"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
