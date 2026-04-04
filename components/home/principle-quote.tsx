import { principleQuote } from "@/content/home";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function PrincipleQuote() {
  return (
    <section
      id="principle"
      className="scroll-mt-8 py-16 md:py-24"
      aria-label="Principle"
    >
      <div className="landing-rail">
        <ScrollReveal>
          <blockquote
            data-reveal
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent px-8 py-12 md:px-14 md:py-16"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-kan-purple/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-kan-blue/10 blur-3xl"
              aria-hidden
            />
            <p className="landing-section-label mb-6 text-kan-light/30">
              06 — Principle
            </p>
            <p className="relative max-w-3xl font-serif text-2xl font-medium leading-snug tracking-wide text-kan-light/90 md:text-3xl md:leading-snug">
              {principleQuote.body}
            </p>
            {principleQuote.attribution ? (
              <footer className="relative mt-8 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-kan-light/35">
                — {principleQuote.attribution}
              </footer>
            ) : null}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
