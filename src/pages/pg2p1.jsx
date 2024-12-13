import React, { useEffect } from "react";
import "../css/Pg2p1.css";
import worksvg from "../img/download (2).png";

function Pg2p1() {
  useEffect(() => {
    const hid = document.querySelectorAll('.nice');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("gelatine");
        } else {
          entry.target.classList.remove("gelatine");
        }
      });
    });
    hid.forEach((elem) => observer.observe(elem)); 



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
  const ss= " I’m in my fourth year of my cse course in chandigarh group of colleges. While I love experimenting with creative approaches when it comes to design principles, artistic concepts and ideas, I also find the art of scientific approaches and research fascinating. The structured, methodical process of discovery and problem-solving in science and data structures, is what I blend into my design work. This allows me to create aesthetically complex works, while being data-driven. As a result, I design with the philosophy and intention of being both innovative and practical. Geology also has really cool rocks and names which I often take inspiration from."
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
           
          <div className="workspan">
              <div className="nice" ><h1>Nice to meet you  :) </h1></div>
              <span>{workspan}</span>
               <hr />
              <span className="vanish">{ss}</span>
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
