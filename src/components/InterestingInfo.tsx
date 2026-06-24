import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MaterialIcon } from "./MaterialIcon";

export function InterestingInfo() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-container-max overflow-hidden px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap"
    >
      <h2 className="mb-16 font-headline-xl text-headline-xl uppercase tracking-tighter">
        Interesting Information
      </h2>
      <div className="grid h-auto grid-cols-1 grid-rows-none gap-gutter md:h-[800px] md:grid-cols-12 md:grid-rows-2">
        <div className="relative min-h-[400px] overflow-hidden rounded-3xl border border-outline-variant/30 bg-primary md:col-span-6 md:row-span-2">
          <div className="absolute inset-0 flex flex-col justify-end p-stack-lg text-on-primary">
            <h3 className="mb-4 font-headline-xl text-headline-xl">
              The Future of Interaction
            </h3>
            <p className="max-w-md font-body-lg text-on-primary/80">
              Exploring how generative AI and spatial computing are redefining
              our relationship with digital interfaces.
            </p>
          </div>
        </div>

        <div className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-3xl border border-outline-variant/30 bg-secondary p-stack-lg md:col-span-6 md:row-span-1">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl transition-transform duration-1000 group-hover:scale-150" />
          <MaterialIcon
            name="auto_awesome"
            className="text-5xl text-on-primary"
          />
          <div>
            <h4 className="mb-2 font-headline-md text-headline-md text-on-primary">
              Our Process
            </h4>
            <p className="font-body-md text-on-primary/80">
              From discovery to deployment, our clinical process ensures every
              pixel has a purpose.
            </p>
          </div>
        </div>

        <div className="flex min-h-[250px] flex-col items-center justify-center rounded-3xl border border-outline-variant/30 bg-surface-container p-stack-lg text-center md:col-span-3 md:row-span-1">
          <div className="mb-2 font-display-lg text-display-lg-mobile leading-none text-primary">
            12+
          </div>
          <div className="font-label-caps text-label-caps tracking-widest text-on-surface-variant">
            YEARS OF EXPERIENCE
          </div>
        </div>

        <div className="flex min-h-[250px] flex-col items-center justify-center rounded-3xl border border-outline-variant/30 bg-white p-stack-lg text-center md:col-span-3 md:row-span-1">
          <div className="mb-2 font-display-lg text-display-lg-mobile leading-none text-primary">
            95%
          </div>
          <div className="font-label-caps text-label-caps tracking-widest text-on-surface-variant">
            CLIENT RETENTION
          </div>
        </div>
      </div>
    </section>
  );
}
