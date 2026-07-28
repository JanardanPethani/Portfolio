import { NextResponse } from "next/server";
import { getAnalyticsDataClient } from "@/lib/google/client";

// Cache the upstream Google Analytics call so this public endpoint cannot be
// used to exhaust the API quota by hammering it.
export const revalidate = 3600;

export async function GET() {
  try {
    const propertyId = process.env.GOOGLE_ANALYTICS_PROPERTY_ID;
    if (!propertyId) {
      return NextResponse.json(
        { error: "Google Analytics Property ID is not configured" },
        { status: 500 }
      );
    }

    const [response] = await getAnalyticsDataClient().runReport({
      property: `properties/${encodeURIComponent(propertyId)}`,
      dateRanges: [
        {
          startDate: "2024-07-30",
          endDate: "today",
        },
      ],
      metrics: [{ name: "newUsers" }],
    });

    const metrics = response.rows?.[0]?.metricValues || [];
    const visitorCount = Number(metrics[0]?.value) || 0;

    return NextResponse.json(
      { visitorCount },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    // Log server-side only — the response must not leak credential or
    // upstream API details to the caller.
    console.error("Error fetching analytics data:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 }
    );
  }
}
