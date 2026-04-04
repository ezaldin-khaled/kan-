export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  tags: readonly string[];
  coverImage: string;
  gallery: readonly string[];
  challenge: string;
  approach: string;
  outcome: string;
  metrics: readonly ProjectMetric[];
  timeline: string;
};

export const projects: readonly Project[] = [
  {
    slug: "aurora-fintech",
    title: "Aurora",
    tagline: "Institutional trading, reimagined as calm software.",
    role: "Product design · Frontend",
    year: "2025",
    tags: ["Fintech", "Design system", "Web app"],
    coverImage: "/mock/cover-a.svg",
    gallery: ["/mock/detail-1.svg", "/mock/detail-2.svg", "/mock/detail-3.svg"],
    challenge:
      "Complex data and compliance requirements were overwhelming first-time users and slowing demos.",
    approach:
      "We reframed the IA around tasks, not modules, and introduced a restrained visual language with progressive disclosure.",
    outcome:
      "Higher activation in pilot cohorts and a reusable component library adopted across two product lines.",
    timeline: "18 weeks",
    metrics: [
      { label: "Activation", value: "+34%" },
      { label: "Time-to-task", value: "−41%" },
      { label: "Pilot teams", value: "12" },
    ],
  },
  {
    slug: "luminous-fashion",
    title: "Luminous",
    tagline: "Editorial e-commerce with a cinematic rhythm.",
    role: "Brand · Commerce",
    year: "2024",
    tags: ["Fashion", "Shopify", "Motion"],
    coverImage: "/mock/cover-b.svg",
    gallery: ["/mock/detail-2.svg", "/mock/detail-3.svg"],
    challenge:
      "The brand needed luxury storytelling without sacrificing speed or mobile conversion.",
    approach:
      "We paired typographic drama with image-led layouts, tuned for LCP, and choreographed scroll moments with restraint.",
    outcome:
      "Stronger AOV on mobile and a repeatable seasonal campaign template the in-house team now owns.",
    timeline: "14 weeks",
    metrics: [
      { label: "Mobile AOV", value: "+22%" },
      { label: "LCP", value: "<2.1s" },
      { label: "Return rate", value: "−8%" },
    ],
  },
  {
    slug: "orbit-saas",
    title: "Orbit",
    tagline: "Onboarding that feels guided, not gated.",
    role: "UX · Engineering",
    year: "2024",
    tags: ["SaaS", "Onboarding", "B2B", "Web app"],
    coverImage: "/mock/cover-c.svg",
    gallery: ["/mock/detail-1.svg", "/mock/detail-3.svg"],
    challenge:
      "Trial users dropped off before connecting integrations; support tickets spiked at the same step.",
    approach:
      "We redesigned the connect flow as a linear narrative with live previews, smart defaults, and inline recovery.",
    outcome:
      "Fewer abandoned trials and a measurable drop in integration-related support volume.",
    timeline: "10 weeks",
    metrics: [
      { label: "Trial completion", value: "+28%" },
      { label: "Support tickets", value: "−35%" },
      { label: "Integrations", value: "6" },
    ],
  },
  {
    slug: "prism-culture",
    title: "Prism",
    tagline: "A venue identity that scales from poster to pixels.",
    role: "Identity · Web",
    year: "2023",
    tags: ["Culture", "Identity", "Events"],
    coverImage: "/mock/cover-d.svg",
    gallery: ["/mock/detail-1.svg", "/mock/detail-2.svg", "/mock/detail-3.svg"],
    challenge:
      "Fragmented visuals across seasons made the institution feel inconsistent to donors and newcomers.",
    approach:
      "We defined a flexible grid, a dual-tone palette, and motion rules that echo print posters in digital space.",
    outcome:
      "Unified campaigns across OOH, social, and web with faster handoffs for the internal studio.",
    timeline: "20 weeks",
    metrics: [
      { label: "Campaign prep", value: "−50% time" },
      { label: "Touchpoints", value: "OOH + web" },
      { label: "Season kits", value: "4" },
    ],
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAdjacentProjects(
  slug: string,
): { prev?: Project; next?: Project } {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return {};
  return {
    prev: i > 0 ? projects[i - 1] : undefined,
    next: i < projects.length - 1 ? projects[i + 1] : undefined,
  };
}

/** First other project that shares a tag with the current slug */
export function getRelatedProject(slug: string): Project | undefined {
  const current = projects.find((p) => p.slug === slug);
  if (!current) return undefined;
  for (const tag of current.tags) {
    const match = projects.find(
      (p) => p.slug !== slug && p.tags.includes(tag),
    );
    if (match) return match;
  }
  return undefined;
}

export function getAllProjectTags(): string[] {
  const set = new Set<string>();
  for (const p of projects) {
    for (const t of p.tags) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
