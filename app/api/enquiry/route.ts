import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, travelMonth, groupSize, tripStyle, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    // TODO: Send email via Brevo when BREVO_API_KEY is configured
    // TODO: Write enquiry document to Sanity when SANITY_API_WRITE_TOKEN is configured

    console.log("New enquiry:", { name, phone, email, travelMonth, groupSize, tripStyle, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
