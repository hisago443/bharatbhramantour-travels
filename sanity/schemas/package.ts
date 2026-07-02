import { defineField, defineType } from "sanity";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default defineType({
  name: "package",
  title: "Package",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'Use day-count-first naming, e.g. "7-Day Leh–Nubra–Pangong Classic Circuit"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      description: "Card copy, max 240 characters",
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "durationDays",
      title: "Duration (Days)",
      type: "number",
      validation: (rule) => rule.required().min(1).max(21),
    }),
    defineField({
      name: "routeLine",
      title: "Route Line",
      type: "string",
      description: 'e.g. "Leh → Nubra → Pangong → Leh"',
    }),
    defineField({
      name: "startingPrice",
      title: "Starting Price (INR per person)",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "priceNote",
      title: "Price Note",
      type: "string",
      description: 'e.g. "twin sharing, ex-Leh"',
    }),
    defineField({
      name: "bestMonths",
      title: "Best Months",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: MONTHS.map((m) => ({ title: m, value: m })),
      },
    }),
    defineField({
      name: "tripTypes",
      title: "Trip Types",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tripType" }] }],
    }),
    defineField({
      name: "destinations",
      title: "Destinations",
      type: "array",
      of: [{ type: "reference", to: [{ type: "destination" }] }],
    }),
    defineField({
      name: "itinerary",
      title: "Day-by-Day Itinerary",
      type: "array",
      of: [
        {
          type: "object",
          name: "day",
          title: "Day",
          fields: [
            defineField({ name: "dayNumber", title: "Day Number", type: "number", validation: (rule) => rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "array", of: [{ type: "block" }] }),
            defineField({ name: "stayLocation", title: "Stay Location", type: "string" }),
            defineField({ name: "altitudeMeters", title: "Altitude (meters)", type: "number" }),
            defineField({ name: "drivingHours", title: "Driving Hours", type: "number" }),
          ],
          preview: {
            select: { title: "title", dayNumber: "dayNumber" },
            prepare({ title, dayNumber }) {
              return { title: `Day ${dayNumber}: ${title}` };
            },
          },
        },
      ],
    }),
    defineField({
      name: "inclusions",
      title: "Inclusions",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "exclusions",
      title: "Exclusions",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isSignature",
      title: "Signature Expedition",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "fixedDepartures",
      title: "Fixed Departures",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "startDate", title: "Start Date", type: "date" }),
            defineField({ name: "endDate", title: "End Date", type: "date" }),
          ],
        },
      ],
      hidden: ({ parent }) => !parent?.isSignature,
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", validation: (rule) => rule.required() }),
          ],
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3 }),
        defineField({ name: "ogImage", title: "OG Image", type: "image" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", media: "heroImage", days: "durationDays" },
    prepare({ title, media, days }) {
      return { title, subtitle: days ? `${days} days` : undefined, media };
    },
  },
});
