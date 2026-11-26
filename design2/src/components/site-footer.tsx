import Link from "next/link";
import { ShoreLogo } from "@/components/shore-logo";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a2238] pb-8 pt-12 text-white">
      <div className="relative mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
        <div>
          <Link href="/" className="inline-flex items-center transition hover:opacity-90" aria-label="Shore GTM home">
            <ShoreLogo height={52} />
          </Link>
          <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-shore-pale/80">
            Turn AI activity into GTM performance.
          </p>
        </div>

        <nav aria-label="Useful links">
          <h4 className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-shore-mint">
            Useful links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/what-we-do" className="text-shore-pale/80 transition hover:text-white">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-shore-pale/80 transition hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/insights" className="text-shore-pale/80 transition hover:text-white">
                Insights
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Connect">
          <h4 className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-shore-mint">
            Connect
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="text-shore-pale/80 transition hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://calendly.com/patrickrooney/learn-more-about-shore-gtm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-shore-pale/80 transition hover:text-white"
              >
                Book a discovery call
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h4 className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-shore-mint">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-shore-pale/55">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </nav>
      </div>

      <div className="relative mx-auto mt-10 flex w-full max-w-[1200px] border-t border-white/10 px-5 pt-6 text-xs text-shore-pale/45">
        <p>© 2026 Shore GTM LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
