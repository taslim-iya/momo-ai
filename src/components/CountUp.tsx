import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type CountUpProps = {
  /** The final value to count up to. */
  to: number;
  /** Animation duration in milliseconds. */
  duration?: number;
  /** Optional decimal places to render. */
  decimals?: number;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts up from 0 to `to` with an easeOutCubic curve, firing once the element
 * scrolls into view. Respects reduced-motion by rendering the final value.
 */
export function CountUp({ to, duration = 1600, decimals = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : 0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (reduced) {
      setValue(to);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(to * easeOutCubic(progress));
        if (progress < 1) requestAnimationFrame(tick);
        else setValue(to);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {value.toFixed(decimals)}
    </span>
  );
}
