"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionEyebrow, SectionHeading } from "@/components/section-eyebrow";

const pillars = [
  { id: "01", name: "Total Relevant Market", color: "#1A8A8A", hi: "#2BA5A5" },
  { id: "02", name: "Market Investment Map", color: "#3D8F89", hi: "#52A8A0" },
  { id: "03", name: "Brand & Demand", color: "#B8925A", hi: "#C9A876" },
  { id: "04", name: "Pipeline Velocity", color: "#D96E32", hi: "#E88A50" },
  { id: "05", name: "Customer Time-to-Value", color: "#B33F6A", hi: "#C95A82" },
  { id: "06", name: "Customer Expansion", color: "#D04D88", hi: "#E06FA0" },
  { id: "07", name: "Revenue Operations", color: "#7A8F9C", hi: "#94A8B3" },
  { id: "08", name: "Leadership & Management", color: "#4E5D6B", hi: "#647384" },
];

const insights = [
  "The problem that shows up in sales may have started in market selection.",
  "A churn problem may begin with who was sold in the first place.",
  "A pipeline problem may actually be a positioning problem.",
];

function polar(cx: number, cy: number, r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function wedge(
  cx: number,
  cy: number,
  ro: number,
  ri: number,
  a0: number,
  a1: number,
  pad = 0.9,
) {
  const start = a0 + pad / 2;
  const end = a1 - pad / 2;
  const large = end - start > 180 ? 1 : 0;
  const o1 = polar(cx, cy, ro, start);
  const o2 = polar(cx, cy, ro, end);
  const i1 = polar(cx, cy, ri, end);
  const i2 = polar(cx, cy, ri, start);
  return `M ${o1.x} ${o1.y} A ${ro} ${ro} 0 ${large} 1 ${o2.x} ${o2.y} L ${i1.x} ${i1.y} A ${ri} ${ri} 0 ${large} 0 ${i2.x} ${i2.y} Z`;
}

function labelLines(name: string, maxChars = 11): string[] {
  const tokens = name.split(/\s+/).flatMap((word) => {
    if (!(word.includes("-") && word.length > maxChars)) return [word];
    const parts = word.split("-");
    const out: string[] = [];
    let cur = parts[0];
    for (let i = 1; i < parts.length; i++) {
      const next = `${cur}-${parts[i]}`;
      if (next.length <= maxChars) cur = next;
      else {
        out.push(cur);
        cur = parts[i];
      }
    }
    out.push(cur);
    return out;
  });

  const glued: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "&" && tokens[i + 1]) {
      glued.push(`& ${tokens[i + 1]}`);
      i += 1;
    } else {
      glued.push(tokens[i]);
    }
  }

  if (glued.length === 1) return glued;

  const lines: string[] = [];
  let current = glued[0];
  for (let i = 1; i < glued.length; i++) {
    const next = `${current} ${glued[i]}`;
    if (next.length <= maxChars) current = next;
    else {
      lines.push(current);
      current = glued[i];
    }
  }
  lines.push(current);
  return lines;
}

