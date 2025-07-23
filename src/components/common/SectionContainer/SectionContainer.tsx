import React from "react";
import "./SectionContainer.scss";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: string;
  sparkles?: string[];
  animation?: "slide-in-left" | "slide-in-right" | "fade-in-up" | "none";
  headerClassName?: string;
  contentClassName?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = "",
  title,
  icon = "",
  sparkles = ["✨", "⭐", "💎"],
  animation = "slide-in-left",
  headerClassName = "",
  contentClassName = "",
}) => {
  const containerClasses = [
    "section-container",
    animation !== "none" ? animation : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses}>
      {title && (
        <div className={`section-header ${headerClassName}`}>
          <h3>
            {icon && <span className="section-icon">{icon}</span>}
            {title}
          </h3>
          {sparkles.length > 0 && (
            <div className="header-sparkles">
              {sparkles.map((sparkle, index) => (
                <span 
                  key={index} 
                  className={`sparkle-item sparkle-${index + 1}`}
                >
                  {sparkle}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
      
      <div className={`section-content ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionContainer; 