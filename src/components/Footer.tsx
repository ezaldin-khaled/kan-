export function Footer() {
  const navLinks = [
    { href: "#work", label: "Portfolio" },
    { href: "#expertise", label: "Expertise" },
    { href: "#about", label: "About" },
    { href: "#process", label: "Process" },
  ] as const;

  const socialLinks = [
    { href: "#", label: "Twitter", aria: "KAN Agency on Twitter" },
    { href: "#", label: "LinkedIn", aria: "KAN Agency on LinkedIn" },
    { href: "#", label: "Instagram", aria: "KAN Agency on Instagram" },
  ] as const;

  return (
    <footer className="w-full border-t border-on-primary/10 bg-primary py-section-gap-mobile text-on-primary md:py-20">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-margin-mobile md:grid-cols-4 md:gap-gutter md:px-margin-desktop">
        <div className="space-y-stack-md md:col-span-1">
          <img
            src="/brand/logo-light.png"
            alt="KAN Agency"
            className="h-10 w-auto"
          />
          <p className="max-w-xs font-body-md leading-relaxed text-on-primary/60">
            Your vision, our design — together, we can. Architects of brand
            success in the digital age.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="mb-2 font-label-caps text-label-caps tracking-widest text-on-primary/40">
            Navigation
          </h4>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body-md text-on-primary/60 transition-all duration-300 hover:translate-x-1 hover:text-on-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="mb-2 font-label-caps text-label-caps tracking-widest text-on-primary/40">
            Connect
          </h4>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.aria}
              className="font-body-md text-on-primary/60 transition-all duration-300 hover:translate-x-1 hover:text-on-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="mb-2 font-label-caps text-label-caps tracking-widest text-on-primary/40">
            Contact
          </h4>
          <a
            href="mailto:hello@kanagency.design"
            className="font-body-md text-on-primary underline decoration-on-primary/30 underline-offset-4 transition-colors hover:decoration-on-primary"
          >
            hello@kanagency.design
          </a>
          <div className="mt-6 border-t border-on-primary/10 pt-6">
            <p className="font-label-caps text-[10px] text-on-primary/40">
              © 2026 KAN AGENCY. All rights reserved.
            </p>
            <div className="mt-3 flex gap-4">
              <a
                href="#"
                className="font-label-caps text-[10px] text-on-primary/40 underline decoration-on-primary/20 underline-offset-2 transition-colors hover:text-on-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-label-caps text-[10px] text-on-primary/40 underline decoration-on-primary/20 underline-offset-2 transition-colors hover:text-on-primary"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
