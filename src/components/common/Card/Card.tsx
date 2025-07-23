import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../AllSvg/AllSvg";

const Box = styled(motion.li)`
  width: 19rem;
  height: 360px;
  ${"" /* background-color: #fff; */}
  color: #fff;
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  &:hover {
    ${
      "" /* background-color: #fff;
    color: #000; */
    }
    border: 1px solid #F14B67;
  }
  @media (max-width: 480px) {
    height: 300px;
    width: 15rem;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 14rem;
  }

  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 16rem;
  }
  /* Media Query for Laptops and Desktops */
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 15rem;
  }
`;
const Title = styled.h2`
  color: #08fdd8;
  font-size: calc(1em + 0.5vw);
  margin: 0;
  padding: 0;
  @media (max-width: 480px) {
    font-size: 1.5rem !important;
    line-height: 2rem !important;
  }
`;

const Description = styled.h4`
  font-size: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const ATag = styled.a`
  background-color: #08fdd8;
  color: #000000;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: 1em;
  ${Box}:hover & {
    background-color: #08fdd8;
    color: $fff;
  }
`;
const Link = styled(NavLink)`
  background-color: #08fdd8;
  color: #000000;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: 1em;
  ${Box}:hover & {
    background-color: #08fdd8;
    color: $fff;
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  ${Box}:hover & {
    & > * {
      fill: #fff;
    }
  }
  
  /* Ensure icon is visible with proper styling */
  svg {
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(0 2px 8px rgba(8, 253, 216, 0.3));
    }
  }
`;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring" as const,
      duration: 0.5,
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
        <ATag href={`${demo}`} target="_blank">
          Visit
        </ATag>
        <Git href={`${github}`} target="_blank">
          <Github width={30} height={30} fill="#08fdd8" />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
