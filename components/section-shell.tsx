import type { ElementType, ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  /** e.g. `03 — Capabilities` */
  label?: string;
  className?: string;
  id?: string;
  /** Use `div` when wrapping a full page layout (multiple sections inside). */
  as?: "section" | "div";
};

export function SectionShell({
  children,
  label,
  className = "",
  id,
  as,
}: SectionShellProps) {
  const Tag = (as ?? "section") as ElementType;
  return (
    <Tag id={id} className={`landing-rail ${className}`.trim()}>
      {label ? (
        <p className="landing-section-label text-kan-light/40">{label}</p>
      ) : null}
      {children}
    </Tag>
  );
}
