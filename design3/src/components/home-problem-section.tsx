import { SectionEyebrow, SectionHeading } from "@/components/section-eyebrow";

type ProblemCard = { title: string; body: string };

export function HomeProblemSection({ cards }: { cards: ProblemCard[] }) {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionEyebrow>The problem</SectionEyebrow>
            <SectionHeading className="max-w-[18ch]">
              Slow revenue growth is a headache. And everyone has a different opinion about the
              cause.
            </SectionHeading>
            <p className="mt-5 max-w-[38ch] text-[1.025rem] leading-[1.7] text-shore-body">
              A missed number is easy to see but the reason behind it usually isn&apos;t. Revenue is
              an interconnected system - so fixing the most visible problem often does not fix the
              business.
            </p>
            <div className="mt-8 border-l-2 border-shore-teal pl-5">
              <p className="font-display text-[clamp(1.25rem,2vw,1.5rem)] leading-snug tracking-[-0.02em] text-shore-heading">
                Start with the business problem.{" "}
                <span className="text-shore-teal">Not the technology.</span>
              </p>
            </div>
          </div>

          <ol className="border-t border-shore-heading/10">
            {cards.map((card, i) => (
              <li
                key={card.title}
                className="grid gap-3 border-b border-shore-heading/10 py-7 sm:grid-cols-[3.25rem_1fr] sm:gap-6"
              >
                <span className="font-mono text-sm tracking-[0.08em] text-shore-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.2rem,1.8vw,1.4rem)] leading-snug tracking-[-0.015em] text-shore-heading">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 max-w-[42ch] text-[0.975rem] leading-relaxed text-shore-body">
                    {card.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
