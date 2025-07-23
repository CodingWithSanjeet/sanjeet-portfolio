import React from "react";
import {
  MongoDBIcon,
  ExpressJSIcon,
  ReactIcon,
  NodeJSIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  HTMLIcon,
  CSSIcon,
  MaterialUIIcon,
  GraphQLIcon,
  AzureFunctionIcon,
  AzureCosmosDBIcon,
} from "../components/common/AllSvg/AllSvg";

export type EnterpriseExperience = {
  companyName: string;
  jobTitle: string;
  duration: string;
  projectTitle: string;
  businessTitle: string;
  className: string;
  logo: string;
  redirectLink: string;
}
export type TechnicalExpertise = {
  content: {
    text: string | React.ReactNode;
    beforeTag: boolean;
    afterTag: boolean;
    keyword?: string[];
    subText?: string[];
    innerHtml?: boolean;
    htmlString?: string | React.ReactNode;
  }[];
  skills: {
    title: string;
    color: string;
    fill: number;
    icon: React.ReactNode;
  }[];
}
export const skillsData: {
  pageTitle: React.ReactNode[];
  enterpriseExperience: EnterpriseExperience[];
  technicalExpertise: TechnicalExpertise;
} = {
  pageTitle: ["Skills & ", "Experience"],
  enterpriseExperience: [
    {
      companyName: "Oracle Corporation",
      jobTitle: "Associate Applications Developer",
      duration: "2019 - 2022",
      projectTitle: "Banking Application",
      businessTitle: "Enterprise Leader",
      className: "oracle-card",
      logo: "/logos/oracle-logo.svg",
      redirectLink: "/skills/oracle"
    },
    {
      companyName: "Best Western",
      jobTitle: "Full-Stack Developer",
      duration: "2022 - 2024",
      projectTitle: "Revenue Optimization",
      businessTitle: "Grow with Insight",
      className: "bestwestern-card",
      logo: "/logos/bestwestern-logo.svg",
      redirectLink: "/skills/bestwestern"
    },
    {
      companyName: "Adobe",
      jobTitle: "Senior Software Engineer",
      duration: "2024 - Present",
      projectTitle: "Adobe Data Migration",
      businessTitle: "Innovation Hub",
      className: "adobe-card",
      logo: "/logos/adobe-logo.svg",
      redirectLink: "/skills/adobe"
    },
  ],
  technicalExpertise: {
    content: [
      {
        text: "Full-Stack Developer | MERN Stack | TypeScript | GraphQL Enthusiast",
        beforeTag: false,
        afterTag: false,
      },
      {
        text: "I'm a passionate and results-driven Full-Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). I specialize in building scalable, responsive, and user-friendly web applications using modern development practices and technologies.",
        beforeTag: true,
        afterTag: false,
        keyword: ["MongoDB", "Express.js", "React", "Node.js"],
      },
      {
        text: "On the frontend, I work extensively with React, Redux, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and build component-driven UIs with clean, maintainable code. On the backend, I build robust RESTful and GraphQL APIs using Node.js, Express.js, and MongoDB, ensuring high performance and security.",
        beforeTag: false,
        afterTag: false,
        keyword: [
          "TypeScript",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Material UI",
          "Node.js",
          "Express.js",
          "MongoDB",
        ],
      },
      {
        text: "I also bring strong experience with:",
        subText: [
          "TypeScript for enhanced code safety and developer efficiency",
          "GraphQL for optimized API performance and flexibility",
          "Version control with Git/GitHub",
          "Testing tools such as Jasmine, Jest, and Postman for unit and API testing",
          "CI/CD pipelines, Docker, and deployment to cloud platforms like Vercel, Heroku, or AWS",
          "Version control (Git), issue tracking (Jira), and documentation (Confluence)",
        ],
        keyword: [
          "TypeScript",
          "GraphQL",
          "Version control",
          "Testing tools",
          "CI/CD pipelines",
          "Docker",
          "Deployment to cloud platforms",
          "Azure Function Apps",
          "Azure Cosmos DB",
        ],
        beforeTag: false,
        afterTag: false,
      },
      {
        text: "I follow best practices in development, performance optimization, and clean code architecture to deliver production-ready applications.",
        beforeTag: false,
        afterTag: false,
      },
      {
        text: (
          <>
            <span>Visit my </span>
            <a href="https://www.linkedin.com/in/sanjeet-kumar-5a33b77b/">
              LinkedIn
            </a>
            <span> to know more about my work.</span>
          </>
        ),
        innerHtml: true,
        htmlString: (
          <>
            <span>Visit my </span>
            <a href="https://www.linkedin.com/in/sanjeet-kumar-5a33b77b/">
              LinkedIn
            </a>
            <span> to know more about my work.</span>
          </>
        ),
        beforeTag: false,
        afterTag: false,
      },
      {
        text: (
          <>
            <span>You can also check out my CV </span>
            <a href="https://www.linkedin.com/in/sanjeet-kumar-5a33b77b/">
              LinkedIn
            </a>
            <span> to know more about my work.</span>
          </>
        ),
        beforeTag: false,
        afterTag: true,
      },
    ],
    skills: [
      {
        title: "MongoDB",
        color: "#00D1F7",
        fill: 86,
        icon: <MongoDBIcon />,
      },
      {
        title: "Express.js",
        color: "#00D1F7",
        fill: 86,
        icon: <ExpressJSIcon />,
      },
      {
        title: "React",
        color: "#00D1F7",
        fill: 86,
        icon: <ReactIcon />,
      },
      {
        title: "Node.js",
        color: "#00D1F7",
        fill: 86,
        icon: <NodeJSIcon />,
      },
      {
        title: "TypeScript",
        color: "#00D1F7",
        fill: 86,
        icon: <TypeScriptIcon />,
      },
      {
        title: "JavaScript",
        color: "#00D1F7",
        fill: 86,
        icon: <JavaScriptIcon />,
      },
      {
        title: "HTML",
        color: "#00D1F7",
        fill: 86,
        icon: <HTMLIcon />,
      },
      {
        title: "CSS",
        color: "#00D1F7",
        fill: 86,
        icon: <CSSIcon />,
      },
      {
        title: "Material UI",
        color: "#00D1F7",
        fill: 86,
        icon: <MaterialUIIcon />,
      },
      {
        title: "GraphQL",
        color: "#e10098",
        fill: 86,
        icon: <GraphQLIcon />,
      },
      {
        title: "Azure Function Apps",
        color: "#00D1F7",
        fill: 86,
        icon: <AzureFunctionIcon />,
      },
      {
        title: "Azure Cosmos DB",
        color: "#00D1F7",
        fill: 86,
        icon: <AzureCosmosDBIcon />,
      },
    ],
  },
};
