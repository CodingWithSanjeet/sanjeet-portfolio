export interface ExperienceDetailData {
  companyName: string;
  overview: {
    description: string;
    industry: string;
    teamSize: string;
    location: string;
    employmentType: string;
  };
  role: {
    title: string;
    level: string;
    department: string;
    reportingTo: string;
    responsibilities: string[];
  };
  projects: {
    title: string;
    description: string;
    duration: string;
    role: string;
    teamSize: number;
    technologies: string[];
    challenges: string[];
    solutions: string[];
    outcomes: {
      metric: string;
      value: string;
    }[];
  }[];
  technologies: {
    category: string;
    skills: {
      name: string;
      proficiency: number; // 1-10
      yearsUsed: string;
    }[];
  }[];
  achievements: {
    title: string;
    description: string;
    impact: string;
    recognition?: string;
    href?: string;
    download?: string;
  }[];
  learnings: {
    technical: string[];
    professional: string[];
    leadership: string[];
  };
  testimonials?: {
    quote: string;
    author: string;
    position: string;
  }[];
}

export const experienceDetailsData: Record<string, ExperienceDetailData> = {
  "Oracle Corporation": {
    companyName: "Oracle Corporation",
    overview: {
      description:
        "Global leader in cloud applications and platform services, providing enterprise software solutions to organizations worldwide.",
      industry: "Enterprise Software & Cloud Computing",
      teamSize: "12-15 developers",
      location: "Bangalore, India",
      employmentType: "Full-time",
    },
    role: {
      title: "Associate Applications Developer",
      level: "Entry-Level",
      department: "Financial Services Technology",
      reportingTo: "Senior Technical Lead",
      responsibilities: [
        "Developed responsive and modular UI components using React and Redux",
        "Built and maintained scalable RESTful APIs with Node.js and Express",
        "Collaborated with product owners and designers to translate business requirements into technical features",
        "Performed code reviews, enforced TypeScript best practices, and mentored junior developers",
        "Optimized frontend performance and backend response time for seamless user experience",
        "Wrote unit and integration tests using Jasmine and Jest to ensure code reliability",
        "Actively participated in agile ceremonies including sprint planning, reviews, and retrospectives",
      ],
    },
    projects: [
      {
        title: "Core Banking Application Modernization",
        description:
          "Led the modernization of legacy banking systems to support real-time transaction processing, enhanced security features, and improved user experience for retail banking operations.",
        duration: "18 months",
        role: "Lead Developer",
        teamSize: 8,
        technologies: [
          "Node.js",
          "TypeScript",
          "React.js",
          "Redux",
          "Express.js",
          "MongoDB",
          "REST APIs",
          "Jasmine",
          "Jest",
          "HTML5 & CSS3",
          "Git",
          "ESLint & Prettier",
        ],
        challenges: [
          "Integrating modern React-Redux frontend with legacy backend services",
          "Managing state efficiently in a large-scale, data-intensive UI",
          "Ensuring consistent performance across multiple browsers and devices",
          "Maintaining high test coverage and code quality in a fast-paced development cycle",
        ],
        solutions: [
          "Refactored frontend to modular React components and integrated Redux for scalable state management",
          "Introduced lazy loading and code splitting to improve initial load time and user experience",
          "Implemented cross-browser testing and responsive design principles for consistent UI performance",
          "Developed a robust testing framework using Jasmine and Jest, achieving 90%+ unit test coverage",
        ],
        outcomes: [
          {
            metric: "Page Load Performance",
            value: "40% faster rendering with React and lazy loading",
          },
          {
            metric: "Application Uptime",
            value: "99.9% achieved through robust deployment strategy",
          },
          {
            metric: "Code Coverage",
            value: "92% using Jasmine and Jest for frontend and API testing",
          },
          {
            metric: "User Satisfaction",
            value: "85% improvement based on feedback from UI enhancements",
          },
        ],
      },
    ],
    technologies: [
      {
        category: "Programming Languages",
        skills: [
          { name: "JavaScript", proficiency: 8, yearsUsed: "2+ years" },
          { name: "TypeScript", proficiency: 7, yearsUsed: "1.5 years" },
          { name: "HTML/CSS", proficiency: 8, yearsUsed: "2+ years" },
        ],
      },
      {
        category: "Frameworks & Libraries",
        skills: [
          { name: "React.js", proficiency: 8, yearsUsed: "3 years" },
          { name: "Redux", proficiency: 7, yearsUsed: "3 years" },
          { name: "Node.js", proficiency: 8, yearsUsed: "3 years" },
          { name: "Express.js", proficiency: 7, yearsUsed: "3 years" },
        ],
      },
      {
        category: "Databases",
        skills: [
          { name: "MongoDB", proficiency: 7, yearsUsed: "3 years" },
          { name: "PostgreSQL", proficiency: 6, yearsUsed: "3 years" },
        ],
      },
      {
        category: "Tools & Technologies",
        skills: [
          { name: "Git", proficiency: 8, yearsUsed: "3 years" },
          { name: "Jasmine", proficiency: 7, yearsUsed: "3 years" },
          { name: "Jest", proficiency: 6, yearsUsed: "3 years" },
          { name: "Jenkins", proficiency: 6, yearsUsed: "3 years" },
          { name: "ESLint & Prettier", proficiency: 7, yearsUsed: "1.5 years" },
        ],
      },
    ],
    achievements: [
      {
        title: "Power of One",
        description:
          "Successfully enhanced the User Interface of the Oracle FLEXCUBE Onboarding Application, delivering a significantly improved user experience. Demonstrated continuous effort, tireless dedication, and a strong willingness to take on new challenges with a positive attitude. Recognized for consistently going above and beyond, and for exemplifying a spirit of collaboration and cooperation throughout the project.",
        impact:
          "Enabled better accessibility across devices, contributing to a measurable increase in application usage.",
        recognition: "Received 'Power of One' Award from Oracle India",
        href: "/certificates/Power-of-One-Award-Certificate.jpg",
        download: "Power-of-One-Award-Certificate.jpg",
      },
    ],
    learnings: {
      technical: [
        "Mastered building scalable full-stack applications using Node.js and TypeScript",
        "Gained deep expertise in developing interactive UIs with React and state management using Redux",
        "Learned advanced JavaScript concepts and TypeScript typing for better code reliability and maintainability",
        "Improved unit testing skills using Jasmine, ensuring robust and testable components and APIs",
      ],
      professional: [
        "Enhanced problem-solving skills by debugging complex frontend-backend integration issues",
        "Improved communication by collaborating closely with product managers, designers, and QA teams",
        "Learned to manage code quality and technical debt in fast-paced agile environments",
        "Developed a strong ability to analyze and optimize app performance across browsers and devices",
      ],
      leadership: [
        "Mentored team members in React, Redux, and TypeScript best practices",
        "Led discussions on technical design and architectural improvements for reusable components",
        "Coordinated across frontend and backend teams to ensure seamless feature delivery",
        "Took ownership of key modules, from planning to deployment and post-release support",
      ],
    },
    testimonials: [
      {
        quote:
          "Sanjeet consistently delivered high-quality code and was instrumental in our banking application's success. His attention to detail and problem-solving skills made him a valuable team member.",
        author: "Vikash Anand",
        position: "Senior Application Engineer, Oracle",
      },
    ],
  },

  "Best Western": {
    companyName: "Best Western",
    overview: {
      description:
        "Leading hospitality company providing innovative solutions for hotel revenue optimization and guest experience enhancement across global hotel properties.",
      industry: "Hospitality Technology",
      teamSize: "8-12 developers",
      location: "Phoenix, Arizona (Remote)",
      employmentType: "Contract",
    },
    role: {
      title: "Full-Stack Developer",
      level: "Senior",
      department: "Revenue Management Technology",
      reportingTo: "Engineering Manager",
      responsibilities: [
        "Developed end-to-end web applications using React and Node.js",
        "Built analytics dashboards for revenue optimization and market insights",
        "Designed and implemented RESTful APIs for hotel booking systems",
        "Integrated third-party APIs for pricing intelligence and market data",
        "Optimized frontend performance and implemented responsive design",
        "Collaborated with data scientists to implement machine learning models",
      ],
    },
    projects: [
      {
        title: "Revenue Optimization Platform",
        description:
          "Built a comprehensive platform that analyzes market trends, competitor pricing, and booking patterns to optimize hotel room rates and maximize revenue across Best Western properties.",
        duration: "12 months",
        role: "Full-Stack Developer",
        teamSize: 12,
        technologies: [
          "React",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Redux",
          "Material-UI",
          "Highcharts",
          "AWS",
        ],
        challenges: [
          "Processing and visualizing large datasets in real-time",
          "Creating intuitive interfaces for complex revenue data",
          "Integrating multiple third-party pricing APIs",
          "Ensuring data accuracy across different time zones and currencies",
        ],
        solutions: [
          "Implemented server-side rendering and data pagination for performance",
          "Created reusable chart components with drill-down capabilities",
          "Built robust API integration layer with retry mechanisms",
          "Developed automated data validation and error handling systems",
        ],
        outcomes: [
          { metric: "Revenue Increase", value: "25% average" },
          { metric: "User Adoption", value: "Users Increased" },
        ],
      },
    ],
    technologies: [
      {
        category: "Frontend Technologies",
        skills: [
          { name: "React", proficiency: 9, yearsUsed: "2 years" },
          { name: "TypeScript", proficiency: 8, yearsUsed: "2 years" },
          { name: "JavaScript ES6+", proficiency: 9, yearsUsed: "2 years" },
          { name: "Redux", proficiency: 8, yearsUsed: "1.5 years" },
          { name: "Material-UI", proficiency: 8, yearsUsed: "1.5 years" },
          { name: "Highcharts", proficiency: 7, yearsUsed: "1.5 years" },
        ],
      },
      {
        category: "Backend Technologies",
        skills: [
          { name: "Node.js", proficiency: 8, yearsUsed: "2 years" },
          { name: "Express.js", proficiency: 8, yearsUsed: "2 years" },
          { name: "PostgreSQL", proficiency: 6, yearsUsed: "1 year" },
        ],
      },
      {
        category: "Cloud & DevOps",
        skills: [
          { name: "AWS", proficiency: 7, yearsUsed: "1.5 years" },
          { name: "CI/CD", proficiency: 6, yearsUsed: "1 year" },
        ],
      },
    ],
    achievements: [],
    learnings: {
      technical: [
        "Mastered modern React patterns including hooks and context API",
        "Developed expertise in data visualization and real-time applications",
        "Learned to optimize applications for large-scale data processing",
        "Gained experience with cloud deployment and AWS services",
      ],
      professional: [
        "Enhanced skills in translating business requirements into technical solutions",
        "Improved understanding of hospitality industry and revenue management",
        "Developed strong API design and integration capabilities",
        "Learned to work effectively in remote, distributed teams",
      ],
      leadership: [
        "Led frontend development initiatives and established coding standards",
        "Mentored junior developers in React and modern frontend practices",
        "Collaborated with product managers to define technical roadmaps",
      ],
    },
    testimonials: [
      {
        quote:
          "Working with you has been a truly rewarding experience. You brought fresh ideas and a positive attitude that inspired the entire team. Your willingness to embrace new opportunities made a meaningful impact, and your contributions have undoubtedly elevated our work. Keep up the great momentum — your dedication will surely take you to new heights. Wishing you all the very best in your future endeavors!",
        author: "Heena Patel",
        position: "Senior IT Engineer, Best Western",
      },
      {
        quote:
          "Sanjeet did a great job working on the BestREV2.0 project. His work on the responsive mobile solution was impressive and will surely help more users engage with the platform. He’s a talented and dedicated developer, and we know he has a bright future ahead. We’ll miss having him on the team. Wishing him all the best in his next journey.",
        author: "Sasirajaan Durairaj",
        position: "Product Leader, Best Western",
      },
    ],
  },

  Adobe: {
    companyName: "Adobe",
    overview: {
      description:
        "Global leader in digital media and digital marketing solutions, empowering creators and businesses to deliver exceptional digital experiences.",
      industry: "Digital Media & Marketing Technology",
      teamSize: "12-15 developers",
      location: "Bangalore, India (Hybrid)",
      employmentType: "Contract",
    },
    role: {
      title: "Senior Software Engineer",
      level: "Senior",
      department: "Data Platform Engineering",
      reportingTo: "Principal Software Engineer",
      responsibilities: [
        "Develop enterprise-scale CRM integration platforms synchronizing millions of opportunity records across Salesforce, Workfront, Magento, Marketo, and FrameIO systems",
        "Lead development of cloud-native microservices using Azure Functions, Cosmos DB, and event-driven architecture for real-time data processing with 10-second polling intervals",
        "Design and implement business rule management systems using DMN 1.5/1.3 standards with visual editors for non-technical users to create complex decision logic",
        "Build comprehensive enterprise workflow and approval management platforms with multi-tenant architecture supporting role-based access control across organizational divisions",
        "Develop sophisticated React/TypeScript applications using Adobe Spectrum Design System with real-time collaboration features and responsive enterprise UX",
        "Implement secure authentication and authorization systems using Adobe IMS with token management and session handling across distributed microservices",
        "Establish automated message queue processing with Hoolihan for reliable async communication and bidirectional sync with conflict resolution and audit trails",
        "Mentor development teams and conduct technical design reviews for scalable enterprise solutions serving Adobe's global sales operations",
      ],
    },
    projects: [
      {
        title: "Enterprise Opportunity Sync Platform",
        description:
          "Built a comprehensive real-time opportunity synchronization platform that integrates multiple CRM systems (Workfront, Magento, Marketo, FrameIO) with Adobe Corp SFDC, processing millions of opportunity records with automated bidirectional sync, conflict resolution, and audit trails across distributed Azure Function Apps.",
        duration: "8+ months",
        role: "Full-Stack Developer",
        teamSize: 12,
        technologies: [
          "Azure Functions",
          "Azure Cosmos DB",
          "Hoolihan Message Queue",
          "Salesforce (SFDC) API",
          "Adobe IMS Authentication",
          "Timer Triggers",
          "CosmosDB Change Feed",
          "REST APIs",
          "JSON Payload Processing",
          "Event-Driven Architecture",
          "Workfront API",
          "Magento API",
          "Marketo API",
          "FrameIO API",
        ],
        challenges: [
          "Synchronizing opportunity data across 4 different CRM systems with varying data models",
          "Managing real-time bidirectional sync without data conflicts or duplication",
          "Handling high-volume message processing with 10-second intervals across multiple services",
          "Ensuring data consistency across distributed Azure Function Apps and Cosmos DB",
          "Implementing reliable writeback mechanisms to source CRMs after SFDC processing",
          "Managing IMS token refresh and authentication across microservices architecture",
        ],
        solutions: [
          "Architected event-driven microservices using Azure Functions with timer and CosmosDB triggers",
          "Implemented Hoolihan message queue for reliable async communication between services",
          "Built automated payload generation services for each CRM with 10-second polling intervals",
          "Created CosmosDB change feed triggers for real-time opportunity update propagation",
          "Designed robust writeback tracking system with results logging and audit trails",
          "Developed centralized IMS authorization service with 5-minute token refresh cycles",
        ],
        outcomes: [
          { metric: "CRM Integration", value: "4 systems unified" },
          { metric: "Processing Frequency", value: "Every 10 seconds" },
          { metric: "Data Sync Latency", value: "< 30 seconds" },
          { metric: "Message Processing", value: "5-minute ROQ cycles" },
          { metric: "Writeback Success Rate", value: "99.5%" },
          { metric: "System Availability", value: "99.9%" },
          { metric: "Opportunity Records", value: "1M+ processed Monthly" },
        ],
      },
      {
        title: "BrainSales Enterprise Rule Engine",
        description:
          "Built a comprehensive enterprise-grade business rule management platform using DMN (Decision Model and Notation) standards, enabling non-technical users to create, validate, and manage complex business decision logic through a visual interface with multi-tenant architecture and role-based access control.",
        duration: "3+ months",
        role: "Full-Stack Developer",
        teamSize: 5,
        technologies: [
          "React 18",
          "TypeScript",
          "Redux Toolkit",
          "Adobe React Spectrum",
          "Material-UI",
          "DMN 1.5/1.3 Standards",
          "KIE Tools DMN Editor",
          "IBM BAMOE DMN Editor",
          "Adobe IMS Authentication",
          "Node.js",
          "Docker",
          "Azure",
          "Git Integration",
          "Axios",
          "Jest",
        ],
        challenges: [
          "Implementing complex DMN 1.5 to 1.3 compatibility layer for legacy systems",
          "Building real-time rule validation with polling mechanisms for async processing",
          "Creating multi-tenant architecture with granular role-based permissions",
          "Integrating sophisticated visual DMN editor with enterprise authentication",
          "Managing complex state synchronization between editor and validation systems",
          "Implementing Git-based rule versioning and deployment workflows",
        ],
        solutions: [
          "Developed robust DMN namespace transformation service for version compatibility",
          "Implemented intelligent polling system with 30-second intervals for validation status tracking",
          "Built comprehensive RBAC system with 20+ granular permissions for different user roles",
          "Created seamless Adobe IMS integration with secure session management and token handling",
          "Architected centralized RuleEngineService with singleton pattern for consistent API management",
          "Designed tenant-specific workspace isolation with independent rule management",
        ],
        outcomes: [
          { metric: "Rule Processing Time", value: "< 2 seconds" },
          { metric: "DMN Validation Accuracy", value: "99.8%" },
          { metric: "Multi-tenant Support", value: "10+ teams" },
          { metric: "User Permission Granularity", value: "20+ role types" },
          { metric: "Rule Version Control", value: "Full Git integration" },
          { metric: "Editor Performance", value: "Real-time collaboration" },
        ],
      },
      {
        title: "Adobe Approval Process Management System",
        description:
          "Built a comprehensive enterprise-grade approval workflow management platform that streamlines organizational approval processes across multiple business areas. The system enables real-time approval tracking, automated workflow routing, and scalable multi-tenant architecture for Adobe's enterprise sales operations.",
        duration: "4+ months",
        role: "Full-Stack Developer",
        teamSize: 5,
        technologies: [
          "React 19",
          "TypeScript",
          "Adobe Spectrum Design System",
          "Redux Toolkit",
          "Material-UI",
          "TipTap Rich Text Editor",
          "Axios",
          "React Router",
          "Adobe IMS",
          "Docker",
          "Nginx",
          "Jest",
          "AWS",
        ],
        challenges: [
          "Managing complex multi-step approval workflows with parallel and sequential routing",
          "Implementing real-time collaboration features with role-based access control",
          "Designing scalable multi-tenant architecture supporting different organizations",
          "Integrating with external rule engines and maintaining data consistency",
          "Creating responsive UI with complex data visualization and workflow builders",
        ],
        solutions: [
          "Developed dynamic workflow builder with drag-and-drop interface supporting complex approval chains",
          "Implemented real-time state management using Redux Toolkit with optimistic updates",
          "Created granular role-based permission system with protected routes and component-level access control",
          "Built iframe integration architecture for seamless rule engine connectivity",
          "Designed component-based architecture using Adobe Spectrum for consistent enterprise UX",
        ],
        outcomes: [
          { metric: "User Management", value: "Multi-tenant support" },
          {
            metric: "Approval Processing",
            value: "Real-time workflow execution",
          },
          {
            metric: "System Architecture",
            value: "Scalable microservice integration",
          },
          { metric: "User Experience", value: "Mobile-responsive design" },
          { metric: "Security", value: "Enterprise-grade authentication" },
        ],
      },
    ],
    technologies: [
      {
        category: "Frontend Technologies",
        skills: [
          { name: "React 18/19", proficiency: 9, yearsUsed: "1+ years" },
          { name: "TypeScript", proficiency: 9, yearsUsed: "1+ years" },
          { name: "Redux Toolkit", proficiency: 9, yearsUsed: "1+ years" },
          {
            name: "Adobe Spectrum Design System",
            proficiency: 9,
            yearsUsed: "1+ years",
          },
          { name: "Material-UI", proficiency: 8, yearsUsed: "1+ years" },
          { name: "React Router", proficiency: 8, yearsUsed: "1+ years" },
          {
            name: "TipTap Rich Text Editor",
            proficiency: 7,
            yearsUsed: "6 months",
          },
          { name: "Axios", proficiency: 8, yearsUsed: "1+ years" },
          { name: "Jest", proficiency: 8, yearsUsed: "1+ years" },
        ],
      },
      {
        category: "Cloud & Backend Technologies",
        skills: [
          { name: "Azure Functions", proficiency: 9, yearsUsed: "1+ years" },
          { name: "Azure Cosmos DB", proficiency: 9, yearsUsed: "1+ years" },
          { name: "Node.js", proficiency: 8, yearsUsed: "1+ years" },
          { name: "Azure", proficiency: 8, yearsUsed: "1+ years" },
          { name: "AWS", proficiency: 7, yearsUsed: "6 months" },
          { name: "Docker", proficiency: 8, yearsUsed: "1+ years" },
          { name: "Nginx", proficiency: 7, yearsUsed: "6 months" },
        ],
      },
      {
        category: "APIs & Integration",
        skills: [
          {
            name: "Salesforce (SFDC) API",
            proficiency: 9,
            yearsUsed: "1+ years",
          },
          {
            name: "Adobe IMS Authentication",
            proficiency: 9,
            yearsUsed: "1+ years",
          },
          { name: "REST APIs", proficiency: 9, yearsUsed: "1+ years" },
          { name: "Workfront API", proficiency: 8, yearsUsed: "1+ years" },
          { name: "Magento API", proficiency: 8, yearsUsed: "1+ years" },
          { name: "Marketo API", proficiency: 8, yearsUsed: "1+ years" },
          { name: "FrameIO API", proficiency: 8, yearsUsed: "1+ years" },
          {
            name: "JSON Payload Processing",
            proficiency: 9,
            yearsUsed: "1+ years",
          },
        ],
      },
      {
        category: "Specialized Technologies",
        skills: [
          {
            name: "DMN 1.5/1.3 Standards",
            proficiency: 9,
            yearsUsed: "1 year",
          },
          {
            name: "Hoolihan Message Queue",
            proficiency: 9,
            yearsUsed: "1+ years",
          },
          {
            name: "CosmosDB Change Feed",
            proficiency: 8,
            yearsUsed: "1+ years",
          },
          {
            name: "Event-Driven Architecture",
            proficiency: 9,
            yearsUsed: "1+ years",
          },
          { name: "Timer Triggers", proficiency: 8, yearsUsed: "1+ years" },
          { name: "KIE Tools DMN Editor", proficiency: 8, yearsUsed: "1 year" },
          { name: "IBM BAMOE DMN Editor", proficiency: 8, yearsUsed: "1 year" },
          { name: "Git Integration", proficiency: 8, yearsUsed: "1+ years" },
        ],
      },
    ],
    achievements: [
      {
        title: "GRIT Award",
        description:
          "Honored for helping keep RBE services stable and running smoothly. Played a key role in adding new features that made the process better and faster. Helped achieve zero issues during a busy quarter-end, even with high traffic. Known for following strong development practices and always looking for ways to improve.",
        impact:
          "Ensured 100% uptime during peak usage with zero issues reported. Improved process efficiency and reduced support needs through new feature development.",
        recognition: "Received 'GRIT Award' from Teksystems",
        href: "/certificates/GRIT-Award-Certificate.jpg",
        download: "GRIT-Award-Certificate.jpg",
      },
    ],
    learnings: {
      technical: [
        "Built event-driven microservices using Azure Functions and Cosmos DB",
        "Worked with DMN standards to create visual business rule systems",
        "Designed multi-tenant systems with secure role-based access control",
        "Gained hands-on experience with Adobe tools like IMS login and Spectrum Design System",
        "Designed workflows that support parallel and sequential approvals in real time",
      ],
      professional: [
        "Learned how sales and CRM systems work across global teams at Adobe",
        "Balanced speed and reliability while processing millions of records",
        "Designed easy-to-use interfaces for rule creation and approval systems",
        "Solved tough data integration issues across different CRM systems",
      ],
      leadership: [
        "Set coding standards for microservices, auth, and data sync",
        "Mentored teammates on Azure, DMN, and Adobe tools",
        "Promoted modern practices like event-based design and testing",
        "Built rules to keep multi-tenant systems secure and fast",
      ],
    },
    testimonials: [],
  },
};

