"use client";

import { useState } from "react";
export type EngageService = {
  label: string;
  title: string;
  body: string;
  outcomes: string[];
};

export function WaysToEngage({ services }: { services: EngageService[] }) {
  const [open, setOpen] = useState(-1);

  return (
    <section className="border-y border-shore-heading/10 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="max-w-[36rem]">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
            Ways to engage
          </p>
          <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.45rem,2.8vw,2rem)] leading-tight tracking-[-0.02em] text-shore-heading">
            We meet you where you&apos;re at.
          </h2>
          <p className="mt-3 max-w-[42ch] text-[0.975rem] leading-relaxed text-shore-body">
            Start with the problem in front of you, then choose the engagement that matches it.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-shore-heading/10 bg-white shadow-[0_16px_48px_rgba(13,43,69,0.06)] md:mt-10">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <article
                key={s.label}
                className={`border-b border-shore-heading/8 last:border-b-0 ${isOpen ? "bg-shore-fog/40" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-start gap-5 px-6 py-5 text-left transition hover:bg-shore-fog/25 md:px-8 md:py-6"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`mt-0.5 shrink-0 font-mono text-[0.7rem] tabular-nums tracking-[0.1em] ${isOpen ? "text-shore-teal" : "text-shore-muted/50"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 pr-4">
                    <span className="block font-display text-[1.08rem] leading-snug tracking-[-0.015em] text-shore-heading md:text-[1.125rem]">
                      {s.label}
                    </span>
                    <span
                      className={`mt-1 block text-[0.9rem] leading-snug ${isOpen ? "text-shore-heading/85" : "line-clamp-2 text-shore-body"}`}
                    >
                      {s.title}
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
                    <div className="space-y-5 px-6 pb-6 pl-[3.25rem] md:space-y-6 md:px-8 md:pb-7 md:pl-[4.25rem]">
                      <p className="max-w-[54ch] text-[0.925rem] leading-relaxed text-shore-body">{s.body}</p>
                      <div>
                        <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-shore-muted">
                          What you leave with
                        </p>
                        <ul className="mt-2.5 grid gap-x-6 gap-y-1.5 sm:grid-cols-3">
                          {s.outcomes.map((o) => (
                            <li
                              key={o}
                              className="relative pl-3.5 text-[0.875rem] leading-snug text-shore-heading before:absolute before:left-0 before:top-[0.5em] before:h-1 before:w-1 before:rounded-full before:bg-shore-teal"
                            >
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}