import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <>
      <section className="bg-gradient-to-b from-shore-mist to-white pt-[calc(72px+3.5rem)] pb-10 md:pb-14">
        <div className="mx-auto max-w-[920px] px-5">
          <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-shore-teal">
            Insights
          </p>
          <h1 className="max-w-[16ch] font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-shore-heading">
            Steady thinking for a fast-moving AI world.
          </h1>
        </div>

        <div className="mx-auto mt-10 max-w-[920px] px-5">
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-[28px] md:aspect-[2/1]">
            <Image
              src="/images/about/meeting-strategy.png"
              alt="Leadership team reviewing a go-to-market strategy"
              fill
              priority
              sizes="(max-width: 920px) 100vw, 920px"
              className="object-cover object-[50%_28%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-[920px] space-y-14 px-5 pt-12 md:space-y-16 md:pt-16">
          {posts.map((post) => (
            <article key={post.href} className="group">
              <Link
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-shore-mist">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 920px) 100vw, 920px"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-shore-teal">
                  {post.tag}
                </p>
                <h2 className="mt-3 max-w-[28ch] font-display text-[clamp(1.45rem,2.8vw,2rem)] leading-[1.2] text-shore-heading transition group-hover:text-shore-teal">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-[58ch] text-[1.02rem] leading-relaxed text-shore-body">
                  {post.blurb}
                </p>
                {(post.author || post.read) && (
                  <p className="mt-4 font-mono text-[0.7rem] tracking-[0.06em] text-shore-muted">
                    {[post.author, post.read].filter(Boolean).join(" · ")}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
