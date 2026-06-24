import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="mx-auto max-w-container-max scroll-mt-24 px-margin-mobile py-section-gap-mobile md:px-margin-desktop md:py-section-gap"
    >
      <div className="relative overflow-hidden rounded-[40px] bg-primary p-10 text-center md:p-20">
        <div className="absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-stack-lg font-display-lg text-display-lg-mobile tracking-tighter text-on-primary md:text-display-lg">
            Let&apos;s Collaborate and Create. Achieve Powerful Results.
          </h2>
          <p className="mb-12 font-body-lg text-on-primary/70">
            Start your journey toward a stronger digital presence with a team
            that values your vision as much as you do.
          </p>
          <a
            href="mailto:hello@kanagency.design"
            className="inline-block transform rounded-full bg-on-primary px-12 py-5 font-label-caps text-label-caps text-primary transition-all hover:scale-105 hover:bg-secondary hover:text-white"
          >
            Get in touch now
          </a>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full pixel-grid opacity-10" />
      </div>
    </section>
  );
}
