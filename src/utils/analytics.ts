export async function getUniqueVisitors(): Promise<number> {
  try {
    const response = await fetch("/api/analytics");
    if (!response.ok) {
      throw new Error("Failed to fetch analytics data");
    }

    const data = await response.json();
    return data.visitorCount;
  } catch (error) {
    console.error("Error fetching unique visitors:", error);
    return 0;
  }
}
