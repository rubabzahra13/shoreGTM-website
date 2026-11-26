import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a discovery call with Shore GTM - a practical conversation about fit and next steps.",
};

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-b from-shore-mist to-white pt-[calc(72px+4rem)] pb-24 md:pb-32">
      <div className="mx-auto max-w-[760px] px-5">
        <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
          Let&apos;s talk
        </p>
        <h1 className="max-w-[18ch] font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.1] tracking-[-0.02em] text-shore-heading">
          Let&apos;s discuss the business outcomes AI can deliver for your organization.
        </h1>

        <div className="mt-7 max-w-[48ch] space-y-5 text-[1.05rem] leading-relaxed text-shore-body">
          <p>
            Schedule a discovery call to discuss your commercial priorities, the AI activity already
            underway, and the decision your leadership team needs to make next.
          </p>
          <p>
            No platform pitch. No transformation commitment. A practical conversation about fit and
            next steps.
          </p>
        </div>

        <a
          href="https://calendly.com/patrickrooney/learn-more-about-shore-gtm"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-md bg-shore-coral px-7 py-3.5 text-sm font-semibold text-white hover:bg-shore-coral-hover"
        >
          Schedule a call
        </a>

        <a
          href="mailto:hello@shoregtm.com"
          className="mt-12 block rounded-[28px] bg-shore-navy px-8 py-12 text-center text-white shadow-[0_24px_60px_rgba(13,43,69,0.22)] transition hover:bg-[#123552] md:py-14"
        >
          <span className="block font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-none tracking-[-0.02em]">
            hello@shoregtm.com
          </span>
          <span className="mt-4 block text-[0.95rem] text-white/75">
            We respond within 1 business day.
          </span>
        </a>
      </div>
    </section>
  );
}
