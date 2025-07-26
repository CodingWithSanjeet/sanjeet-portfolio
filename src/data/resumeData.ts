// Resume Data Configuration
// Update this file with your personal information

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  summary: string;
  experience: {
    company: string;
    position: string;
    duration: string;
    location: string;
    responsibilities: string[];
    clients?: {
      clientName: string;
      clientLogo?: string;
      duration: string;
      role: string;
      responsibilities: string[];
      technologies?: string[];
    }[];
  }[];
  education: {
    institution: string;
    degree: string;
    duration: string;
    gpa?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    date: string;
  }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Sanjeet Kumar",
    title: "Senior Software Engineer",
    email: "sanjeet.kuma.nitt@gmail.com",
    phone: "+91 9035855774",
    location: "Bangalore, India",
    linkedin: "https://www.linkedin.com/in/sanjeet-kumar-nitt/",
    github: "github.com/CodingWithSanjeet",
    portfolio: "https://sanjeet-kumar-portfolio.netlify.app/",
  },

  summary:
    "Passionate Full Stack Developer with 6 years of experience building scalable web applications using modern technologies. Expertise in React, Node.js, TypeScript, and cloud technologies with a strong focus on user experience, performance optimization, and clean code architecture. Proven track record of leading development teams and delivering enterprise-level solutions that serve thousands of users.",

  experience: [
    {
      company: "TekSystems",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      location: "Remote",
      responsibilities: [
        "Built and maintained web applications to help clients manage data and improve business operations.",
        "Created user-friendly front-end interfaces using React, TypeScript, and design libraries like Material-UI and React Spectrum.",
        "Developed backend services with Node.js, Express, Azure Functions, and Cosmos DB to handle large amounts of data.",
        "Integrated third-party APIs and ensured high accuracy and smooth data migration.",
        "Worked in Agile teams to deliver features on time and meet client expectations.",
        "Improved system stability, helping avoid issues during peak times.",
        "Took part in code reviews to keep the code clean and maintain team quality.",
      ],
      clients: [
        {
          clientName: "Adobe Systems",
          duration: "Mar 2024 - Present",
          role: "Full Stack Developer",
          responsibilities: [
            "Developed a full-stack web application for migrating data from multiple CRMs to a centralized CRM, streamlining data integration for clients.",
            "Built a user-friendly front-end interface using React.js and TypeScript, enhancing usability for data migration workflows.",
            "Designed and implemented back-end services with Node.js, Express, Azure Function Apps, and Azure Cosmos DB, processing large-scale data migrations.",
            "Integrated third-party delivery service APIs, ensuring 99.9% data accuracy for seamless data transfer.",
            "Collaborated with Agile teams in 2-week sprints, delivering projects on time and meeting 100% of client specifications.",
            "Ensured zero issues during high-traffic quarter-end by improving RBE service stability and performance",
            "Led code reviews, improving team productivity and code quality.",
            'Received "GRIT Award" for key contributions in stabilizing RBE services during high-volume quarter-end with zero reported issues.',
          ],
          technologies: [
            "React",
            "Node.js",
            "Express.js",
            "Azure CosmosDB",
            "Azure Function App",
            "TypeScript",
            "React Spectrum",
          ],
        },
        {
          clientName: "Best Western",
          duration: "Jul 2022 - Feb 2024",
          role: "Full Stack Developer",
          responsibilities: [
            "Developed a full-stack platform to optimize hotel room pricing by analyzing market trends, competitor rates, and booking behavior for Best Western properties",
            "Built interactive and intuitive front-end dashboards using React, Material-UI, and Highcharts for visualizing complex revenue data",
            "Created reusable chart components with drill-down features, improving analytical depth for end-users",
            "Implemented server-side rendering and data pagination to handle large datasets efficiently",
            "Designed backend services using Node.js and Express.js for smooth data processing and secure API endpoints",
            "Ensured accurate handling of global data by building timezone- and currency-aware validation systems",
            'Received "Spot Award" for exceptional initiative and rapid upskilling in Node.js, enabling successful contribution to complex business product development under tight timelines.',
          ],
          technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Redux",
            "SCSS",
            "Highcharts",
            "Material-UI",
          ],
        },
      ],
    },
    {
      company: "Oracle Corporation",
      position: "Associate Applications Developer",
      duration: "2019 - 2022",
      location: "Bangalore, India",
      responsibilities: [
        "Developed frontend using React.js, Redux, HTML, and CSS to build smooth, responsive interfaces.",
        "Handled backend development using Node.js, Express.js, and MongoDB for API creation and secure data handling.",
        "Used TypeScript to make the code safer and easier to manage.",
        "Followed REST API standards for clear communication between frontend and backend.",
        "Wrote unit tests using Jasmine and Jest, maintaining 90%+ code coverage.",
        "Followed Agile methodology with regular stand-ups and sprint planning.",
        "Implemented UI/UX standardization to align with Redwood theme across domains.",
        "Coordinated with QA team to ensure all acceptance criteria were met before promoting code to the next environment.",
        'Received "Power of One Award – Oracle"for exceptional contribution in enhancing the user interface of the onboarding application, showing strong collaboration, a positive attitude, and going above and beyond to deliver high-quality results.',
      ],
    },
  ],

  education: [
    {
      institution: "National Institute of Technology, Tiruchirappalli",
      degree: "Master of Computer Application",
      duration: "2016 - 2019",
      gpa: "8.3/10",
    },
  ],

  skills: [
    {
      category: "Frontend Technologies",
      items: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "SCSS/Sass",
        "Styled Components",
        "Responsive Design",
        "Material-UI",
        "Tailwind CSS",
        "Redux",
        "Context API",
        "React Spectrum",
      ],
    },
    {
      category: "Backend Technologies",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "JWT Authentication",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "Azure Function App",
        "Jenkins",
        "Webpack",
        "Vite",
        "Jasmine",
        "Postman",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Agile/Scrum",
        "Code Review",
        "Mentoring",
        "Problem Solving",
        "Project Management",
        "Technical Documentation",
        "Cross-functional Collaboration",
      ],
    },
  ],

  projects: [
    {
      name: "Interactive Portfolio Website",
      description:
        "Modern responsive portfolio built with React and TypeScript featuring smooth animations, dark theme, and interactive components. Includes contact form with email integration and downloadable resume functionality.",
      technologies: [
        "React",
        "TypeScript",
        "SCSS",
        "Styled Components",
        "EmailJS",
        "Framer Motion",
      ],
      link: "github.com/sanjeekumar/portfolio",
    },
    {
      name: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with shopping cart, payment integration, admin dashboard, and inventory management. Features real-time updates and mobile-responsive design.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe API",
        "Redux",
        "Express.js",
      ],
      link: "github.com/sanjeekumar/ecommerce-platform",
    },
    {
      name: "Shrt.ly URL Shortener",
      description:
        "A full-featured URL shortener built with Node.js and Express. Transform long URLs into short, trackable links with detailed analytics and a beautiful, responsive interface.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "EJS"],
      link: "github.com/CodingWithSanjeet/shrtly-url-shortener",
    },
  ],

  certifications: [
    {
      name: "Server-side Development with NodeJS, Express and MongoDB",
      issuer: "Coursera",
      date: "2021",
    },
    {
      name: "What is Generative AI?",
      issuer: "LinkedIn",
      date: "2025",
    },
  ],
};

