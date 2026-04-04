"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getAllProjectTags,
  projects,
  type Project,
} from "@/content/projects";
import { PageIntro } from "@/components/motion/page-intro";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionShell } from "@/components/section-shell";
import { SiteHeader } from "@/components/site-header";
import { refreshScrollTrigger } from "@/lib/motion";

export function CaseStudiesIndex() {
  const tags = useMemo(() => getAllProjectTags(), []);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered: readonly Project[] = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  useEffect(() => {
    refreshScrollTrigger();
  }, [filtered.length, activeTag]);

  return (
    <main className="relative z-10 min-h-[100dvh]">
      <div className="pointer-events-none fixed inset-0 z-[1] kan-grain opacity-70" aria-hidden />
      <SiteHeader />

      <SectionShell as="div" className="relative z-10 pb-12 pt-2">
        <PageIntro className="max-w-3xl pt-4">
          <p
            data-intro
            className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-kan-light/40"
          >
            Case studies
          </p>
          <h1
            data-intro
            className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-wide text-kan-light md:text-5xl"
          >
            Selected work
          </h1>
          <p
            data-intro
            className="mt-6 max-w-2xl text-base leading-relaxed text-kan-light/50"
          >
            A snapshot of engagements where craft, clarity, and performance
            moved the needle — filter by discipline or replace mock imagery with
            your own captures.
          </p>
        </PageIntro>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="toolbar"
          aria-label="Filter by tag"
        >
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`rounded-full border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kan-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-kan-black ${
              activeTag === null
                ? "border-kan-blue/50 bg-kan-blue/15 text-kan-light"
                : "border-white/10 bg-white/[0.03] text-kan-light/45 hover:border-white/20 hover:text-kan-light/70"
            }`}
          >
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTag(t)}
              className={`rounded-full border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kan-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-kan-black ${
                activeTag === t
                  ? "border-kan-blue/50 bg-kan-blue/15 text-kan-light"
                  : "border-white/10 bg-white/[0.03] text-kan-light/45 hover:border-white/20 hover:text-kan-light/70"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-sm text-kan-light/45">
            No projects with this tag yet.
          </p>
        ) : (
          <ScrollReveal
            key={activeTag ?? "all"}
            className="mt-16 grid gap-8 md:grid-cols-2 md:gap-10"
          >
            {filtered.map((p) => (
              <div key={p.slug} data-reveal>
                <ProjectCard project={p} />
              </div>
            ))}
          </ScrollReveal>
        )}
      </SectionShell>
    </main>
  );
}
