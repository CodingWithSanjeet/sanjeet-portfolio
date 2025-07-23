export const workData = {
  description: "A collection of projects that showcase my journey as a developer. Each project represents a unique challenge and demonstrates different aspects of modern web development, from frontend frameworks to backend APIs.",
  stats: {
    projects: "20+",
    technologies: "15+",
    yearsOfExperience: "6+",
  },
  projects: [
  {
    id: 1,
    name: "⚡ Github Battle App",
    description:
      "A Github Battle app build in ReactJS to see the most popular repos for a variety of languages.",
    tags: ["react", "webpack", "react-router"],
    themeColor: "teal" as const,
    demo: "https://github-users-battle.netlify.app/",
    github: "https://github.com/CodingWithSanjeet/Github-Battle-App",
  },
  {
    id: 2,
    name: "🌐 E-Commerce API",
    description:
      "A robust and feature-rich RESTful API for e-commerce applications built with Node.js, Express, and MongoDB.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    themeColor: "blue" as const,
    demo: "https://ecommerce-rest-api-bmw6.onrender.com/",
    github: "https://github.com/CodingWithSanjeet/ecommerce-rest-api",
  },
  {
    id: 3,
    name: "✨ Email Composer",
    description:
      "A modern, beautiful email sending application built with Node.js and Express.",
    tags: ["Node.js", "Express", "Nodemailer"],
    themeColor: "pink" as const,
    demo: "https://email-composer-f4in.onrender.com/",
    github: "https://github.com/CodingWithSanjeet/email-composer",
  },
  {
    id: 4,
    name: "🚀 File Uploader",
    description:
      "A modern, full-stack Node.js application for uploading and managing product images with a beautiful, professional user interface with cloudinary integration.",
    tags: ["Node.js", "Express", "Multer", "Cloudinary"],
    themeColor: "teal" as const,
    demo: "https://file-upload-app-0gb6.onrender.com/",
    github: "https://github.com/CodingWithSanjeet/file-upload-app",
  },
  {
    id: 5,
    name: "💼 Jobs API",
    description:
      "A RESTful API for managing job applications built with Node.js, Express, and MongoDB. This API allows users to register, authenticate, and manage their job applications with full CRUD operations.",
    tags: ["Node.js", "Express", "MongoDB", "JWT","Swagger UI"],
    themeColor: "blue" as const,
    demo: "https://jobs-api-ib9p.onrender.com",
    github: "https://github.com/CodingWithSanjeet/jobs-api",
  },
  {
    id: 6,
    name: "🔑 TokenVault",
    description:
      "A modern, full-stack Node.js authentication boilerplate with JWT tokens, beautiful UI, and production-ready architecture.",
    tags: ["Node.js", "Express", "MongoDB", "JWT","EJS"],
    themeColor: "pink" as const,
    demo: "https://jobs-api-ib9p.onrender.com",
    github: "https://github.com/CodingWithSanjeet/TokenVault",
  },
  {
    id: 7,
    name: "💎 Shrt.ly URL Shortener",
    description:
      "A full-featured URL shortener built with Node.js and Express. Transform long URLs into short, trackable links with detailed analytics and a beautiful, responsive interface.",
    tags: ["Node.js", "Express", "MongoDB", "JWT","EJS"],
    themeColor: "teal" as const,
    demo: "https://jobs-api-ib9p.onrender.com",
    github: "https://github.com/CodingWithSanjeet/shrtly-url-shortener",
  },
  {
    id: 8,
    name: "📊 SocialFeed",
    description:
      "A modern social media platform that allows users to share posts with images, similar to Instagram or Facebook's feed functionality. ",
    tags: ["Next.js", "Typescript", "React", "Cloudinary", "Sqllite"],
    themeColor: "blue" as const,
    demo: "https://github.com/CodingWithSanjeet/SocialFeed",
    github: "https://github.com/CodingWithSanjeet/SocialFeed",
  },
  {
    id: 9,
    name: "🌟 ClearPress",
    description:
      "A modern news platform built with Next.js 14, featuring server-side rendering, SQLite database, and a clean dark-themed UI.  ",
    tags: ["Next.js", "Typescript", "React", "SQLite"],
    themeColor: "pink" as const,
    demo: "https://github.com/CodingWithSanjeet/ClearPress",
    github: "https://github.com/CodingWithSanjeet/ClearPress",
  },
  {
    id: 10,
    name: "🔥 StackWhiz",
    description:
      "Modern Node.js blog platform with Express & MongoDB. Features responsive design, secure admin panel, and advanced search capabilities. ",
    tags: ["Node.js", "Express", "MongoDB","EJS"],
    themeColor: "teal" as const,
    demo: "https://github.com/CodingWithSanjeet/StackWhiz",
    github: "https://github.com/CodingWithSanjeet/StackWhiz",
  },

  ]
}

export type WorkData = {
  description: string;
  stats: {
    projects: string;
    technologies: string;
    yearsOfExperience: string;
  };
  projects: {
    id: number;
    name: string;
    description: string;
    tags: string[];
    themeColor: "teal" | "blue" | "pink" | "none";
    demo: string;
    github: string;
  }[];
};
