/**
 * @file components/ui/Button.tsx
 * @description Reusable button component with multiple variants.
 * WHY: A unified Button component enforces consistent styling, sizes,
 * accessibility (focus rings, disabled states), and behavior across the app.
 * Supports rendering as <button> or <a> via the `href` prop.
 */

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonVariant, ButtonSize } from "@/types";

/** Variant → Tailwind class mapping */
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-700 hover:to-indigo-700",
  secondary:
    "bg-slate-800 text-white hover:bg-slate-700 shadow-lg shadow-slate-800/25",
  outline:
    "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  ghost:
    "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  white:
    "bg-white text-blue-700 hover:bg-blue-50 shadow-lg shadow-white/25",
};

/** Size → Tailwind class mapping */
const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonComponentProps) {
  const baseClasses = cn(
    // Base styles
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl",
    "transition-all duration-300 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    "active:scale-[0.98]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
    // Variant & size
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  // Render as Next.js Link if `href` is provided
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