export const resumeDataU: ResumeData = {
  personalInfo: {
    name: "Sanjeet Kumar",
    title: "Senior Software Engineer",
    email: "sanjeet.kuma.nitt@gmail.com",
    phone: "+91 9876543210",
    location: "Bangalore, India",
    linkedin: "https://www.linkedin.com/in/sanjeet-kumar-nitt/",
    github: "github.com/CodingWithSanjeet",
    portfolio: "https://sanjeet-kumar-portfolio.netlify.app/",
  },

  summary:
    "Full-stack MERN developer with 6 years of experience building web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in creating user-friendly front ends, building APIs, and working with databases. Experienced in Agile teams, writing clean code, and delivering projects on time. Quick learner, team player, and focused on building fast and reliable apps.",

  experience: [
    {
      company: "TekSystems",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      location: "Remote",
       responsibilities: [
        "Built and maintained web applications to help clients manage data and improve business operations.",
        "Created user-friendly front-end interfaces using React, TypeScript, and design libraries like Material-UI and React Spectrum.",
        "Developed backend services with Node.js, Express, Azure Functions, and Cosmos DB to handle large amounts of data.",
        "Integrated third-party APIs and ensured high accuracy and smooth data migration.",
        "Worked in Agile teams to deliver features on time and meet client expectations.",
        "Improved system stability, helping avoid issues during peak times.",
        "Took part in code reviews to keep the code clean and maintain team quality.",
      ],
      clients: [
        {
          clientName: "Adobe Systems",
          duration: "Mar 2024 - Present",
          role: "Full Stack Developer",
          responsibilities: [
            "Needed a centralized system to migrate and manage data from various CRM platforms.",
			"Developed a full-stack application to automate and streamline CRM data migration.",
			"Built a responsive front-end using React.js and TypeScript, and backend services using Node.js, Express, Azure Function Apps, and Cosmos DB.",
			'Received "GRIT Award" for stabilizing RBE services during high-volume quarter-end.',
			// "Tools used: React.js, Redux, Node.js, Express, Azure Cosmos DB, Azure Function App, Azure Logic App, TypeScript, React Spectrum",
          ],
          technologies: [
            "React",
            "Node.js",
            "Express.js",
            "Azure CosmosDB",
            "Azure Function App",
            "TypeScript",
            "React Spectrum",
          ],
        },
        {
          clientName: "Best Western",
          duration: "Jul 2022 - Feb 2024",
          role: "Full Stack Developer",
          responsibilities: [
            "Needed a  dynamic pricing system for hotel room rates based on market data.",
            "Designed and developed dashboards for real-time analytics.",
            "Built intuitive front-end dashboards using React and Highcharts, and backend APIs using Node.js and Express. Ensured performance with server-side rendering and efficient data handling.",
            'Received "Spot Award" for quick learning and contribution to Node.js projects.',
            // "Tools used: React.js, Redux,  Material-UI, Highcharts, Node.js, Express.js, TypeScript, Apollo Client, GraphQL, PostgreSQL, AWS Redshift",
          ],
          technologies: [
            "React",
			"Redux",
            "TypeScript",
            "Node.js",
            "GraphQL",
            "Material-UI",
            "Highcharts",
            "PostgreSQL",
			"AWS Redshift"
          ],
        },
      ],
    },
    {
      company: "Oracle Corporation",
      position: "Associate Applications Developer",
      duration: "2019 - 2022",
      location: "Bangalore, India",
      responsibilities: [
        "The banking application needed an improved onboarding system to open different types of accounts like Savings, Business Loan, and Vehicle Loan, based on the setup done in the Business Product Configuration screen.",
        "I designed and developed several user-friendly pages that followed Oracle’s Redwood theme. I ensured better code quality by writing unit test cases, covering more than 90% of the code..",
        "Improved the user experience and made account creation easier and more flexible. Helped the team deliver a more modern, stable, and consistent application.",
        'Received the "Power of One Award" for significantly improving the onboarding interface, showing a strong team spirit, and consistently going beyond expectations.',
      ],
    },
  ],

  education: [
    {
      institution: "National Institute of Technology, Tiruchirappalli",
      degree: "Master of Computer Application",
      duration: "2016 - 2019",
      gpa: "8.3/10",
    },
  ],

  skills: [
    {
      category: "Frontend Technologies",
      items: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "SCSS/Sass",
        "Styled Components",
        "Responsive Design",
        "Material-UI",
        "Tailwind CSS",
        "Redux",
        "Context API",
        "React Spectrum",
      ],
    },
    {
      category: "Backend Technologies",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "JWT Authentication",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "Azure Function App",
        "Jenkins",
        "Webpack",
        "Vite",
        "Jasmine",
        "Postman",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Agile/Scrum",
        "Code Review",
        "Mentoring",
        "Problem Solving",
        "Project Management",
        "Technical Documentation",
        "Cross-functional Collaboration",
      ],
    },
  ],

  projects: [
    {
      name: "Interactive Portfolio Website",
      description:
        "Modern responsive portfolio built with React and TypeScript featuring smooth animations, dark theme, and interactive components. Includes contact form with email integration and downloadable resume functionality.",
      technologies: [
        "React",
        "TypeScript",
        "SCSS",
        "Styled Components",
        "EmailJS",
        "Framer Motion",
      ],
      link: "github.com/sanjeekumar/portfolio",
    },
    {
      name: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with shopping cart, payment integration, admin dashboard, and inventory management. Features real-time updates and mobile-responsive design.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe API",
        "Redux",
        "Express.js",
      ],
      link: "github.com/sanjeekumar/ecommerce-platform",
    },
    {
      name: "Shrt.ly URL Shortener",
      description:
        "A full-featured URL shortener built with Node.js and Express. Transform long URLs into short, trackable links with detailed analytics and a beautiful, responsive interface.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "EJS"],
      link: "github.com/CodingWithSanjeet/shrtly-url-shortener",
    },
  ],

  certifications: [
    {
      name: "Server-side Development with NodeJS, Express and MongoDB",
      issuer: "Coursera",
      date: "2021",
    },
    {
      name: "What is Generative AI?",
      issuer: "LinkedIn",
      date: "2025",
    },
  ],
};
