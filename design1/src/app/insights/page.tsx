import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TidelineCta } from "@/components/ui/tideline-cta";
import { CALENDLY_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Steady thinking for a fast-moving AI world - practical GTM and AI insights from Shore GTM.",
};

const posts = [
  {
    tag: "Practical AI for the GTM, Part 1: Total Relevant Market",
    title: "Your ICP Is a Hypothesis Until Your Data Says Otherwise",
    blurb:
      "Before you automate scoring or prospecting, test your ICP against the deals you have won. AI does not fix a bad ICP. It just helps you chase the wrong accounts more efficiently.",
    href: "https://shoregtm.com/blog/practical-ai-for-the-gtm-part-1-total-relevant-market",
    image: "/images/insights/icp.png",
    imageAlt: "Illustration about testing your ICP against real win data",
  },
  {
    tag: "Where Agency Growth Breaks, Part 1 of 8",
    title: "The Agency Dilemma: A Classic Case of Cobbler's Children",
    blurb:
      "Agencies plan carefully for every client except themselves. Here is why that catches up with them, and a ten-minute test to see where your agency's growth is stuck.",
    href: "https://shoregtm.com/blog/the-agency-dilemma-a-classic-case-of-cobbler-s-children",
    image: "/images/insights/agency.png",
    imageAlt: "Illustration of a cobbler at work in a village shop",
    author: "Patrick Rooney",
    read: "5 minute read",
  },
  {
    tag: "Practical AI for the GTM, Part 3: Brand & Demand",
    title: "Your messaging may not be as great as you think",
    blurb:
      "Building a unique and distinguished brand is made up of several parts: the point of view itself, the messaging and positioning that carry it, and how you take it to market, whether through inbound, outbound, partners or something else. AI can test whether the messaging that brings your point of view to life is landing, help keep the story consistent, and then help you produce more.",
    href: "https://shoregtm.com/blog/brand-and-demand",
    image: "/images/insights/brand.png",
    imageAlt: "Visual related to brand and demand messaging",
    author: "Patrick Rooney",
    read: "5 min read",
  },
  {
    tag: "AI Strategy",
    title: "If your AI projects are flailing, it's not the tools. It's the sequence.",
    blurb:
      "Most AI initiatives stall not from a lack of technology but from a lack of structure. Here's why sequencing is the variable that changes everything, and how to get it right.",
    href: "https://shoregtm.com/blog/ai-strategy",
    image: "/images/insights/ai-strategy.jpg",
    imageAlt: "Team collaborating on AI sequencing and strategy",
    author: "Patrick Rooney",
    read: "5 min read",
  },
  {
    tag: "GTM Performance",
    title:
      "The difference between AI activity and AI performance, and why most GTM teams are stuck in the first one.",
    blurb:
      "Individual AI adoption is everywhere. Organizational AI performance is rare. Understanding the gap is the first step to closing it.",
    href: "https://shoregtm.com/blog/gtm-performance",
    image: "/images/insights/gtm-performance.jpg",
    imageAlt: "Portrait related to GTM performance and AI outcomes",
    author: "Patrick Rooney",
    read: "6 min read",
  },
  {
    tag: "Adoption",
    title:
      "Your AI transformation won't be won or lost on the technology. It'll be won or lost on the people.",
    blurb:
      "The technology is extraordinary. That's not the hard part. The hard part is asking people to change how they've worked for their entire careers, and doing it with the clarity, empathy, and honesty that kind of change requires.",
    href: "https://shoregtm.com/blog/adoption",
    image: "/images/insights/adoption.jpg",
    imageAlt: "People collaborating through an AI adoption change",
    author: "Patrick Rooney",
    read: "7 min read",
  },
];

export default function InsightsPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <div className="pt-[72px]">
        <TidelineCta
          theme="shore"
          className="tlc--fullbleed tlc--overlay-light"
          mediaSrc="/images/insights/insights-hero.jpg"
          mediaVideoSrc="/videos/insights-hero.mp4"
          mediaAlt="Calm harbor at dawn with still water and soft coastal fog"
          eyebrow="Insights"
          headline="Steady thinking for a fast-moving AI world."
          lead="Practical GTM and AI writing for leadership teams who need clearer decisions - not more noise."
          details={["Operator perspective", "Evidence over opinion", "Built for GTM leaders"]}
          action="Book a discovery call"
          href={CALENDLY_URL}
        />
      </div>

      <section className="border-t border-shore-heading/10 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="max-w-[36rem]">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
              Latest writing
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.55rem,3vw,2.1rem)] leading-tight tracking-[-0.02em] text-shore-heading">
              Essays and notes on GTM performance, AI, and how leaders decide.
            </h2>
          </div>

          <article className="group mt-12 border-t border-shore-heading/10 pt-12">
            <Link
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-shore-fog">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center lg:py-2">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-shore-teal">
                  {featured.tag}
                </p>
                <h3 className="mt-3 max-w-[22ch] font-display text-[clamp(1.45rem,2.6vw,1.95rem)] leading-[1.2] tracking-[-0.02em] text-shore-heading transition group-hover:text-shore-teal">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-[42ch] text-[1.025rem] leading-relaxed text-shore-body">
                  {featured.blurb}
                </p>
                {(featured.author || featured.read) && (
                  <p className="mt-5 font-mono text-[0.7rem] tracking-[0.06em] text-shore-muted">
                    {[featured.author, featured.read].filter(Boolean).join(" · ")}
                  </p>
                )}
              </div>
            </Link>
          </article>

          <div className="mt-4 border-t border-shore-heading/10">
            {rest.map((post) => (
              <article key={post.href} className="group border-b border-shore-heading/10">
                <Link
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-6 py-8 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-8 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-shore-fog sm:aspect-[4/3]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 224px"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-shore-teal">
                      {post.tag}
                    </p>
                    <h3 className="mt-2 max-w-[34ch] font-display text-[clamp(1.2rem,2vw,1.45rem)] leading-snug tracking-[-0.015em] text-shore-heading transition group-hover:text-shore-teal">
                      {post.title}
                    </h3>
                    <p className="mt-3 max-w-[48ch] text-[0.975rem] leading-relaxed text-shore-body">
                      {post.blurb}
                    </p>
                    {(post.author || post.read) && (
                      <p className="mt-4 font-mono text-[0.7rem] tracking-[0.06em] text-shore-muted">
                        {[post.author, post.read].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
