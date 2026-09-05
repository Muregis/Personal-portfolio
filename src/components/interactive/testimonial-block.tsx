"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/site";

export function TestimonialBlock() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const current = testimonials[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
      <figure className="glass rounded-[2rem] p-8">
        <div
          className="flex gap-1 text-amber-300"
          aria-label="Rated 5 out of 5 stars"
        >
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star key={idx} className="h-5 w-5 fill-current" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="mt-6">
          <p className="text-xl leading-9 text-white md:text-2xl">
            &ldquo;{current.quote}&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-6">
          <p className="font-semibold text-white">{current.name}</p>
          <p className="text-slate-300">{current.role}</p>
        </figcaption>
      </figure>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3" aria-label="Choose a testimonial">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className={cn(
                "glass w-full rounded-[1.5rem] p-5 text-left transition-colors",
                index === active
                  ? "border-cyan-300/50"
                  : "hover:border-cyan-300/30"
              )}
            >
              <span className="block font-semibold text-white">{item.name}</span>
              <span className="block text-sm text-slate-300">{item.role}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
