export type AboutData = {
  name: string;
  title: string;
  description: {
    text: string;
    beforeTag: boolean;
    afterTag: boolean;
  }[];
  image: string;
  techStack: string[];
  techCategories: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  learningJourney: {
    icon: string;
    title: string;
    content: string;
    borderAccent: "teal" | "blue" | "pink" | "none";
  }[];
  statsData: {
    title: string;
    content: string;
  }[];
  growthData: {
    icon: string;
    title: string;
    content: string;
  }[];
};

export const aboutData: AboutData = {
  name: "Sanjeet Kumar",
  title: "Full Stack Developer",
  description: [
    {
      text: "I’m a highly ambitious Full Stack Developer seeking a position in a well-established IT company where I can contribute to innovative, diverse, and challenging projects using the latest technologies.",
      beforeTag: true,
      afterTag: false,
    },
    {
      text: "I’m a curious and passionate learner who’s always improving my skills and solving problems with a positive attitude. I pick up new tools and technologies quickly and enjoy working on both design and development tasks.",
      beforeTag: false,
      afterTag: false,
    },

    {
      text: "I pride myself on being a quick learner who adapts swiftly to new tools and frameworks.",
      beforeTag: false,
      afterTag: false,
    },
    {
      text: "I work well with others and always try to help my team and clients reach their goals. I’m organized, focused on details, and love working with technology to find smart solutions.",
      beforeTag: false,
      afterTag: false,
    },
    {
      text: "If I had to describe myself in one line: I’m a problem-solver who’s independent, detail-oriented, and always excited to learn more about tech.",
      beforeTag: false,
      afterTag: true,
    },
  ],
  statsData: [
    { title: "6+", content: "Years Experience" },
    { title: "20+", content: "Projects Completed" },
    { title: "15+", content: "Technologies" },
    // { title: "5+", content: "Certifications" }
  ],
  image: "/images/sanjeet.jpg",
  techStack: [
    "React",
    "TypeScript",
    "NodeJS",
    "Express",
    "MongoDB",
    "Data Structure",
    "Azure Cosmos DB",
    "Postman",
    "PostgreSql",
    "Apollo GraphQL",
    "Prisma",
    "Pothos",
    "Git",
    "React Storybook",
    "Javascript",
    "HTML5",
    "CSS3",
    "SCSS",
    "Redux",
    "Material-UI",
    "REST APIs",
    "Jasmine",
    "Selenium",
    "Jira",
    "Confluence",
  ],
  techCategories: {
    frontend: [
      "React",
      "TypeScript",
      "Javascript",
      "Material-UI",
      "HTML",
      "CSS",
      "React Storybook",
      "Redux",
      "React Router",
      "Jest",
    ],
    backend: [
      "Node JS",
      "Express",
      "REST",
      "JSON",
      "Data Structure",
      "Apollo GraphQL",
      "GraphQL",
      "MongoDB",
      "Azure Cosmos DB",
      "PostgreSql",
    ],
    tools: [
      "Git",
      "npm",
      "Unit Test",
      "Jira",
      "Confluence",
      "Azure Cosmos DB",
      "Postman",
      "PostgreSql",
      "Prisma",
      "Pothos",
      "JWT",
      "Cloudinary SDK",
      "Jasmine",
      "Mongoose",
    ],
  },
  learningJourney: [
    {
      icon: "🚀",
      title: "My Journey",
      content:
        "Started as a curious developer, evolved into a full-stack engineer passionate about creating impactful digital experiences.",
      borderAccent: "teal",
    },
    {
      icon: "🎯",
      title: "Current Focus",
      content:
        "Building scalable web applications with modern technologies while mentoring fellow developers and exploring emerging tech trends.",
      borderAccent: "blue",
    },
    {
      icon: "🌟",
      title: "What Drives Me",
      content:
        "The intersection of creativity and technology. I love solving complex problems and turning ideas into reality through code.",
      borderAccent: "pink",
    },
    {
      icon: "🎮",
      title: "Beyond Code",
      content:
        "Gaming enthusiast, coffee connoisseur, and advocate for clean code. Always learning, always growing, always coding.",
      borderAccent: "teal",
    },
  ],
  growthData: [
    {
      icon: "🔮",
      title: "Currently Exploring",
      content:
        "Advanced React patterns, TypeScript, Next.js, AWS Data Engineering, and Cloud Services",
    },
    {
      icon: "🎯",
      title: "Next Goals",
      content:
        "Mastering microservices, Certification in AWS Data Engineering, and contributing to open source projects",
    },
    {
      icon: "💡",
      title: "Philosophy",
      content:
        "Clean code, user-centric design, and sustainable development practices",
    },
  ],
};
