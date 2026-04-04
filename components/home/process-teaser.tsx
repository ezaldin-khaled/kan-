import Link from "next/link";
import { processSteps } from "@/content/services";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function ProcessTeaser() {
  return (
    <section id="process" className="scroll-mt-8 py-16 md:py-20" aria-label="Process">
      <div className="landing-rail">
        <ScrollReveal>
          <p data-reveal className="landing-section-label text-kan-lavender/80">
            04 — Process
          </p>
          <div
            data-reveal
            className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <h2 className="font-serif text-3xl font-semibold text-kan-light md:text-4xl">
              How we work
            </h2>
            <Link
              href="/services#process"
              className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-kan-light/40 transition hover:text-kan-lavender"
            >
              Deeper breakdown →
            </Link>
          </div>
          <div
            data-reveal
            className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((s) => (
              <div
                key={s.step}
                data-reveal
                className="glass-panel rounded-xl border border-white/10 px-4 py-5"
              >
                <span className="font-serif text-2xl font-semibold text-kan-blue/75">
                  {s.step}
                </span>
                <h3 className="mt-2 font-medium text-kan-light">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-kan-light/45 line-clamp-3">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
