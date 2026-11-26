export function SectionEyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-shore-teal ${className}`}
    >
      <span aria-hidden className="inline-block h-px w-7 bg-current opacity-70" />
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[clamp(1.85rem,3.4vw,2.65rem)] leading-[1.12] tracking-[-0.02em] text-shore-heading ${className}`}
    >
      {children}
    </h2>
  );
}
