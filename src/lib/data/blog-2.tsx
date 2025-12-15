import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSectionDynamic";

export const blog = {
  slug: "google-tag-manager-nextjs",
  title: "Setting Up Google Tag Manager in a Next.js Application",
  publishDate: "2025-06-05",
  categories: ["Next.js", "Google Analytics", "Tag Manager", "TypeScript"],
  excerpt:
    "A comprehensive guide to implementing Google Tag Manager in a Next.js application, including setup, configuration, and best practices for tracking user interactions.",
  thumbnail: "/images/blog/blog-2.jpeg",
  content: (
    <div className="relative">
      <div className="mx-auto">
        <TitleSection>Introduction</TitleSection>
        <DetailSection>
          {`In this post, I'll share how I implemented Google Tag Manager in my Next.js portfolio website. The implementation includes real-time visitor tracking and a clean UI component to display visitor counts.`}
        </DetailSection>

        <TitleSection>Setting Up Google Tag Manager</TitleSection>
        <DetailSection>
          {`First, we need to set up Google Tag Manager and get the necessary credentials. Here's a step-by-step guide:`}
        </DetailSection>

        <TitleSection>1. Create a Google Analytics 4 Property</TitleSection>
        <DetailSection>
          <ol className="list-decimal list-inside ml-4">
            <li>
              Go to{" "}
              <a
                href="https://analytics.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Google Analytics
              </a>
            </li>
            <li>
              Click &quot;Start measuring&quot; or &quot;Create Property&quot;
            </li>
            <li>Enter your property details (name, timezone, currency)</li>
            <li>Choose &quot;Web&quot; as your platform</li>
            <li>Enter your website URL and stream name</li>
            <li>Note down your Measurement ID (starts with &quot;G-&quot;)</li>
          </ol>
        </DetailSection>

        <TitleSection>2. Set Up Google Tag Manager</TitleSection>
        <DetailSection>
          <ol className="list-decimal list-inside ml-4">
            <li>
              Go to{" "}
              <a
                href="https://tagmanager.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Google Tag Manager
              </a>
            </li>
            <li>Create a new account or select an existing one</li>
            <li>Set up a new container for your website</li>
            <li>Choose &quot;Web&quot; as your platform</li>
            <li>
              Note down your GTM Container ID (starts with &quot;GTM-&quot;)
            </li>
          </ol>
        </DetailSection>

        <TitleSection>3. Install Required Package</TitleSection>
        <DetailSection>
          {`Install the Next.js third-party package for Google Tag Manager:`}
        </DetailSection>
        <CodeSection
          language="bash"
          code={`npm install @next/third-parties
# or
yarn add @next/third-parties
# or
pnpm add @next/third-parties`}
        />

        <TitleSection>4. Configure Environment Variables</TitleSection>
        <DetailSection>
          {`Create a .env.local file in your project root and add the following variables:`}
        </DetailSection>
        <CodeSection
          language="bash"
          code={`# Google Tag Manager Configuration
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXXXXX  # Your GTM Container ID`}
        />

        <TitleSection>5. Integration in Layout</TitleSection>
        <DetailSection>
          {`Import and use the GoogleTagManager component from @next/third-parties/google in your root layout:`}
        </DetailSection>
        <CodeSection
          language="tsx"
          code={`import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("bg-background font-sans antialiased relative")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main id="main" className="container">
            {children}
          </main>
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!} />
    </html>
  );
}`}
        />

        <TitleSection>Best Practices</TitleSection>
        <DetailSection>
          <h6>
            When implementing Google Tag Manager in a Next.js application,
            consider these best practices:
          </h6>
          <ul className="list-disc list-inside ml-4">
            <li>Use environment variables for sensitive credentials</li>
            <li>Implement proper error handling</li>
            <li>Consider rate limiting and caching for API calls</li>
            <li>Follow privacy regulations and add cookie consent if needed</li>
          </ul>
        </DetailSection>

        <TitleSection>Conclusion</TitleSection>
        <DetailSection>
          {`Implementing Google Tag Manager in a Next.js application provides a powerful way to manage various tracking tags and analytics tools. Using the official @next/third-parties package ensures better integration and performance with Next.js applications.`}
        </DetailSection>

        <TitleSection>References</TitleSection>
        <DetailSection>
          <ul className="list-disc list-inside ml-4">
            <li>
              <a
                href="https://nextjs.org/docs/app/guides/third-party-libraries#google-tag-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Next.js Third-Party Libraries Documentation
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/tag-manager/quickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Google Tag Manager Developer Documentation
              </a>
            </li>
          </ul>
        </DetailSection>
      </div>
    </div>
  ),
};
