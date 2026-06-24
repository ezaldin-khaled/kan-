import { useRef } from "react";
import { awards } from "@/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MaterialIcon } from "./MaterialIcon";

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="mx-auto max-w-container-max scroll-mt-24 px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap"
    >
      <h2 className="mb-20 text-center font-headline-xl text-headline-xl uppercase tracking-tighter">
        Achievements
      </h2>
      <div className="space-y-stack-lg">
        {awards.map((award) => (
          <div
            key={award.title}
            className="group flex flex-col items-center gap-stack-lg border-b border-outline-variant/30 px-6 py-10 transition-colors hover:bg-surface-container md:flex-row"
          >
            <div className="aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg bg-surface-container md:aspect-square md:w-48">
              <img
                src={award.image}
                alt={award.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-grow">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary px-3 py-1 font-label-caps text-[10px] text-on-primary">
                  {award.badges[0]}
                </span>
                <span className="rounded-full border border-outline-variant bg-surface px-3 py-1 font-label-caps text-[10px]">
                  {award.badges[1]}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md transition-transform duration-300 group-hover:translate-x-2">
                {award.title}
              </h3>
              <p className="mt-2 max-w-xl font-body-md text-on-surface-variant">
                {award.description}
              </p>
            </div>
            <MaterialIcon
              name="arrow_forward"
              className="text-4xl text-outline-variant transition-all group-hover:translate-x-4 group-hover:text-primary"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
