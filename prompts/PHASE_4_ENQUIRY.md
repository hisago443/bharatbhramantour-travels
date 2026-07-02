# PHASE 4 — Enquiry funnel

The conversion layer. Read PROJECT_BRIEF funnel section.

Task:
1. **/contact (Plan My Trip)** — form fields: name, phone (validated Indian mobile, this is their WhatsApp), email (optional), travel month (select), group size, trip style (select from tripTypes), message. Beside it: "Prefer WhatsApp?" instant CTA. Below: 3-step "What happens next" strip.
2. **EnquiryForm component** reused as: full page (/contact), package-page sidebar variant (pre-filled with package name), and CTA-band modal variant.
3. **POST /api/enquiry**:
   - zod validation, honeypot field + basic rate limit (IP, in-memory) for spam
   - Send email to `ENQUIRY_TO_EMAIL` via Brevo API (clean HTML template with all fields + source page)
   - Create `enquiry` document in Sanity (write token, server-only)
   - Return success → UI thank-you state with a "Continue on WhatsApp" button that opens `waLink()` prefilled: "Hi, I just enquired about <package> for <month>, group of <n>."
4. Failure handling: if Brevo fails but Sanity write succeeds (or vice versa), still return success to the user, log the error server-side.
5. Test the full path with Playwright: fill form on a package page, verify thank-you state renders. Verify the enquiry doc appears in Sanity.
6. Commit `feat: enquiry funnel with email, sanity crm, whatsapp handoff`.
