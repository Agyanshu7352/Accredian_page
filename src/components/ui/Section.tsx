/**
 * @file components/ui/Section.tsx
 * @description Full-width section wrapper with background variants.
 * WHY: Standardizes vertical rhythm (padding), background styles,
 * and section IDs across the entire landing page.
 */

import React from "react";
import { cn } from "@/lib/utils";
import type { SectionProps, SectionBackground } from "@/types";

const BG_MAP: Record<SectionBackground, string> = {
  white: "bg-white",
  light: "bg-slate-50",
  dark: "bg-slate-900 text-white",
  gradient: "bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white",
  blue: "bg-blue-950 text-white",
};

export function Section({
  id,
  background = "white",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-12 md:py-16 lg:py-20 overflow-hidden",
        BG_MAP[background],
        className
      )}
    >
      {children}
    </section>
  );
}
