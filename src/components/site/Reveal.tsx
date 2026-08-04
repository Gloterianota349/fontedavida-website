import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "left" | "right" | "up";

const HIDDEN: Record<Direction, string> = {
  left: "opacity-0 -translate-x-12",
  right: "opacity-0 translate-x-12",
  up: "opacity-0 translate-y-10",
};

/**
 * Reveals its children with a directional slide when it enters the viewport,
 * and hides again when it leaves — so the effect plays scrolling both ways.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : HIDDEN[direction]
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
