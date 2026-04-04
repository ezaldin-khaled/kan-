"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const featured = projects.slice(0, 3);

export function SelectedWork() {
  return (
    <div className="landing-rail py-20 md:py-28 lg:py-32">
      <ScrollReveal>
        <div
          className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between"
          data-reveal
        >
          <div>
            <p className="landing-section-label text-kan-blue/70">
              05 — Portfolio
            </p>
            <h2
              id="selected-work-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-wide text-kan-light md:text-4xl lg:text-[2.75rem]"
            >
              Selected work
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-kan-light/45 md:text-base">
              Three recent engagements — replace mock art with your own when
              ready. Full write-ups live in case studies.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="shrink-0 self-start rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-kan-light/80 transition-colors hover:border-kan-blue/35 hover:text-kan-light md:self-auto"
          >
            All projects
          </Link>
        </div>

        <div
          data-reveal
          className="grid snap-x snap-mandatory auto-cols-[min(100%,300px)] grid-flow-col gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:auto-cols-auto md:grid-flow-row md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              href={`/case-studies/${p.slug}`}
              className="group glass-panel min-w-[min(100%,300px)] snap-center overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_64px_-32px_rgba(0,0,0,0.85)] transition-[border-color,box-shadow] duration-500 hover:border-kan-blue/30 hover:shadow-[0_28px_72px_-28px_rgba(146,164,255,0.12)] md:min-w-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-kan-black/90">
                <Image
                  src={p.coverImage}
                  alt=""
                  fill
                  className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 88vw, 33vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kan-black via-kan-black/20 to-transparent opacity-90"
                  aria-hidden
                />
                <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-black/40 text-[0.65rem] font-semibold tabular-nums text-kan-light/50 backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute bottom-3 left-4 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-kan-light/45">
                  {p.year}
                </span>
              </div>
              <div className="border-t border-white/[0.06] px-5 py-5">
                <p className="font-serif text-xl font-semibold tracking-wide text-kan-light">
                  {p.title}
                </p>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-kan-light/40">
                  {p.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-kan-blue/85 transition group-hover:gap-3 group-hover:text-kan-blue">
                  Case study
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p data-reveal className="mt-10 text-center md:mt-12">
          <Link
            href="/connect"
            className="landing-section-label inline-flex items-center gap-2 text-kan-light/35 transition hover:text-kan-light/60"
          >
            Start a project
            <span className="text-kan-lavender/80" aria-hidden>
              —
            </span>
            <span className="text-kan-blue/90">Connect</span>
          </Link>
        </p>
      </ScrollReveal>
    </div>
  );
}
