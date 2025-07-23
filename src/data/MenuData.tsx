import { FaGithub, FaLinkedin, FaQuora } from "react-icons/fa6";

type MenuItem = {
  name: string;
  url: string;
};
type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

export type MenuData = {
  title: string;
  description: string;
  menuItems: MenuItem[];
  socialLinks: SocialLink[];
};

export const menuData = {
  title: "Sanjeet",
  description: "Full Stack Developer",
  menuItems: [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Skills",
      url: "/skills",
    },
    {
      name: "Work",
      url: "/work",
    },
    {
      name: "Experience",
      url: "/experience",
    },
    {
      name: "Resume",
      url: "/resume",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sanjeet-kumar-5a33b77b/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/CodingWithSanjeet",
      icon: <FaGithub />,
    },
    {
      name: "Quora",
      url: "https://www.quora.com/profile/Sanjeet-Kumar-452",
      icon: <FaQuora />,
    },
  ],
};
