"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import type { Capability } from "@/content/services";
import { reducedMotion, registerGsapPlugins } from "@/lib/motion";

export function CapabilityCard({
  capability,
  ...rest
}: { capability: Capability } & React.HTMLAttributes<HTMLDivElement>) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();
      const card = cardRef.current;
      const img = imgRef.current;
      if (!card || !img || reducedMotion()) return;

      const tween = gsap.to(img, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.45,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: cardRef },
  );

  return (
    <div
      ref={cardRef}
      className="glass-panel flex flex-col overflow-hidden rounded-2xl border border-white/10 md:flex-row"
      {...rest}
    >
      <div
        ref={imgRef}
        className="relative aspect-square w-full shrink-0 md:aspect-auto md:h-auto md:w-[42%] md:min-h-[220px]"
      >
        <Image
          src={capability.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 px-6 py-6 md:py-8">
        <h3 className="font-serif text-xl font-semibold text-kan-light">
          {capability.title}
        </h3>
        <p className="text-sm leading-relaxed text-kan-light/50">
          {capability.description}
        </p>
      </div>
    </div>
  );
}
