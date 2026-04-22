/**
 * @file components/ui/Card.tsx
 * @description Reusable card with optional hover-lift animation.
 * WHY: Cards are used throughout the landing page (features, domains,
 * testimonials). A shared component ensures consistent border-radius,
 * shadows, and hover behavior everywhere.
 */

import React from "react";
import { cn } from "@/lib/utils";
import type { CardProps } from "@/types";

const PADDING_MAP: Record<NonNullable<CardProps["padding"]>, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  className,
  hoverable = false,
  padding = "md",
  children,
}: CardProps) {
  return (
    <div
      className={cn(
        // Base card styles
        "rounded-2xl bg-white border border-slate-100",
        "shadow-sm",
        PADDING_MAP[padding],
        // Optional hover animation
        hoverable
          ? "transition-all duration-300 ease-out hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-100"
          : "",
        className
      )}
    >
      {children}
    </div>
  );
}
