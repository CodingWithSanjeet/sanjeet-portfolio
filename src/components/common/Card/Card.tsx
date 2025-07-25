import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../AllSvg/AllSvg";

const Box = styled(motion.li)`
  // Mobile-first base styles
  width: 100%;
  min-height: 280px;
  color: #fff;
  padding: 1rem;
  margin-right: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:hover {
    border: 1px solid #F14B67;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  // Small mobile devices (320px+)
  @media (min-width: 320px) {
    min-height: 300px;
    padding: 1.2rem;
    border-radius: 18px;
  }

  // Large mobile devices (480px+)
  @media (min-width: 480px) {
    min-height: 320px;
    padding: 1.5rem;
    margin-right: 0;
    max-width: 100%;
  }

  // Tablets (768px+)
  @media (min-width: 768px) {
    width: 100%;
    min-height: 340px;
    padding: 1.5rem 1.8rem;
    border-radius: 20px;
    margin-right: 0rem;
  }

  // Small laptops (1024px+)
  @media (min-width: 1024px) {
    width: 22rem;
    height: 380px; // Fixed height for consistent sizing
    padding: 1.2rem 1.5rem;
    margin-right: 0rem;
    border-radius: 0 50px 0 50px;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    }
  }

  // Large desktops (1440px+)
  @media (min-width: 1440px) {
    width: 19rem;
    height: 400px; // Fixed height for consistency
    padding: 1.4rem 1.8rem;
    margin-right: 0rem;
  }

  // Ultra-wide screens (1920px+)
  @media (min-width: 1920px) {
    width: 27rem;
    height: 455px; // Fixed height for consistency
    padding: 1.5rem 2rem;
    margin-right: 0rem;
  }
`;

