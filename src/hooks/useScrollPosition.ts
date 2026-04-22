/**
 * @file hooks/useScrollPosition.ts
 * @description Tracks the current window scroll position.
 * WHY: Used by the Navbar to toggle transparent → solid background
 * on scroll. Extracted into a hook for reusability and testability.
 */

"use client";

import { useState, useEffect } from "react";

export function useScrollPosition(threshold = 50): {
  isScrolled: boolean;
  scrollY: number;
} {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setIsScrolled(currentY > threshold);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, scrollY };
}
