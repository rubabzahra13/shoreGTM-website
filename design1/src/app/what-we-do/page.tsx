import type { Metadata } from "next";
import Image from "next/image";
import { GtmOsDetailPanel } from "@/components/gtm-os-detail-panel";
import { TidelineCta } from "@/components/ui/tideline-cta";
import { WaysToEngage } from "@/components/ways-to-engage";
import { WhatWeDoFaq } from "@/components/what-we-do-faq";
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
          className="tlc--fullbleed"
          mediaSrc="/images/what-we-do-hero.png"
          mediaVideoSrc="/videos/what-we-do-hero.mp4"
          mediaAlt="Rocky coastline and teal ocean at golden hour"
          eyebrow="What we do"
          headline="Growth is slowing, but the reason is not obvious."
          lead="Growth is off plan. Pipeline quality is uneven. Sales cycles are taking longer. Customer expansion is harder than it should be."
          sub={
            <>
              <p>
                That is usually when companies start looking for a new tool, a new campaign, a new
                process, or an AI initiative. We take a different approach.
              </p>
              <p>
                Shore GTM helps leadership teams find the real problem, decide what needs to change,
                and put the right solution into motion. AI may be part of that solution. It is not
                where we start.
              </p>
            </>
          }
          details={[
            "25+ years leading GTM teams",
            "3x Founder / 2x Exits",
            "CEO · CMO · GM",
            "GTM OS™ Certified Partner",
          ]}
          action="Book a discovery call"
          href={CALENDLY_URL}
        />
      </div>

      <section className="border-y border-shore-heading/10 bg-shore-fog py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
            How we work
          </p>
          <h2 className="max-w-[28ch] font-display text-[clamp(1.65rem,3.2vw,2.35rem)] leading-tight tracking-[-0.02em] text-shore-heading">
            We help leadership teams move from symptoms to decisions.
          </h2>
          <ol className="mt-12 grid gap-10 border-t border-shore-heading/10 pt-10 md:grid-cols-3 md:gap-0">
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
            ].map(([n, t, b], i) => (
              <li
                key={n}
                className={`flex flex-col gap-3 md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l md:border-shore-heading/10"} ${i === 2 ? "md:pr-0" : ""}`}
              >
                <span className="font-mono text-sm tracking-[0.12em] text-shore-teal">{n}</span>
                <h3 className="font-display text-[1.25rem] leading-snug tracking-[-0.015em] text-shore-heading">
                  {t}
                </h3>
                <p className="max-w-[32ch] text-[0.975rem] leading-relaxed text-shore-body">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <WaysToEngage services={services} />

      <section className="relative overflow-hidden border-t border-shore-heading/10 bg-shore-fog py-14 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-shore-teal/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <div className="max-w-[40rem]">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
              The GTM OS™
            </p>
            <h2 className="mt-3 max-w-[22ch] font-display text-[clamp(1.45rem,2.8vw,2.1rem)] leading-tight tracking-[-0.02em] text-shore-heading">
              AI only works once you know what the GTM problem is.
            </h2>
            <p className="mt-3 max-w-[44ch] text-[0.975rem] leading-relaxed text-shore-body">
              Powering GTM with AI solutions to drive revenue growth once the constraint is clear.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <GtmOsDetailPanel />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-shore-navy py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 0% 100%, rgba(26,138,138,0.22), transparent 55%), radial-gradient(ellipse 45% 50% at 100% 0%, rgba(109,183,174,0.15), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-5">
          <div className="max-w-[40rem]">
            <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-mint">
              AI across the GTM system
            </p>
            <h2 className="max-w-[28ch] font-display text-[clamp(1.55rem,3vw,2.15rem)] leading-tight tracking-[-0.02em] text-white">
              Most employees use AI in their everyday work. Leaders struggle to harness AI to deliver
              measurable business outcomes.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-shore-pale">
              We work inside the GTM system to connect AI to meaningful results, where it makes sense.
            </p>
          </div>

          <div className="relative mt-12 aspect-[2/1] overflow-hidden ring-1 ring-white/10">
            <Image
              src="/images/gtm-ai-workshop.png"
              alt="Shore GTM workshop session mapping AI initiatives on a glass whiteboard"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
              priority={false}
            />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
            {[
              [
                "01",
                "Marketing",
                "Stop producing content and campaigns that can't be tied to pipeline. We build AI-enabled workflows that sharpen buyer intelligence, improve personalization, and connect marketing activity to revenue outcomes.",
              ],
              [
                "02",
                "Sales & Revenue Operations",
                "Replace manual, time-consuming sales activity and unreliable pipeline data with workflows that streamline prospecting, improve prospect quality and forecast accuracy, and increase sales team capacity without adding headcount.",
              ],
              [
                "03",
                "Customer Success & Retention",
                "Protect and grow existing revenue. We build workflows that surface churn risk earlier, improve renewal preparation, and give CS teams the account intelligence to act before it's too late.",
              ],
            ].map(([n, t, b]) => (
              <article
                key={n}
                className="flex h-full flex-col gap-4 rounded-lg border border-white/12 bg-white/[0.07] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:p-7"
              >
                <span className="font-mono text-[0.7rem] tracking-[0.12em] text-shore-mint">{n}</span>
                <h3 className="font-display text-[1.15rem] leading-snug tracking-[-0.015em] text-white">
                  {t}
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-shore-pale">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhatWeDoFaq items={faqs} />

      <section className="relative overflow-hidden bg-shore-navy py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 50% 0%, rgba(26,138,138,0.22), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[640px] px-5 text-center">
          <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-shore-mint">
            Next step
          </p>
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.55rem)] leading-[1.12] tracking-[-0.025em] text-white">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-5 max-w-[42ch] text-[1.025rem] leading-[1.7] text-shore-pale">
            Thirty minutes to understand where you are and what you&apos;re working to achieve. From
            there we give a clear-eyed recommendation on the right next step.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-shore-coral px-6 py-3 text-sm font-medium text-white transition hover:bg-shore-coral-hover"
            >
              Book a discovery call
            </a>
            <a
              href={ASSESSMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
            >
              Take the assessment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
