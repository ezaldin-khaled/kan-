"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

type KanMarkTileProps = ComponentPropsWithoutRef<"div">;

export const KanMarkTile = forwardRef<HTMLDivElement, KanMarkTileProps>(
  function KanMarkTile({ className = "", ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={`pointer-events-none fixed bottom-8 right-6 z-20 md:bottom-10 md:right-10 ${className}`}
        {...rest}
      >
        <div className="flex w-[4.5rem] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/50 px-3 py-3 backdrop-blur-md">
          <div
            className="grid grid-cols-3 gap-0.5 opacity-90"
            aria-hidden
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-[1px] ${
                  [1, 3, 4, 5, 7].includes(i)
                    ? "bg-gradient-to-br from-kan-purple to-kan-blue"
                    : "bg-white/15"
                }`}
              />
            ))}
          </div>
          <span className="text-[0.65rem] font-semibold tracking-[0.35em] text-kan-light/90">
            KAN
          </span>
        </div>
      </div>
    );
  },
);
