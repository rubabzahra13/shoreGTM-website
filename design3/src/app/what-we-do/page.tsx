import type { Metadata } from "next";
import Image from "next/image";
import { GtmOsDetailPanel } from "@/components/gtm-os-detail-panel";
import { TidelineCta } from "@/components/ui/tideline-cta";
import { ASSESSMENT_URL, CALENDLY_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Shore GTM helps leadership teams find the real growth problem, decide what needs to change, and put the right solution into motion.",
};

const faqs = [
  {
    q: "What does Shore GTM do?",
    a: "Shore GTM helps B2B companies find what is holding back growth, determine what needs to change, and build the solution - using AI where it improves the business result.",
  },
  {
    q: "Do we have to start with the GTM Diagnostic?",
    a: "No. If leadership does not know why growth is off, the Diagnostic is usually the right place. If you already have a good understanding of the problem but need help fixing it, start with Strategy & Roadmap. If your immediate issue is deciding which AI initiatives deserve investment, start with AI Investment Prioritization. If you already know what needs to be built, GTM Build may be the right starting point.",
  },
  {
    q: "Do you implement AI tools, or just provide strategy?",
    a: "We lead through implementation, but we do not need to perform every technical task. Implementation may be completed by Shore GTM resources, the client's internal team, an existing provider, or a qualified technical partner. Shore GTM maintains the business logic, operating design, executive oversight, and measurement framework.",
  },
  {
    q: "How do we know if we need your help?",
    a: "You may need help if growth is not matching the effort your team is putting in, and there is not clear agreement on why. That might show up as weak pipeline, slower sales cycles, declining close rates, flat customer growth, scattered AI activity, or too many initiatives competing for attention. You do not need to have the problem fully diagnosed before we talk. If leadership is trying to figure out what is slowing growth, what should change, or where AI can create measurable value, that is usually a good time to start.",
  },
  {
    q: "How do you measure success and ROI?",
    a: "Every initiative begins with a defined business outcome, current performance baseline, agreed KPIs, and a method for calculating value. We measure changes in commercial and operating performance - not simply licenses, prompts, automations, or reported hours saved.",
  },
  {
    q: "We've tried AI tools before and didn't see the results. Why would this be different?",
    a: "Most AI efforts underperform because they start with tools instead of workflows and business outcomes. Shore GTM starts with the outcome, maps the work, defines the success measure, develops the solution around the process, and supports adoption.",
  },
  {
    q: "Do you replace our existing GTM leadership?",
    a: "No. We work alongside CEOs, CROs, CMOs, heads of GTM, RevOps leaders, and other advisors. The goal is to help the leadership team make better decisions and put those decisions into operation.",
  },
  {
    q: "Can you work with our existing technology and partners?",
    a: "Yes. Shore GTM is vendor-neutral and begins with the business and workflow requirements. We can work with existing platforms, internal teams, agencies, software providers, and implementation partners when they are appropriate for the solution.",
  },
  {
    q: "What does AI Advisory include?",
    a: "Fractional AI Leadership provides ongoing executive guidance for the commercial AI portfolio. The work may include opportunity prioritization, investment decisions, governance, implementation and partner oversight, KPI and ROI review, roadmap updates, and internal capability development.",
  },
];

