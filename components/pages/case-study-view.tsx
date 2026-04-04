"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "@/content/projects";
import { PageIntro } from "@/components/motion/page-intro";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { SiteHeader } from "@/components/site-header";
import { reducedMotion } from "@/lib/motion";

type CaseStudyViewProps = {
  project: Project;
  prev?: Project;
  next?: Project;
  related?: Project;
};

function ProjectFacts({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="landing-section-label text-kan-light/35">At a glance</p>
      <dl className="mt-4 space-y-4 text-sm">
        <div>
          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-kan-light/35">
            Year
          </dt>
          <dd className="mt-1 text-kan-light/80">{project.year}</dd>
        </div>
        <div>
          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-kan-light/35">
            Role
          </dt>
          <dd className="mt-1 text-kan-light/70">{project.role}</dd>
        </div>
        <div>
          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-kan-light/35">
            Timeline
          </dt>
          <dd className="mt-1 text-kan-light/80">{project.timeline}</dd>
        </div>
        <div>
          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-kan-light/35">
            Signals
          </dt>
          <dd className="mt-3 space-y-2">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-2 last:border-0"
              >
                <span className="text-kan-light/45">{m.label}</span>
                <span className="font-medium tabular-nums text-kan-light">
                  {m.value}
                </span>
              </div>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export function CaseStudyView({
  project,
  prev,
  next,
  related,
}: CaseStudyViewProps) {
  const navRef = useRef<HTMLElement>(null);
  const navPrevRef = useRef<HTMLAnchorElement>(null);
  const navNextRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (reducedMotion()) return;
      const bind = (
        el: HTMLAnchorElement | null,
        scale: number,
        shadow: string,
      ) => {
        if (!el) return () => {};
        const onEnter = () => {
          gsap.to(el, {
            scale,
            boxShadow: shadow,
            duration: 0.35,
            ease: "power2.out",
          });
        };
        const onLeave = () => {
          gsap.to(el, {
            scale: 1,
            boxShadow: "none",
            duration: 0.45,
            ease: "power3.out",
          });
        };
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        return () => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        };
      };
      const c1 = bind(
        navPrevRef.current,
        1.02,
        "0 0 0 1px rgba(146,164,255,0.35), 0 12px 40px -12px rgba(146,164,255,0.25)",
      );
      const c2 = bind(
        navNextRef.current,
        1.02,
        "0 0 0 1px rgba(184,144,244,0.35), 0 12px 40px -12px rgba(184,144,244,0.2)",
      );
      return () => {
        c1();
        c2();
      };
    },
    { scope: navRef, dependencies: [project.slug] },
  );

  return (
    <main className="relative z-10 min-h-[100dvh]">
      <div className="pointer-events-none fixed inset-0 z-[1] kan-grain opacity-70" aria-hidden />
      <SiteHeader />

      <div className="relative z-10">
        <div className="relative mx-auto aspect-[21/9] max-h-[min(52vh,520px)] w-full max-w-6xl overflow-hidden rounded-b-3xl border-x border-b border-white/10 md:mx-6 md:mt-4 md:rounded-3xl lg:mx-auto">
          <Image
            src={project.coverImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-kan-black via-kan-black/40 to-transparent"
            aria-hidden
          />
        </div>

        <div className="landing-rail pb-16 pt-12">
          <PageIntro>
            <p
              data-intro
              className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-kan-light/40"
            >
              {project.year} · {project.role}
            </p>
            <h1
              data-intro
              className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-wide text-kan-light md:text-5xl"
            >
              {project.title}
            </h1>
            <p
              data-intro
              className="mt-4 text-lg text-kan-light/60 md:text-xl"
            >
              {project.tagline}
            </p>
            <div data-intro className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-kan-light/45"
                >
                  {t}
                </span>
              ))}
            </div>
          </PageIntro>

          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="glass-panel rounded-xl border border-white/10 px-4 py-3"
              >
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-kan-light/35">
                  {m.label}
                </p>
                <p className="mt-1 font-serif text-xl font-semibold text-kan-light">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 lg:grid lg:grid-cols-[1fr_17.5rem] lg:items-start lg:gap-14">
            <div className="min-w-0">
              <ProjectFacts
                project={project}
                className="glass-panel mb-10 rounded-2xl border border-white/10 p-6 lg:hidden"
              />

              <ScrollReveal className="space-y-12">
                <section data-reveal>
                  <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-kan-blue/80">
                    Challenge
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-kan-light/55">
                    {project.challenge}
                  </p>
                </section>
                <section data-reveal>
                  <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-kan-lavender/90">
                    Approach
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-kan-light/55">
                    {project.approach}
                  </p>
                </section>
                <section data-reveal>
                  <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-kan-purple/90">
                    Outcome
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-kan-light/55">
                    {project.outcome}
                  </p>
                </section>
              </ScrollReveal>

              <ScrollReveal className="mt-20 space-y-8">
                <h2
                  data-reveal
                  className="font-serif text-2xl font-semibold text-kan-light"
                >
                  Gallery
                </h2>
                {project.gallery.map((src) => (
                  <div
                    key={src}
                    data-reveal
                    className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-kan-black/60"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                  </div>
                ))}
              </ScrollReveal>
            </div>

            <aside className="mt-12 hidden lg:mt-0 lg:block">
              <div className="sticky top-28">
                <ProjectFacts
                  project={project}
                  className="glass-panel rounded-2xl border border-white/10 p-6"
                />
              </div>
            </aside>
          </div>

          {related ? (
            <ScrollReveal className="mt-20">
              <h2
                data-reveal
                className="font-serif text-xl font-semibold text-kan-light md:text-2xl"
              >
                Related project
              </h2>
              <p
                data-reveal
                className="mt-2 text-sm text-kan-light/45"
              >
                Same craft, shared context — explore another build with
                overlapping focus.
              </p>
              <div data-reveal className="mt-8 max-w-xl">
                <ProjectCard project={related} />
              </div>
            </ScrollReveal>
          ) : null}

          <nav
            ref={navRef}
            className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row sm:justify-between"
            aria-label="Adjacent projects"
          >
            {prev ? (
              <Link
                ref={navPrevRef}
                href={`/case-studies/${prev.slug}`}
                className="glass-panel flex flex-col rounded-2xl border border-white/10 px-5 py-4 transition-colors hover:border-kan-blue/30"
              >
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-kan-light/35">
                  Previous
                </span>
                <span className="mt-1 font-serif text-lg text-kan-light">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                ref={navNextRef}
                href={`/case-studies/${next.slug}`}
                className="glass-panel flex flex-col rounded-2xl border border-white/10 px-5 py-4 text-right transition-colors hover:border-kan-purple/30 sm:ml-auto"
              >
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-kan-light/35">
                  Next
                </span>
                <span className="mt-1 font-serif text-lg text-kan-light">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </nav>

          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="text-sm font-medium tracking-widest text-kan-light/45 transition hover:text-kan-light"
            >
              ← All case studies
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
