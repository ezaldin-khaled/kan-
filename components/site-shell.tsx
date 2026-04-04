"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomCursor } from "./custom-cursor";

gsap.registerPlugin(useGSAP);
import { InteractiveGridBackground } from "./interactive-grid-background";
import { SiteChrome } from "./site-chrome";
import { SiteMenuOverlay } from "./site-menu";
import { SiteMenuProvider } from "./site-menu-context";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <SiteMenuProvider>
      <InteractiveGridBackground />
      <CustomCursor />
      <SiteMenuOverlay />
      <div className="relative isolate min-h-[100dvh] pb-36 md:pb-40">
        {children}
      </div>
      <SiteChrome />
    </SiteMenuProvider>
  );
}
