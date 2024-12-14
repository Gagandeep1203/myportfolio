 

import React, { useState } from "react";
import { useEffect } from "react";
import home from "../img/lib.svg";
import hireme from "../img/message-square-lines-alt-svgrepo-com (1).svg";
import "../css/Navbar.css"; 

function Navbar({ color, onLogoClic }) {
  useEffect(() => {
    function handleMouseMove(event) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;

      const children = document.querySelectorAll(".header > *");

      children.forEach((child, index) => {
        const intensity = (index + 1) * 0.1; // Adjust intensity based on child index
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
  return (
    <header className="header" style={{ backgroundColor: " #6b6b6b" }}>
      <div className="lef">
      <a href=""> <img src={home} className="homec1"
  alt="" /> </a>

<div className="divider"></div>
        <div className="logo" onClick={onLogoClic}>
        <div className="menu">
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>U</span>
        </div>
          
        </div> 




        
      </div>
      <div className="rig"> 
        <div className="hiremehd">
        <a href= "./Gagandeep_Singh_2101594.pdf"   download>  
        <span>H .</span>
          <span>I .</span>
          <span>R .</span>
          <span>E .</span>
          <span> &nbsp; M .</span>
          <span>E .</span>
        </a>
         
        </div>
      </div>
    </header>
  );
}

export default Navbar;
/*<img src={home} className="homec1" alt="" />
          <img src={home} className="homec2" alt="" />*/