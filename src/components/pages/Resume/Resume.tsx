import React from "react";
import { HeaderTwo } from "../../common";
import { resumeDataU as resumeData } from "../../../data/resumeData";
import "./Resume.scss";

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/resume/Sanjeet_Kumar_6Yr_FullStack.pdf';
    link.download = 'Sanjeet_Kumar_6Yr_FullStack.pdf';
    link.click();
  };

  return (
    <div className="page-resume">
      {/* Print/Download Controls */}
      <div className="resume-controls no-print">
        <button className="control-btn print-btn" onClick={handlePrint}>
          <span className="btn-icon">🖨️</span>
          Print Resume
        </button>
        <button className="control-btn download-btn" onClick={handleDownload}>
          <span className="btn-icon">📥</span>
          Download PDF
        </button>
      </div>

      <div className="resume-container">
        {/* Header Section */}
        <header className="resume-header">
          <div className="header-content">
            <div className="name-title">
              <HeaderTwo 
                style={{ margin: 0, fontSize: "4rem", lineHeight: "4.5rem" }}
                beforeTag={false}
                afterTag={false}
              >
                {resumeData.personalInfo.name}
              </HeaderTwo>
              <h2 className="job-title">{resumeData.personalInfo.title}</h2>
            </div>
            
            <div className="contact-info">
              <div className="contact-grid">
                <span className="contact-item">
                  <span className="contact-icon">📧</span>
                  {resumeData.personalInfo.email}
                </span>
                <span className="contact-item">
                  <span className="contact-icon">📱</span>
                  {resumeData.personalInfo.phone}
                </span>
                <span className="contact-item">
                  <span className="contact-icon">📍</span>
                  {resumeData.personalInfo.location}
                </span>
                <a 
                  href={resumeData.personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-item contact-link"
                >
                  <span className="contact-icon">💼</span>
                  LinkedIn
                </a>
                <a 
                  href={`https://${resumeData.personalInfo.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-item contact-link"
                >
                  <span className="contact-icon">⚡</span>
                  GitHub
                </a>
                <a 
                  href={resumeData.personalInfo.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-item contact-link"
                >
                  <span className="contact-icon">🌐</span>
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="resume-section summary-section">
          <h3 className="section-title">Professional Summary</h3>
          <p className="summary-text">{resumeData.summary}</p>
        </section>

        {/* Experience */}
        <section className="resume-section experience-section">
          <h3 className="section-title">Professional Experience</h3>
          <div className="experience-list">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="job-header">
                  <div className="job-title-company">
                    <h4 className="job-position">{job.position}</h4>
                    <span className="company-name">{job.company}</span>
                  </div>
                  <div className="job-meta">
                    <span className="job-duration">{job.duration}</span>
                    <span className="job-location">{job.location}</span>
                  </div>
                </div>
                <ul className="responsibilities">
                  {job.responsibilities.map((responsibility, idx) => {
                    const isAward = responsibility.includes('🏆') || responsibility.toLowerCase().includes('award');
                    return (
                      <li key={idx} className={`responsibility-item ${isAward ? 'award-item' : ''}`}>
                        {responsibility}
                      </li>
                    );
                  })}
                </ul>

                {/* Client Work Section */}
                {job.clients && job.clients.length > 0 && (
                  <div className="client-work-section">
                    <h5 className="client-work-title">Client Engagements:</h5>
                    <div className="clients-list">
                      {job.clients.map((client, clientIdx) => (
                        <div key={clientIdx} className="client-item">
                          <div className="client-header">
                            <div className="client-info">
                              <h6 className="client-name">{client.clientName}</h6>
                              <span className="client-role">{client.role}</span>
                            </div>
                            <span className="client-duration">{client.duration}</span>
                          </div>
                          
                          <ul className="client-responsibilities">
                            {client.responsibilities.map((responsibility, respIdx) => {
                              const isAward = responsibility.includes('🏆') || responsibility.toLowerCase().includes('award');
                              return (
                                <li key={respIdx} className={`client-responsibility-item ${isAward ? 'award-item' : ''}`}>
                                  {responsibility}
                                </li>
                              );
                            })}
                          </ul>

                          {client.technologies && (
                            <div className="client-technologies">
                              <span className="tech-label">Technologies:</span>
                              <div className="client-tech-tags">
                                {client.technologies.map((tech, techIdx) => (
                                  <span key={techIdx} className="client-tech-tag">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Two Column Layout for Skills and Projects */}
        <div className="two-column-layout">
          {/* Skills */}
          <section className="resume-section skills-section">
            <h3 className="section-title">Technical Skills</h3>
            <div className="skills-grid">
              {resumeData.skills.map((skillCategory, index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category-title">{skillCategory.category}</h4>
                  <div className="skill-tags">
                    {skillCategory.items.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section projects-section">
            <h3 className="section-title">Key Projects</h3>
            <div className="projects-list">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="project-item">
                  <h4 className="project-name">{project.name}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Education and Certifications */}
        <div className="bottom-sections">
          <section className="resume-section education-section">
            <h3 className="section-title">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="edu-header">
                  <h4 className="degree">{edu.degree}</h4>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
                <div className="edu-details">
                  <span className="institution">{edu.institution}</span>
                  {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </section>

          {resumeData.certifications && (
            <section className="resume-section certifications-section">
              <h3 className="section-title">Certifications</h3>
              <div className="certifications-list">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume; 