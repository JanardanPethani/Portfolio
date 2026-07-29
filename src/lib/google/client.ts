import "server-only";

import { BetaAnalyticsDataClient } from "@google-analytics/data";

/**
 * Service account credentials are read from server-only environment variables.
 * They must never use the `NEXT_PUBLIC_` prefix — Next.js inlines those into the
 * browser bundle, which would publish the private key to every visitor.
 */
function readPrivateKey(): string {
  const raw = process.env.GOOGLE_PRIVATE_KEY;

  if (!raw) {
    throw new Error("GOOGLE_PRIVATE_KEY is not configured");
  }

  // The key may be supplied either as the raw PEM string or as the full
  // service account JSON blob. Support both without throwing on malformed input.
  const trimmed = raw.trim();
  if (trimmed.startsWith("{")) {
    try {
      const { private_key } = JSON.parse(trimmed);
      if (typeof private_key !== "string" || !private_key) {
        throw new Error("GOOGLE_PRIVATE_KEY JSON is missing `private_key`");
      }
      return private_key.replace(/\\n/g, "\n");
    } catch {
      throw new Error("GOOGLE_PRIVATE_KEY could not be parsed");
    }
  }

  // Environment variables usually carry the newlines escaped.
  return trimmed.replace(/\\n/g, "\n");
}

let client: BetaAnalyticsDataClient | undefined;

/**
 * Lazily constructs the analytics client so that a missing or malformed
 * credential fails the single request that needs it, rather than crashing the
 * process at import time.
 */
export function getAnalyticsDataClient(): BetaAnalyticsDataClient {
  if (!client) {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    if (!clientEmail) {
      throw new Error("GOOGLE_CLIENT_EMAIL is not configured");
    }

    client = new BetaAnalyticsDataClient({
      credentials: {
        client_email: clientEmail,
        private_key: readPrivateKey(),
      },
    });
  }

  return client;
}
