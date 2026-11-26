import Link from "next/link";
import { ShoreLogo } from "@/components/shore-logo";
import { ASSESSMENT_URL, CALENDLY_URL } from "@/lib/links";

const usefulLinks = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/about", label: "About Us" },
  { href: "/insights", label: "Insights" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-shore-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 0% 100%, rgba(26,138,138,0.2), transparent 55%), radial-gradient(ellipse 40% 45% at 100% 0%, rgba(109,183,174,0.12), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-10 pt-14 md:pb-12 md:pt-16">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="max-w-[22rem]">
            <Link href="/" className="inline-flex transition hover:opacity-90" aria-label="Shore GTM home">
              <ShoreLogo height={48} />
            </Link>
            <p className="mt-5 font-display text-[clamp(1.35rem,2.2vw,1.65rem)] leading-snug tracking-[-0.02em] text-white">
              Turn AI activity into GTM performance.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-shore-coral px-5 py-2.5 text-sm font-medium text-white transition hover:bg-shore-coral-hover"
            >
              Book a discovery call
            </a>
            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/45 hover:bg-white/5"
            >
              Take the assessment
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <nav aria-label="Pages">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-shore-mint">Pages</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {usefulLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/78 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-white/78 transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Connect">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-shore-mint">Connect</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              <li>
                <a
                  href="mailto:hello@shoregtm.com"
                  className="text-white/78 transition hover:text-white"
                >
                  hello@shoregtm.com
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/78 transition hover:text-white"
                >
                  Book a discovery call
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal" className="sm:col-start-2 lg:col-start-auto">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-shore-mint">Legal</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem] text-white/55">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </nav>

          <div className="lg:text-right">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-shore-mint">Shore GTM</p>
            <p className="mt-4 max-w-[28ch] text-[0.875rem] leading-relaxed text-white/55 lg:ml-auto">
              Operator-led GTM and AI advisory for leadership teams who need measurable business outcomes.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Shore GTM LLC. All rights reserved.</p>
          <p className="font-mono text-[0.65rem] tracking-[0.08em] text-white/40">GTM OS™ Certified Partner</p>
        </div>
      </div>
    </footer>
  );
}