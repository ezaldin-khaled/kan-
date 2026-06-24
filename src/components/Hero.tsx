import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { prefersReducedMotion, registerGsap } from "@/lib/gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const root = sectionRef.current;
      if (!root) return;

      const items = root.querySelectorAll<HTMLElement>("[data-hero-item]");
      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(items, { opacity: 0, y: 32 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-margin-mobile pt-32 text-center md:px-margin-desktop"
    >
      <div className="pointer-events-none absolute inset-0 pixel-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-stack-lg">
        <div
          data-hero-item
          className="mb-4 inline-block rounded-full bg-surface-container px-4 py-1.5 font-label-caps text-label-caps text-primary motion-safe:animate-bounce"
        >
          DIGITAL DESIGN STUDIO
        </div>
        <h1
          data-hero-item
          className="font-display-lg text-display-lg-mobile uppercase leading-none tracking-tighter md:text-display-lg"
        >
          Together, we <span className="text-stroke">CAN.</span>
        </h1>
        <p
          data-hero-item
          className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant"
        >
          Your vision, our design – building stronger digital brands through
          high-fidelity visual narratives and architectural clarity.
        </p>
        <div
          data-hero-item
          className="flex flex-wrap justify-center gap-4 pt-stack-lg"
        >
          <a
            href="#contact"
            className="transform rounded-full bg-primary px-10 py-5 font-label-caps text-label-caps text-on-primary transition-all hover:-translate-y-1 hover:bg-secondary"
          >
            Elevate Your Brand
          </a>
          <a
            href="#work"
            className="rounded-full border border-outline px-10 py-5 font-label-caps text-label-caps transition-all hover:bg-surface-container"
          >
            View Our Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
        <span className="font-label-caps text-[10px] tracking-widest">
          SCROLL
        </span>
        <div className="h-12 w-px bg-primary" />
      </div>
    </section>
  );
}
