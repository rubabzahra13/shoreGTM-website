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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onHome = pathname === "/";
  const overHero = onHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-white/10 bg-shore-navy/95 shadow-[0_12px_40px_rgba(8,20,32,0.28)] backdrop-blur-lg",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-4 px-5">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Shore GTM home">
          <ShoreLogo height={40} priority />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative px-2.5 py-2 text-[0.8125rem] transition-colors lg:px-3",
                  active
                    ? "font-medium text-white"
                    : "font-normal text-white/65 hover:text-white",
                )}
              >
                {l.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-2.5 -bottom-0.5 h-px bg-shore-mint transition duration-300 lg:inset-x-3",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={ASSESSMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-md border border-white/25 bg-white/[0.04] px-3 py-2 text-[0.8125rem] font-medium text-white/90 transition hover:border-white/40 hover:bg-white/[0.1] hover:text-white sm:inline-flex"
          >
            Assessment
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-shore-coral px-3 py-2 text-[0.8125rem] font-medium text-white transition hover:bg-shore-coral-hover"
          >
            Book a call
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-shore-navy/98 backdrop-blur-lg md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-md px-3 py-2.5 text-[0.9375rem] transition",
                  active
                    ? "bg-white/10 font-medium text-white"
                    : "text-white/75 hover:bg-white/[0.06] hover:text-white",
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={ASSESSMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-md border border-white/20 px-3 py-2.5 text-center text-[0.875rem] font-medium text-white sm:hidden"
          >
            Assessment
          </a>
        </nav>
      </div>
    </header>
  );
}
