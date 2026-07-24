import Container from "@/components/Container";
import { FeedbackForm } from "@/components/FeedbackForm";

export const metadata = {
  title: "Feedback | Bharat Bhraman",
  description: "Share your experience and feedback with us.",
};

export default function FeedbackPage() {
  return (
    <div className="bg-snow min-h-screen py-24 md:py-32">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-display-sm font-semibold tracking-tight text-night mb-4">
              Share Your Feedback
            </h1>
            <p className="text-body text-charcoal/70">
              We constantly strive to improve our expeditions. Please let us know how your experience was.
            </p>
          </div>
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <FeedbackForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
