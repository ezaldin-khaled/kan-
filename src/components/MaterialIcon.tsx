export function MaterialIcon({
  name,
  className = "",
  "aria-hidden": ariaHidden,
}: {
  name: string;
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
}
