"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui";

export function Navbar() {
  const { isScrolled } = useScrollPosition(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-full px-4 sm:px-6 lg:px-20 bg-white ">
        <div className="flex h-16 md:h-20 items-center justify-between ">
          {/* ── Logo ── */}
           <div className="relative h-9 w-auto flex items-center">
                    <img
              src="/image copy 2.png" 
              alt="Accredian Logo"
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* ── Desktop Links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  isScrolled
                    ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    : "text-black/80 hover:text-black hover:font-bold"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant={isScrolled ? "primary" : "white"}
              size="sm"
              href="#contact"
            >
              Schedule Demo
            </Button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-button"
            className="lg:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={cn(
                  "block h-0.5 w-6 rounded-full transition-all duration-300",
                  isScrolled ? "bg-slate-800" : "bg-white",
                  isMobileMenuOpen && "rotate-45 translate-y-[9px]"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 rounded-full transition-all duration-300",
                  isScrolled ? "bg-slate-800" : "bg-white",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 rounded-full transition-all duration-300",
                  isScrolled ? "bg-slate-800" : "bg-white",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[9px]"
                )}
              />
            </div>
          </button>
        </div>

        {/* ── Mobile Menu Panel ── */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="rounded-2xl bg-white shadow-xl p-4 border border-slate-100 mt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100">
              <Button variant="primary" size="md" href="#contact" className="w-full">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
