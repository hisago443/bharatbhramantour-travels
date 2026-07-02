"use client";

import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={`divide-y divide-stone ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="pr-4 font-body text-body font-medium text-night">
                {item.title}
              </span>
              <span
                className="flex-shrink-0 text-charcoal transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="10" y1="4" x2="10" y2="16" />
                  <line x1="4" y1="10" x2="16" y2="10" />
                </svg>
              </span>
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              hidden={!isOpen}
              className="overflow-hidden"
            >
              <div className="pb-5 text-body font-normal leading-body text-charcoal/80">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
