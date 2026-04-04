import { credibilityPartners } from "@/content/home";

export function CredibilityStrip() {
  const items = credibilityPartners.map((p) => (
    <div
      key={p.name}
      className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2 pr-5"
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-kan-purple/30 to-kan-blue/25 text-xs font-semibold tracking-wider text-kan-light/90"
        aria-hidden
      >
        {p.abbr}
      </span>
      <span className="text-sm font-medium text-kan-light/65">{p.name}</span>
    </div>
  ));

  return (
    <section
      id="trust"
      className="border-y border-white/[0.06] bg-white/[0.015] py-14 md:py-16"
      aria-label="Trusted partners"
    >
      <div className="landing-rail">
        <p className="landing-section-label mb-8 text-center text-kan-light/35 md:mb-10">
          02 — Trusted alongside
        </p>
        <div className="kan-marquee">
          <div className="kan-marquee__track">
            {items}
            {items}
          </div>
        </div>
      </div>
    </section>
  );
}
