"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import {
  capabilities,
  engagementModels,
  faqs,
  idealFor,
  metricsStrip,
  processSteps,
  stackItems,
} from "@/content/services";
import { CapabilityCard } from "@/components/services/capability-card";
import { PageIntro } from "@/components/motion/page-intro";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SiteHeader } from "@/components/site-header";
import { reducedMotion } from "@/lib/motion";

export function ServicesPage() {
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const el = ctaRef.current;
      if (!el || reducedMotion()) return;
      const onEnter = () => {
        gsap.to(el, {
          scale: 1.03,
          boxShadow:
            "0 0 0 1px rgba(240,240,240,0.45), 0 16px 48px -8px rgba(146,164,255,0.55)",
          duration: 0.35,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          scale: 1,
          boxShadow:
            "0 0 0 1px rgba(240,240,240,0.35), 0 12px 40px -8px rgba(146,164,255,0.35)",
          duration: 0.45,
          ease: "power3.out",
        });
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("focus", onEnter);
      el.addEventListener("blur", onLeave);
      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.removeEventListener("focus", onEnter);
        el.removeEventListener("blur", onLeave);
      };
    },
    { scope: ctaRef },
  );

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
            Services
          </p>
          <h1
            data-intro
            className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-wide text-kan-light md:text-5xl lg:text-[3.25rem]"
          >
            From signal to shipped — strategy, design, and engineering in one
            rhythm.
          </h1>
          <p
            data-intro
            className="mt-6 max-w-2xl text-base leading-relaxed text-kan-light/50"
          >
            We build immersive web experiences, resilient systems, and launch
            narratives that stay coherent as your product grows.
          </p>
        </PageIntro>

        <ScrollReveal className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {metricsStrip.map((m) => (
            <div
              key={m.label}
              data-reveal
              className="glass-panel rounded-2xl border border-white/10 px-4 py-5 text-center md:px-5"
            >
              <p className="font-serif text-2xl font-semibold text-kan-light md:text-3xl">
                {m.value}
              </p>
              <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-kan-light/40">
                {m.label}
              </p>
            </div>
          ))}
        </ScrollReveal>

        <section id="ideal-for" className="scroll-mt-8 mt-24">
          <ScrollReveal>
            <p data-reveal className="landing-section-label text-kan-purple/75">
              Ideal fit
            </p>
            <h2
              data-reveal
              className="mt-3 font-serif text-2xl font-semibold text-kan-light md:text-3xl"
            >
              Who we work best with
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {idealFor.map((item) => (
                <div
                  key={item.title}
                  data-reveal
                  className="glass-panel rounded-2xl border border-white/10 p-5 md:p-6"
                >
                  <h3 className="font-medium text-kan-light">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-kan-light/50">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="mt-24">
          <ScrollReveal>
            <p data-reveal className="landing-section-label text-kan-blue/70">
              Engagements
            </p>
            <h2
              data-reveal
              className="mt-3 font-serif text-2xl font-semibold text-kan-light md:text-3xl"
            >
              Ways to work together
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {engagementModels.map((m) => (
                <div
                  key={m.title}
                  data-reveal
                  className="glass-panel flex flex-col rounded-2xl border border-white/10 p-6"
                >
                  <h3 className="font-serif text-xl font-semibold text-kan-light">
                    {m.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-kan-light/50">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section id="capabilities" className="scroll-mt-8 mt-24">
          <ScrollReveal>
            <h2
              data-reveal
              className="font-serif text-2xl font-semibold text-kan-light md:text-3xl"
            >
              Capabilities
            </h2>
            <p
              data-reveal
              className="mt-3 max-w-xl text-sm leading-relaxed text-kan-light/50"
            >
              Modular teams across the stack — engage where you need depth, or
              end-to-end for net-new products.
            </p>
            <div className="mt-10 grid gap-5 md:gap-6">
              {capabilities.map((cap) => (
                <CapabilityCard key={cap.id} capability={cap} data-reveal />
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section id="stack" className="scroll-mt-8 mt-24">
          <ScrollReveal>
            <p data-reveal className="landing-section-label text-kan-lavender/80">
              Stack & craft
            </p>
            <h2
              data-reveal
              className="mt-3 font-serif text-2xl font-semibold text-kan-light md:text-3xl"
            >
              Tools we reach for
            </h2>
            <div
              data-reveal
              className="mt-8 flex flex-wrap gap-2 md:gap-3"
            >
              {stackItems.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-kan-light/55"
                >
                  {s}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section id="process" className="scroll-mt-8 mt-28 pb-4">
          <ScrollReveal>
            <h2
              data-reveal
              className="font-serif text-2xl font-semibold text-kan-light md:text-3xl"
            >
              How we work
            </h2>
            <ol className="mt-10 space-y-6">
              {processSteps.map((step) => (
                <li
                  key={step.step}
                  data-reveal
                  className="glass-panel flex gap-6 rounded-2xl border border-white/10 px-5 py-6 md:px-8 md:py-7"
                >
                  <span className="font-serif text-3xl font-semibold tabular-nums text-kan-blue/80 md:text-4xl">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-medium text-kan-light">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-kan-light/50">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </section>

        <section id="faq" className="scroll-mt-8 mt-24 max-w-3xl">
          <ScrollReveal>
            <p data-reveal className="landing-section-label text-kan-light/35">
              FAQ
            </p>
            <h2
              data-reveal
              className="mt-3 font-serif text-2xl font-semibold text-kan-light md:text-3xl"
            >
              Common questions
            </h2>
            <div data-reveal className="mt-8">
              {faqs.map((item) => (
                <details key={item.question} className="kan-faq group">
                  <summary className="flex items-center justify-between gap-4 py-4 text-left font-medium text-kan-light">
                    <span>{item.question}</span>
                    <span
                      className="kan-faq-chevron flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-kan-light/50 transition-transform duration-300"
                      aria-hidden
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-4 pl-0 pr-12 text-sm leading-relaxed text-kan-light/50">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <div className="mt-16 flex justify-center pb-4">
          <Link
            ref={ctaRef}
            href="/connect"
            className="cta-glow inline-flex items-center justify-center rounded-full border border-white/35 bg-white/[0.03] px-8 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-kan-light transition-colors hover:border-kan-blue/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kan-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-kan-black"
          >
            Start a project
          </Link>
        </div>
      </SectionShell>
    </main>
  );
}