const services = [
  {
    label: "GTM Diagnostic",
    title: "Growth is off plan and you need to know why.",
    body: "The GTM Diagnostic helps pinpoint what is holding back performance. We look across the full GTM motion, including pipeline, customers, accounts, win/loss patterns, churn, expansion, handoffs, workflows, data, and how the team is operating.",
    outcomes: ["The real issue slowing growth", "Evidence behind the diagnosis", "A clear next move"],
  },
  {
    label: "GTM Strategy & Roadmap",
    title: "You know what is wrong. Now what needs to change?",
    body: "Once the problem is clear, Shore GTM helps define the path forward. This is not a generic annual plan or a slide deck full of good ideas. It is a focused plan for fixing the specific GTM issue slowing growth.",
    outcomes: ["A focused plan", "Clear priorities and owners", "A 90-day path forward"],
  },
  {
    label: "AI Investment Prioritization",
    title: "Coming up with ideas for AI projects isn't the problem. It's knowing which ones matter.",
    body: "Shore GTM helps leadership teams sort AI activity into a practical investment portfolio by scoring each project against defined criteria.",
    outcomes: [
      "A ranked AI opportunity list",
      "A hold, pause, or stop list",
      "A business case for the right bets",
    ],
  },
  {
    label: "GTM AI Advisory",
    title: "You need ongoing help harnessing AI to improve business results across GTM.",
    body: "Shore GTM provides ongoing senior guidance across sales, marketing, customer success, and RevOps without requiring you to hire a full-time AI executive.",
    outcomes: [
      "Clear GTM AI priorities",
      "Better scale, pause, or stop decisions",
      "Ongoing review of results",
    ],
  },
  {
    label: "GTM Build",
    title: "You know what needs to change. Now it needs to get built.",
    body: "We augment your team's capabilities by building practical solutions around the business problem. That may include AI, automation, CRM changes, scoring systems, reporting, data improvement, workflow redesign, or better connections between the tools you already use.",
    outcomes: [
      "GTM AI workflows tied to revenue growth",
      "Testing, rollout, training, and adoption support",
      "Measurement against defined outcomes",
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <div className="pt-[72px]">
        <TidelineCta
          theme="shore"
          animateOnMount
          className="tlc--fullbleed"
          mediaSrc="/images/what-we-do-hero.png"
          mediaAlt="Rocky coastline and teal ocean at golden hour"
          headline="Growth is slowing, but the reason is not obvious."
          sub={
            <>
              Growth is off plan. Pipeline quality is uneven. Sales cycles are taking longer.
              Customer expansion is harder than it should be. Teams are working, but the results are
              not matching the effort.
              <br />
              <br />
              That is usually when companies start looking for a new tool, a new campaign, a new
              process, or an AI initiative. We take a different approach.
              <br />
              <br />
              Shore GTM helps leadership teams slow down long enough to find the real problem, decide
              what needs to change, and put the right solution into motion. AI may be part of that
              solution. It is not where we start.
            </>
          }
          details={["25+ years leading GTM teams"]}
          taken={0.58}
          showCapacity={false}
          action="Book a discovery call"
          href="https://calendly.com/patrickrooney/learn-more-about-shore-gtm"
        />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
            How we work
          </p>
          <h2 className="max-w-[28ch] font-display text-[clamp(1.65rem,3.2vw,2.35rem)] text-shore-heading">
            We help leadership teams move from symptoms to decisions.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Diagnose the problem", "Cut through the noise to find what's really holding growth back."],
              [
                "02",
                "Decide what changes",
                "Align leadership on the priorities, owners, sequence, and measures that matter.",
              ],
              [
                "03",
                "Build what works",
                "Develop and execute the solution, using AI, automation, updated workflows, and data insights.",
              ],
            ].map(([n, t, b]) => (
              <article
                key={n}
                className="rounded-xl border border-shore-pale bg-shore-pale p-6 transition hover:border-shore-mint/40"
              >
                <p className="mb-4 font-mono text-xs text-shore-teal">{n}</p>
                <h3 className="font-display text-lg text-shore-heading">{t}</h3>
                <p className="mt-2 text-[0.9375rem] text-shore-body">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
            Ways to engage
          </p>
          <h2 className="max-w-[24ch] font-display text-[clamp(1.65rem,3.2vw,2.35rem)] text-shore-heading">
            We meet you where you&apos;re at.
          </h2>

          <div className="mt-10">
            {services.map((s) => (
              <article
                key={s.label}
                className="grid gap-6 border-b border-shore-pale py-8 first:border-t md:grid-cols-[280px_1fr] md:gap-12"
              >
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-shore-teal">
                    {s.label}
                  </p>
                  <h3 className="font-display text-[1.35rem] leading-snug text-shore-heading">
                    {s.title}
                  </h3>
                </div>
                <div>
                  <p className="text-shore-body">{s.body}</p>
                  <p className="mt-4 font-semibold text-shore-heading">What you leave with</p>
                  <ul className="mt-2 space-y-2">
                    {s.outcomes.map((o) => (
                      <li
                        key={o}
                        className="relative pl-4 text-[0.9375rem] text-shore-body before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-shore-teal"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-shore-pale bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
            Powering GTM with AI solutions to drive revenue growth
          </p>
          <h2 className="max-w-[28ch] font-display text-[clamp(1.65rem,3.2vw,2.35rem)] text-shore-heading">
            AI only works once you know what the GTM problem is.
          </h2>

          <div className="mt-10">
            <GtmOsDetailPanel />
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://calendly.com/patrickrooney/learn-more-about-shore-gtm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-shore-coral px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-white hover:bg-shore-coral-hover"
            >
              Struggling with GTM AI? Let&apos;s talk.
            </a>
          </div>

          <div className="mt-16 md:mt-20">
            <h3 className="max-w-[28ch] font-display text-[clamp(1.45rem,2.8vw,2.05rem)] leading-[1.2] text-shore-heading">
              Most employees use AI in their everyday work. Leaders struggle to harness AI to deliver
              measurable business outcomes.
            </h3>
            <p className="mt-4 max-w-[42ch] text-[1.05rem] leading-relaxed text-shore-body">
              We work inside the GTM system to connect AI to meaningful results, where it makes sense.
            </p>

            <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col gap-4">
                {[
                  [
                    "Marketing",
                    "Stop producing content and campaigns that can't be tied to pipeline. We build AI-enabled workflows that sharpen buyer intelligence, improve personalization, and connect marketing activity to revenue outcomes.",
                  ],
                  [
                    "Sales & Revenue Operations",
                    "Replace manual, time-consuming sales activity and unreliable pipeline data with workflows that streamline prospecting, improve prospect quality and forecast accuracy, and increase sales team capacity without adding headcount.",
                  ],
                  [
                    "Customer Success & Retention",
                    "Protect and grow existing revenue. We build workflows that surface churn risk earlier, improve renewal preparation, and give CS teams the account intelligence to act before it's too late.",
                  ],
                ].map(([t, b]) => (
                  <article
                    key={t}
                    className="rounded-2xl bg-shore-navy px-6 py-5 text-white shadow-[0_12px_36px_rgba(13,43,69,0.18)]"
                  >
                    <h4 className="text-[1.05rem] font-semibold tracking-tight text-white">{t}</h4>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-white/78">{b}</p>
                  </article>
                ))}
              </div>

              <div className="relative min-h-[420px] overflow-hidden rounded-2xl lg:min-h-full">
                <Image
                  src="/images/gtm-ai-workshop.png"
                  alt="Shore GTM workshop session mapping AI initiatives on a glass whiteboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-shore-mist py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
            Common questions
          </p>
          <h2 className="max-w-[22ch] font-display text-[clamp(1.65rem,3.2vw,2.35rem)] text-shore-heading">
            Straight answers to the questions customers ask.
          </h2>

          <div className="mt-10 divide-y divide-shore-heading/10 border-y border-shore-heading/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="text-[1.05rem] font-semibold leading-snug text-shore-heading md:text-[1.125rem]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-shore-heading/15 text-shore-teal transition group-open:rotate-45 group-open:border-shore-teal/40"
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-[62ch] text-[0.975rem] leading-relaxed text-shore-body">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-shore-navy py-20 text-center text-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(1.65rem,3.2vw,2.35rem)] text-white">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-white/80">
            Let&apos;s schedule a 30-minute call to understand where you are and what you are working
            to achieve. From there we can provide a clear-eyed recommendation on the right next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-shore-coral px-6 py-3.5 text-sm font-semibold text-white hover:bg-shore-coral-hover"
            >
              Book a discovery call
            </a>
            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:border-white"
            >
              Take the assessment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
