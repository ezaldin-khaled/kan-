import { useEffect, useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

const links = [
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full border-b border-outline-variant/30 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-surface/95 shadow-lg"
            : "bg-surface/80"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
          <div className="font-headline-xl text-headline-xl font-black tracking-tighter text-primary">
            KAN AGENCY
          </div>

          <div className="hidden items-center gap-stack-lg md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-label-caps text-label-caps py-1 transition-colors ${
                  link.href === "#work"
                    ? "border-b-2 border-primary font-bold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="transform rounded-full bg-primary px-8 py-3 font-label-caps text-label-caps text-on-primary transition-all hover:bg-secondary active:scale-90"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            className="p-2 text-primary md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <MaterialIcon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-surface/95 px-margin-mobile backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="font-headline-md text-headline-md uppercase tracking-tight text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className="rounded-full bg-primary px-10 py-4 font-label-caps text-label-caps text-on-primary"
          >
            Let&apos;s Talk
          </a>
        </div>
      ) : null}
    </>
  );
}
