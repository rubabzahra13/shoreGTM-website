export function HomeClosingCta() {
  return (
    <section className="relative overflow-hidden bg-shore-navy py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 50% 0%, rgba(26,138,138,0.22), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[640px] px-5 text-center">
        <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-shore-mint">
          Next step
        </p>
        <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.55rem)] leading-[1.12] tracking-[-0.025em] text-white">
          Something isn&apos;t working. Let&apos;s find out what.
        </h2>
        <p className="mx-auto mt-5 max-w-[42ch] text-[1.025rem] leading-[1.7] text-shore-pale">
          Thirty minutes on where growth is stalling and what is causing it. No brief required. Most
          people leave with a sharper read on the problem than they walked in with.
        </p>
        <a
          href="https://calendly.com/patrickrooney/learn-more-about-shore-gtm"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-md bg-shore-coral px-6 py-3 text-sm font-medium text-white transition hover:bg-shore-coral-hover"
        >
          Find out what&apos;s holding back your growth
        </a>
      </div>
    </section>
  );
}
