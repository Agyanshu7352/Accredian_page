/**
 * @file lib/utils.ts
 * @description Shared utility functions.
 * WHY: A dedicated utils module prevents duplicated helper logic and
 * provides a single place to add, test, and document small utilities.
 */

/**
 * Conditionally joins class names, filtering out falsy values.
 * Lightweight alternative to `clsx` / `classnames` packages.
 *
 * @example cn("base", isActive && "active", className)
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a number with locale-appropriate separators.
 * @example formatNumber(50000) → "50,000"
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num);
}

/**
 * Smooth-scrolls to an element by its ID.
 * Used for anchor-link navigation in the Navbar.
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Debounce utility for scroll/resize event handlers.
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
