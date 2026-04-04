"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";
import { connectExpectations } from "@/content/connect";
import { PageIntro } from "@/components/motion/page-intro";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SectionShell } from "@/components/section-shell";
import { SiteHeader } from "@/components/site-header";
import { reducedMotion } from "@/lib/motion";

export function ConnectPage() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const form = formRef.current;
      if (!form || reducedMotion()) return;

      const fields = form.querySelectorAll<HTMLElement>("[data-field]");
      const cleanups: (() => void)[] = [];
      fields.forEach((wrap) => {
        const line = wrap.querySelector<HTMLElement>("[data-field-line]");
        const input = wrap.querySelector<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >("input, textarea, select");
        if (!line || !input) return;

        const onFocus = () => {
          gsap.to(line, {
            scaleX: 1,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
          });
        };
        const onBlur = () => {
          if (input.value) return;
          gsap.to(line, {
            scaleX: 0.35,
            opacity: 0.35,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        gsap.set(line, {
          scaleX: 0.35,
          opacity: 0.35,
          transformOrigin: "0 50%",
        });
        input.addEventListener("focus", onFocus);
        input.addEventListener("blur", onBlur);
        cleanups.push(() => {
          input.removeEventListener("focus", onFocus);
          input.removeEventListener("blur", onBlur);
        });
      });
      return () => cleanups.forEach((fn) => fn());
    },
    { scope: formRef, dependencies: [sent], revertOnUpdate: true },
  );

  useGSAP(
    () => {
      const el = successRef.current;
      if (!el || !sent || reducedMotion()) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 16, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.65,
          ease: "power3.out",
        },
      );
    },
    { scope: successRef, dependencies: [sent] },
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="relative z-10 min-h-[100dvh]">
      <div className="pointer-events-none fixed inset-0 z-[1] kan-grain opacity-70" aria-hidden />
      <SiteHeader />

      <SectionShell as="div" className="relative z-10 pb-12 pt-2">
        <PageIntro className="max-w-2xl pt-4">
          <p
            data-intro
            className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-kan-light/40"
          >
            Connect
          </p>
          <h1
            data-intro
            className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-wide text-kan-light md:text-5xl"
          >
            Tell us what you are building.
          </h1>
          <p
            data-intro
            className="mt-6 text-base leading-relaxed text-kan-light/50"
          >
            This form is a front-end placeholder — wire it to Formspree, Resend,
            or your API when you are ready. For now, submit shows a thank-you
            state only.
          </p>
        </PageIntro>

        <div className="mt-12 max-w-xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <h2 className="font-serif text-lg font-semibold text-kan-light">
            {connectExpectations.headline}
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-kan-light/50">
            {connectExpectations.bullets.map((line) => (
              <li key={line} className="pl-1 marker:text-kan-blue/50">
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-kan-light/40">
            {connectExpectations.timezoneLine}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-kan-light/35">
            {connectExpectations.calendarNote}
          </p>
        </div>

        <ScrollReveal className="mt-14 max-w-xl">
          {!sent ? (
            <form
              ref={formRef}
              data-reveal
              onSubmit={onSubmit}
              className="glass-panel space-y-8 rounded-2xl border border-white/10 p-6 md:p-8"
            >
              <div data-field className="relative">
                <label
                  htmlFor="name"
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-kan-light/40"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full border-0 border-b border-white/15 bg-transparent py-2 text-kan-light outline-none focus:border-kan-blue/40"
                />
                <span
                  data-field-line
                  className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-kan-blue to-kan-purple"
                  aria-hidden
                />
              </div>

              <div data-field className="relative">
                <label
                  htmlFor="email"
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-kan-light/40"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full border-0 border-b border-white/15 bg-transparent py-2 text-kan-light outline-none focus:border-kan-blue/40"
                />
                <span
                  data-field-line
                  className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-kan-blue to-kan-purple"
                  aria-hidden
                />
              </div>

              <div data-field className="relative">
                <label
                  htmlFor="budget"
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-kan-light/40"
                >
                  Budget range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="mt-2 w-full cursor-pointer border-0 border-b border-white/15 bg-transparent py-2 text-kan-light outline-none focus:border-kan-blue/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="under-25k">Under $25k</option>
                  <option value="25-50k">$25k – $50k</option>
                  <option value="50-100k">$50k – $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
                <span
                  data-field-line
                  className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-kan-blue to-kan-purple"
                  aria-hidden
                />
              </div>

              <div data-field className="relative">
                <label
                  htmlFor="message"
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-kan-light/40"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-2 w-full resize-none border-0 border-b border-white/15 bg-transparent py-2 text-kan-light outline-none focus:border-kan-blue/40"
                />
                <span
                  data-field-line
                  className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-kan-blue to-kan-purple"
                  aria-hidden
                />
              </div>

              <button
                type="submit"
                className="cta-glow w-full rounded-full border border-white/35 bg-white/[0.05] py-3.5 text-xs font-semibold uppercase tracking-[0.28em] text-kan-light transition-colors hover:border-kan-blue/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kan-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-kan-black"
              >
                Send message
              </button>
            </form>
          ) : (
            <div
              ref={successRef}
              data-reveal
              className="glass-panel rounded-2xl border border-kan-blue/20 p-8 text-center"
            >
              <p className="font-serif text-2xl font-semibold text-kan-light">
                Thank you
              </p>
              <p className="mt-3 text-sm leading-relaxed text-kan-light/50">
                Your note would be on its way — connect a backend to deliver it
                for real.
              </p>
              <button
                type="button"
                className="mt-8 text-sm font-medium tracking-widest text-kan-blue/90 transition hover:text-kan-blue"
                onClick={() => setSent(false)}
              >
                Send another
              </button>
            </div>
          )}
        </ScrollReveal>

        <p className="mt-10 max-w-xl text-center text-sm text-kan-light/40">
          Prefer email?{" "}
          <a
            href="mailto:hello@kan.agency"
            className="text-kan-light/70 underline-offset-4 transition hover:text-kan-light hover:underline"
          >
            hello@kan.agency
          </a>
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-medium tracking-widest text-kan-light/45 transition hover:text-kan-light"
          >
            ← Home
          </Link>
        </div>
      </SectionShell>
    </main>
  );
}
