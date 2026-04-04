"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

const items = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/connect", label: "Connect" },
] as const;

type GlassBottomNavProps = ComponentPropsWithoutRef<"nav"> & {
  /** On the home page, highlight Services to match the hero mockup. */
  homeActive?: boolean;
};

export const GlassBottomNav = forwardRef<HTMLElement, GlassBottomNavProps>(
  function GlassBottomNav(
    { className = "", homeActive = false, ...rest },
    ref,
  ) {
    const pathname = usePathname();

    return (
      <nav
        ref={ref}
        className={`pointer-events-auto fixed bottom-6 left-1/2 z-30 w-[min(92vw,28rem)] -translate-x-1/2 ${className}`}
        aria-label="Primary"
        {...rest}
      >
        <div className="nav-glass flex items-stretch justify-center gap-1 rounded-full border border-white/10 px-2 py-2 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]">
          {items.map((item) => {
            const active =
              pathname === item.href || (homeActive && item.href === "/services");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-1 items-center justify-center rounded-full px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] transition-colors md:text-[0.7rem] ${
                  active
                    ? "text-kan-light"
                    : "text-kan-light/45 hover:text-kan-light/75"
                }`}
              >
                {active && (
                  <span
                    className="absolute left-3 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-sm border border-kan-blue/80 bg-kan-blue/25 md:block"
                    aria-hidden
                  />
                )}
                <span className={active ? "md:pl-4" : ""}>{item.label}</span>
                {active && (
                  <span
                    className="absolute bottom-1 left-1/2 h-px w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-kan-blue to-transparent shadow-[0_0_12px_rgba(146,164,255,0.9)]"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    );
  },
);
