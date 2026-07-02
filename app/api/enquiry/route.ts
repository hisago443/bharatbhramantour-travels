import { NextResponse } from "next/server";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  phone: z.string().min(10, "Valid phone number required").max(20),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  travelMonth: z.string().optional(),
  groupSize: z.coerce.number().min(1).max(50).optional(),
  tripStyle: z.string().optional(),
  message: z.string().max(2000).optional(),
  sourcePage: z.string().optional(),
  packageName: z.string().optional(),
  website: z.string().optional(), // honeypot
});

// Simple in-memory rate limiter
const ipRequests = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid input." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot check — if filled, it's a bot
    if (data.website) {
      return NextResponse.json({ success: true });
    }

    // Send email via Brevo (when configured)
    const brevoKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.ENQUIRY_TO_EMAIL;

    if (brevoKey && toEmail) {
      try {
        await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "api-key": brevoKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: { name: "Bharat Bhraman Website", email: "noreply@bharatbhramantours.com" },
            to: [{ email: toEmail }],
            subject: `New Enquiry: ${data.name}${data.packageName ? ` — ${data.packageName}` : ""}`,
            htmlContent: `
              <h2>New Trip Enquiry</h2>
              <table style="border-collapse:collapse;width:100%;">
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${data.name}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${data.phone}</td></tr>
                ${data.email ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${data.email}</td></tr>` : ""}
                ${data.travelMonth ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Travel Month</td><td style="padding:8px;border:1px solid #ddd;">${data.travelMonth}</td></tr>` : ""}
                ${data.groupSize ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Group Size</td><td style="padding:8px;border:1px solid #ddd;">${data.groupSize}</td></tr>` : ""}
                ${data.tripStyle ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Trip Style</td><td style="padding:8px;border:1px solid #ddd;">${data.tripStyle}</td></tr>` : ""}
                ${data.packageName ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Package</td><td style="padding:8px;border:1px solid #ddd;">${data.packageName}</td></tr>` : ""}
                ${data.message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${data.message}</td></tr>` : ""}
                ${data.sourcePage ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Source</td><td style="padding:8px;border:1px solid #ddd;">${data.sourcePage}</td></tr>` : ""}
              </table>
            `,
          }),
        });
      } catch (e) {
        console.error("Brevo email failed:", e);
      }
    }

    // Write enquiry to Sanity (when configured)
    const sanityWriteToken = process.env.SANITY_API_WRITE_TOKEN;
    const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

    if (sanityWriteToken && sanityProjectId) {
      try {
        await fetch(
          `https://${sanityProjectId}.api.sanity.io/v2024-01-01/data/mutate/${sanityDataset}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sanityWriteToken}`,
            },
            body: JSON.stringify({
              mutations: [
                {
                  create: {
                    _type: "enquiry",
                    name: data.name,
                    phone: data.phone,
                    email: data.email || undefined,
                    travelMonth: data.travelMonth || undefined,
                    groupSize: data.groupSize || undefined,
                    tripStyle: data.tripStyle || undefined,
                    message: data.message || undefined,
                    sourcePage: data.sourcePage || undefined,
                    createdAt: new Date().toISOString(),
                  },
                },
              ],
            }),
          }
        );
      } catch (e) {
        console.error("Sanity enquiry write failed:", e);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
