import { NextResponse } from "next/server";
import { analyticsDataClient } from "@/lib/google/client";

export async function GET() {
  try {
    const propertyId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID;
    if (!propertyId) {
      return NextResponse.json(
        { error: "Google Analytics Property ID is not configured" },
        { status: 500 }
      );
    }

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "2024-07-30",
          endDate: "today",
        },
      ],
      metrics: [{ name: "activeUsers" }],
    });

    const metrics = response.rows?.[0]?.metricValues || [];
    const visitorCount = Number(metrics[0]?.value) || 0;

    return NextResponse.json({ visitorCount });
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 }
    );
  }
}
