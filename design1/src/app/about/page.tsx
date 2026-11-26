import type { Metadata } from "next";
import Image from "next/image";
import { TidelineCta } from "@/components/ui/tideline-cta";
import { CALENDLY_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shore GTM was founded by Patrick Rooney - operator-led AI executive advisory for measurable business performance.",
};

const principles = [
  {
    title: "Operator-led",
    body: "The work is led by someone who has been responsible for revenue, people, investment, customers, and company performance, not only the recommendation.",
  },
  {
    title: "Evidence-first",
    body: "Shore uses the company's own data to test assumptions and identify where performance is actually breaking.",
  },
  {
    title: "GTM-wide",
    body: "We look across the full commercial system rather than assume the problem belongs to sales, marketing, or customer success.",
  },
  {
    title: "Strategy through execution",
    body: "When the solution needs to be built, Shore can stay involved and turn the strategy into something the team can actually use.",
  },
];

const notForYou = [
  "You want AI activity without accountability to measurable business outcomes.",
  "There is no executive sponsor willing to support decisions, adoption, and change.",
  "You are unwilling to define measurable business outcomes before the work begins.",
  "You need activity and optics. Not operational change.",
  "You need a vendor to simply \"add AI\" to existing work, rather than a partner to help define what should change.",
];

const certifications = [
  {
    src: "/images/about/gtm-os-certified.png",
    alt: "GTM OS Certified Partner badge",
    label: "GTM OS™ Certified Partner",
    className: "h-16 w-16 object-contain md:h-[4.5rem] md:w-[4.5rem]",
  },
  {
    src: "/images/about/mit-sloan-ai.png",
    alt: "MIT Sloan School AI Adoption certification",
    label: "MIT Sloan · AI Adoption",
    className: "h-12 w-auto max-w-[200px] object-contain md:h-14",
  },
  {
    src: "/images/about/cert-2.webp",
    alt: "AI SmarterX credential",
    label: "AI SmarterX",
    className: "h-10 w-auto max-w-[180px] object-contain md:h-12",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-[72px]">
        <TidelineCta
          theme="shore"
          className="tlc--fullbleed"
          mediaSrc="/images/about/meeting-strategy.png"
          mediaAlt="Patrick Rooney reviewing go-to-market strategy with a leadership team"
          eyebrow="About"
          headline="Operator-led AI executive advisory for measurable business performance."
          lead="Shore GTM was founded by Patrick Rooney, a 3x founder with two exits, and former CEO, CMO, GM, and GTM executive."
          sub={
            <>
              <p>
                For more than 25 years, Patrick has built companies, led commercial teams, made
                investment decisions, missed numbers, changed plans, launched products, managed
                growth, and been accountable for the result.
              </p>
              <p>
                Shore GTM brings that operator perspective to companies trying to improve GTM
                performance and decide where AI can genuinely make the business better.
              </p>
            </>
          }
          details={[
            "25+ years leading GTM teams",
            "3x Founder / 2x Exits",
            "CEO · CMO · GM",
            "GTM OS™ Certified Partner",
          ]}
          action="Schedule a discovery call"
          href={CALENDLY_URL}
        />
      </div>

      <section className="relative overflow-hidden py-20 text-white md:py-24">
        <div aria-hidden className="absolute inset-0 bg-shore-navy" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 100% 0%, rgba(26,138,138,0.28), transparent 55%), radial-gradient(ellipse 45% 50% at 0% 100%, rgba(109,183,174,0.1), transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-5">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-mint">
            Our point of view
          </p>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.7rem,3.4vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-white">
            Business judgment first. Technology where it helps.
          </h2>

          <ol className="mt-14 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {principles.map((item, i) => (
              <li
                key={item.title}
                className={`flex flex-col gap-3 lg:px-6 ${i === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/15"} ${i === principles.length - 1 ? "lg:pr-0" : ""}`}
              >
                <span className="font-mono text-sm tracking-[0.12em] text-shore-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.2rem] leading-snug tracking-[-0.015em] text-white">
                  {item.title}
                </h3>
                <p className="max-w-[28ch] text-[0.95rem] leading-relaxed text-white/72">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-shore-heading/10 bg-shore-fog py-14 md:py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="shrink-0 text-center md:text-left">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
                Credentials
              </p>
              <h2 className="mt-2 font-display text-[1.35rem] tracking-[-0.015em] text-shore-heading md:text-[1.5rem]">
                Certifications
              </h2>
            </div>

            <ul className="flex w-full flex-col items-center gap-8 sm:flex-row sm:justify-center md:justify-end md:gap-0">
              {certifications.map((cert, i) => (
                <li
                  key={cert.src}
                  className={`flex flex-col items-center gap-3 sm:px-8 ${i > 0 ? "sm:border-l sm:border-shore-heading/10" : ""}`}
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={240}
                    height={120}
                    className={cert.className}
                  />
                  <p className="text-center text-[0.75rem] font-medium tracking-wide text-shore-muted">
                    {cert.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0" aria-hidden>
          <video
            className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/about/shore-perspective.png"
          >
            <source src="/videos/shore-perspective.mp4" type="video/mp4" />
          </video>
          <Image
            src="/images/about/shore-perspective.png"
            alt=""
            fill
            sizes="100vw"
            className="hidden object-cover object-center motion-reduce:block"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(95deg, rgba(13, 43, 69, 0.72) 0%, rgba(13, 43, 69, 0.48) 38%, rgba(13, 43, 69, 0.18) 58%, transparent 85%), linear-gradient(180deg, rgba(13, 43, 69, 0.28) 0%, transparent 28%, transparent 72%, rgba(13, 43, 69, 0.32) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-5">
          <div className="max-w-[40rem]">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-mint">
              The Shore GTM Perspective
            </p>
            <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(1.7rem,3.4vw,2.45rem)] leading-[1.15] tracking-[-0.02em] text-white">
              AI is changing the work. It doesn&apos;t change the fundamentals.
            </h2>
          </div>

          <div className="mt-12 max-w-[46rem]">
            <div className="space-y-5 text-[1.05rem] leading-[1.75] text-white">
              <p>
                Employees are already figuring out how to use AI. They are writing, researching,
                analyzing, preparing, automating, and making their everyday work faster and better.
                That is a good thing.
              </p>
              <p>
                But companies do not win because employees produce more content, summarize meetings
                faster, or use more AI tools. They win because they acquire and retain the right
                customers, make good decisions, execute consistently, improve margins, and create
                value customers are willing to pay for.
              </p>
            </div>

            <blockquote className="mt-10 max-w-[36ch] border-l-2 border-shore-mint pl-6">
              <p className="font-display text-[clamp(1.25rem,2vw,1.5rem)] leading-snug tracking-[-0.02em] text-white">
                That is the gap Shore GTM was built to address.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-t border-shore-heading/10 bg-shore-fog py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
            <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:sticky lg:top-28 lg:max-w-none">
              <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-full bg-shore-heading shadow-[0_20px_50px_rgba(13,43,69,0.12)] ring-1 ring-shore-heading/15 lg:max-w-[300px]">
                <Image
                  src="/images/about/patrick-headshot.png"
                  alt="Patrick Rooney, founder of Shore GTM"
                  fill
                  sizes="(max-width: 1024px) 280px, 300px"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 font-display text-[1.15rem] tracking-[-0.015em] text-shore-heading">
                Patrick Rooney
              </p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-shore-teal">
                Founder, Shore GTM
              </p>
            </div>

            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
                The operator
              </p>
              <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(1.7rem,3.4vw,2.45rem)] leading-[1.15] tracking-[-0.02em] text-shore-heading">
                25+ years of making the decisions from inside the business.
              </h2>
              <div className="mt-7 max-w-[54ch] space-y-5 text-[1.05rem] leading-[1.7] text-shore-body">
                <p>
                  Patrick Rooney has spent his career building, running, growing, and changing
                  businesses. He founded and sold Zocalo Group to Omnicom and founded QUEsocial, an
                  employee advocacy SaaS platform later acquired by private equity.
                </p>
                <p>
                  He has served as a CEO, CMO, GM, and Chief Marketing & Innovation Officer and has
                  led GTM across marketing, sales, customer success, and product.
                </p>
                <p>
                  He has also led the integration of seven businesses into one company - work that
                  required more than strategy. It required decisions about people, process,
                  positioning, customers, technology, investment, and how the work would actually get
                  done.
                </p>
              </div>

              <div className="mt-10 border-t border-shore-heading/10 pt-8">
                <p className="max-w-[32ch] font-display text-[clamp(1.2rem,2vw,1.45rem)] leading-snug tracking-[-0.015em] text-shore-heading">
                  That experience shapes how Shore works today.
                </p>
                <p className="mt-3 max-w-[36ch] text-[0.975rem] leading-relaxed text-shore-body">
                  Ready to work with an advisor who has been in your seat?
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-md bg-shore-coral px-6 py-3 text-sm font-medium text-white transition hover:bg-shore-coral-hover"
                >
                  Schedule a discovery call
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-shore-heading/10 pt-12 md:mt-20">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-coral">
              A note of honesty
            </p>
            <h3 className="mt-3 max-w-[20ch] font-display text-[clamp(1.35rem,2.6vw,1.85rem)] leading-snug tracking-[-0.02em] text-shore-heading">
              Shore GTM is not for everyone.
            </h3>
            <p className="mt-3 max-w-[48ch] text-[1.025rem] leading-relaxed text-shore-body">
              Fit matters as much to us as it does to you. We are probably not the right partner if
              any of the following describe what you are looking for.
            </p>
            <ol className="mt-8 divide-y divide-shore-heading/10 border-y border-shore-heading/10">
              {notForYou.map((item, i) => (
                <li
                  key={item}
                  className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:items-baseline sm:gap-6 sm:py-6"
                >
                  <span className="font-mono text-sm tracking-[0.1em] text-shore-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-[54ch] text-[1rem] leading-relaxed text-shore-heading">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
