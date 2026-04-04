"use client";

import { usePathname } from "next/navigation";
import { GlassBottomNav } from "./glass-bottom-nav";
import { KanMarkTile } from "./kan-mark-tile";

export function SiteChrome() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <>
      <GlassBottomNav homeActive={false} />
      <KanMarkTile />
    </>
  );
}
