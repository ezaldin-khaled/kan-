import { useRef } from "react";
import { expertiseCards } from "@/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MaterialIcon } from "./MaterialIcon";

export function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="relative scroll-mt-24 overflow-hidden bg-surface-container py-section-gap-mobile md:py-section-gap"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-full w-1/2 rotate-6 brand-pattern-purple opacity-10" />
      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="section-eyebrow">WHAT WE DO</span>
          <h2 className="section-title mb-stack-md">Our Expertise</h2>
          <p className="font-body-lg leading-relaxed text-on-surface-variant">
            We bridge the gap between creative imagination and technical
            execution through three core pillars of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="card-elevated group relative flex min-h-[320px] flex-col border-l-4 border-l-transparent p-8 pt-16 hover:-translate-y-1 hover:border-l-brand-purple"
            >
              <div className="absolute right-5 top-5 text-outline-variant transition-all duration-300 group-hover:scale-110 group-hover:text-brand-purple">
                <MaterialIcon
                  name={card.icon}
                  className="text-4xl"
                  aria-hidden
                />
              </div>
              <span className="absolute left-5 top-5 font-label-caps text-label-caps text-outline-variant">
                {card.index}
              </span>
              <h3 className="mb-stack-md mt-auto font-headline-md text-headline-md">
                {card.title}
              </h3>
              <p className="mb-stack-lg font-body-md leading-relaxed text-on-surface-variant">
                {card.description}
              </p>
              <div className="h-0.5 w-12 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
