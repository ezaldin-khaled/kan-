"use client";

import { useEffect, useRef } from "react";

const CELL = 52;
const BASE_LINE = 0.038;
const BASE_DOT = 0.12;
const INFLUENCE = 240;
const PARALLAX = 22;
const CURSOR_GLOW_R = 200;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function distPointToSegment(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;
  if (lenSq < 1e-10) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const nx = x1 + t * dx;
  const ny = y1 + t * dy;
  return Math.hypot(px - nx, py - ny);
}

function smoothFalloff(dist: number, radius: number): number {
  if (dist >= radius) return 0;
  const t = 1 - dist / radius;
  return t * t * (3 - 2 * t);
}

export function InteractiveGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, inside: false });

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const maybeCtx = el.getContext("2d");
    if (!maybeCtx) return;
    const gfx: CanvasRenderingContext2D = maybeCtx;

    const reduced = prefersReducedMotion();
    let raf = 0;
    let w = 0;
    let h = 0;
    const t0 = performance.now();

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, inside: true };
    };
    const onLeave = () => {
      mouseRef.current.inside = false;
    };
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          inside: true,
        };
      }
    };

    function resize() {
      if (!el) return;
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      el.width = Math.floor(w * dpr);
      el.height = Math.floor(h * dpr);
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      gfx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawVerticalLine(
      x: number,
      mx: number,
      my: number,
      alpha: number,
      lineWidth: number,
    ) {
      const d = distPointToSegment(mx, my, x, 0, x, h);
      const boost = reduced ? 0 : smoothFalloff(d, INFLUENCE) * 0.34;
      const a = Math.min(0.55, alpha + boost);
      gfx.strokeStyle = `rgba(146, 164, 255, ${a})`;
      gfx.lineWidth = lineWidth + boost * 1.2;
      gfx.beginPath();
      gfx.moveTo(x, 0);
      gfx.lineTo(x, h);
      gfx.stroke();
    }

    function drawHorizontalLine(
      y: number,
      mx: number,
      my: number,
      alpha: number,
      lineWidth: number,
    ) {
      const d = distPointToSegment(mx, my, 0, y, w, y);
      const boost = reduced ? 0 : smoothFalloff(d, INFLUENCE) * 0.34;
      const a = Math.min(0.55, alpha + boost);
      gfx.strokeStyle = `rgba(184, 144, 244, ${a * 0.92})`;
      gfx.lineWidth = lineWidth + boost * 1.1;
      gfx.beginPath();
      gfx.moveTo(0, y);
      gfx.lineTo(w, y);
      gfx.stroke();
    }

    function step(now: number) {
      const t = (now - t0) * 0.001;
      const { x: mx, y: my, inside } = mouseRef.current;
      const mxi = inside ? mx : w * 0.5;
      const myi = inside ? my : h * 0.5;

      const parallaxX = reduced
        ? 0
        : (mxi / Math.max(w, 1) - 0.5) * PARALLAX * -1;
      const parallaxY = reduced
        ? 0
        : (myi / Math.max(h, 1) - 0.5) * PARALLAX * -0.75;
      const driftX = reduced ? 0 : Math.sin(t * 0.15) * 3;
      const driftY = reduced ? 0 : Math.cos(t * 0.12) * 2.5;
      const ox = (parallaxX + driftX) % CELL;
      const oy = (parallaxY + driftY) % CELL;

      gfx.clearRect(0, 0, w, h);

      if (inside && !reduced) {
        const g = gfx.createRadialGradient(
          mxi,
          myi,
          0,
          mxi,
          myi,
          CURSOR_GLOW_R,
        );
        g.addColorStop(0, "rgba(146, 164, 255, 0.07)");
        g.addColorStop(0.35, "rgba(184, 144, 244, 0.035)");
        g.addColorStop(1, "rgba(15, 15, 15, 0)");
        gfx.fillStyle = g;
        gfx.fillRect(0, 0, w, h);
      }

      const xStart = Math.floor(-ox / CELL) * CELL + ox;
      const yStart = Math.floor(-oy / CELL) * CELL + oy;

      for (let x = xStart; x <= w + CELL; x += CELL) {
        drawVerticalLine(x, mxi, myi, BASE_LINE, 0.55);
      }
      for (let y = yStart; y <= h + CELL; y += CELL) {
        drawHorizontalLine(y, mxi, myi, BASE_LINE, 0.5);
      }

      for (let x = xStart; x <= w + CELL; x += CELL) {
        for (let y = yStart; y <= h + CELL; y += CELL) {
          const d = Math.hypot(mxi - x, myi - y);
          const boost = reduced ? 0 : smoothFalloff(d, INFLUENCE * 0.85);
          const dotA = BASE_DOT + boost * 0.55;
          const r = 1.1 + boost * 2.4;
          if (dotA < 0.02) continue;
          gfx.fillStyle = `rgba(196, 164, 255, ${dotA})`;
          gfx.beginPath();
          gfx.arc(x, y, r, 0, Math.PI * 2);
          gfx.fill();
        }
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });

    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchstart", onTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden
    />
  );
}
