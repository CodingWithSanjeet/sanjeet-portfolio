import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { workData } from "../../../data";
import { Card } from "../../common";
import { HeaderTwo } from "../../common";
import "./Work.scss";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const WorkComponent = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Wait for HeaderTwo component to complete its animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Adjust this timing based on HeaderTwo animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-work section-full">
      <div className="text-zone">
        <header>
          <HeaderTwo
            aria-label="My Portfolio"
            style={{
              margin: 0,
              fontSize: "5rem",
            }}
            beforeTag={true}
            afterTag={true}
            delay={5}
          >
            My Portfolio
          </HeaderTwo>
        </header>

        {/* Conditionally render remaining content after HeaderTwo is done */}
        {showContent && (
          <div className="work-main-container fade-in-up">
            <div className="work-intro">
              <p className="work-description">
                <span className="tag-before">&lt;p&gt;</span>
                 {workData.description}
                <span className="tag-after">&lt;/p&gt;</span>
              </p>
              <div className="work-stats">
                <div className="stat-item">
                  <span className="stat-number">{workData.stats.projects}</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{workData.stats.technologies}</span>
                  <span className="stat-label">Technologies </span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{workData.stats.yearsOfExperience}</span>
                  <span className="stat-label">Years</span>
                </div>
              </div>
            </div>

            <div className="projects-showcase">
              <motion.div 
                className="projects-grid"
                variants={container} 
                initial="hidden" 
                animate="show"
              >
                {workData.projects.map((project) => (
                  <Card key={project.id} data={project} />
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkComponent;
