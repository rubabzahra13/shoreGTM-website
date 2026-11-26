import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    className: "h-20 w-20 object-contain",
  },
  {
    src: "/images/about/mit-sloan-ai.png",
    alt: "MIT Sloan School AI Adoption certification",
    className: "h-16 w-auto max-w-[220px] object-contain",
  },
  {
    src: "/images/about/cert-2.webp",
    alt: "AI SmarterX credential",
    className: "h-12 w-auto max-w-[200px] object-contain",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-shore-mist to-white pt-[calc(72px+3.5rem)] pb-16 md:pb-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.55fr)] lg:gap-16">
          <div>
            <h1 className="max-w-[18ch] font-display text-[clamp(2.2rem,4.8vw,3.4rem)] leading-[1.1] tracking-[-0.02em] text-shore-heading">
              Operator-led AI executive advisory for measurable business performance.
            </h1>
            <div className="mt-7 max-w-[46ch] space-y-5 text-[1.05rem] leading-relaxed text-shore-body">
              <p>
                Shore GTM was founded by Patrick Rooney, a 3x founder with two exits, and former CEO,
                CMO, GM, and GTM executive.
              </p>
              <p>
                For more than 25 years, Patrick has built companies, led commercial teams, made
                investment decisions, missed numbers, changed plans, launched products, managed
                growth, and been accountable for the result.
              </p>
              <p>
                Shore GTM brings that operator perspective to companies trying to improve GTM
                performance and decide where AI can genuinely make the business better.
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[28px] lg:mx-0 lg:max-w-none">
            <Image
              src="/images/about/meeting-strategy.png"
              alt="Patrick Rooney reviewing go-to-market strategy with a leadership team"
              fill
              priority
              sizes="(max-width: 1024px) 320px, 380px"
              className="object-cover object-[62%_20%]"
            />
          </div>
        </div>
      </section>

      {/* Point of view */}
      <section className="bg-shore-navy py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-mint">
            Our point of view
          </p>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.7rem,3.4vw,2.5rem)] leading-[1.15] text-white">
            Business judgment first. Technology where it helps.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <h3 className="text-[1.05rem] font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-[0.925rem] leading-relaxed text-white/72">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-b border-shore-pale bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="text-center font-display text-[clamp(1.4rem,2.4vw,1.75rem)] text-shore-heading">
            Certifications
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {certifications.map((cert) => (
              <Image
                key={cert.src}
                src={cert.src}
                alt={cert.alt}
                width={240}
                height={120}
                className={cert.className}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Perspective */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <Image
              src="/images/about/shore-panel.png"
              alt="Rocky shoreline under a cloudy sky"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
              The Shore GTM Perspective
            </p>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.7rem,3.4vw,2.45rem)] leading-[1.15] text-shore-heading">
              AI is changing the work. It doesn&apos;t change the fundamentals.
            </h2>
            <div className="mt-7 max-w-[46ch] space-y-4 text-[1.05rem] leading-relaxed text-shore-body">
              <p>Employees are already figuring out how to use AI.</p>
              <p>
                They are writing, researching, analyzing, preparing, automating, and making their
                everyday work faster and better.
              </p>
              <p>That is a good thing.</p>
              <p>
                But companies do not win because employees produce more content, summarize meetings
                faster, or use more AI tools.
              </p>
              <p>
                They win because they acquire and retain the right customers, make good decisions,
                execute consistently, improve margins, and create value customers are willing to pay
                for.
              </p>
              <p className="font-semibold text-shore-heading">
                That is the gap Shore GTM was built to address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patrick bio */}
      <section className="bg-shore-mist py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid items-start gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
            <div className="mx-auto w-[180px] lg:mx-0 lg:w-full">
              <div className="relative aspect-square overflow-hidden rounded-full shadow-[0_20px_50px_rgba(13,43,69,0.18)]">
                <Image
                  src="/images/about/patrick-headshot.png"
                  alt="Patrick Rooney, founder of Shore GTM"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="max-w-[22ch] font-display text-[clamp(1.7rem,3.4vw,2.45rem)] leading-[1.15] text-shore-heading">
                25+ years of making the decisions from inside the business.
              </h2>
              <div className="mt-7 max-w-[58ch] space-y-4 text-[1.05rem] leading-relaxed text-shore-body">
                <p>
                  Patrick Rooney has spent his career building, running, growing, and changing
                  businesses.
                </p>
                <p>
                  He founded and sold Zocalo Group to Omnicom and founded QUEsocial, an employee
                  advocacy SaaS platform later acquired by private equity.
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
                <p className="font-semibold text-shore-heading">
                  That experience shapes how Shore works today.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.55rem)] text-shore-heading">
                  Ready to work with an advisor who has been in your seat?
                </h3>
                <a
                  href="https://calendly.com/patrickrooney/learn-more-about-shore-gtm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-md bg-shore-coral px-6 py-3.5 text-sm font-semibold text-white hover:bg-shore-coral-hover"
                >
                  Schedule a discovery call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note of honesty */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-coral">
            A note of honesty
          </p>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.7rem,3.4vw,2.45rem)] leading-[1.15] text-shore-heading">
            Shore GTM is not for everyone.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-shore-body">
            Fit matters as much to us as it does to you. We are probably not the right partner if any
            of the following describe what you are looking for.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {notForYou.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-shore-pale bg-shore-mist/70 px-6 py-5"
              >
                <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-shore-coral">
                  Not for you if
                </p>
                <p className="text-[0.975rem] leading-relaxed text-shore-heading">{item}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center">
            <Link
              href="https://calendly.com/patrickrooney/learn-more-about-shore-gtm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-shore-navy px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-white hover:bg-shore-navy/90"
            >
              Schedule a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
