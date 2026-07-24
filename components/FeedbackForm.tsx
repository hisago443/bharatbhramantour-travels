"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Star } from "lucide-react";

export function FeedbackForm() {
  const [state, handleSubmit] = useForm("mnjegeqz");
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  if (state.succeeded) {
    return (
      <div className="p-8 text-center bg-saffron/10 rounded-lg">
        <h3 className="text-2xl font-bold text-night mb-2">Thank you!</h3>
        <p className="text-charcoal">Your feedback has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-night mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full border border-gray-300 px-4 py-2 focus:border-night focus:outline-none focus:ring-1 focus:ring-night"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-night mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full border border-gray-300 px-4 py-2 focus:border-night focus:outline-none focus:ring-1 focus:ring-night"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-night mb-1">
          Rating
        </label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="focus:outline-none"
            >
              <Star
                className={`w-8 h-8 transition-colors ${
                  star <= (hoverRating || rating)
                    ? "fill-saffron text-saffron"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
        <input type="hidden" name="rating" value={rating} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-night mb-1">
          Your Feedback
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full border border-gray-300 px-4 py-2 focus:border-night focus:outline-none focus:ring-1 focus:ring-night"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting || rating === 0}
        className="w-full bg-night text-snow py-3 font-semibold uppercase tracking-caps hover:bg-charcoal transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Submitting..." : "Submit Feedback"}
      </button>
      
      {rating === 0 && (
        <p className="text-red-500 text-sm mt-2 text-center">
          Please select a star rating before submitting.
        </p>
      )}
    </form>
  );
}
