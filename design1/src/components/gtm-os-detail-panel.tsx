"use client";

import { useState } from "react";

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
  "A churn issue may begin with who was sold in the first place.",
  "A pipeline gap may actually be a positioning or demand problem.",
];

const stages = ["Strategy", "Development", "Implementation", "Governance", "Training & Adoption"];

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
  const ro = 172;
  const ri = 78;
  const slice = 360 / pillars.length;
  const activePillar = active !== null ? pillars[active] : null;

  return (
    <div className="overflow-hidden rounded-lg border border-shore-heading/10 bg-white shadow-[0_16px_48px_rgba(13,43,69,0.06)]">
      <div className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)] lg:gap-10 xl:gap-12">
        <div className="max-w-[34rem] lg:py-2">
          <p className="text-[0.95rem] leading-relaxed text-shore-body">
            Shore GTM uses the eight-pillar GTM Operating System™ to diagnose where growth breaks down
            as one connected system, then maps proven AI and automation plays to the constraint that
            actually matters.
          </p>

          <ol className="mt-6 divide-y divide-shore-heading/10 border-y border-shore-heading/10">
            {insights.map((line, i) => (
              <li key={line} className="grid grid-cols-[2.25rem_1fr] gap-3 py-3.5">
                <span className="font-mono text-[0.68rem] tracking-[0.12em] text-shore-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.925rem] leading-snug text-shore-heading">{line}</p>
              </li>
            ))}
          </ol>

          <dl className="mt-6 flex gap-10">
            <div>
              <dt className="font-display text-[1.5rem] tracking-[-0.02em] text-shore-heading">8</dt>
              <dd className="mt-0.5 text-[0.8rem] leading-snug text-shore-body">interconnected pillars</dd>
            </div>
            <div>
              <dt className="font-display text-[1.5rem] tracking-[-0.02em] text-shore-heading">90+</dt>
              <dd className="mt-0.5 text-[0.8rem] leading-snug text-shore-body">mapped solutions</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-none">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[10%] rounded-full bg-shore-teal/12 blur-3xl"
          />

          <svg
            viewBox="0 0 400 400"
            className="relative h-auto w-full drop-shadow-[0_20px_50px_rgba(13,43,69,0.12)]"
            aria-label="GTM Operating System pillars"
          >
            <defs>
              {pillars.map((p, i) => (
                <linearGradient key={`dg-${p.id}`} id={`detail-pillar-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={p.hi} />
                  <stop offset="100%" stopColor={p.color} />
                </linearGradient>
              ))}
              <filter id="detail-pillar-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0d2b45" floodOpacity="0.16" />
              </filter>
            </defs>

            <circle
              cx={cx}
              cy={cy}
              r={ro + 10}
              fill="none"
              stroke="rgba(26,138,138,0.16)"
              strokeWidth="1"
              strokeDasharray="2 6"
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
                    fill={`url(#detail-pillar-${i})`}
                    opacity={dim ? 0.38 : 1}
                    filter={on ? "url(#detail-pillar-glow)" : undefined}
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
                    opacity={dim ? 0.45 : 0.98}
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

            <circle cx={cx} cy={cy} r={ri - 2} fill="#F3F2ED" />
            <circle cx={cx} cy={cy} r={ri - 2} fill="none" stroke="rgba(13,43,69,0.08)" strokeWidth="1" />
            <text
              x={cx}
              y={cy - 4}
              textAnchor="middle"
              fill="#083D3D"
              style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              GTM
            </text>
            <text
              x={cx}
              y={cy + 14}
              textAnchor="middle"
              fill="#1A8A8A"
              style={{ fontSize: 8.5, fontWeight: 600, letterSpacing: "0.06em" }}
            >
              Operating System™
            </text>
          </svg>

          <p className="mt-4 min-h-[1.25rem] text-center font-mono text-[0.65rem] uppercase tracking-[0.12em]">
            {activePillar ? (
              <>
                <span className="text-shore-teal">Pillar {activePillar.id}</span>
                <span className="mx-2 text-shore-heading/20">·</span>
                <span className="text-shore-heading">{activePillar.name}</span>
              </>
            ) : (
              <span className="text-shore-muted">Hover a pillar to explore</span>
            )}
          </p>
        </div>
      </div>

      <div className="border-t border-shore-heading/10 bg-shore-fog/60 px-6 py-5 md:px-8">
        <p className="mb-3 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-shore-muted">
          Diagnosis to execution
        </p>
        <ol className="flex flex-wrap gap-x-5 gap-y-2 md:gap-x-7">
          {stages.map((label, i) => (
            <li key={label} className="flex items-center gap-2">
              <span className="font-mono text-[0.65rem] tracking-[0.1em] text-shore-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.8125rem] font-medium text-shore-heading">{label}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}