import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type RevealProps = {
  children: React.ReactNode;
  /** Delay before the reveal transition starts, in milliseconds. */
  delay?: number;
  className?: string;
  /** Render as a different element (e.g. "li", "span"). Defaults to "div". */
  as?: React.ElementType;
};

/**
 * Fades + lifts its children into view the first time they enter the viewport.
 * Uses an IntersectionObserver to trigger a one-shot CSS transition. When the
 * user prefers reduced motion the content is shown immediately with no movement.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <Tag
      ref={ref}
      className={cn(
        reduced
          ? ""
          : cn(
              "transition-all duration-700 ease-out will-change-[transform,opacity] motion-reduce:transition-none",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            ),
        className
      )}
      style={reduced ? undefined : { transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
