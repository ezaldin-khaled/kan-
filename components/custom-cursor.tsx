"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/** Touch / pen primary devices: keep system cursor. Fine pointer: always use KAN cursor. */
function skipCustomCursor(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(pointer: coarse)").matches;
}

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skipCustomCursor()) return;

    let onMove: ((e: MouseEvent) => void) | undefined;

    const id = requestAnimationFrame(() => {
      const root = rootRef.current;
      if (!root) return;
      root.removeAttribute("hidden");
      document.documentElement.classList.add("kan-custom-cursor");

      const dot = root.querySelector<HTMLElement>("[data-cursor-dot]");
      const sparks = root.querySelectorAll<HTMLElement>("[data-cursor-spark]");
      if (!dot) return;

      gsap.set([dot, ...sparks], { xPercent: -50, yPercent: -50 });

      const dotX = gsap.quickTo(dot, "x", { duration: 0.25, ease: "power3.out" });
      const dotY = gsap.quickTo(dot, "y", { duration: 0.25, ease: "power3.out" });
      const sparkAnim = Array.from(sparks).map((el, i) => ({
        x: gsap.quickTo(el, "x", { duration: 0.35 + i * 0.05, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 0.35 + i * 0.05, ease: "power3.out" }),
      }));

      onMove = (e: MouseEvent) => {
        dotX(e.clientX);
        dotY(e.clientY);
        sparkAnim.forEach((s) => {
          s.x(e.clientX);
          s.y(e.clientY);
        });
      };

      window.addEventListener("mousemove", onMove);
    });

    return () => {
      cancelAnimationFrame(id);
      if (onMove) window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("kan-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      aria-hidden
      hidden
    >
      <div
        data-cursor-dot
        className="pointer-events-none fixed left-0 top-0 h-3 w-3 rounded-full border border-white/50 bg-black will-change-transform"
      />
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          data-cursor-spark
          className="pointer-events-none fixed left-0 top-0 h-1 w-1 rounded-full bg-white/40 blur-[0.5px] will-change-transform"
          style={{ opacity: 0.5 - i * 0.05 }}
        />
      ))}
    </div>
  );
}
