import React, { useEffect } from "react";
import "../css/Pg2p1.css";
import worksvg from "../img/download (2).png";

function Pg2p1() {
  useEffect(() => {
    function handleMouseMove(event) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;

      const children = document.querySelectorAll(".work > *");

      children.forEach((child, index) => {
        const intensity = (index + 1) * 0.2; // Adjust intensity based on child index
        const translateX = offsetX * intensity * 60; // Modify 20 for translation distance
        const translateY = offsetY * intensity * 60;

        child.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const workspan =
    "I design user-friendly interfaces that are both functional and visually appealing, followed by writing clean, efficient code during development. I emphasize continuous testing to ensure quality and reliability. Collaboration and clear communication are key throughout the project, keeping everything on track.";

  return (
    <div className="conpg2">
      <div className="linecon">
        <div className="span">
          <span>
            <b>S.C.R.O.L.L.</b>
          </span>
        </div>
        <div className="linepar">
          <div className="line"></div>
        </div>
      </div>
      <div className="work">
        <div className="h1andspan">
          <div className="workh1">
            <h1>Let's work together.</h1>
          </div>
          <div className="workspan">
            <span>{workspan}</span>
            <hr />
          </div>
        </div>
        <div className="img">
          <img src={worksvg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Pg2p1;
