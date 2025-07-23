import React from "react";
import "./AnimateLetters.scss";
type AnimateLettersProps = {
  letterClass: string;
  strArray: string[];
  idx: number;
};
const AnimateLetters = ({ letterClass, strArray, idx }: AnimateLettersProps) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimateLetters;
