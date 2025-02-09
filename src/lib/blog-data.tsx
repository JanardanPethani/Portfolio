import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSection";

export const fetchCache = "force-no-store";

export const blogData = [
  {
    slug: "portfolio-tech-stack",
    title: "Building My Portfolio with Modern Web Technologies",
    publishDate: "2025-12-01",
    categories: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    content: (
      <div className="relative">
        <div className="mx-auto">
          <TitleSection>Introduction</TitleSection>
          <DetailSection>
            {`Welcome to a deep dive into the technology stack and features of my
            portfolio website. I'll explain the key technologies and design
            decisions that went into creating this modern, responsive web
            application.`}
          </DetailSection>

          <TitleSection>Core Technologies</TitleSection>
          <DetailSection>
            <h6>The portfolio is built with a powerful modern stack:</h6>
            <ul className="list-disc list-inside ml-4">
              <li>Next.js 14 - For server-side rendering and routing</li>
              <li>React - For component-based UI development</li>
              <li>TypeScript - For type safety and better developer experience</li>
              <li>TailwindCSS - For responsive and customizable styling</li>
            </ul>
          </DetailSection>

          <TitleSection>UI Components and Styling</TitleSection>
          <DetailSection>
            {`The UI is built using a combination of custom components and Tailwind
            CSS for styling. I've implemented dark mode support and responsive
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
            <h6>The application is optimized for performance using Next.js&apos;s built-in features:</h6>
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
            I've implemented.`}
          </DetailSection>
        </div>
      </div>
    ),
  },
  {
    slug: "css-view-transition-api",
    title: "Using CSS View-Transition API",
    publishDate: "2023-10-20",
    categories: ["CSS", "Transitions", "Web API"],
    excerpt: "Enhance your page transitions using the new CSS view-transition API.",
    content: (
      <div className="relative">
        <TitleSection>Overview</TitleSection>
        <DetailSection>
          In this update I integrated the experimental CSS view-transition API to enable smoother page transitions.
        </DetailSection>
        <TitleSection>Implementation Steps</TitleSection>
        <DetailSection>
          <ol className="list-decimal list-inside">
            <li>Added CSS rules for view transitions using the ::view-transition pseudo-element.</li>
            <li>Triggered transitions via document.startViewTransition() before DOM updates.</li>
            <li>Configured easing and timing for a smooth effect.</li>
          </ol>
        </DetailSection>
        <TitleSection>Example</TitleSection>
        <CodeSection
          language="tsx"
          code={`/* CSS */
@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes slide-from-right {
  from {
    transform: translateX(30px);
  }
}

@keyframes slide-to-left {
  to {
    transform: translateX(-30px);
  }
}

#main {
  view-transition-name: main;
}

::view-transition-old(main) {
  animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
}

::view-transition-new(main) {
  animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
}

/* JavaScript */
const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!document.startViewTransition) {
      // browser does not support view transition. Continue the default behavior.
      return;
    } else {
      // browser supports view transition. Animate the transition.
      e.preventDefault();
      document.startViewTransition(() => {
        router.push(href as string);
      });
    }
};`}
        ></CodeSection>
      </div>
    ),
  },
];
