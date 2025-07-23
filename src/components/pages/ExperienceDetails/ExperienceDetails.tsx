import { useParams, Link } from 'react-router-dom'
import "./ExperienceDetails.scss";
import { EnterpriseExperience, skillsData } from '../../../data/SkillsData';
import { getExperienceDetails, ExperienceDetailData } from '../../../data/ExperienceDetailsData';
import { useEffect, useState } from 'react';
import { HeaderTwo } from '../../common';

const ExperienceDetails = () => {
  const { companyName } = useParams();
  const [experience, setExperience] = useState<EnterpriseExperience | null>(null);
  const [experienceDetails, setExperienceDetails] = useState<ExperienceDetailData | null>(null);
  const [showContent, setShowContent] = useState(false);
  
  // Collapsible sections state
  const [collapsedSections, setCollapsedSections] = useState({
    overview: false,
    role: false,
    projects: false,
    technologies: false,
    achievements: false,
    learnings: false,
    testimonials: false
  });

  // Individual project collapse states
  const [collapsedProjects, setCollapsedProjects] = useState<{[key: number]: boolean}>({});

  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const toggleProject = (projectIndex: number) => {
    setCollapsedProjects(prev => ({
      ...prev,
      [projectIndex]: !prev[projectIndex]
    }));
  };

  useEffect(() => {
    const foundExperience = skillsData.enterpriseExperience.find(
      (exp) => exp.companyName.toLowerCase().replace(/\s+/g, '').includes(companyName?.toLowerCase() || '')
    ) || null;
    setExperience(foundExperience);

    const detailedData = getExperienceDetails(companyName || '');
    setExperienceDetails(detailedData);
  }, [companyName]);

  // Sequential rendering: show content after header animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!experience) {
    return (
      <section className="section-full page-experience-details">
        <div className="text-zone">
          <HeaderTwo
            aria-label="Experience not found"
            fontsize="4rem"
            beforeTag={true}
            afterTag={true}
            delay={5}
          >
            Experience Not Found
          </HeaderTwo>
          <div className="not-found-content">
            <p>The experience details you're looking for could not be found.</p>
            <Link to="/skills" className="back-link">
              ← Back to Skills
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-full page-experience-details">
      <div className="text-zone">
        <header>
          <HeaderTwo
            aria-label={`${experience.companyName} Experience`}
            fontsize="4.5rem"
            beforeTag={true}
            afterTag={true}
            delay={5}
          >
            {experience.companyName}
          </HeaderTwo>
        </header>

        {/* Render content with visibility control */}
        <div className={`content-section ${showContent ? "visible" : "hidden"}`}>
          
          {/* Back Navigation */}
          <div className="navigation-section">
            <Link to="/skills" className="back-link">
              ← Back to Skills
            </Link>
          </div>

          {/* Company Header Card */}
          <div className="company-header-card">
            <div className="company-logo-section">
              <img 
                src={experience.logo} 
                alt={`${experience.companyName} logo`} 
                className="company-logo-large"
              />
            </div>
            <div className="company-info-section">
              <h2 className="company-name">{experience.companyName}</h2>
              <div className="job-details">
                <h3 className="job-title">{experience.jobTitle}</h3>
                <span className="duration">{experience.duration}</span>
                <div className="business-title">{experience.businessTitle}</div>
              </div>
            </div>
          </div>

          {/* Company Overview */}
          {experienceDetails && (
            <div className={`overview-section ${collapsedSections.overview ? 'section-collapsed' : 'section-expanded'}`}>
              <h3 className="section-title collapsible-header" onClick={() => toggleSection('overview')}>
                <span>Company Overview</span>
                <span className={`arrow ${collapsedSections.overview ? 'collapsed' : ''}`}>▼</span>
              </h3>
              <div className={`collapsible-content ${collapsedSections.overview ? 'collapsed' : ''}`}>
                <div className="overview-grid">
                <div className="overview-item">
                  <span className="label">Industry:</span>
                  <span className="value">{experienceDetails.overview.industry}</span>
                </div>
                <div className="overview-item">
                  <span className="label">Team Size:</span>
                  <span className="value">{experienceDetails.overview.teamSize}</span>
                </div>
                <div className="overview-item">
                  <span className="label">Location:</span>
                  <span className="value">{experienceDetails.overview.location}</span>
                </div>
                <div className="overview-item">
                  <span className="label">Employment:</span>
                  <span className="value">{experienceDetails.overview.employmentType}</span>
                </div>
              </div>
                <p className="overview-description">{experienceDetails.overview.description}</p>
              </div>
            </div>
          )}

          {/* Role & Responsibilities */}
          {experienceDetails && (
            <div className={`role-section ${collapsedSections.role ? 'section-collapsed' : 'section-expanded'}`}>
              <h3 className="section-title collapsible-header" onClick={() => toggleSection('role')}>
                <span>Role & Responsibilities</span>
                <span className={`arrow ${collapsedSections.role ? 'collapsed' : ''}`}>▼</span>
              </h3>
              <div className={`collapsible-content ${collapsedSections.role ? 'collapsed' : ''}`}>
                <div className="role-details">
                <div className="role-info">
                  <div className="role-item">
                    <span className="label">Level:</span>
                    <span className="value">{experienceDetails.role.level}</span>
                  </div>
                  <div className="role-item">
                    <span className="label">Department:</span>
                    <span className="value">{experienceDetails.role.department}</span>
                  </div>
                  <div className="role-item">
                    <span className="label">Reporting To:</span>
                    <span className="value">{experienceDetails.role.reportingTo}</span>
                  </div>
                </div>
                <div className="responsibilities-list">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {experienceDetails.role.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </div>
          )}

          {/* Projects */}
          {experienceDetails && experienceDetails.projects.length > 0 && (
            <div className={`projects-section ${collapsedSections.projects ? 'section-collapsed' : 'section-expanded'}`}>
              <h3 className="section-title collapsible-header" onClick={() => toggleSection('projects')}>
                <span>Key Projects</span>
                <span className={`arrow ${collapsedSections.projects ? 'collapsed' : ''}`}>▼</span>
              </h3>
              <div className={`collapsible-content ${collapsedSections.projects ? 'collapsed' : ''}`}>
              {experienceDetails.projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header collapsible-project-header" onClick={() => toggleProject(index)}>
                    <div className="project-title-section">
                      <h4 className="project-title">{project.title}</h4>
                      <div className="project-meta">
                        <span className="duration">{project.duration}</span>
                        <span className="role">{project.role}</span>
                        <span className="team-size">Team: {project.teamSize}</span>
                      </div>
                    </div>
                    <span className={`project-arrow ${collapsedProjects[index] ? 'collapsed' : ''}`}>▼</span>
                  </div>
                  
                  <div className={`project-collapsible-content ${collapsedProjects[index] ? 'collapsed' : ''}`}>
                    <p className="project-description">{project.description}</p>
                  
                  <div className="project-details">
                    <div className="tech-stack">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {project.challenges.length > 0 && project.solutions.length > 0 && (
                      <div className="challenges-solutions">
                      <div className="challenges">
                        <h5>Challenges:</h5>
                        <ul>
                          {project.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="solutions">
                        <h5>Solutions:</h5>
                        <ul>
                          {project.solutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex}>{solution}</li>
                          ))}
                        </ul>
                      </div>
                    </div>)}

                    {project.outcomes.length > 0 && (<div className="outcomes">
                      <h5>Key Outcomes:</h5>
                      <div className="outcomes-grid">
                        {project.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="outcome-item">
                            <span className="metric">{outcome.metric}</span>
                            <span className="value">{outcome.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>)}
                  </div>
                </div>
              </div>
              ))}
              </div>
            </div>
          )}

          {/* Technologies & Skills */}
          {experienceDetails && (
            <div className={`technologies-section ${collapsedSections.technologies ? 'section-collapsed' : 'section-expanded'}`}>
              <h3 className="section-title collapsible-header" onClick={() => toggleSection('technologies')}>
                <span>Technical Skills</span>
                <span className={`arrow ${collapsedSections.technologies ? 'collapsed' : ''}`}>▼</span>
              </h3>
              <div className={`collapsible-content ${collapsedSections.technologies ? 'collapsed' : ''}`}>
              {experienceDetails.technologies.map((category, categoryIndex) => (
                <div key={categoryIndex} className="skill-category">
                  <h4 className="category-title">{category.category}</h4>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-experience">{skill.yearsUsed}</span>
                        </div>
                        <div className="skill-proficiency">
                          <div className="proficiency-bar">
                            <div 
                              className="proficiency-fill" 
                              style={{width: `${skill.proficiency * 10}%`}}
                            ></div>
                          </div>
                          <span className="proficiency-score">{skill.proficiency}/10</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {experienceDetails && experienceDetails.achievements.length > 0 && (
            <div className={`achievements-section ${collapsedSections.achievements ? 'section-collapsed' : 'section-expanded'}`}>
              <h3 className="section-title collapsible-header" onClick={() => toggleSection('achievements')}>
                <span>Key Achievements</span>
                <span className={`arrow ${collapsedSections.achievements ? 'collapsed' : ''}`}>▼</span>
              </h3>
              <div className={`collapsible-content ${collapsedSections.achievements ? 'collapsed' : ''}`}>
              <div className="achievements-list">
                {experienceDetails.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-header">
                      <h4 className="achievement-title">
                        <a 
                          href={achievement.href}
                          download={achievement.download}
                          className="certificate-download"
                          title="Download Award Certificate"
                        >
                          {achievement.title} 📄
                        </a>
                      </h4>
                      {achievement.recognition && (
                        <span className="recognition">{achievement.recognition}</span>
                      )}
                    </div>
                    <p className="achievement-description">{achievement.description}</p>
                    <p className="achievement-impact"><strong>Impact:</strong> {achievement.impact}</p>
                  </div>
                ))}
              </div>
            </div>
            </div>
          )}

          {/* Professional Growth */}
          {experienceDetails && (
            <div className={`learnings-section ${collapsedSections.learnings ? 'section-collapsed' : 'section-expanded'}`}>
              <h3 className="section-title collapsible-header" onClick={() => toggleSection('learnings')}>
                <span>Professional Growth</span>
                <span className={`arrow ${collapsedSections.learnings ? 'collapsed' : ''}`}>▼</span>
              </h3>
              <div className={`collapsible-content ${collapsedSections.learnings ? 'collapsed' : ''}`}>
              <div className="learnings-grid">
                <div className="learning-category">
                  <h4>Technical Skills</h4>
                  <ul>
                    {experienceDetails.learnings.technical.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
                <div className="learning-category">
                  <h4>Professional Skills</h4>
                  <ul>
                    {experienceDetails.learnings.professional.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
                <div className="learning-category">
                  <h4>Leadership Skills</h4>
                  <ul>
                    {experienceDetails.learnings.leadership.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </div>
          )}

          {/* Testimonials */}
          {experienceDetails && experienceDetails.testimonials && experienceDetails.testimonials.length > 0 && (
            <div className="testimonials-section">
              <h3 className="section-title">Testimonials</h3>
              {experienceDetails.testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">{testimonial.author}</span>
                    <span className="author-position">{testimonial.position}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ExperienceDetails;