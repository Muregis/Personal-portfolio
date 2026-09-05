"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/lib/site";

export function FaqBlock() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="glass rounded-[1.5rem]">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 rounded-[1.5rem] px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">{item.q}</span>
                <Plus
                  className={cn(
                    "h-5 w-5 shrink-0 text-cyan-200 transition-transform duration-200",
                    isOpen && "rotate-45"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              hidden={!isOpen}
            >
              {isOpen ? (
                <p className="px-6 pb-6 leading-7 text-slate-300">{item.a}</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
