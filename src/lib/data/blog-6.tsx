import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";

export const blog = {
  slug: "portfolio-tech-stack",
  title: "Building My Portfolio with Modern Web Technologies",
  publishDate: "2025-01-01",
  categories: ["Next.js", "React", "TailwindCSS", "TypeScript"],
  excerpt:
    "A detailed look at the modern web technologies and design decisions behind my portfolio website, including Next.js, React, TypeScript, and TailwindCSS for creating a responsive and performant web application.",
  thumbnail: "/images/blog/default-thumbnail.jpg",
  content: (
    <div className="relative">
      <div className="mx-auto">
        <TitleSection>Introduction</TitleSection>
        <DetailSection>
          {`Welcome to a deep dive into the technology stack and features of my
              portfolio website. I&apos;ll explain the key technologies and design
              decisions that went into creating this modern, responsive web
              application.`}
        </DetailSection>

        <TitleSection>Core Technologies</TitleSection>
        <DetailSection>
          <h6>The portfolio is built with a powerful modern stack:</h6>
          <ul className="list-disc list-inside ml-4">
            <li>Next.js 14 - For server-side rendering and routing</li>
            <li>React - For component-based UI development</li>
            <li>
              TypeScript - For type safety and better developer experience
            </li>
            <li>TailwindCSS - For responsive and customizable styling</li>
          </ul>
        </DetailSection>

        <TitleSection>UI Components and Styling</TitleSection>
        <DetailSection>
          {`The UI is built using a combination of custom components and Tailwind
              CSS for styling. I&apos;ve implemented dark mode support and responsive
              design patterns throughout the application.`}
        </DetailSection>

        <TitleSection>Features and Functionality</TitleSection>
        <DetailSection>
          <h6>Key features of the portfolio include:</h6>
          <ul className="list-disc list-inside ml-4">
            <li>Blog system with markdown support</li>
            <li>Dark/Light theme switching</li>
            <li>Responsive design</li>
            <li>Category filtering and search functionality</li>
            <li>Dynamic routing with Next.js</li>
            <li>Smooth animations with Framer Motion</li>
          </ul>
        </DetailSection>

        <TitleSection>Performance and Optimization</TitleSection>
        <DetailSection>
          <h6>
            The application is optimized for performance using Next.js&apos;s
            built-in features:
          </h6>
          <ul className="list-disc list-inside ml-4">
            <li>Server-side rendering for better SEO</li>
            <li>Image optimization</li>
            <li>Code splitting</li>
            <li>Static site generation where applicable</li>
          </ul>
        </DetailSection>

        <TitleSection>Conclusion</TitleSection>
        <DetailSection>
          {`This portfolio showcases not just my projects, but also my ability to
              work with modern web technologies and implement best practices in web
              development. Feel free to explore the various sections and features
              I&apos;ve implemented.`}
        </DetailSection>
      </div>
    </div>
  ),
};
