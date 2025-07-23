import { useEffect, useState } from "react";
import avatar from "../../../assets/images/avatar1.png";
import logoS from "../../../assets/images/s.png";
import { AnimateLetters, Button } from "../../common";
import { menuData } from "../../../data";
import "./Home.scss";

// Constants moved outside component to prevent recreation on each render
const GREETING_ARRAY = ["H", "i", ","];
const INTRO_ARRAY = ["I", "'", "m"];
const NAME_ARRAY = ["a", "n", "j", "e", "e", "t", ","];
const ROLE_ARRAY = ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"];
const ANIMATION_DELAY = 3000;
const GREETING_START_INDEX = 11;
const INTRO_START_INDEX = 14;
const NAME_START_INDEX = 17;
const ROLE_START_INDEX = 24;

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, ANIMATION_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="section-home" className="section-home section-full">

      <div className="text-zone">
        <h1>
          <AnimateLetters
            letterClass={letterClass}
            strArray={GREETING_ARRAY}
            idx={GREETING_START_INDEX}
          />
          <br />
          <AnimateLetters
            letterClass={letterClass}
            strArray={INTRO_ARRAY}
            idx={INTRO_START_INDEX}
          />{" "}
          <img src={logoS} alt={menuData.title} />
          <AnimateLetters
            letterClass={letterClass}
            strArray={NAME_ARRAY}
            idx={NAME_START_INDEX}
          />
          <br />
          <AnimateLetters
            letterClass={letterClass}
            strArray={ROLE_ARRAY}
            idx={ROLE_START_INDEX}
          />
        </h1>
        <p className="gray-text">{menuData.description}</p>
        <br />
        <Button to="/contact" text="Contact Me" />
      </div>
      <div className="avatar-box">
        <img 
          src={avatar} 
          alt={`${menuData.title}'s avatar`} 
          height={600} 
          width={400}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;
