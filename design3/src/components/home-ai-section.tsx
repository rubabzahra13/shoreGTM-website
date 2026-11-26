import { SectionEyebrow, SectionHeading } from "@/components/section-eyebrow";

export function HomeAiSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div aria-hidden className="absolute inset-0 bg-shore-navy" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 100% 0%, rgba(26,138,138,0.28), transparent 55%), radial-gradient(ellipse 45% 50% at 0% 100%, rgba(109,183,174,0.12), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-14">
          <div className="flex flex-col justify-center">
            <SectionEyebrow className="text-shore-mint">AI and business performance</SectionEyebrow>
            <SectionHeading className="max-w-[18ch] text-white">
              Employees use AI every day. The leadership job is different.
            </SectionHeading>
            <div className="mt-6 max-w-[46ch] space-y-4 text-[1.025rem] leading-[1.7] text-shore-pale">
              <p>
                Employees will keep using AI to research faster, write better, and automate routine
                work. That is useful - but individual productivity does not automatically become
                better company performance.
              </p>
              <p>
                Leadership decides where the business needs to improve, which changes matter most,
                how AI connects to those priorities, and whether the company actually benefited.
              </p>
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-lg bg-white/5 p-7 ring-1 ring-white/10 md:p-9 lg:p-10">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-shore-mint">
              The point
            </p>
            <p className="mt-6 font-display text-[clamp(1.45rem,2.4vw,1.9rem)] leading-[1.2] tracking-[-0.02em] text-white">
              The goal is not more AI activity. The goal is a better-performing business.
            </p>
            <div aria-hidden className="shore-rule-light mt-8 w-12" />
          </aside>
        </div>
      </div>
    </section>
  );
}
