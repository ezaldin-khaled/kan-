"use client";

import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import { reducedMotion, registerGsapPlugins } from "@/lib/motion";
import { useSiteMenu } from "./site-menu-context";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/connect", label: "Connect" },
] as const;

export function SiteMenuOverlay() {
  const { open, closeMenu } = useSiteMenu();
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const menuAnimated = useRef(false);

  useEffect(() => {
    if (open) lastFocusRef.current = document.activeElement as HTMLElement;
    else if (lastFocusRef.current?.focus) lastFocusRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    if (!backdrop || !panel) return;

    if (reducedMotion()) {
      gsap.set(backdrop, {
        opacity: 0,
        visibility: "hidden",
        pointerEvents: "none",
      });
      gsap.set(panel, { xPercent: 100 });
      return;
    }

    gsap.set(backdrop, {
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none",
    });
    gsap.set(panel, { xPercent: 100 });
  }, []);

  useLayoutEffect(() => {
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    if (!backdrop || !panel) return;

    if (!menuAnimated.current) {
      menuAnimated.current = true;
      return;
    }

    const linkEls = panel.querySelectorAll<HTMLElement>("[data-nav-link]");

    if (reducedMotion()) {
      gsap.set(backdrop, {
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        pointerEvents: open ? "auto" : "none",
      });
      gsap.set(panel, { xPercent: open ? 0 : 100 });
      gsap.set(linkEls, { opacity: open ? 1 : 0, y: 0 });
      if (open) requestAnimationFrame(() => firstLinkRef.current?.focus());
      return;
    }

    gsap.killTweensOf([backdrop, panel, linkEls]);

    if (open) {
      gsap.set(backdrop, { visibility: "visible", pointerEvents: "auto" });
      gsap.fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" },
      );
      gsap.fromTo(
        panel,
        { xPercent: 100 },
        {
          xPercent: 0,
          duration: 0.55,
          ease: "power3.out",
        },
      );
      gsap.fromTo(
        linkEls,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          delay: 0.12,
          ease: "power3.out",
          onComplete: () => firstLinkRef.current?.focus(),
        },
      );
    } else {
      gsap.to(linkEls, {
        opacity: 0,
        y: 16,
        duration: 0.22,
        stagger: { each: 0.03, from: "end" },
      });
      gsap.to(panel, {
        xPercent: 100,
        duration: 0.45,
        ease: "power3.in",
      });
      gsap.to(backdrop, {
        opacity: 0,
        duration: 0.35,
        delay: 0.05,
        onComplete: () => {
          gsap.set(backdrop, {
            visibility: "hidden",
            pointerEvents: "none",
          });
        },
      });
    }
  }, [open]);

  const onBackdropClick = () => closeMenu();

  const onKeyDownTrap = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !rootRef.current) return;
    const focusable = rootRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[90]"
      aria-hidden={!open}
    >
      <div
        ref={backdropRef}
        role="presentation"
        className="pointer-events-auto absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onBackdropClick}
      />
      <div
        ref={panelRef}
        id="site-menu-panel"
        className="pointer-events-auto absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col border-l border-white/10 bg-kan-black/95 px-8 pb-12 pt-24 shadow-[-24px_0_80px_-20px_rgba(146,164,255,0.15)] md:w-[min(100%,26rem)]"
        style={{ transform: "translateX(100%)" }}
        onKeyDown={onKeyDownTrap}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <p className="mb-10 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-kan-light/40">
          Navigate
        </p>
        <nav className="flex flex-col gap-2" aria-label="Site">
          {NAV_LINKS.map((item, i) => (
            <Link
              key={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              data-nav-link
              className="group border-b border-white/5 py-4 text-lg font-medium tracking-wide text-kan-light/90 transition-colors hover:text-white"
              onClick={closeMenu}
            >
              <span className="inline-flex items-center gap-3">
                <span
                  className="h-px w-6 bg-gradient-to-r from-kan-blue to-kan-purple opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <p className="mt-auto pt-12 text-xs leading-relaxed text-kan-light/35">
          KAN Agency — digital craft for modern brands.
        </p>
      </div>
    </div>
  );
}
