import { useEffect, useState } from "react";
import { aboutData } from "../../../data";
import { HeaderTwo, SectionContainer } from "../../common";
import { Panel } from "../../common/Panel";
import "./About.scss";

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-about section-full">
      <div className="text-zone">
        <header>
          <HeaderTwo
            aria-label="Me, Myself & I"
            style={{
              margin: 0,
              fontSize: "5rem",
            }}
            beforeTag={true}
            afterTag={true}
            delay={5}
          >
            Me, Myself & I
          </HeaderTwo>
        </header>

        {/* Conditionally render remaining content after HeaderTwo is done */}
        {showContent && (
          <div className="about-main-container fade-in-up">
          
            {/* Floating Decorative Elements */}
            {/* <div className="floating-elements">
              <div className="float-1 float-animation">⚡</div>
              <div className="float-2 float-animation">🚀</div>
              <div className="float-3 float-animation">💡</div>
              <div className="float-4 float-animation">🎯</div>
              <div className="float-5 float-animation">🔥</div>
              <div className="float-6 float-animation">⭐</div>
            </div> */}
          
            {/* Hero Introduction Section */}
            <div className="hero-section slide-in-left">
              <div className="hero-content">
                <div className="intro-text">
                  <div className="elevator-pitch">
                    {aboutData.description.map((item, index) => (
                      <p key={index} className="intro-paragraph">
                        {item.beforeTag && <span className="tag-before">&lt;p&gt;</span>}
                        {item.text}
                        {item.afterTag && <span className="tag-after">&lt;/p&gt;</span>}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="quick-stats">
                  {aboutData.statsData.map((stat, index) => (
                    <Panel
                      key={index}
                      variant="stat"
                      title={stat.title}
                      className="stat-card"
                    >
                      {stat.content}
                    </Panel>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Story Grid */}
            <SectionContainer
              title="Personal Story"
              icon="🌟"
              sparkles={["✨", "💫", "⭐"]}
              animation="slide-in-left"
              className="personal-story-section"
            >
              <div className="story-cards-grid">
                {aboutData.learningJourney.map((card, index) => (
                  <Panel
                    key={index}
                    variant="story"
                    icon={card.icon}
                    title={card.title}
                    borderAccent={card.borderAccent}
                    minHeight="200px"
                  >
                    {card.content}
                  </Panel>
                ))}
              </div>
            </SectionContainer>

            {/* Tech Stack Categories */}
            <SectionContainer
              title="Tech Arsenal"
              icon="🛠️"
              sparkles={["⚡", "🔧", "💻"]}
              animation="slide-in-left"
              className="tech-stack-section"
            >
              <div className="tech-categories">
                <div className="category-section frontend-category">
                  <div className="category-header">
                    <span className="category-icon">🎨</span>
                    <h4>Frontend</h4>
                  </div>
                  <div className="tech-tags">
                    {aboutData.techCategories.frontend.map((tech, index) => (
                      <span key={index} className="tech-tag frontend-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="category-section backend-category">
                  <div className="category-header">
                    <span className="category-icon">⚙️</span>
                    <h4>Backend</h4>
                  </div>
                  <div className="tech-tags">
                    {aboutData.techCategories.backend.map((tech, index) => (
                      <span key={index} className="tech-tag backend-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="category-section tools-category">
                  <div className="category-header">
                    <span className="category-icon">🛠️</span>
                    <h4>Tools & Others</h4>
                  </div>
                  <div className="tech-tags">
                    {aboutData.techCategories.tools.map((tech, index) => (
                      <span key={index} className="tech-tag tools-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionContainer>

            {/* Learning Journey Timeline */}
            <SectionContainer
              title="Continuous Growth"
              icon="🎢"
              sparkles={["🚀", "📚", "🎯"]}
              animation="slide-in-right"
              className="learning-journey-section"
            >
              <div className="growth-areas">
                {aboutData.growthData.map((growth, index) => (
                  <Panel
                    key={index}
                    variant="growth"
                    icon={growth.icon}
                    title={growth.title}
                    minHeight="250px"
                  >
                    {growth.content}
                  </Panel>
                ))}
              </div>
            </SectionContainer>

          </div>
        )}
      </div>
    </div>
  );
};

export default About;
