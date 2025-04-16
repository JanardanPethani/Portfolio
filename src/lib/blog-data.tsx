import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSection";

export const fetchCache = "force-no-store";

export const blogData = [
  {
    slug: "nx-nestjs-mysql-react-docker",
    title:
      "Building a Full-Stack Application with NX, NestJS, MySQL, React, and Docker",
    publishDate: "2025-04-16",
    categories: ["NX", "NestJS", "MySQL", "React", "Docker", "Full-Stack"],
    excerpt:
      "A comprehensive guide to creating a modern full-stack application using NX monorepo, NestJS backend, MySQL database, React frontend, and Docker containerization.",
    content: (
      <div className="relative">
        <div className="mx-auto">
          <TitleSection>Introduction</TitleSection>
          <DetailSection>
            {`In this blog post, I have summarized how you can start with NX for monorepo management, NestJS for the backend, MySQL for the database, React for the frontend, and Docker for containerization.`}
          </DetailSection>

          <TitleSection>Technology Stack</TitleSection>
          <DetailSection>
            <h6>The project leverages the following technologies:</h6>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>NX</strong> - A powerful build system and monorepo tool
                that provides a modern development experience.{" "}
                <a
                  href="https://nx.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  NX
                </a>
              </li>
              <li>
                <strong>NestJS</strong> - A progressive Node.js framework for
                building efficient and scalable server-side applications.{" "}
                <a
                  href="https://nestjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  NestJS
                </a>
              </li>
              <li>
                <strong>MySQL</strong> - A reliable relational database
                management system.{" "}
                <a
                  href="https://www.mysql.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  MySQL
                </a>
              </li>
              <li>
                <strong>React</strong> - A JavaScript library for building user
                interfaces.{" "}
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  React
                </a>
              </li>
              <li>
                <strong>Docker</strong> - A platform for developing, shipping,
                and running applications in containers.{" "}
                <a
                  href="https://www.docker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Docker
                </a>
              </li>
              <li>
                <strong>TypeScript</strong> - A typed superset of JavaScript
                that enhances code quality and developer experience.{" "}
                <a
                  href="https://www.typescriptlang.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  TypeScript
                </a>
              </li>
            </ul>
          </DetailSection>

          <TitleSection>Link to Repo</TitleSection>
          <DetailSection>
            <p>
              You can find the complete source code for this project on GitHub:
              &nbsp;
              <a
                href="https://github.com/JanardanPethani/nx-nestjs-reactjs-mysql/tree/with-docker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                NX NestJS React MySQL Project
              </a>
            </p>
            <br />
            <p>
              Feel free to explore the repository, contribute, or use it as a
              reference for your own projects.
            </p>
          </DetailSection>
        </div>
      </div>
    ),
  },
  {
    slug: "portfolio-tech-stack",
    title: "Building My Portfolio with Modern Web Technologies",
    publishDate: "2025-01-01",
    categories: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    excerpt:
      "A detailed look at the modern web technologies and design decisions behind my portfolio website, including Next.js, React, TypeScript, and TailwindCSS for creating a responsive and performant web application.",
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
              <li>
                TypeScript - For type safety and better developer experience
              </li>
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
            I've implemented.`}
          </DetailSection>
        </div>
      </div>
    ),
  },
  {
    slug: "css-view-transition-api",
    title: "Using CSS View-Transition API",
    publishDate: "2025-01-01",
    categories: ["CSS", "Transitions", "Web API"],
    excerpt:
      "Enhance your page transitions using the new CSS view-transition API.",
    content: (
      <div className="relative">
        <TitleSection>Overview</TitleSection>
        <DetailSection>
          In this update I integrated the experimental CSS view-transition API
          to enable smoother page transitions.
        </DetailSection>
        <TitleSection>Implementation Steps</TitleSection>
        <DetailSection>
          <ol className="list-decimal list-inside">
            <li>
              Added CSS rules for view transitions using the ::view-transition
              pseudo-element.
            </li>
            <li>
              Triggered transitions via document.startViewTransition() before
              DOM updates.
            </li>
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
