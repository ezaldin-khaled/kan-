import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function LandingFooterCta() {
  return (
    <section id="cta" className="scroll-mt-8 pb-28 pt-4 md:pb-32" aria-label="Get started">
      <div className="landing-rail">
        <ScrollReveal>
          <div
            data-reveal
            className="glass-panel relative overflow-hidden rounded-3xl border border-kan-blue/15 px-8 py-12 text-center md:px-12 md:py-14"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-kan-blue/[0.06] via-transparent to-kan-purple/[0.06]"
              aria-hidden
            />
            <p className="landing-section-label relative text-kan-light/35">
              07 — Next step
            </p>
            <h2 className="relative mt-4 font-serif text-2xl font-semibold text-kan-light md:text-3xl">
              Ready when you are
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-kan-light/45">
              Tell us what you are building — or explore more work first.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link
                href="/connect"
                className="cta-glow inline-flex min-w-[12rem] items-center justify-center rounded-full border border-white/35 bg-white/[0.06] px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-kan-light transition-colors hover:border-kan-blue/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kan-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-kan-black"
              >
                Start a project
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex min-w-[12rem] items-center justify-center rounded-full border border-white/15 bg-transparent px-8 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-kan-light/70 transition-colors hover:border-white/25 hover:text-kan-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kan-blue/50 focus-visible:ring-offset-2 focus-visible:ring-offset-kan-black"
              >
                Case studies
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
