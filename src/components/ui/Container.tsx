/**
 * @file components/ui/Container.tsx
 * @description Constrains content to a max-width with consistent horizontal padding.
 * WHY: A Container component prevents every section from reimplementing
 * max-width + padding logic, ensuring visual consistency across the page.
 */

import React from "react";
import { cn } from "@/lib/utils";
import type { ContainerProps } from "@/types";

const SIZE_MAP: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  size = "xl",
  className,
  children,
}: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", SIZE_MAP[size], className)}>
      {children}
    </div>
  );
}