// Helper function to get experience details by company name
export const getExperienceDetails = (
  companyName: string
): ExperienceDetailData | null => {
  const normalizedCompanyName = Object.keys(experienceDetailsData).find((key) =>
    key
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(companyName?.toLowerCase().replace(/\s+/g, "") || "")
  );

  return normalizedCompanyName
    ? experienceDetailsData[normalizedCompanyName]
    : null;
};

// Helper functions for backward compatibility
export const getProjectDescription = (companyName: string): string => {
  const details = getExperienceDetails(companyName);
  return (
    details?.projects[0]?.description ||
    "Contributed to various projects focusing on modern web development and software engineering best practices."
  );
};

export const getTechnologies = (companyName: string): string[] => {
  const details = getExperienceDetails(companyName);
  if (!details)
    return ["JavaScript", "React", "Node.js", "MongoDB", "TypeScript"];

  return details.technologies.flatMap((category) =>
    category.skills.map((skill) => skill.name)
  );
};

export const getAchievements = (companyName: string): string[] => {
  const details = getExperienceDetails(companyName);
  if (!details)
    return [
      "Contributed to scalable web application development",
      "Implemented modern development practices and methodologies",
      "Collaborated effectively in cross-functional teams",
      "Delivered high-quality software solutions on time",
    ];

  return details.achievements.map((achievement) => achievement.description);
};
