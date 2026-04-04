"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { reducedMotion } from "@/lib/motion";

type PageIntroProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export function PageIntro({
  children,
  className = "",
  ...rest
}: PageIntroProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const els = root.querySelectorAll<HTMLElement>("[data-intro]");
      if (els.length === 0) return;

      if (reducedMotion()) {
        gsap.set(els, { opacity: 1, y: 0, filter: "none" });
        return;
      }

      gsap.set(els, { opacity: 0, y: 32, filter: "blur(8px)" });
      gsap.to(els, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
