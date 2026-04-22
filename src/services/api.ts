/**
 * @file services/api.ts
 * @description API service layer for external communication.
 * WHY: Encapsulating API calls in a service layer:
 *  - Decouples network logic from UI components
 *  - Provides a single place to add auth headers, error handling, retries
 *  - Makes it trivial to swap backends (REST → GraphQL, etc.)
 */

import type { ContactFormData, ApiResponse } from "@/types";

/** Base URL — reads from env var, falls back to relative path */
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api";

/**
 * Generic fetch wrapper with error handling.
 */
async function fetcher<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        success: false,
        error: errorData?.message ?? `Request failed with status ${response.status}`,
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

// ─── Public API Methods ──────────────────────────────────────────────

/**
 * Submits the enterprise contact/demo request form.
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<ApiResponse<{ id: string }>> {
  return fetcher<{ id: string }>("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

/**
 * Subscribes an email to the newsletter.
 */
export async function subscribeNewsletter(
  email: string
): Promise<ApiResponse<{ subscribed: boolean }>> {
  return fetcher<{ subscribed: boolean }>("/newsletter", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}
