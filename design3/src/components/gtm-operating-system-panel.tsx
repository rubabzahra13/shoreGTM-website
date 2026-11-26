import Link from "next/link";
import { GtmOsWheel } from "@/components/gtm-os-wheel";

export function GtmOperatingSystemPanel() {
  return (
    <div className="relative mt-14 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0a2238] via-shore-navy to-[#081a2c] shadow-[0_48px_120px_rgba(8,26,44,0.35)] ring-1 ring-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 18% 42%, rgba(26,138,138,0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 92% 8%, rgba(232,107,79,0.14), transparent 50%), linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative grid items-center gap-12 px-6 pb-16 pt-12 md:px-12 lg:grid-cols-[1.05fr_0.92fr] lg:gap-16 lg:px-16 lg:pb-14 lg:pt-14">
        <div className="pb-10 lg:pb-0">
          <GtmOsWheel />
        </div>

        <div className="flex max-w-md flex-col justify-center lg:max-w-none">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-shore-mint" aria-hidden />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/70">
              Certified GTM Partner
            </span>
          </span>

          <h3 className="font-display text-[clamp(1.65rem,2.6vw,2.15rem)] leading-[1.2] text-white">
            Shore GTM is a Certified GTM Partner.
          </h3>

          <div className="my-6 h-px w-12 bg-gradient-to-r from-shore-mint/80 to-transparent" />

          <p className="text-[1.0625rem] leading-relaxed text-white/85">
            We use the eight-pillar GTM Operating System™ from GTM Partners to evaluate the entire
            go-to-market as one connected system.
          </p>
          <p className="mt-4 text-[1rem] leading-relaxed text-white/65">
            That is how you find the real constraint instead of treating the symptom, so leadership
            knows where to focus.
          </p>

          <Link
            href="/what-we-do"
            className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-white/35 pb-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white"
          >
            See the full methodology
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}