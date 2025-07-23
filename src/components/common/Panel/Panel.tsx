import React from "react";
import "./Panel.scss";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "stat" | "story" | "growth" | "default";
  icon?: React.ReactNode | string;
  title?: string;
  onClick?: () => void;
  hover?: boolean;
  borderAccent?: "teal" | "blue" | "pink" | "none";
  minHeight?: string;
  padding?: "small" | "medium" | "large";
}

const Panel: React.FC<PanelProps> = ({
  children,
  className = "",
  variant = "default",
  icon,
  title,
  onClick,
  hover = true,
  borderAccent = "none",
  minHeight,
  padding = "medium",
}) => {
  const panelClasses = [
    "common-panel",
    `panel-variant-${variant}`,
    `panel-padding-${padding}`,
    borderAccent !== "none" ? `panel-border-${borderAccent}` : "",
    hover ? "panel-hover" : "",
    className
  ].filter(Boolean).join(" ");

  const panelStyle = minHeight ? { minHeight } : {};

  return (
    <div 
      className={panelClasses} 
      onClick={onClick}
      style={panelStyle}
    >
      {(icon || title) && (
        <div className="panel-header">
          {icon && (
            <div className="panel-icon">
              {typeof icon === "string" ? <span>{icon}</span> : icon}
            </div>
          )}
          {title && <h4 className="panel-title">{title}</h4>}
        </div>
      )}
      <div className="panel-content">
        {children}
      </div>
    </div>
  );
};

export default Panel;
