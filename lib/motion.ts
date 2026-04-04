import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

let pluginsRegistered = false;

export function registerGsapPlugins(): void {
  if (pluginsRegistered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

export function reducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function refreshScrollTrigger(): void {
  if (typeof window === "undefined") return;
  ScrollTrigger.refresh();
}
