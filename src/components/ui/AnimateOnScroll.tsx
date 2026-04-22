/**
 * @file components/ui/AnimateOnScroll.tsx
 * @description Wrapper that fades/slides children in when they enter the viewport.
 * WHY: Provides a declarative, reusable way to add scroll-reveal animations
 * without installing a heavy animation library.
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Animation variant */
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
  /** Stagger delay in ms (for lists) */
  delay?: number;
}

const ANIMATION_BASE = "transition-all duration-700 ease-out";

const HIDDEN_STATE: Record<NonNullable<AnimateOnScrollProps["animation"]>, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-in": "opacity-0",
  "fade-left": "opacity-0 -translate-x-8",
  "fade-right": "opacity-0 translate-x-8",
};

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        ANIMATION_BASE,
        isInView ? "opacity-100 translate-x-0 translate-y-0" : HIDDEN_STATE[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
