import { useState, useEffect, useRef, type ReactNode, type ElementType } from "react";

/**
 * Observes an element and reports whether it's in the viewport.
 * Unlike a "reveal once" observer, this toggles back to `false` when the
 * element leaves the viewport so the fade/pop-in animation can replay
 * every time the user scrolls back up or down past it.
 */
export function useScrollReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/**
 * Wraps children in an element that fades in, scales up from 0.9 → 1, and
 * lifts up slightly whenever it scrolls into view — and resets whenever it
 * scrolls back out, so the animation replays every time. Pass `delay` (ms)
 * to stagger a group of siblings for a sequential reveal. No horizontal or
 * directional movement is used, only opacity + scale + a small upward lift.
 */
export function ScrollPop({
  children,
  delay = 0,
  threshold = 0.15,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  as?: ElementType;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal(threshold);
  return (
    <Tag
      ref={ref}
      className={`scroll-pop ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
