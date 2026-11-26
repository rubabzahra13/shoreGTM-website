import Image from "next/image";
import { SectionEyebrow, SectionHeading } from "@/components/section-eyebrow";
import { ASSESSMENT_URL } from "@/lib/links";

const bullets = [
  "Eight pillars. A scored view of where growth is constrained.",
  "No call required. You get the results either way.",
  "Built from the same diagnostic used in client engagements.",
];

export function HomeMaturityAssessment() {
  return (
    <section id="assessment" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="overflow-hidden rounded-lg border border-shore-heading/10 bg-shore-mist/40 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <SectionEyebrow>GTM maturity assessment</SectionEyebrow>
            <SectionHeading className="max-w-[18ch]">
              Stop guessing. Find out what&apos;s really holding growth back.
            </SectionHeading>
            <p className="mt-5 max-w-[40ch] text-[1.025rem] leading-[1.7] text-shore-body">
              Most revenue problems are diagnosed by symptom. This assessment scores your eight
              pillars so you can see the constraint instead of guessing at it.
            </p>

            <ul className="mt-7 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-shore-body">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-shore-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-shore-muted">
              Free · 10 minutes · Results delivered immediately
            </p>

            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit rounded-md bg-shore-coral px-5 py-3 text-sm font-medium text-white transition hover:bg-shore-coral-hover"
            >
              Get your GTM maturity score
            </a>
          </div>

          <div className="flex items-center justify-center border-t border-shore-heading/10 bg-white p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
            <Image
              src="/images/maturity-assessment.png"
              alt="GTM Maturity Assessment product interface showing demand generation scoring"
              width={1832}
              height={1408}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
