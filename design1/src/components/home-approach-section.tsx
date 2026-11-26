import { SectionEyebrow, SectionHeading } from "@/components/section-eyebrow";

type ApproachStep = { title: string; body: string };

function ApproachWaves() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="approach-waves approach-waves--a absolute bottom-[-8%] h-[42%] w-[200%] min-w-[1200px] text-shore-teal/25"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,224 C180,180 320,260 480,220 C640,180 720,120 900,150 C1080,180 1260,240 1440,200 L1440,320 L0,320 Z"
        />
      </svg>
      <svg
        className="approach-waves approach-waves--b absolute bottom-[-12%] h-[36%] w-[200%] min-w-[1200px] text-shore-mint/20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,240 C200,200 360,280 540,230 C720,180 860,140 1020,170 C1200,205 1320,250 1440,220 L1440,320 L0,320 Z"
        />
      </svg>
      <svg
        className="approach-waves approach-waves--c absolute bottom-[-16%] h-[28%] w-[200%] min-w-[1200px] text-shore-navy/40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,260 C160,230 300,290 480,255 C660,220 820,190 980,210 C1160,235 1300,270 1440,245 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
}

export function HomeApproachSection({ steps }: { steps: ApproachStep[] }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="shore-atmosphere-navy absolute inset-0" />
      <div aria-hidden className="shore-contour-navy pointer-events-none absolute inset-0 opacity-70" />
      <ApproachWaves />

      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="max-w-[44rem]">
          <SectionEyebrow className="text-shore-mint">The Shore GTM approach</SectionEyebrow>
          <SectionHeading className="max-w-[34ch] text-white">
            Our job is not to find somewhere to use AI. Our job is to determine what is holding
            performance back, what needs to change, and whether AI can help produce a better result.
          </SectionHeading>
        </div>

        <ol className="relative z-10 mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((item, i) => (
            <li
              key={item.title}
              className="flex h-full flex-col rounded-lg bg-white p-6 shadow-[0_14px_40px_rgba(8,20,32,0.2)] md:p-7"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.14em] text-shore-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-[1.15rem] leading-snug tracking-[-0.015em] text-shore-heading">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-shore-body">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <a
            href="https://calendly.com/patrickrooney/learn-more-about-shore-gtm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-shore-coral px-6 py-3.5 text-sm font-medium text-white transition hover:bg-shore-coral-hover"
          >
            Schedule a call
          </a>
        </div>
      </div>
    </section>
  );
}
