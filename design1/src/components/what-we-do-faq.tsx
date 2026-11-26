"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export function WhatWeDoFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div aria-hidden className="shore-atmosphere-mist pointer-events-none absolute inset-0 opacity-80" />

      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
              Common questions
            </p>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(1.65rem,3.2vw,2.35rem)] leading-tight tracking-[-0.02em] text-shore-heading">
              Straight answers to the questions customers ask.
            </h2>
            <p className="mt-5 max-w-[32ch] text-[1.025rem] leading-relaxed text-shore-body">
              Prefer a conversation? A short call is usually the fastest way to get oriented.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-shore-heading/10 bg-white shadow-[0_24px_80px_rgba(13,43,69,0.07)]">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <article
                  key={item.q}
                  className={`border-b border-shore-heading/8 last:border-b-0 ${isOpen ? "bg-shore-fog/50" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-start gap-5 px-6 py-5 text-left transition hover:bg-shore-fog/30 md:px-8 md:py-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`mt-0.5 font-mono text-[0.7rem] tabular-nums tracking-[0.1em] ${isOpen ? "text-shore-teal" : "text-shore-muted/50"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[1.05rem] leading-snug tracking-[-0.015em] text-shore-heading md:text-[1.1rem]">
                        {item.q}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`mt-1.5 inline-block h-3 w-3 shrink-0 text-shore-teal transition duration-200 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-[3.25rem] text-[0.975rem] leading-[1.65] text-shore-body md:px-8 md:pb-7 md:pl-[4.25rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}