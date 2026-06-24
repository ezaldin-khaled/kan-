export function Footer() {
  return (
    <footer className="w-full bg-primary py-section-gap-mobile text-on-primary md:py-stack-lg">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-4 md:px-margin-desktop">
        <div className="space-y-stack-md">
          <div className="font-headline-md text-headline-md font-bold">
            KAN AGENCY
          </div>
          <p className="font-body-md text-on-primary/60">
            Achieving powerful moments with digital ideas. Clinical precision
            meets creative vibrancy.
          </p>
        </div>

        <div className="flex flex-col gap-stack-sm">
          <h4 className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-on-primary/40">
            Navigation
          </h4>
          <a
            href="#work"
            className="font-body-md text-on-primary/60 transition-all hover:text-on-primary"
          >
            Portfolio
          </a>
          <a
            href="#expertise"
            className="font-body-md text-on-primary/60 transition-all hover:text-on-primary"
          >
            Services
          </a>
          <a
            href="#awards"
            className="font-body-md text-on-primary/60 transition-all hover:text-on-primary"
          >
            Achievements
          </a>
        </div>

        <div className="flex flex-col gap-stack-sm">
          <h4 className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-on-primary/40">
            Connect
          </h4>
          <a
            href="#"
            className="font-body-md text-on-primary/60 transition-all hover:text-on-primary"
          >
            Twitter
          </a>
          <a
            href="#"
            className="font-body-md text-on-primary/60 transition-all hover:text-on-primary"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="font-body-md text-on-primary/60 transition-all hover:text-on-primary"
          >
            Instagram
          </a>
        </div>

        <div className="flex flex-col gap-stack-sm">
          <h4 className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-on-primary/40">
            Contact
          </h4>
          <a
            href="mailto:hello@kanagency.design"
            className="mb-4 font-body-md text-on-primary underline"
          >
            hello@kanagency.design
          </a>
          <div className="border-t border-on-primary/10 pt-8">
            <p className="font-label-caps text-[10px] text-on-primary/40">
              © 2024 KAN AGENCY. All rights reserved.
            </p>
            <div className="mt-2 flex gap-4">
              <a
                href="#"
                className="font-label-caps text-[10px] text-on-primary/40 underline hover:text-on-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-label-caps text-[10px] text-on-primary/40 underline hover:text-on-primary"
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
