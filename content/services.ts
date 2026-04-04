export type Capability = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export const capabilities: readonly Capability[] = [
  {
    id: "strategy",
    title: "Strategy",
    description:
      "Positioning, narrative, and roadmaps that align stakeholders before a single pixel ships.",
    image: "/mock/service-card.svg",
  },
  {
    id: "design",
    title: "Brand & product design",
    description:
      "Systems, interfaces, and art direction tuned for clarity and long-term maintainability.",
    image: "/mock/service-card.svg",
  },
  {
    id: "engineering",
    title: "Engineering",
    description:
      "Fast, accessible frontends — Next.js, animation, and design-to-code without drift.",
    image: "/mock/service-card.svg",
  },
  {
    id: "motion",
    title: "Motion & prototyping",
    description:
      "GSAP-level polish and interactive prototypes that sell ideas before build commitments.",
    image: "/mock/service-card.svg",
  },
  {
    id: "growth",
    title: "Launch & growth",
    description:
      "Landing narratives, experiments, and analytics hooks so launches compound instead of stall.",
    image: "/mock/service-card.svg",
  },
  {
    id: "support",
    title: "Ongoing partnership",
    description:
      "Retainers for iteration, seasonal campaigns, and the small fixes that keep trust high.",
    image: "/mock/service-card.svg",
  },
] as const;

export const processSteps: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Immersion",
    body: "We map goals, constraints, and audiences — workshops, audits, and competitive frames.",
  },
  {
    step: "02",
    title: "Direction",
    body: "Concepts, IA, and motion studies converge into a signed creative and technical north star.",
  },
  {
    step: "03",
    title: "Craft",
    body: "Design and build in tight loops with shared components, reviews, and realistic states.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Hardening, performance passes, handoff docs, and a measured go-live with your team.",
  },
] as const;

export const metricsStrip = [
  { value: "40+", label: "Launches" },
  { value: "12", label: "Countries" },
  { value: "6", label: "Years" },
  { value: "100%", label: "In-house craft" },
] as const;

export const idealFor = [
  {
    title: "Product-led teams",
    body: "You have PMF pressure and need design + frontend velocity without hiring a full studio roster.",
  },
  {
    title: "Brand & marketing leads",
    body: "You are launching or relaunching and need one coherent narrative across site, campaigns, and motion.",
  },
  {
    title: "Founders at inflection",
    body: "Seed to Series B: narrative refresh, design system, and a site that matches the ambition of the deck.",
  },
  {
    title: "In-house creatives",
    body: "You want a senior partner for spikes — prototypes, build handoff, and polish your team does not have time for.",
  },
] as const;

export const engagementModels = [
  {
    title: "Project",
    body: "Fixed scope and milestones — ideal for launches, redesigns, and net-new product surfaces.",
  },
  {
    title: "Retainer",
    body: "Ongoing capacity for iteration, seasonal campaigns, and incremental product + marketing work.",
  },
  {
    title: "Workshop",
    body: "Short, intense sprints — alignment, IA, creative direction, or motion concepts before you commit to build.",
  },
] as const;

export const stackItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Figma",
  "Storybook",
  "Vercel",
  "Contentful",
  "Shopify",
] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: readonly FaqItem[] = [
  {
    question: "How do projects usually start?",
    answer:
      "A short discovery call, then a written proposal with scope, timeline, and investment. We can begin with a paid workshop if you need alignment before a full build.",
  },
  {
    question: "What do you need from us?",
    answer:
      "A point person for decisions, access to analytics or product context, brand assets if they exist, and realistic deadlines. The less proxying, the faster we move.",
  },
  {
    question: "Do you work with existing engineering teams?",
    answer:
      "Yes. We ship production-ready frontends, document components, and pair with your stack — or own the full frontend if you prefer.",
  },
  {
    question: "Typical timelines?",
    answer:
      "Marketing sites often land in 6–12 weeks; product surfaces depend on scope. We will flag risk early and cut scope before we cut quality.",
  },
  {
    question: "Can you support after launch?",
    answer:
      "Retainers cover performance tweaks, A/B follow-ups, seasonal refreshes, and small features so momentum does not stall.",
  },
  {
    question: "How do you handle revisions?",
    answer:
      "Structured review rounds with clear feedback windows. Major pivots are scoped as change requests so everyone stays aligned on time and budget.",
  },
] as const;
