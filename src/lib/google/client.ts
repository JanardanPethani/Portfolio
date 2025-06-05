import { BetaAnalyticsDataClient } from "@google-analytics/data";

const { private_key } = JSON.parse(
  process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY || "{ private_key: null }"
);

export const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL!,
    private_key: private_key,
  },
});
