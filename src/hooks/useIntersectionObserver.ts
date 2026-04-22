/**
 * @file hooks/useIntersectionObserver.ts
 * @description Detects when an element enters the viewport.
 * WHY: Powers scroll-triggered animations (fade-in, slide-up)
 * throughout the landing page without a third-party animation library.
 */

"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  /** Percentage of element visible before triggering (0–1) */
  threshold?: number;
  /** Root margin for early/late triggering */
  rootMargin?: string;
  /** If true, only triggers once (standard for reveal animations) */
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