const Title = styled.h2`
  color: #08fdd8;
  font-size: 1.3rem; // Mobile-first base size
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  padding: 0;
  line-height: 1.3;
  word-wrap: break-word;
  hyphens: auto;

  // Small mobile (320px+)
  @media (min-width: 320px) {
    font-size: 1.4rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  // Large mobile (480px+)
  @media (min-width: 480px) {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  // Tablets (768px+)
  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 1.4;
  }

  // Laptops (1024px+)
  @media (min-width: 1024px) {
    font-size: 1.4rem;
    line-height: 1.3;
    margin-bottom: 0.6rem;
  }

  // Large screens (1440px+)
  @media (min-width: 1440px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

const Description = styled.h4`
  font-size: 0.9rem; // Mobile-first base size
  font-family: "Karla", sans-serif;
  font-weight: 500;
  margin: 0 0 1rem 0;
  padding: 0;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);

  // Small mobile (320px+)
  @media (min-width: 320px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  // Large mobile (480px+)
  @media (min-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }

  // Tablets (768px+)
  @media (min-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.6;
  }

  // Laptops (1024px+)
  @media (min-width: 1024px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 4; // Limit to 4 lines
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // Large screens (1440px+)
  @media (min-width: 1440px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    -webkit-line-clamp: 5; // Allow one more line on larger screens
  }

  // Ultra-wide screens (1920px+)
  @media (min-width: 1920px) {
    font-size: 1.05rem;
    -webkit-line-clamp: 5;
  }
`;

const Tags = styled.div`
  border-top: 1px solid ${(props) => props.theme.body};
  padding-top: 0.8rem;
  margin-top: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  ${Box}:hover & {
    border-top: 1px solid ${(props) => props.theme.text};
  }

  // Tablets (768px+)
  @media (min-width: 768px) {
    border-top-width: 2px;
    padding-top: 1rem;
    gap: 0.6rem;
    
    ${Box}:hover & {
      border-top-width: 2px;
    }
  }

  // Laptops (1024px+)
  @media (min-width: 1024px) {
    padding-top: 0.4rem;
    margin-top: auto;
    margin-bottom: 0.8rem;
    flex-shrink: 0; // Prevent shrinking when content is long
  }
`;

const Tag = styled.span`
  font-size: 0.75rem; // Mobile-first base size
  padding: 0.3rem 0.6rem;
  background: rgba(8, 253, 216, 0.1);
  border: 1px solid rgba(8, 253, 216, 0.3);
  border-radius: 12px;
  color: #08fdd8;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(8, 253, 216, 0.2);
    transform: translateY(-1px);
  }

  // Small mobile (320px+)
  @media (min-width: 320px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem;
  }

  // Large mobile (480px+)
  @media (min-width: 480px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }

  // Tablets (768px+)
  @media (min-width: 768px) {
    font-size: 0.9rem;
    border-radius: 15px;
  }

  // Laptops (1024px+)
  @media (min-width: 1024px) {
    font-size: calc(0.8em + 0.3vw);
    padding: 0.3rem 0.6rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    background: transparent;
    border: none;
    
    &:hover {
      background: rgba(8, 253, 216, 0.1);
      transform: none;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  gap: 1rem;

  // Large mobile (480px+)
  @media (min-width: 480px) {
    gap: 1.2rem;
  }

  // Laptops (1024px+)
  @media (min-width: 1024px) {
    margin-top: 0;
    gap: 0;
    flex-shrink: 0; // Prevent shrinking when content is long
  }
`;

const ATag = styled.a`
  background-color: #08fdd8;
  color: #000000;
  font-weight: 600;
  text-decoration: none;
  padding: 0.8rem 1.2rem; // Mobile-first touch-friendly padding
  border-radius: 12px;
  font-size: 0.9rem;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  min-width: 80px;

  &:hover {
    background-color: #06d4b8;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(8, 253, 216, 0.3);
  }

  // Small mobile (320px+)
  @media (min-width: 320px) {
    padding: 0.9rem 1.4rem;
    font-size: 0.95rem;
  }

  // Large mobile (480px+)
  @media (min-width: 480px) {
    padding: 1rem 1.6rem;
    font-size: 1rem;
    min-width: 90px;
  }

  // Tablets (768px+)
  @media (min-width: 768px) {
    padding: 1rem 1.8rem;
    border-radius: 15px;
  }

  // Laptops (1024px+)
  @media (min-width: 1024px) {
    padding: 0.4rem 1.8rem;
    border-radius: 0 0 0 50px;
    font-size: 0.9rem;
    min-width: auto;
    
    ${Box}:hover & {
      background-color: #08fdd8;
      color: #fff;
    }
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0.8rem; // Touch-friendly padding
  border-radius: 12px;
  border: 1px solid rgba(8, 253, 216, 0.3);
  background: rgba(8, 253, 216, 0.05);
  
  &:hover {
    background: rgba(8, 253, 216, 0.15);
    transform: translateY(-2px);
    border-color: rgba(8, 253, 216, 0.5);
  }
  
  svg {
    transition: all 0.3s ease;
    width: 24px !important;
    height: 24px !important;
    
    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(0 2px 8px rgba(8, 253, 216, 0.3));
    }
  }

  // Small mobile (320px+)
  @media (min-width: 320px) {
    padding: 0.9rem;
    
    svg {
      width: 26px !important;
      height: 26px !important;
    }
  }

  // Large mobile (480px+)
  @media (min-width: 480px) {
    padding: 1rem;
    border-radius: 15px;
    
    svg {
      width: 28px !important;
      height: 28px !important;
    }
  }

  // Tablets (768px+)
  @media (min-width: 768px) {
    svg {
      width: 30px !important;
      height: 30px !important;
    }
  }

  // Laptops (1024px+)
  @media (min-width: 1024px) {
    padding: 0;
    border: none;
    background: transparent;
    border-radius: 0;
    
    &:hover {
      background: transparent;
      transform: none;
      border: none;
    }
    
    ${Box}:hover & {
      & > * {
        fill: #fff;
      }
    }
    
    svg {
      width: 30px !important;
      height: 30px !important;
      
      &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 2px 8px rgba(8, 253, 216, 0.3));
      }
    }
  }
`;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      duration: 0.6,
      bounce: 0.3,
    },
  },
};

type CardProps = {
    data: {
        id: string | number;
        name: string;
        description: string;
        tags: string[];
        demo: string;
        github: string;
        themeColor?: "teal" | "blue" | "pink";
    };
}

const Card = (props: CardProps) => {
  const { id, name, description, tags, demo, github, themeColor = "teal" } = props.data;

  return (
    <Box key={id} variants={Item} className={`theme-${themeColor}`}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <ATag href={`${demo}`} target="_blank" rel="noopener noreferrer">
          Visit
        </ATag>
        <Git href={`${github}`} target="_blank" rel="noopener noreferrer">
          <Github width={30} height={30} fill="#08fdd8" />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
