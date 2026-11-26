import { SectionEyebrow, SectionHeading } from "@/components/section-eyebrow";

const caseStudies = [
  {
    metric: "20 hrs/week → under 3",
    metricLabel: "Prospecting time",
    industry: "Cybersecurity · B2B SaaS",
    problem:
      "Reps spent nearly half the week digging for warm introductions already sitting in their LinkedIn networks - more time on research than with customers.",
    result:
      "Shore GTM surfaces the right introductions, drafts the ask, keeps the CRM current, and stages call prep overnight. Reps get back the better part of two days each week.",
  },
  {
    metric: "75% less time",
    metricLabel: "Order management",
    industry: "Digital Media · E-Commerce",
    problem:
      "Orders arrived by email, lived in spreadsheets, and stalled when details were missing. Growth was breaking delivery, and headcount was not the answer.",
    result:
      "One dashboard now reads orders, flags gaps, schedules work, and drafts customer updates for approval - about 15 hours back per person every week.",
  },
] as const;

export function HomeCaseStudies() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[28rem]">
            <SectionEyebrow>From problem to result</SectionEyebrow>
            <SectionHeading className="max-w-[14ch]">Evidence in the field.</SectionHeading>
          </div>
        </div>

        <div className="mt-12 border-t border-shore-heading/10">
          {caseStudies.map((study, index) => (
            <article
              key={study.industry}
              className="grid gap-8 border-b border-shore-heading/10 py-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-12 lg:gap-16"
            >
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-shore-teal">
                  Case {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[0.8125rem] text-shore-muted">{study.metricLabel}</p>
                <p className="mt-1 font-display text-[clamp(1.75rem,3vw,2.25rem)] leading-none tracking-[-0.03em] text-shore-heading">
                  {study.metric}
                </p>
                <p className="mt-5 text-[0.875rem] text-shore-body">{study.industry}</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-shore-muted">
                    Problem
                  </p>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-shore-body">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-shore-teal">
                    Result
                  </p>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-shore-heading">
                    {study.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
