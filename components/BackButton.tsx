"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ className = "" }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`group inline-flex items-center gap-2 text-small font-medium uppercase tracking-caps transition-colors ${className}`}
      aria-label="Go back to previous page"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center border border-current transition-transform group-hover:-translate-x-1">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8.5 2L3.5 7L8.5 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      </span>
      Back
    </button>
  );
}
