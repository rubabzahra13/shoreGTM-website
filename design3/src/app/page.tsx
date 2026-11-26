import { FiveWaysStart } from "@/components/five-ways-start";
import { GtmOsShowcase } from "@/components/gtm-os-showcase";
import { HomeAiSection } from "@/components/home-ai-section";
import { HomeApproachSection } from "@/components/home-approach-section";
import { HomeCaseStudies } from "@/components/home-case-studies";
import { HomeClosingCta } from "@/components/home-closing-cta";
import { HomeHero } from "@/components/home-hero";
import { HomeMaturityAssessment } from "@/components/home-maturity-assessment";
import { HomeProblemSection } from "@/components/home-problem-section";
import { HomeWhySection } from "@/components/home-why-section";

const problemCards = [
  {
    title: "Revenue is not growing fast enough.",
    body: "The numbers are telling you something is not working, but doesn't tell you what it is.",
  },
  {
    title: "Teams see different problems.",
    body: "Sales, marketing, customer success, product, and leadership each see a different part of the system. They may all be seeing something real but they are not aligned.",
  },
  {
    title: "AI can only help when you know what the problem is.",
    body: "Employees are using AI every day while leadership is being asked to show what AI is producing for the company. More activity does not make the underlying problem clearer.",
  },
];

const approach = [
  {
    title: "Find the constraint",
    body: "Look across the GTM system and use company evidence to determine what is actually holding performance back.",
  },
  {
    title: "Fix the problem",
    body: "Determine what needs to change in strategy, process, workflow, data, technology, customer experience, or how the team operates.",
  },
  {
    title: "Use AI where it makes sense",
    body: "Apply AI when it makes the work faster, better, more consistent, less expensive, or helps the team make decisions it could not make as effectively before.",
  },
  {
    title: "Prove the result",
    body: "Establish the starting point before the work begins and measure whether the business improved.",
  },
];

const services = [
  {
    label: "GTM Diagnostic",
    quote: '"Growth is off target and we don\'t know why."',
    body: "We find where performance is breaking, what is causing it, what is it costing the business, and what should happen next.",
  },
  {
    label: "Strategy & Roadmap",
    quote: "“We know the problem. What should we do about it?”",
    body: "We develop the strategy and practical roadmap to fix the specific problem, including what should change, who owns it, what should happen first, and how success will be measured.",
  },
  {
    label: "AI Investment Prioritization",
    quote: "“We have a lot of ideas but don't know which will deliver business results.”",
    body: "We evaluate current and proposed initiatives against business value, evidence, readiness, complexity, adoption, and the ability to measure the result.",
  },
  {
    label: "GTM AI Advisory",
    quote: "“We need ongoing help making better decisions about AI across GTM.”",
    body: "Shore provides senior guidance to help leadership decide what deserves investment, what should scale, what should change, and what should stop.",
  },
  {
    label: "GTM Build",
    quote: "“We know what needs to change, but we don't have the team to build it.”",
    body: "We turn the strategy into a working solution, whether that requires AI, automation, data, CRM changes, scoring, reporting, or a better way of getting the work done.",
  },
];

const why = [
  {
    title: "Operator experience.",
    body: "We have sat in the seats of CEO, CMO, GM, and CRO. Shore GTM brings 25+ years experience building, leading, and advising go-to-market organizations across strategy, marketing, sales, revenue operations, and customer growth.",
  },
  {
    title: "Data over opinion.",
    body: "We look at the data, workflows, handoffs, decisions, and constraints before recommending what should change.",
  },
  {
    title: "We meet you where you are.",
    body: "Whether you need to find the problem, sharpen the plan, or move from decision to execution, Shore GTM starts from your current reality and helps build the path forward.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblemSection cards={problemCards} />
      <HomeApproachSection steps={approach} />
      <GtmOsShowcase />
      <FiveWaysStart offerings={services} />
      <HomeCaseStudies />
      <HomeAiSection />
      <HomeWhySection items={why} />
      <HomeMaturityAssessment />
      <HomeClosingCta />
    </>
  );
}