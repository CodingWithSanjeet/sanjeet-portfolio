import React from "react";
import "./SummaryCard.scss";
import { IconType } from "../../../types/common";

interface SummaryCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  sublabel: string;
  progressWidth: string;
  iconType: IconType;
  className?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  icon,
  number,
  label,
  sublabel,
  progressWidth,
  iconType,
  className = ""
}) => {
  return (
    <div className={`summary-card-modern ${className}`}>
      <div className={`summary-icon ${iconType}-icon`}>
        {icon}
      </div>
      <div className="summary-content">
        <div className="summary-number">{number}</div>
        <div className="summary-label">{label}</div>
        <div className="summary-sublabel">{sublabel}</div>
      </div>
      <div className="summary-progress">
        <div 
          className={`progress-bar ${iconType}-progress`} 
          style={{width: progressWidth}}
        ></div>
      </div>
    </div>
  );
};

export default SummaryCard; 