import React, { useEffect, useState } from "react";
import { skillsData } from "../../../data";
import { highlightText } from "../../../utils/keywordHighlighter";
import { HeaderTwo, SectionContainer } from "../../common";
import { Link } from "react-router-dom";
import "./Skills.scss";

const Skills = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // HeaderTwo has delay={15} for the second one, plus animation time
    // Wait for both HeaderTwo components to complete their animations
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Adjust this timing based on HeaderTwo animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="page-skills section-full">
        <div className="text-zone">
          <header>
            {skillsData.pageTitle.map((title, index) => (
              <HeaderTwo
                key={index}
                aria-label={title}
                style={{
                  margin: 0,
                  fontSize: "5rem",
                  lineHeight: "5rem",
                }}
                beforeTag={index === 0}
                afterTag={index === 1}
                delay={index === 0 ? 5 : 15}
              >
                {title}
              </HeaderTwo>
            ))}
          </header>
          
          {/* Conditionally render remaining content after HeaderTwo is done */}
          {showContent && (
            <div className="skills-main-container fade-in-up">
              
              {/* Company Experience Section - Horizontal Layout */}
              <SectionContainer 
                title="Enterprise Experience" 
                icon="🏢"
                sparkles={["✨", "⭐", "💎"]}
                animation="slide-in-left"
                className="company-experience-section"
              >
                <div className="companies-horizontal">
                  {skillsData.enterpriseExperience.map((experience, index) => (
                    <div className={`company-card-compact ${experience.className}`} key={index}>
                      <div className="company-left">
                        <img src={experience.logo} alt={experience.companyName} className="company-logo-small" />
                        <div className="company-details">
                          <h4>{experience.companyName}</h4>
                          <p>{experience.jobTitle}</p>
                          <span className="duration">{experience.duration}</span>
                          <br />
                          <Link to={experience.redirectLink} rel="noopener noreferrer">Experience Details</Link>
                        </div>
                      </div>
                      <div className="company-right">
                        <div className="tech-badge">{experience.businessTitle}</div>
                        <div className="achievement-mini">{experience.projectTitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionContainer>

              {/* Skills Content Section */}
              <SectionContainer
                title="Technical Expertise"
                icon="🚀"
                sparkles={["⚡", "🔥", "💻"]}
                animation="slide-in-right"
                className="skills-content-main"
              >
                <div className="skills-grid-layout">
                  <div className="skills-description">
                    {skillsData.technicalExpertise.content.map((item, index) => (
                      <React.Fragment key={index}>
                        {index === 0 ? (
                          <div 
                            className="professional-title highlighted-content"
                            style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}
                          >
                            {item.beforeTag && <span className="tag-before">&lt;p&gt;</span>}
                            {item.text}
                            {item.afterTag && <span className="tag-after">&lt;/p&gt;</span>}
                          </div>
                        ) : (
                          <div 
                            className="content-paragraph highlighted-content"
                            style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}
                          >
                            {item.beforeTag && <span className="tag-before">&lt;p&gt;</span>}
                            {highlightText(item.text)}
                            {item.afterTag && <span className="tag-after">&lt;/p&gt;</span>}
                          </div>
                        )}
                        {item.subText && (
                          <ul className="tech-skills-list">
                            {item.subText.map((subItem, subIndex) => (
                              <li key={subIndex}>{index === 0 ? subItem : highlightText(subItem)}</li>
                            ))}
                          </ul>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <div className="skills-charts-compact">
                    {skillsData.technicalExpertise.skills.map((skill, index) => (
                      <div className="chart-item" key={index} title={skill.title}>
                        <div className="tech-icon">
                          {skill.icon}
                        </div>
                        <div className="tech-tooltip">{skill.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionContainer>

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