export function GtmOsShowcase() {
  const [active, setActive] = useState<number | null>(null);
  const cx = 200;
  const cy = 200;
  const ro = 172;
  const ri = 78;
  const slice = 360 / pillars.length;
  const activePillar = active !== null ? pillars[active] : null;

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-shore-teal/[0.05] blur-[90px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-16">
          <div className="max-w-[34rem]">
            <SectionEyebrow>GTM operating system</SectionEyebrow>
            <SectionHeading className="max-w-[18ch]">
              We look across the entire GTM organization to pinpoint what is holding back growth.
            </SectionHeading>

            <ol className="mt-12 space-y-0 border-t border-shore-heading/10">
              {insights.map((line, i) => (
                <li
                  key={line}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-shore-heading/10 py-5"
                >
                  <span className="font-mono text-[0.7rem] tracking-[0.12em] text-shore-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[1.05rem] leading-snug text-shore-heading">{line}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <p className="max-w-[34rem] text-[1rem] leading-[1.7] text-shore-body">
                Shore GTM is a Certified GTM Partner. We use the eight-pillar GTM Operating System™
                from GTM Partners to evaluate go-to-market as one connected system - so leadership
                finds the real constraint instead of treating the symptom.
              </p>
              <Link
                href="/what-we-do"
                className="group mt-7 inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.04em] text-shore-heading"
              >
                <span className="border-b border-shore-heading/30 pb-0.5 transition group-hover:border-shore-teal">
                  See the full methodology
                </span>
                <span className="text-shore-coral transition group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[8%] rounded-full bg-shore-teal/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[18%] rounded-full bg-shore-coral/10 blur-2xl"
            />

            <svg
              viewBox="0 0 400 400"
              className="relative h-auto w-full drop-shadow-[0_28px_60px_rgba(13,43,69,0.14)]"
            >
              <defs>
                {pillars.map((p, i) => (
                  <linearGradient
                    key={`g-${p.id}`}
                    id={`pillar-grad-${i}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={p.hi} />
                    <stop offset="100%" stopColor={p.color} />
                  </linearGradient>
                ))}
                <filter id="pillar-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0d2b45" floodOpacity="0.18" />
                </filter>
              </defs>

              <circle
                cx={cx}
                cy={cy}
                r={ro + 12}
                fill="none"
                stroke="rgba(26,138,138,0.18)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
              <circle
                cx={cx}
                cy={cy}
                r={ro + 6}
                fill="none"
                stroke="rgba(13,43,69,0.08)"
                strokeWidth="1"
              />

              {pillars.map((p, i) => {
                const a0 = i * slice;
                const a1 = a0 + slice;
                const mid = a0 + slice / 2;
                const lp = polar(cx, cy, (ro + ri) / 2, mid);
                const on = active === i;
                const dim = active !== null && !on;
                const lines = labelLines(p.name);
                const lineH = 1.15;
                const firstDy = -((lines.length - 1) / 2) * lineH;

                return (
                  <g
                    key={p.id}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={p.name}
                    className="cursor-pointer outline-none"
                  >
                    <path
                      d={wedge(cx, cy, ro, ri, a0, a1, 1.15)}
                      fill={`url(#pillar-grad-${i})`}
                      opacity={dim ? 0.35 : 1}
                      filter={on ? "url(#pillar-glow)" : undefined}
                      style={{
                        transition: "opacity 0.35s ease, transform 0.35s ease",
                        transformOrigin: `${cx}px ${cy}px`,
                        transform: on ? "scale(1.02)" : "scale(1)",
                      }}
                    />
                    <text
                      x={lp.x}
                      y={lp.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#fff"
                      opacity={dim ? 0.45 : 0.98}
                      className="pointer-events-none select-none"
                      style={{
                        fontSize: lines.length > 2 ? 7.4 : 8.1,
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {lines.map((line, li) => (
                        <tspan
                          key={`${p.id}-${line}`}
                          x={lp.x}
                          dy={`${li === 0 ? firstDy : lineH}em`}
                        >
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
                );
              })}

              <circle cx={cx} cy={cy} r={ri - 2} fill="#ffffff" />
              <circle
                cx={cx}
                cy={cy}
                r={ri - 2}
                fill="none"
                stroke="rgba(13,43,69,0.08)"
                strokeWidth="1"
              />
              <circle
                cx={cx}
                cy={cy}
                r={ri - 14}
                fill="none"
                stroke="rgba(26,138,138,0.2)"
                strokeWidth="1"
                strokeDasharray="3 5"
              />
              <g
                transform={`translate(${cx - 13}, ${cy - 40})`}
                fill="none"
                stroke="#E86B4F"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 24 L11 13 L17 17 L27 5" />
                <path d="M21 5 H27 V11" />
              </g>
              <text
                x={cx}
                y={cy + 6}
                textAnchor="middle"
                fill="#083D3D"
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: "-0.015em" }}
              >
                GTM Operating
              </text>
              <text
                x={cx}
                y={cy + 22}
                textAnchor="middle"
                fill="#1A8A8A"
                style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em" }}
              >
                SYSTEM™
              </text>
            </svg>

            <div className="mt-6 flex min-h-[1.5rem] items-center justify-center">
              {activePillar ? (
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-shore-teal">
                  Pillar {activePillar.id}
                  <span className="mx-2 text-shore-heading/20">·</span>
                  <span className="text-shore-heading">{activePillar.name}</span>
                </p>
              ) : (
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-shore-muted">
                  Hover a pillar to explore
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
