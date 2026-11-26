"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoreLogo } from "@/components/shore-logo";
import { ASSESSMENT_URL, CALENDLY_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHome = pathname === "/";
  const overHero = onHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[72px] transition-[background-color,border-color,box-shadow] duration-300",
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-white/10 bg-shore-navy/95 shadow-[0_12px_40px_rgba(8,20,32,0.28)] backdrop-blur-lg",
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between gap-6 px-5">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Shore GTM home">
          <ShoreLogo height={44} priority />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative px-3 py-2 text-[0.8125rem] transition-colors",
                  active
                    ? "font-medium text-white"
                    : "font-normal text-white/65 hover:text-white",
                )}
              >
                {l.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px bg-shore-mint transition duration-300",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={ASSESSMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-md border border-white/25 bg-white/[0.04] px-3.5 py-2 text-[0.8125rem] font-medium text-white/90 transition hover:border-white/40 hover:bg-white/[0.1] hover:text-white sm:inline-flex"
          >
            Assessment
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-shore-coral px-3.5 py-2 text-[0.8125rem] font-medium text-white transition hover:bg-shore-coral-hover"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
