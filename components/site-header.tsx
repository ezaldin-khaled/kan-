"use client";

import Link from "next/link";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { useSiteMenu } from "./site-menu-context";

type SiteHeaderProps = ComponentPropsWithoutRef<"header">;

export const SiteHeader = forwardRef<HTMLElement, SiteHeaderProps>(
  function SiteHeader({ className = "", ...rest }, ref) {
    const { open, toggleMenu } = useSiteMenu();

    return (
      <header
        ref={ref}
        className={`pointer-events-auto relative z-20 flex items-center justify-between px-6 pt-8 md:px-10 md:pt-10 ${className}`}
        {...rest}
      >
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.2em] text-kan-light transition-opacity hover:opacity-90 md:text-base"
        >
          KAN Agency
        </Link>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-kan-light/80 shadow-[0_0_24px_-4px_rgba(146,164,255,0.35)] transition hover:border-kan-blue/40 hover:text-kan-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kan-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-kan-black"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu-panel"
          onClick={toggleMenu}
        >
          <WireCubeIcon className="h-5 w-5" />
        </button>
      </header>
    );
  },
);

function WireCubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path d="M12 3 21 8v8l-9 5-9-5V8l9-5Z" />
      <path d="M12 12 21 8M12 12v10M12 12 3 8" />
    </svg>
  );
}
