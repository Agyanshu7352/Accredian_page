import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Stats", href: "#stats" },
  { label: "Partners", href: "#partners" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "Domains", href: "#domains" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/** Links shown in the footer "Company" column */
export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/press" },
];

/** Links shown in the footer "Resources" column */
export const FOOTER_RESOURCE_LINKS: NavLink[] = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Whitepapers", href: "/whitepapers" },
  { label: "FAQs", href: "#faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
