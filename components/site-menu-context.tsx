"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SiteMenuContextValue = {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
};

const SiteMenuContext = createContext<SiteMenuContextValue | null>(null);

export function SiteMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((o) => !o), []);

  const value = useMemo(
    () => ({ open, openMenu, closeMenu, toggleMenu }),
    [open, openMenu, closeMenu, toggleMenu],
  );

  return (
    <SiteMenuContext.Provider value={value}>{children}</SiteMenuContext.Provider>
  );
}

export function useSiteMenu(): SiteMenuContextValue {
  const ctx = useContext(SiteMenuContext);
  if (!ctx) {
    throw new Error("useSiteMenu must be used within SiteMenuProvider");
  }
  return ctx;
}
