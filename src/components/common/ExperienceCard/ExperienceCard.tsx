import React from "react";
import "./ExperienceCard.scss";

type ExperienceCardProps = {
  title: string;
  companyName: string;
  time: string;
  desc: string;
};
const ExperienceCard = ({ title, companyName, time, desc }: ExperienceCardProps) => {
  return (
    <div className="work-card">
      <header>{title}</header>
      <section>
        {companyName}
        <time>{time}</time>
      </section>
      <footer>{desc}</footer>
    </div>
  );
};

export default ExperienceCard;
