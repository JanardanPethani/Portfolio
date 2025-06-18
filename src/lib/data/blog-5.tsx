import TitleSection from "@/components/Blog/TitleSection";
import DetailSection from "@/components/Blog/DetailSection";

export const blog = {
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
              <strong>MySQL</strong> - A reliable relational database management
              system.{" "}
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
              <strong>Docker</strong> - A platform for developing, shipping, and
              running applications in containers.{" "}
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
              <strong>TypeScript</strong> - A typed superset of JavaScript that
              enhances code quality and developer experience.{" "}
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
};
