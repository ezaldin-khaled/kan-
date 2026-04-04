"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { CapabilitiesSnapshot } from "./home/capabilities-snapshot";
import { CredibilityStrip } from "./home/credibility-strip";
import { LandingFooterCta } from "./home/landing-footer-cta";
import { PrincipleQuote } from "./home/principle-quote";
import { ProcessTeaser } from "./home/process-teaser";
import { GlassBottomNav } from "./glass-bottom-nav";
import { KanMarkTile } from "./kan-mark-tile";
import { SelectedWork } from "./selected-work";
import { SiteHeader } from "./site-header";

function reducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Landing() {
  const mainRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const root = mainRef.current;
      if (!root) return;

      const all = root.querySelectorAll<HTMLElement>("[data-animate]");

      if (reducedMotion()) {
        gsap.set(all, { opacity: 1, y: 0, scale: 1, filter: "none" });
        return;
      }

      const blurGroup = root.querySelectorAll<HTMLElement>(
        "[data-animate='header'], [data-animate='hero-line'], [data-animate='sub'], [data-animate='cta']",
      );
      gsap.set(blurGroup, {
        opacity: 0,
        y: 32,
        filter: "blur(8px)",
      });
      gsap.set("[data-animate='nav'], [data-animate='mark']", {
        opacity: 0,
        y: 18,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to("[data-animate='header']", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.75,
      })
        .to(
          "[data-animate='hero-line']",
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.45",
        )
        .to(
          "[data-animate='sub']",
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.75,
          },
          "-=0.55",
        )
        .to(
          "[data-animate='cta']",
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.65,
          },
          "-=0.5",
        )
        .to(
          "[data-animate='nav']",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.55",
        )
        .to(
          "[data-animate='mark']",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.5",
        );
    },
    { scope: mainRef },
  );

  const onCtaEnter = () => {
    if (reducedMotion() || !ctaRef.current) return;
    gsap.to(ctaRef.current, {
      scale: 1.03,
      boxShadow:
        "0 0 0 1px rgba(240,240,240,0.45), 0 16px 48px -8px rgba(146,164,255,0.55)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const onCtaLeave = () => {
    if (reducedMotion() || !ctaRef.current) return;
    gsap.to(ctaRef.current, {
      scale: 1,
      boxShadow:
        "0 0 0 1px rgba(240,240,240,0.35), 0 12px 40px -8px rgba(146,164,255,0.35)",
      duration: 0.45,
      ease: "power3.out",
    });
  };

  return (
    <main
      ref={mainRef}
      className="relative isolate min-h-[100dvh]"
      id="core"
    >
      <div className="pointer-events-none fixed inset-0 z-[1] kan-grain opacity-60" aria-hidden />

      <div className="relative z-10 flex min-h-[100dvh] flex-col">
        {/* —— Hero: full viewport SPA screen —— */}
        <section
          id="intro"
          className="landing-hero-glow relative flex min-h-[100dvh] flex-col"
          aria-label="Introduction"
        >
          <SiteHeader data-animate="header" />

          <div className="landing-rail flex flex-1 flex-col justify-center pb-32 pt-6 md:pb-40 md:pt-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_min(22rem,36%)] lg:items-end lg:gap-16">
              <div className="flex max-w-2xl flex-col gap-8 lg:max-w-none">
                <p
                  className="landing-section-label max-w-xl"
                  data-animate="hero-line"
                >
                  Digital agency
                </p>
                <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.06] tracking-wide text-kan-light">
                  <span className="block" data-animate="hero-line">
                    WE TURN COMPLEXITY
                  </span>
                  <span
                    className="mt-2 block bg-gradient-to-r from-kan-light via-kan-lavender to-kan-blue bg-clip-text font-semibold text-transparent"
                    data-animate="hero-line"
                  >
                    INTO ELEGANCE.
                  </span>
                </h1>
                <p
                  className="max-w-md text-base leading-relaxed text-kan-light/50 md:text-lg md:leading-relaxed"
                  data-animate="sub"
                >
                  Immersive digital experiences for modern brands — one
                  continuous story from first impression to launch.
                </p>
                <div
                  className="flex flex-wrap items-center gap-4"
                  data-animate="cta"
                >
                  <Link
                    ref={ctaRef}
                    href="/services"
                    className="cta-glow inline-flex items-center justify-center rounded-full border border-white/35 bg-white/[0.04] px-9 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-kan-light transition-colors hover:border-kan-blue/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kan-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-kan-black"
                    onMouseEnter={onCtaEnter}
                    onMouseLeave={onCtaLeave}
                    onFocus={onCtaEnter}
                    onBlur={onCtaLeave}
                  >
                    Explore the core
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-kan-light/40 transition-colors hover:text-kan-light/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kan-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-kan-black"
                  >
                    View work
                  </Link>
                </div>
              </div>

              <aside
                className="hidden lg:flex lg:flex-col lg:items-end lg:gap-6 lg:pb-2"
                aria-hidden
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <p className="max-w-[14rem] text-right text-xs leading-relaxed text-kan-light/35">
                  Scroll for selected projects — or use the dock to jump anywhere
                  on the site.
                </p>
              </aside>
            </div>
          </div>

          <a
            href="#work"
            className="landing-rail pointer-events-auto absolute bottom-28 left-0 right-0 z-10 flex items-center gap-3 text-kan-light/30 max-md:hidden md:bottom-32"
          >
            <span className="landing-section-label text-[0.6rem] tracking-[0.3em]">
              Scroll
            </span>
            <span
              className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5"
              aria-hidden
            >
              <span className="motion-safe:animate-bounce h-1.5 w-0.5 rounded-full bg-kan-light/40" />
            </span>
          </a>
        </section>

        <CredibilityStrip />
        <CapabilitiesSnapshot />
        <ProcessTeaser />

        {/* —— Work chapter —— */}
        <section
          id="work"
          className="relative scroll-mt-8 border-t border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent"
          aria-labelledby="selected-work-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kan-blue/20 to-transparent" aria-hidden />
          <SelectedWork />
        </section>

        <PrincipleQuote />
        <LandingFooterCta />

        <GlassBottomNav data-animate="nav" homeActive />
        <KanMarkTile data-animate="mark" />
      </div>
    </main>
  );
}
