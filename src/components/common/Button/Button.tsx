import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
type ButtonProps = {
  to: string;
  text: string;
};
const Button = ({ to, text }: ButtonProps) => {
  return (
    <Link to={to} className="link-button">
      <div>
        <span className="bg"></span>
        <span className="base"></span>
        <span className="text">{text}</span>
      </div>
    </Link>
  );
};

export default Button;
