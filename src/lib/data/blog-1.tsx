import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSectionDynamic";

export const blog = {
  slug: "google-analytics-data-api-nextjs",
  title: "Using Google Analytics Data API in Next.js",
  publishDate: "2025-06-05",
  categories: ["Next.js", "Google Analytics", "Data API", "TypeScript"],
  excerpt:
    "A comprehensive guide to implementing Google Analytics Data API in a Next.js application, including server-side analytics data fetching and visitor count display.",
  content: (
    <div className="relative">
      <div className="mx-auto">
        <TitleSection>Introduction</TitleSection>
        <DetailSection>
          {`In this post, I'll share how I implemented the Google Analytics Data API in my Next.js portfolio website to fetch and display visitor analytics data.`}
        </DetailSection>

        <TitleSection>Setting Up Google Analytics Data API</TitleSection>
        <DetailSection>
          {`First, we need to set up the Google Analytics Data API and get the necessary credentials. Here's a step-by-step guide:`}
        </DetailSection>

        <TitleSection>1. Set Up Google Analytics Data API</TitleSection>
        <DetailSection>
          <ol className="list-decimal list-inside ml-4">
            <li>
              Go to{" "}
              <a
                href="https://console.cloud.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Google Cloud Console
              </a>
            </li>
            <li>Create a new project or select an existing one</li>
            <li>Enable the Google Analytics Data API for your project</li>
            <li>Go to &quot;APIs & Services&quot; → &quot;Credentials&quot;</li>
            <li>
              Click &quot;Create Credentials&quot; → &quot;Service Account&quot;
            </li>
            <li>
              Fill in the service account details and click &quot;Create&quot;
            </li>
            <li>
              Click on the created service account → &quot;Keys&quot; →
              &quot;Add Key&quot; → &quot;Create new key&quot;
            </li>
            <li>Choose JSON format and download the key file</li>
            <li>
              Add the service account email to your Google Analytics property
              with &quot;Viewer&quot; permissions
            </li>
          </ol>
        </DetailSection>

        <TitleSection>2. Configure Environment Variables</TitleSection>
        <DetailSection>
          {`Add the following variables to your .env.local file:`}
        </DetailSection>
        <CodeSection
          language="bash"
          code={`# Google Analytics Configuration
NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID=XXXXXXXXXX  # Your GA4 Property ID
NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com  # From service account JSON
NEXT_PUBLIC_GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"  # From service account JSON`}
        />

        <TitleSection>3. Install Required Dependencies</TitleSection>
        <DetailSection>
          {`Install the necessary packages for Google Analytics Data API integration:`}
        </DetailSection>
        <CodeSection
          language="bash"
          code={`npm install @google-analytics/data
# or
yarn add @google-analytics/data
# or
pnpm add @google-analytics/data`}
        />

        <TitleSection>4. Create Analytics Client</TitleSection>
        <DetailSection>
          {`Create a client using the Google Analytics Data API:`}
        </DetailSection>
        <CodeSection
          language="typescript"
          code={`import { BetaAnalyticsDataClient } from "@google-analytics/data";

const { private_key } = JSON.parse(
  process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY || "{ private_key: null }"
);

export const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL!,
    private_key: private_key,
  },
});`}
        />

        <TitleSection>5. Create API Route</TitleSection>
        <DetailSection>
          {`Create an API route to fetch analytics data securely from the server side:`}
        </DetailSection>
        <CodeSection
          language="typescript"
          code={`import { NextResponse } from "next/server";
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
      property: \`properties/\${propertyId}\`,
      dateRanges: [
        {
          startDate: "2024-06-30",
          endDate: "today",
        },
      ],
      metrics: [{ name: "totalUsers" }],
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
}`}
        />

        <TitleSection>6. Create Visitor Count Component</TitleSection>
        <DetailSection>
          {`Create a component to display the visitor count in the UI:`}
        </DetailSection>
        <CodeSection
          language="tsx"
          code={`import { useEffect, useState } from "react";
import { getUniqueVisitors } from "@/utils/analytics";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const count = await getUniqueVisitors();
        setVisitorCount(count);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
    // Refresh count every 5 minutes
    const interval = setInterval(fetchVisitors, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground">
        <Users className="h-4 w-4" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground"
    >
      <Users className="h-4 w-4" />
      <span>{visitorCount.toLocaleString()} visitors</span>
    </motion.div>
  );
}`}
        />

        <TitleSection>Best Practices</TitleSection>
        <DetailSection>
          <h6>
            When implementing Google Analytics Data API in a Next.js
            application, consider these best practices:
          </h6>
          <ul className="list-disc list-inside ml-4">
            <li>Use environment variables for sensitive credentials</li>
            <li>Implement server-side data fetching for better security</li>
            <li>Add proper error handling and loading states</li>
            <li>Consider rate limiting and caching for API calls</li>
            <li>Follow privacy regulations and add cookie consent if needed</li>
          </ul>
        </DetailSection>

        <TitleSection>Conclusion</TitleSection>
        <DetailSection>
          {`Implementing Google Analytics Data API in a Next.js application provides valuable insights into user behavior and website performance. The combination of server-side data fetching and proper error handling offers a robust solution for analytics integration.`}
        </DetailSection>

        <TitleSection>References</TitleSection>
        <DetailSection>
          <ul className="list-disc list-inside ml-4">
            <li>
              <a
                href="https://developers.google.com/analytics/devguides/reporting/data/v1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Google Analytics Data API Documentation
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/docs/app/building-your-application/optimizing/analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Next.js Analytics Documentation
              </a>
            </li>
          </ul>
        </DetailSection>
      </div>
    </div>
  ),
};
