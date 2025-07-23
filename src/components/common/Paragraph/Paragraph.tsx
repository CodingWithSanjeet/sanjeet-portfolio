import React from "react";
import styled, { keyframes, css } from "styled-components";

interface ParagraphProps {
  fontsize?: string;
  beforeTag?: boolean;
  afterTag?: boolean;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Define fadeIn animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Para = styled.p.withConfig({
  shouldForwardProp: (prop) => !['fontsize', 'beforeTag', 'afterTag', 'delay'].includes(prop),
})<ParagraphProps>`
    position: relative;
    margin-bottom: 1.5rem;
  font-size: ${(props) => props.fontsize || '1.3rem'};
  opacity: 0;
  animation: ${fadeIn} 1s ${(props) => props.delay || 2.5}s forwards ease-out;
  
  ${({ beforeTag, delay }) =>
      beforeTag &&
    css`
        &:before {
            content: "<p>";
            font-family: "La Belle Aurore", cursive;
            color: #539cd4;
            font-size: 18px;
            position: absolute;
            margin-top: -1rem;
            left: -1rem;
        opacity: 0;
        animation: ${fadeIn} 1s ${(delay || 2.5) + 0.1}s forwards ease-out;
        }
      `}
    
  ${({ afterTag, delay }) =>
      afterTag &&
    css`
      &:after {
            content: "</p>";
            font-family: "La Belle Aurore", cursive;
            color: #539cd4;
            font-size: 18px;
            position: absolute;
            left: -1rem;
            bottom: -2rem;
            opacity: 0;
        animation: ${fadeIn} 1s ${(delay || 2.5) + 0.2}s forwards ease-out;
        }
    `}
  
    @media (max-width: 480px) {
       font-size: 1rem;
    }

    @media (max-width: 1300px) {
      margin: 0;
      margin-bottom: 1.5rem;
      font-size: 1rem;
    
      ${({ afterTag }) =>
        afterTag &&
      css`
        &:after {
          font-size: 14px;
          left: -1.5rem;
        }
      `}

      ${({ beforeTag }) =>
        beforeTag &&
      css`
        &:before {
        font-size: 14px;
        left: -1.5rem;
      }
    `}

    &:first-child {
      margin-top: 20px;
    }
    }
`;

const Paragraph: React.FC<ParagraphProps> = ({ delay = 2.5, ...props }) => {
  return <Para delay={delay} {...props}>{props.children}</Para>;
};

export default Paragraph;
