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
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 rotate-12 transform pixel-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-stack-md font-headline-xl text-headline-xl uppercase tracking-tighter">
            My Expertise
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            We bridge the gap between creative imagination and technical
            execution through three core pillars of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="group relative flex h-[400px] flex-col border border-outline-variant/50 bg-surface p-stack-lg transition-colors hover:border-primary"
            >
              <div className="absolute right-4 top-4 text-outline-variant transition-colors group-hover:text-primary">
                <MaterialIcon name={card.icon} className="text-4xl" />
              </div>
              <div className="absolute bottom-4 left-4 font-label-caps text-label-caps text-outline-variant">
                {card.index}
              </div>
              <h3 className="mb-stack-md mt-auto font-headline-md text-headline-md">
                {card.title}
              </h3>
              <p className="mb-stack-lg font-body-md text-on-surface-variant">
                {card.description}
              </p>
              <div className="h-0.5 w-12 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
