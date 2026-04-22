/**
 * @file constants/index.ts
 * @description Barrel export for all constants.
 * WHY: Barrel files provide a clean public API for each module,
 * allowing consumers to import from a single path:
 *   import { SITE_CONFIG, NAV_LINKS } from "@/constants"
 */

export * from "./siteConfig";
export * from "./navigation";
export * from "./content";
