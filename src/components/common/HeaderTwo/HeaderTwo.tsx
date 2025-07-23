import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import AnimateLetters from "../AnimateLetters/AnimateLetters";

interface HeaderProps {
  fontsize?: string;
  beforeTag?: boolean;
  afterTag?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  delay?: number;
}

// Define the fadeIn animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Header = styled.h2.withConfig({
  shouldForwardProp: (prop) => !['fontsize', 'beforeTag', 'afterTag', 'delay'].includes(prop),
})<HeaderProps>`
  font-family: "Coolvetica";
  color: #08fdd8;
  font-weight: 400;
  margin-top: 0;
  position: relative;
  left: -10px;
  z-index: 20; // Ensure header and tags appear above other content
  font-size: ${(props) => (props.fontsize ? props.fontsize : "6.3rem")};
  line-height: 6.7rem;
  
  ${({ beforeTag }) =>
    beforeTag &&
    css`
        &:before {
          content: "<h2>";
          font-family: "La Belle Aurore", cursive;
          color: #539cd4;
          font-size: 18px;
          opacity: 0;
          position: absolute;
          margin-top: -4rem;
          left: -1rem;
          animation: ${fadeIn} 1s 2s forwards;
          z-index: 10;
        }
      `}
  
  ${({ afterTag }) =>
    afterTag &&
    css`
        &:after{
            content: "</h2>";
            font-family: "La Belle Aurore", cursive;
            color: #539cd4;
            font-size: 18px;
            opacity: 0;
            position: absolute;
            left: -1rem;
            bottom: -4rem;
            animation: ${fadeIn} 1s 2s forwards;
            z-index: 10;
        }
    `}

  /* Responsive breakpoints for font-size and line-height */
  
  /* Large Laptops (1441px - 1920px) */
  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: ${(props) => (props.fontsize ? props.fontsize : "5.8rem")};
    line-height: 9rem;
    
    ${({ beforeTag }) =>
      beforeTag &&
      css`
        &:before {
          margin-top: -3.8rem;
          font-size: 17px;
        }
      `}
    
    ${({ afterTag }) =>
      afterTag &&
      css`
        &:after {
          bottom: -3.8rem;
          font-size: 17px;
        }
      `}
  }
  
  /* Standard Laptops (1025px - 1440px) */
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    font-size: ${(props) => (props.fontsize ? props.fontsize : "5.3rem")};
    line-height: 8rem;
    
    ${({ beforeTag }) =>
      beforeTag &&
      css`
        &:before {
          margin-top: -3.5rem;
          font-size: 16px;
        }
      `}
    
    ${({ afterTag }) =>
      afterTag &&
      css`
        &:after {
          bottom: -3.5rem;
          font-size: 16px;
        }
      `}
  }
  
  /* Small Laptops/Tablets (768px - 1024px) */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: ${(props) => (props.fontsize ? props.fontsize : "4.8rem")};
    line-height: 5.2rem;
    
    ${({ beforeTag }) =>
      beforeTag &&
      css`
        &:before {
          margin-top: -3.2rem;
          font-size: 15px;
        }
      `}
    
    ${({ afterTag }) =>
      afterTag &&
      css`
        &:after {
          bottom: -3.2rem;
          font-size: 15px;
        }
      `}
  }
  
  /* Large Mobile/Small Tablets (481px - 767px) */
  @media screen and (min-width: 481px) and (max-width: 767px) {
    font-size: ${(props) => (props.fontsize ? props.fontsize : "4.2rem")};
    line-height: 4.6rem;
    
    ${({ beforeTag }) =>
      beforeTag &&
      css`
        &:before {
          margin-top: -2.8rem;
          font-size: 14px;
        }
      `}
    
    ${({ afterTag }) =>
      afterTag &&
      css`
        &:after {
          bottom: -2.8rem;
          font-size: 14px;
        }
      `}
  }
  
  /* Mobile (480px and below) */
  @media screen and (max-width: 480px) {
    font-size: ${(props) => (props.fontsize ? props.fontsize : "3.5rem")};
    line-height: 3.9rem;
    
    ${({ beforeTag }) =>
      beforeTag &&
      css`
        &:before {
          margin-top: -2.5rem;
          font-size: 13px;
          left: -0.8rem;
        }
      `}
    
    ${({ afterTag }) =>
      afterTag &&
      css`
        &:after {
          bottom: -2.5rem;
          font-size: 13px;
          left: -0.8rem;
        }
      `}
  }
`;
const HeaderTwo = (props: HeaderProps) => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => setLetterClass("text-animate-hover"), 4000);
  }, []);

  const defaultStyle = {
    fontSize: "4.5rem",
    lineHeight: "4rem",
  };

  return (
    <Header {...props} style={props.style ? { ...props.style } : defaultStyle}>
      <AnimateLetters
        letterClass={letterClass}
        strArray={
          typeof props.children === 'string' 
            ? props.children.split('') 
            : props.children?.toString().split('') || []
        }
        idx={props.delay || 0}
      />
    </Header>
  );
};

export default HeaderTwo;
