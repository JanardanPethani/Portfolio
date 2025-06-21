// lib/experience-data.ts

export interface Project {
  name: string;
  role: string;
  link?: string;
  period: string;
  description: (React.ReactElement | string)[];
  technologies: string[];
}

export interface Company {
  name: string;
  period: string;
  linkedInLink: string;
  projects: Project[];
}

export const experiences: Company[] = [
  {
    name: "La Net Team Software Solution Pvt Ltd.",
    linkedInLink: "https://www.linkedin.com/company/lanetteamsurat",
    period: "2020 - Present",
    projects: [
      {
        name: "NICE Actimize",
        link: "https://www.niceactimize.com/",
        role: "Full Stack Developer",
        period: "January 2024 – Present",
        description: [
          "Developed a customer schedule page using React, React Hook Form, TypeScript, RTK Query, MUI, Luxon, and Redux Toolkit, providing users with a robust platform to manage schedules efficiently.",
          "Created a dynamic KYC form builder using the same tech stack, empowering users to customize KYC forms tailored to their needs, enhancing data collection and validation processes.",
          "Integrated test cases for newly added features using React testing library and msw to mock the actual APIs.",
          "Integrate luxon to Handle multiple time zones for the user.",
        ],
        technologies: [
          "React",
          "React Hook Form",
          "RTK Query",
          "TypeScript",
          "Redux Toolkit",
          "React testing library",
        ],
      },
      {
        name: "Agentzy",
        link: "https://www.agentzy.com/",
        role: "Full Stack Developer",
        period: "September 2024 – November 2024",
        description: [
          "Implement Product performance, User management, Brand management pages using Amplify Graphql client for data fetching and React HighChart",
          "Optimize page load from 3s to ~500ms using Zustand, React-query instead React context.",
          "Reduce chunks size by using Nextjs dynamic imports.",
          "Create graphql schemas and different relations between them",
        ],
        technologies: [
          "NextJs",
          "Zustand",
          "React-query",
          "React HighCharts",
          "Amplify",
          "Lambda",
          "DynamoDB",
          "AppSync",
          "S3",
          "SQS",
        ],
      },
      {
        name: "MakeMyVity",
        link: "https://makemyvity.com",
        role: "Full Stack Developer",
        period: "June 2023 – January 2024",
        description: [
          "Developed a web application using React and JavaScript Canvas API to enable users to create event posters dynamically based on input values from a form and various theme options.",
          "Revamped the entire user interface of the web app according to new designs provided in Figma, utilizing Material-UI for seamless integration and improved user experience.",
          "Implemented a photo module allowing parents to upload and manage their child's photos, create albums, add comments, and engage with content through likes.",
          "Created a dynamic blog application using Next.js for the frontend, Node.js for the backend, and Fire store for database management, enabling real-time content updates and efficient data handling.",
          `Designed and implemented a page and corresponding APIs for an attendance module, facilitating the generation of comprehensive attendance reports based on eacher-led classes and specified timeframes.`,
          `Collaborated with team members on developing a Canva clone application, contributing to features and functionality enhancements for a versatile graphic design platform.`,
        ],
        technologies: [
          "React",
          "MUI",
          "Node.js",
          "TypeScript",
          "NextJS",
          "GCP",
        ],
      },
      {
        name: "BuyFive",
        role: "Full Stack Developer",
        period: "December 2020 – June 2023",
        description: [
          `Developed the front-end of the project using React and Redux and integrated it with the backend to create a seamless user experience.`,
          "Worked with the back-end developer to design and implement the project's database structure using PostgreSQL and SQL Alchemy, ensuring data integrity and efficient querying.",
          "Assisted the back-end developer in building the RESTful API using FastAPI, optimizing for speed and security.",
          `Managed AWS resources, including S3, RDS, Route53, VPC, Lambda etc. using terraform and AWS management console to support the project's infrastructure needs.`,
          `Developed scripts using python pandas to analyze user’s data according to client’s need.`,
        ],
        technologies: [
          "React",
          "Redux",
          "Typescript",
          "Python",
          "PostgreSQL",
          "AWS",
        ],
      },
    ],
  },
];
