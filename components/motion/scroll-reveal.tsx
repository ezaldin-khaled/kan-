"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { reducedMotion, registerGsapPlugins } from "@/lib/motion";

type ScrollRevealProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  /** ScrollTrigger start string */
  start?: string;
  /** Stagger between [data-reveal] elements */
  stagger?: number;
};

export function ScrollReveal({
  children,
  className = "",
  start = "top 85%",
  stagger = 0.08,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();
      const root = ref.current;
      if (!root) return;

      const items = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-reveal]"),
      );
      if (items.length === 0) return;

      if (reducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0, filter: "none" });
        return;
      }

      gsap.set(items, { opacity: 0, y: 44, filter: "blur(6px)" });

      const tween = gsap.to(items, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: root,
          start,
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: ref, dependencies: [start, stagger] },
  );

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
