"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ASSESSMENT_URL, CALENDLY_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

const heroStats = [
  { label: "Experience", value: <><span className="text-shore-mint">25+</span> years in GTM</> },
  { label: "Method", value: <>8-pillar <span className="text-shore-mint">GTM OS™</span></> },
  { label: "Assessment", value: <><span className="text-shore-mint">Free</span><span className="text-white/70"> · 10 min</span></> },
] as const;

const NEEDLE_REST = 24;
const NEEDLE_STIFFNESS = 58;
const NEEDLE_DAMPING = 7.2;

export function HomeHero() {
  const [play, setPlay] = useState(false);
  const needleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!play) return;

    const el = needleRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.transform = `translate(-60.4%, -49.9%) rotate(${NEEDLE_REST}deg)`;
      return;
    }

    let angle = NEEDLE_REST - 11;
    let velocity = 0;
    let raf = 0;
    let last = performance.now();
    let start = last;
    let alive = true;
    let nextKickAt = last + 1600;

    const apply = () => {
      el.style.transform = `translate(-60.4%, -49.9%) rotate(${angle}deg)`;
    };

    apply();

    const tick = (now: number) => {
      if (!alive) return;
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      const t = (now - start) / 1000;

      // Wandering "north" so the needle never fully freezes
      const target =
        NEEDLE_REST +
        Math.sin(t * 0.9) * 3.6 +
        Math.sin(t * 0.4 + 1.1) * 1.8 +
        Math.sin(t * 1.7) * 0.55;

      // Occasional soft impulses, always in motion between them
      if (now >= nextKickAt) {
        const dir = Math.random() > 0.5 ? 1 : -1;
        velocity += dir * (0.55 + Math.random() * 0.95);
        nextKickAt = now + 1400 + Math.random() * 1800;
      }

      const accel = -NEEDLE_STIFFNESS * (angle - target) - NEEDLE_DAMPING * velocity;
      velocity += accel * dt;
      angle += velocity * dt;

      apply();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
    };
  }, [play]);

  return (
    <section
      className={cn(
        "home-hero relative isolate min-h-[min(92svh,840px)] overflow-hidden bg-shore-navy",
        play && "home-hero--play",
      )}
    >
      <div className="home-hero__media absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="home-hero__bg-track absolute inset-0">
          <Image
            src="/images/compass-topographic-map.png"
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="home-hero__img object-cover"
          />
          <div className="home-hero__needle-pivot absolute z-[1]" aria-hidden>
            <div
              ref={needleRef}
              className="home-hero__needle-rotate relative aspect-[3/2] w-[min(68vw,580px)] sm:w-[min(58vw,620px)] lg:w-[min(52vw,720px)]"
            >
              <Image
                src="/images/hero-compass-needle.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 52vw, 500px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
        <div className="home-hero__veil pointer-events-none absolute inset-0 z-[2]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(92svh,840px)] w-full max-w-[1200px] items-center px-5 pb-20 pt-[calc(72px+3rem)]">
        <div className="w-full max-w-[38rem]">
          <p className="home-hero__reveal home-hero__reveal--1 flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-shore-mint">
            <span aria-hidden className="inline-block h-px w-7 bg-shore-mint/70" />
            B2B go-to-market advisory
          </p>

          <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(2.5rem,5.2vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
            <span className="home-hero__reveal home-hero__reveal--2 block">
              Find what&apos;s holding back growth.
            </span>
            <span className="home-hero__reveal home-hero__reveal--2b mt-2 block text-shore-mint">
              Fix what matters.
            </span>
          </h1>

          <p className="home-hero__reveal home-hero__reveal--3 mt-7 max-w-[40ch] text-[1.0625rem] leading-[1.7] text-white sm:text-[1.125rem]">
            Shore GTM helps B2B companies pinpoint the problem, improve the workflows that slow
            growth, and apply AI where it makes sense - so revenue becomes faster, more efficient,
            and more profitable.
          </p>

          <div className="home-hero__reveal home-hero__reveal--4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-shore-coral px-5 py-3 text-[0.875rem] font-medium text-white transition hover:bg-shore-coral-hover"
            >
              Take the GTM maturity assessment
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-[0.875rem] font-medium text-white transition hover:border-white/55 hover:bg-white/[0.08]"
            >
              Schedule a call
            </a>
          </div>

          <dl className="home-hero__reveal home-hero__reveal--5 mt-12 flex flex-wrap items-stretch gap-x-0 gap-y-5 border-t border-white/12 pt-8">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "home-hero__stat min-w-[7.5rem] pr-8",
                  i > 0 && "sm:border-l sm:border-white/12 sm:pl-8",
                )}
                style={{ animationDelay: `${0.82 + i * 0.1}s` }}
              >
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/45">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 font-display text-[1.05rem] leading-snug text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}