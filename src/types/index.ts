/**
 * @file types/index.ts
 * @description Centralized type definitions for the application.
 * WHY: Having a single source of truth for types prevents duplication,
 * ensures consistency, and makes refactoring easier across the codebase.
 */

// ─── Navigation Types ────────────────────────────────────────────────
export interface NavLink {
  /** Display label for the navigation item */
  label: string;
  /** Route path or anchor link (e.g., "#stats", "/about") */
  href: string;
  /** Optional: marks the link as currently active */
  isActive?: boolean;
}

// ─── Content / Section Types ─────────────────────────────────────────
export interface StatItem {
  /** Numeric value to display (e.g., "500+") */
  value: string;
  /** Label describing the stat (e.g., "Corporate Partners") */
  label: string;
  /** Optional icon name or path */
  icon?: string;
}

export interface FeatureCard {
  /** Unique identifier */
  id: string;
  /** Feature title */
  title: string;
  /** Short description */
  description: string;
  /** Icon component name or SVG path */
  icon: string;
}

export interface Testimonial {
  /** Unique identifier */
  id: string;
  /** Full quote text */
  quote: string;
  /** Person's full name */
  author: string;
  /** Job title / designation */
  designation: string;
  /** Company name */
  company: string;
  /** Optional avatar image URL */
  avatarUrl?: string;
}

export interface Partner {
  /** Company name (used for alt text) */
  name: string;
  /** Logo image URL */
  logoUrl: string;
}

export interface ProcessStep {
  /** Step number (1, 2, 3...) */
  step: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Icon identifier */
  icon: string;
}

export interface DomainItem {
  /** Domain name */
  name: string;
  /** Short description */
  description: string;
  /** Icon identifier */
  icon: string;
}

// ─── Component Prop Types ────────────────────────────────────────────
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** If provided, renders as an anchor tag */
  href?: string;
  /** Shows a loading spinner */
  isLoading?: boolean;
}

export type SectionBackground = "white" | "light" | "dark" | "gradient" | "blue";

export interface SectionProps {
  /** Section ID for anchor-link navigation */
  id?: string;
  /** Background variant */
  background?: SectionBackground;
  /** Additional CSS classes */
  className?: string;
  children: React.ReactNode;
}

export interface ContainerProps {
  /** Max-width variant */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  children: React.ReactNode;
}

export interface CardProps {
  className?: string;
  /** Hover lift animation */
  hoverable?: boolean;
  /** Card padding variant */
  padding?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

// ─── Service / API Types ─────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
