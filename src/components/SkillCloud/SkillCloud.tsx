import React, { useEffect } from "react";
import tagCanvas from "tag-canvas";
import "./SkillCloud.scss";

interface SkillCloudProps {
  techStack?: string[];
}

const SkillCloud = ({ techStack = [] }: SkillCloudProps) => {
  useEffect(() => {
    try {
      tagCanvas.Start("myCanvas", "tags", {
        textColour: "#08fdd8",
        fontSize: 16,
        outlineColour: "transparent",
        reverse: true,
        depth: 1.3,
        maxSpeed: 0.05,
        weight: true,
        zoom: 1.2,
        freezeActive: true,
        shuffleTags: true,
        outlineMethod: "none",
        textHeight: 18,
        wheelZoom: false,
        fadeIn: 3000,
      });
    } catch (e) {
      console.log(e);
      const container = document.getElementById("myCanvasContainer");
      if (container) {
        container.style.display = "none";
      }
    }
  }, []);

  return (
    <>
      <div id="myCanvasContainer">
        <canvas
          width="700"
          height="600"
          id="myCanvas"
          style={{ fontSize: "16px" }}
        ></canvas>
      </div>
      <div id="tags">
        <ul style={{ display: "none" }}>
          {techStack.map((skill) => (
            <li key={skill}>
              <a href="/" style={{ fontSize: "16px" }}>
                {skill}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillCloud;
