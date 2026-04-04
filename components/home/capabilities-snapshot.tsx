import Link from "next/link";
import { capabilities, type Capability } from "@/content/services";
import { homeCapabilityIds } from "@/content/home";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const snapshot: Capability[] = homeCapabilityIds
  .map((id) => capabilities.find((c) => c.id === id))
  .filter((c): c is Capability => c != null);

export function CapabilitiesSnapshot() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-8 py-16 md:py-24"
      aria-labelledby="cap-snap-heading"
    >
      <div className="landing-rail">
        <ScrollReveal>
          <p data-reveal className="landing-section-label text-kan-blue/70">
            03 — Capabilities
          </p>
          <div
            data-reveal
            className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <h2
              id="cap-snap-heading"
              className="font-serif text-3xl font-semibold tracking-wide text-kan-light md:text-4xl"
            >
              What we build
            </h2>
            <Link
              href="/services#capabilities"
              className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-kan-light/40 transition hover:text-kan-blue/90"
            >
              Full services →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {snapshot.map((cap) => (
              <Link
                key={cap.id}
                href="/services#capabilities"
                data-reveal
                className="glass-panel group rounded-2xl border border-white/10 p-5 transition-colors hover:border-kan-blue/25"
              >
                <h3 className="font-serif text-lg font-semibold text-kan-light group-hover:text-white">
                  {cap.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-kan-light/45">
                  {cap.description}
                </p>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
