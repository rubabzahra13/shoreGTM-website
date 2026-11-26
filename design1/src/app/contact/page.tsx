import type { Metadata } from "next";
import { TidelineCta } from "@/components/ui/tideline-cta";
import { ASSESSMENT_URL, CALENDLY_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a discovery call with Shore GTM - a practical conversation about fit and next steps.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-[72px]">
        <TidelineCta
          theme="shore"
          className="tlc--fullbleed"
          mediaSrc="/images/gtm-ai-workshop.png"
          mediaAlt="Shore GTM workshop session mapping AI initiatives"
          eyebrow="Contact"
          headline="Let's discuss the business outcomes AI can deliver for your organization."
          lead="Schedule a discovery call to discuss your commercial priorities, the AI activity already underway, and the decision your leadership team needs to make next."
          sub={
            <p>
              No platform pitch. No transformation commitment. A practical conversation about fit
              and next steps.
            </p>
          }
          details={["30-minute call", "Clear next-step recommendation", "No pitch deck required"]}
          action="Schedule a call"
          href={CALENDLY_URL}
          secondaryAction="Take the assessment"
          secondaryHref={ASSESSMENT_URL}
        />
      </div>

      <section className="border-t border-shore-heading/10 bg-shore-fog py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-16">
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
                Prefer email
              </p>
              <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.45rem,2.8vw,1.9rem)] leading-tight tracking-[-0.02em] text-shore-heading">
                Reach us directly.
              </h2>
              <p className="mt-4 max-w-[34ch] text-[1.025rem] leading-relaxed text-shore-body">
                We respond within one business day.
              </p>
            </div>

            <a
              href="mailto:hello@shoregtm.com"
              className="group border-t border-shore-heading/10 pt-6 transition md:border-t-0 md:border-l md:pl-10 md:pt-0"
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-shore-muted">
                Email
              </p>
              <p className="mt-3 font-display text-[clamp(1.55rem,3vw,2.15rem)] tracking-[-0.02em] text-shore-heading transition group-hover:text-shore-teal">
                hello@shoregtm.com
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
