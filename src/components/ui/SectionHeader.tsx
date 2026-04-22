/**
 * @file components/ui/SectionHeader.tsx
 * @description Reusable section title + subtitle block.
 * WHY: Every section has a similar heading pattern (label → title → subtitle).
 * Extracting this prevents repetition and keeps spacing/typography consistent.
 */

import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  /** Small label above the title */
  label?: string;
  /** Main heading */
  title: string;
  /** Optional highlighted portion of the title */
  titleHighlight?: string;
  /** Subtitle paragraph */
  subtitle?: string;
  /** Alignment */
  align?: "left" | "center";
  /** Light theme (for dark backgrounds) */
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <Badge variant={light ? "default" : "blue"}>{label}</Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span className={cn(
            "bg-clip-text text-transparent",
            light
              ? "bg-gradient-to-r from-blue-300 to-cyan-300"
              : "bg-gradient-to-r from-blue-600 to-indigo-600"
          )}>
            {titleHighlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-3xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-blue-100" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
