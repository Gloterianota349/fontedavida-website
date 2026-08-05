import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down" | "none";

const HIDDEN: Record<Direction, string> = {
  left: "opacity-0 -translate-x-16 scale-[0.98] blur-[2px]",
  right: "opacity-0 translate-x-16 scale-[0.98] blur-[2px]",
  up: "opacity-0 translate-y-12 scale-[0.98] blur-[2px]",
  down: "opacity-0 -translate-y-12 scale-[0.98] blur-[2px]",
  none: "opacity-0 scale-[0.97] blur-[2px]",
};

/**
 * Reveals its children with a directional slide when it enters the viewport,
 * and hides again when it leaves — so the effect plays scrolling both ways.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 900,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "li" | "article";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.08, rootMargin: "-4% 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{
        transitionDelay: `${visible ? delay : 0}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionProperty: "opacity, transform, filter",
      }}
      className={`will-change-transform ${
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0" : HIDDEN[direction]
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
