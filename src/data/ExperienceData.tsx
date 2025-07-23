import React from "react";
import {
  ClientsIcon,
  ExperienceIcon,
  ProjectsIcon,
  TechIcon,
} from "../components/common";
import { IconType } from "../types/common";

// Experience data types and data
export interface Project {
  id: number;
  projectTitle: string;
  duration: string;
  description: string[];
  technologies: string[];
  isClientProject: boolean;
  clientName?: string; // Optional, only for client projects
  clientLogo?: string; // Optional, only for client projects
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  companyLogo: string; // Add company logo field
  totalDuration: string;
  location: string;
  projects: Project[];
  overallTechnologies: string[];
}

type ProfessionalSummary = {
  icon: React.ReactNode;
  label: string;
  number: string;
  sublabel: string;
  progressWidth: string;
  iconType: IconType;
};

export type ExperienceData = {
  professionalSummary: ProfessionalSummary[];
  experienceDetails: ExperienceItem[];
};

export const experienceData:ExperienceData = {
  professionalSummary: [
    {
      icon: <ExperienceIcon />,
      label: "Years of Experience",
      number: "6",
      sublabel: "Professional Development",
      progressWidth: "85%",
      iconType: "experience",
    },
    {
      icon: <ProjectsIcon />,
      label: "Projects Delivered",
      number: "20+",
      sublabel: "Client & Internal",
      progressWidth: "92%",
      iconType: "projects",
    },
    {
      icon: <TechIcon />,
      label: "Technologies",
      number: "15+",
      sublabel: "Frontend & Backend",
      progressWidth: "78%",
      iconType: "tech",
    },
    {
      icon: <ClientsIcon />,
      label: "Major Clients",
      number: "3+",
      sublabel: "Enterprise Level",
      progressWidth: "88%",
      iconType: "clients",
    },
  ],
  experienceDetails: [
    {
      id: 1,
      title: "Associate Applications Developer",
      company: "Oracle",
      companyLogo: "/logos/oracle-logo.svg", // Oracle logo
      totalDuration: "08/2019 - 07/2022 (3 Years)",
      location: "Bangalore, India",
      projects: [
        {
          id: 1,
          projectTitle: "Banking Application",
          duration: "2021 - 2022",
          isClientProject: false,
          description: [
            "Worked in an Agile environment with a focus on delivering high-quality code and meeting project deadlines.",
            "Utilized Typescript, React, Redux, SCSS, NodeJS, and Jasmine to create 80+ responsive landing pages for both company and client. Another part of my work involved creating reusable components for the application and integrating them with the existing codebase.",
            "Implemented UI/UX standardization across the application to match the theme of Redwood at the domain level",
            "Coordinated with QA resources and verify all acceptances tested before moving on to next environment",
          ],
          technologies: [
            "React",
            "TypeScript",
            "Redux",
            "SCSS",
            "NodeJs",
            "Jasmine",
            "Selenium",
            "Jira",
            "Confluence",
            "Git",
          ],
        },
      ],
      overallTechnologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SCSS",
        "Redux",
        "Material-UI",
        "REST APIs",
        "NodeJS",
        "Jasmine",
        "Selenium",
        "Jira",
        "Confluence",
        "Git",
      ],
    },
    {
      id: 2,
      title: "Senior Software Engineer",
      company: "TEKSystems",
      companyLogo: "/logos/teksystems-logo.svg", // TEKSystems logo
      totalDuration: "07/2022 - Present",
      location: "Bangalore, India",
      projects: [
        {
          id: 1,
          projectTitle: "BestREV – Revenue Optimization Platform",
          duration: "07/2022 - 02/2024 (1 Year 8 Months)",
          isClientProject: true,
          clientName: "Best Western",
          clientLogo: "/logos/bestwestern-logo.svg", // Best Western logo
          description: [
            "Developed full-stack web application for hotel revenue insights and analytics",
            "Built responsive and interactive UI using React.js with dynamic data visualizations",
            "Designed and implemented Node.js API using Prisma, Pothos, Apollo GraphQL, and Express",
            "Integrated authentication, role-based access, and data processing pipelines",
            "Deployed application with CI/CD workflows using AWS Cloud",
          ],
          technologies: [
            "React.js",
            "Typescript",
            "Material-UI",
            "Node.js",
            "Express",
            "MongoDB",
            "AWS",
            "Postman",
            "PostgreSql",
            "Apollo GraphQL",
            "Prisma",
            "Pothos",
            "Git",
            "react storybook",
          ],
        },
        {
          id: 6,
          projectTitle: "Adobe Data Migration",
          duration: "03/2024 - Present",
          isClientProject: true,
          clientName: "Adobe",
          clientLogo: "/logos/adobe-logo.svg", // Adobe logo
          description: [
            "Developed a Full Stack web application to migrate data from different CRMs to a central CRM",
            "Worked on the frontend using React.js and Typescript to create a user-friendly interface for data migration",
            "Developed the backend using Node.js and Express, Azure Function app, and Azure Cosmos DB to handle the data migration process",
            "Integrated with third-party delivery service APIs to migrate the data from different CRMs to a central CRM",
          ],
          technologies: [
            "React.js",
            "Typescript",
            "Material-UI",
            "Node.js",
            "Express",
            "Azure Function app",
            "Azure Cosmos DB",
            "Postman",
            "PostgreSql",
            "Apollo GraphQL",
            "Prisma",
            "Pothos",
            "Git",
            "react storybook",
          ],
        },
      ],
      overallTechnologies: [
        "React.js",
        "Typescript",
        "Material-UI",
        "Node.js",
        "Express",
        "Azure Function app",
        "Azure Cosmos DB",
        "Postman",
        "PostgreSql",
        "Apollo GraphQL",
        "Prisma",
        "Pothos",
        "Git",
        "react storybook",
      ],
    },
  ],
};
