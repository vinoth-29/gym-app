/**
 * Premium section identifier for page heroes
 * Replaces generic pill badges with custom, high-end section markers
 * Supports multiple design patterns: minimal accent line, section numbering, glassmorphism
 */

interface SectionIdentifierProps {
  /** The section identifier text (e.g., "Our Story", "Services") */
  label: string;
  /** Optional section number for ordered pages (1-5) */
  sectionNumber?: number;
  /** Design variant: "minimal" | "accent-line" | "glassmorphic" */
  variant?: "minimal" | "accent-line" | "glassmorphic";
}

export function SectionIdentifier({
  label,
  sectionNumber,
  variant = "accent-line",
}: SectionIdentifierProps) {
  if (variant === "minimal") {
    // Minimal: Clean, simple accent dot + text
    return (
      <div className="flex items-center gap-3">
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
          {label}
        </span>
      </div>
    );
  }

  if (variant === "accent-line") {
    // Accent line: Left border with elegant typography
    return (
      <div className="flex items-center gap-4">
        <div className="h-8 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/40" />
        <div className="flex flex-col gap-1">
          {sectionNumber && (
            <span className="text-xs font-bold text-primary/60 tracking-widest">
              {String(sectionNumber).padStart(2, "0")}
            </span>
          )}
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
            {label}
          </span>
        </div>
      </div>
    );
  }

  if (variant === "glassmorphic") {
    // Glassmorphic: Frosted glass effect with subtle border
    return (
      <div
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-md border border-primary/20"
        style={{
          background: "rgba(220, 38, 38, 0.05)",
        }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
          {label}
        </span>
      </div>
    );
  }

  // Default to accent-line if variant not specified
  return (
    <div className="flex items-center gap-4">
      <div className="h-8 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/40" />
      <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
        {label}
      </span>
    </div>
  );
}
