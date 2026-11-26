"use client";

import { useState } from "react";
import { SectionEyebrow, SectionHeading } from "@/components/section-eyebrow";

export type EngagementOffering = {
  label: string;
  quote: string;
  body: string;
};

export function FiveWaysStart({ offerings }: { offerings: EngagementOffering[] }) {
  const [focused, setFocused] = useState(0);
  const active = offerings[focused];
  const quoteText = active.quote.replace(/^["“]|["”]$/g, "");

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div aria-hidden className="shore-atmosphere-mist absolute inset-0" />

      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="max-w-[40rem]">
          <SectionEyebrow>Five ways to start with Shore GTM</SectionEyebrow>
          <SectionHeading className="max-w-[24ch]">
            Start with the most important question leadership needs to answer.
          </SectionHeading>
          <p className="mt-5 max-w-[44ch] text-[1.025rem] leading-[1.7] text-shore-body">
            Focus on the problem in front of you - then choose the engagement that matches it.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-shore-heading/10 bg-white shadow-[0_20px_60px_rgba(13,43,69,0.06)] lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
          <nav
            aria-label="Engagement types"
            className="border-b border-shore-heading/10 bg-shore-pale/40 lg:border-b-0 lg:border-r"
          >
            <ul className="flex gap-1 overflow-x-auto p-3 lg:flex-col lg:gap-0 lg:overflow-visible lg:p-4">
              {offerings.map((o, i) => {
                const on = focused === i;
                return (
                  <li key={o.label} className="shrink-0 lg:w-full">
                    <button
                      type="button"
                      onClick={() => setFocused(i)}
                      onMouseEnter={() => setFocused(i)}
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-left transition ${
                        on
                          ? "bg-white text-shore-heading shadow-[0_6px_20px_rgba(13,43,69,0.08)]"
                          : "text-shore-muted hover:bg-white/60 hover:text-shore-heading"
                      }`}
                    >
                      <span
                        className={`font-mono text-[0.65rem] tabular-nums tracking-[0.12em] ${
                          on ? "text-shore-teal" : "text-shore-muted/60"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.875rem] font-medium leading-snug">{o.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-shore-teal">
              {active.label}
            </p>
            <p className="mt-4 max-w-[20ch] font-display text-[clamp(1.45rem,2.6vw,1.95rem)] leading-[1.2] tracking-[-0.02em] text-shore-heading">
              <span className="italic">&ldquo;{quoteText}&rdquo;</span>
            </p>
            <div aria-hidden className="shore-rule my-6 w-12" />
            <p className="max-w-[44ch] text-[1.025rem] leading-[1.7] text-shore-body">
              {active.body}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[34ch] text-sm leading-relaxed text-shore-muted">
            Not sure which fits? A short conversation usually clarifies the right starting point.
          </p>
          <a
            href="https://calendly.com/patrickrooney/learn-more-about-shore-gtm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 rounded-md bg-shore-coral px-5 py-3 text-sm font-medium text-white transition hover:bg-shore-coral-hover"
          >
            Find out what&apos;s holding back your growth
          </a>
        </div>
      </div>
    </section>
  );
}
