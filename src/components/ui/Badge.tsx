/**
 * @file components/ui/Badge.tsx
 * @description Small label component for tags, status indicators, and callouts.
 * WHY: Used in the hero section and feature cards to highlight key info.
 */

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "success" | "blue";
  className?: string;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-slate-100 text-slate-700",
  success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  blue: "bg-blue-50 text-blue-700 border border-blue-200",
};

export function Badge({ variant = "blue", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
