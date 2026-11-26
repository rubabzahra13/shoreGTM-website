"use client";

import { useState } from "react";

const pillars = [
  { id: "08", name: "Leadership & Management", color: "#4E5D6B", hi: "#647384" },
  { id: "01", name: "Total Relevant Market", color: "#1A8A8A", hi: "#2BA5A5" },
  { id: "02", name: "Market Investment Map", color: "#3D8F89", hi: "#52A8A0" },
  { id: "03", name: "Brand & Demand", color: "#B8925A", hi: "#C9A876" },
  { id: "04", name: "Pipeline Velocity", color: "#D96E32", hi: "#E88A50" },
  { id: "05", name: "Customer Time-to-Value", color: "#B33F6A", hi: "#C95A82" },
  { id: "06", name: "Customer Expansion", color: "#D04D88", hi: "#E06FA0" },
  { id: "07", name: "Revenue Operations", color: "#7A8F9C", hi: "#94A8B3" },
];

const means = [
  "Diagnose the real constraint, not just the symptom",
  "Map the fix to the right GTM pillar",
  "Deploy faster with proven AI solutions",
];

const stages = [
  {
    label: "Strategy",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Development",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          d="M8 8 L4 12 L8 16M16 8 L20 12 L16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Implementation",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          d="M5 15 L12 5 L19 15 L12 13 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path d="M12 13 V19" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Governance",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          d="M12 3 L20 7 V12 C20 16.5 16.5 20 12 21 C7.5 20 4 16.5 4 12 V7 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Training & Adoption",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <circle cx="9" cy="8" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="16" cy="9" r="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M4 19 C4 16.5 6 15 9 15 C12 15 14 16.5 14 19M14 19 C14 17 15.5 16 17.5 16 C19.5 16 20.5 17 20.5 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function polar(cx: number, cy: number, r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function wedge(cx: number, cy: number, ro: number, ri: number, a0: number, a1: number, pad = 0.9) {
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

export function GtmOsDetailPanel() {
  const [active, setActive] = useState<number | null>(null);
  const cx = 200;
  const cy = 200;
  const ro = 168;
  const ri = 74;
  const slice = 360 / pillars.length;

  return (
    <div className="overflow-hidden rounded-[28px] border border-shore-heading/8 bg-[#f4f7f8] shadow-[0_24px_80px_rgba(13,43,69,0.08)]">
      <div className="grid gap-10 px-6 py-10 md:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 lg:px-12 lg:py-12 xl:gap-12">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-shore-teal">
            The GTM OS™
          </p>
          <span className="mt-2 block h-0.5 w-10 bg-shore-coral" aria-hidden />

          <h3 className="mt-5 max-w-[18ch] font-display text-[clamp(1.55rem,2.6vw,2.1rem)] leading-[1.15] text-shore-heading">
            We look across the whole GTM system, not just the symptom.
          </h3>

          <p className="mt-5 max-w-[40ch] text-[0.98rem] leading-relaxed text-shore-body">
            Shore GTM uses the GTM Operating System™ to diagnose where growth is breaking down across
            eight interconnected pillars - then maps the right fix.
          </p>
          <p className="mt-3 max-w-[40ch] text-[0.98rem] leading-relaxed text-shore-body">
            From there we draw on a library of 90+ AI and automation solutions tied to those pillars,
            so AI is applied where it moves revenue, not where it is trendy.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(13,43,69,0.06)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-shore-teal text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <circle cx="7" cy="7" r="2.2" fill="currentColor" />
                  <circle cx="17" cy="7" r="2.2" fill="currentColor" />
                  <circle cx="7" cy="17" r="2.2" fill="currentColor" />
                  <circle cx="17" cy="17" r="2.2" fill="currentColor" />
                  <path
                    d="M9 7h6M7 9v6M17 9v6M9 17h6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <p className="text-[0.9rem] leading-snug text-shore-heading">
                <span className="font-semibold">8</span> interconnected GTM pillars
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(13,43,69,0.06)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-shore-coral text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M12 4 L13.2 8.2 L17.5 8.5 L14.2 11.2 L15.2 15.5 L12 13.2 L8.8 15.5 L9.8 11.2 L6.5 8.5 L10.8 8.2 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 3 L18.5 4.8 L20.2 5.2 L18.8 6.3 L19.2 8 L18 7.1 L16.8 8 L17.2 6.3 L15.8 5.2 L17.5 4.8 Z"
                    fill="currentColor"
                    opacity="0.85"
                  />
                </svg>
              </span>
              <p className="text-[0.9rem] leading-snug text-shore-heading">
                <span className="font-semibold">90+</span> mapped AI solutions
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
          <svg
            viewBox="0 0 400 400"
            className="relative z-0 mx-auto h-auto w-full max-w-[420px] drop-shadow-[0_20px_48px_rgba(13,43,69,0.12)]"
          >
            <defs>
              {pillars.map((p, i) => (
                <linearGradient key={`dg-${p.id}`} id={`detail-pillar-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={p.hi} />
                  <stop offset="100%" stopColor={p.color} />
                </linearGradient>
              ))}
            </defs>

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
                    d={wedge(cx, cy, ro, ri, a0, a1, 1.1)}
                    fill={`url(#detail-pillar-${i})`}
                    opacity={dim ? 0.4 : 1}
                    style={{
                      transition: "opacity 0.3s ease, transform 0.3s ease",
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
                    opacity={dim ? 0.5 : 0.98}
                    className="pointer-events-none select-none"
                    style={{
                      fontSize: lines.length > 2 ? 7.2 : 8,
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {lines.map((line, li) => (
                      <tspan key={`${p.id}-${line}`} x={lp.x} dy={`${li === 0 ? firstDy : lineH}em`}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}

            <circle cx={cx} cy={cy} r={ri - 2} fill="#ffffff" />
            <circle cx={cx} cy={cy} r={ri - 2} fill="none" stroke="rgba(13,43,69,0.08)" strokeWidth="1" />
            <text
              x={cx}
              y={cy - 4}
              textAnchor="middle"
              fill="#083D3D"
              style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              GTM
            </text>
            <text
              x={cx}
              y={cy + 14}
              textAnchor="middle"
              fill="#1A8A8A"
              style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.04em" }}
            >
              Operating System
            </text>
          </svg>

          <aside className="relative z-10 mx-auto -mt-6 w-full max-w-[320px] rounded-2xl border border-shore-heading/8 bg-white p-5 shadow-[0_16px_40px_rgba(13,43,69,0.1)] lg:absolute lg:bottom-2 lg:right-0 lg:mx-0 lg:mt-0 lg:w-[min(100%,280px)]">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-shore-coral/12 text-shore-coral">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                  <path
                    d="M9 18h6M10 21h4M12 3a6 6 0 0 1 6 6c0 2.2-1.2 3.6-2.4 4.7-.7.6-1.1 1.2-1.2 2.3H9.6c-.1-1.1-.5-1.7-1.2-2.3C7.2 12.6 6 11.2 6 9a6 6 0 0 1 6-6Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-sm font-semibold text-shore-heading">What this means</p>
            </div>
            <ul className="space-y-2.5">
              {means.map((item) => (
                <li key={item} className="flex gap-2.5 text-[0.8125rem] leading-snug text-shore-body">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-shore-coral/15 text-shore-coral">
                    <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" aria-hidden="true">
                      <path
                        d="M3.5 8.5 L6.5 11.5 L12.5 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <div className="border-t border-shore-heading/8 px-6 py-8 md:px-10 lg:px-12">
        <p className="mb-5 text-center font-mono text-[0.68rem] uppercase tracking-[0.14em] text-shore-teal">
          How we turn diagnosis into execution
        </p>
        <ol className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-0">
          {stages.map((stage, i) => (
            <li key={stage.label} className="flex items-center sm:contents">
              <div className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-shore-navy px-4 py-3 text-white sm:flex-none sm:min-w-[9.5rem]">
                <span className="text-shore-mint">{stage.icon}</span>
                <span className="text-[0.8125rem] font-semibold tracking-wide">{stage.label}</span>
              </div>
              {i < stages.length - 1 && (
                <span
                  aria-hidden
                  className="mx-1 hidden h-px w-6 border-t border-dashed border-shore-navy/35 sm:block lg:w-8"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
