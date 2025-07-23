import { useEffect, useState } from "react";
import { experienceData } from "../../../data";
import { HeaderTwo, SummaryCard } from "../../common";
import "./Experience.scss";

const Experience = () => {
  const [expandedProjects, setExpandedProjects] = useState<{[key: string]: boolean}>({});
  const [expandedResponsibilities, setExpandedResponsibilities] = useState<{[key: string]: boolean}>({});
  const [expandedTech, setExpandedTech] = useState<{[key: string]: boolean}>({});
  const [showContent, setShowContent] = useState(false);

  const toggleProject = (experienceId: number, projectId: number) => {
    const key = `${experienceId}-${projectId}`;
    setExpandedProjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleResponsibilities = (experienceId: number, projectId: number) => {
    const key = `${experienceId}-${projectId}`;
    setExpandedResponsibilities(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleTech = (experienceId: number) => {
    const key = `tech-${experienceId}`;
    setExpandedTech(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    // Show content after header animation completes (5s delay + 1s animation + 0.5s buffer)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="experience-page section-full">
      <div className="experience-container">
        <header className="experience-header">
          <HeaderTwo
            aria-label="Work Experience"
            fontsize="4rem"
            beforeTag={true}
            afterTag={true}
            delay={5}
          >
            Work Experience
          </HeaderTwo>
          {/* <Paragraph
            fontsize="1.1rem"
            beforeTag={true}
            afterTag={false}
          >
            Here is my professional journey so far.
          </Paragraph> */}
        </header>

        {showContent && (
          <>
            <div className="experience-grid">
          {experienceData.experienceDetails.map((experience) => (
            <div key={experience.id} className="experience-card-compact">
              {/* Company Header */}
              <div className="company-header-compact">
                <div className="company-main-info">
                  <img 
                    src={experience.companyLogo} 
                    alt={`${experience.company} logo`}
                    className="company-logo-compact"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="company-text-info">
                    <h3 className="job-title-compact">{experience.title}</h3>
                    <div className="company-details-compact">
                      <span className="company-name-compact">{experience.company}</span>
                      <span className="location-compact">{experience.location}</span>
                    </div>
                    <span className="duration-compact">{experience.totalDuration}</span>
                  </div>
                </div>
                
                {/* Tech Overview */}
                <div className="tech-overview">
                  <div className="tech-tags-compact">
                    {(() => {
                      const techKey = `tech-${experience.id}`;
                      const isTechExpanded = expandedTech[techKey];
                      const techsToShow = isTechExpanded ? experience.overallTechnologies : experience.overallTechnologies.slice(0, 4);
                      
                      return (
                        <>
                          {techsToShow.map((tech, idx) => (
                            <span key={idx} className="tech-tag-compact">{tech}</span>
                          ))}
                          {experience.overallTechnologies.length > 4 && (
                            <span 
                              className="tech-more clickable-tech" 
                              onClick={() => toggleTech(experience.id)}
                            >
                              {isTechExpanded 
                                ? "Show less" 
                                : `+${experience.overallTechnologies.length - 4}`
                              }
                            </span>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="projects-compact">
                <h4 className="projects-title">Projects ({experience.projects.length})</h4>
                <div className="projects-grid">
                  {experience.projects.map((project) => {
                    const key = `${experience.id}-${project.id}`;
                    const isExpanded = expandedProjects[key];
                    
                    return (
                      <div key={project.id} className="project-card-compact">
                        <div 
                          className="project-header-compact"
                          onClick={() => toggleProject(experience.id, project.id)}
                        >
                          <div className="project-main-info">
                            {project.isClientProject && project.clientLogo && (
                              <img 
                                src={project.clientLogo} 
                                alt={`${project.clientName} logo`}
                                className="client-logo-compact"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            )}
                            <div className="project-text-info">
                              <h5 className="project-title-compact">{project.projectTitle}</h5>
                              <div className="project-meta">
                                <span className="client-name-compact">
                                  {project.isClientProject ? project.clientName : experience.company}
                                </span>
                                <span className="project-type-compact">
                                  {project.isClientProject ? "Client" : "Internal"}
                                </span>
                                <span className="project-duration-compact">{project.duration}</span>
                              </div>
                            </div>
                          </div>
                          <button className="expand-btn">
                            {isExpanded ? "−" : "+"}
                          </button>
                        </div>
                        
                        {isExpanded && (
                          <div className="project-details-expanded">
                            <ul className="responsibilities-compact">
                              {(() => {
                                const responsibilityKey = `${experience.id}-${project.id}`;
                                const isResponsibilityExpanded = expandedResponsibilities[responsibilityKey];
                                const itemsToShow = isResponsibilityExpanded ? project.description : project.description.slice(0, 3);
                                
                                return (
                                  <>
                                    {itemsToShow.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                    {project.description.length > 3 && (
                                      <li 
                                        className="more-indicator clickable" 
                                        onClick={() => toggleResponsibilities(experience.id, project.id)}
                                      >
                                        {isResponsibilityExpanded 
                                          ? "Show less" 
                                          : `...and ${project.description.length - 3} more`
                                        }
                                      </li>
                                    )}
                                  </>
                                );
                              })()}
                            </ul>
                            <div className="project-tech-tags">
                              {project.technologies.map((tech, idx) => (
                                <span key={idx} className={`tech-tag-small ${project.isClientProject ? 'client' : 'internal'}`}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Summary Dashboard */}
        <div className="experience-summary-modern">
          <h3 className="summary-title">Professional Overview</h3>
          <div className="summary-dashboard">
            {experienceData.professionalSummary.map((summary) => (
              <SummaryCard 
                key={summary.label}
                icon={summary.icon}
                label={summary.label}
                number={summary.number}
                sublabel={summary.sublabel}
                progressWidth={summary.progressWidth}
                iconType={summary.iconType}
              />
            ))}
          </div>

          {/* Achievement Badges */}
          <div className="achievement-section">
            <div className="achievement-badge">
              <span className="achievement-icon">🏆</span>
              <span className="achievement-text">Full Stack Developer</span>
            </div>
            <div className="achievement-badge">
              <span className="achievement-icon">⚡</span>
              <span className="achievement-text">React Specialist</span>
            </div>
            <div className="achievement-badge">
              <span className="achievement-icon">🎯</span>
              <span className="achievement-text">Project Lead</span>
            </div>
            <div className="achievement-badge">
              <span className="achievement-icon">🚀</span>
              <span className="achievement-text">Performance Expert</span>
            </div>
          </div>
        </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Experience; 