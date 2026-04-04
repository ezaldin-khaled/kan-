"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "@/content/projects";
import { reducedMotion } from "@/lib/motion";

export function ProjectCard({ project }: { project: Project }) {
  const rootRef = useRef<HTMLAnchorElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const media = mediaRef.current;
      if (!root || !media || reducedMotion()) return;

      const onEnter = () => {
        gsap.to(root, {
          scale: 1.015,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(media, {
          scale: 1.06,
          duration: 0.65,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(root, { scale: 1, duration: 0.55, ease: "power3.out" });
        gsap.to(media, { scale: 1, duration: 0.55, ease: "power3.out" });
      };

      root.addEventListener("mouseenter", onEnter);
      root.addEventListener("mouseleave", onLeave);
      return () => {
        root.removeEventListener("mouseenter", onEnter);
        root.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: rootRef },
  );

  return (
    <Link
      ref={rootRef}
      href={`/case-studies/${project.slug}`}
      className="glass-panel group block overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.9)] transition-shadow hover:border-kan-blue/25 hover:shadow-[0_24px_70px_-24px_rgba(146,164,255,0.18)]"
    >
      <div
        ref={mediaRef}
        className="relative aspect-[16/10] overflow-hidden bg-kan-black/80"
      >
        <Image
          src={project.coverImage}
          alt=""
          fill
          className="object-cover transition-[filter] duration-500 group-hover:brightness-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kan-black/80 via-transparent to-transparent opacity-90"
          aria-hidden
        />
        <span className="absolute bottom-4 left-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-kan-light/50">
          {project.year}
        </span>
      </div>
      <div className="space-y-2 px-5 py-5">
        <h2 className="font-serif text-xl font-semibold tracking-wide text-kan-light md:text-2xl">
          {project.title}
        </h2>
        <p className="text-sm leading-relaxed text-kan-light/50">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-wider text-kan-light/45"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
