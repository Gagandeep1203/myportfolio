 

import Navbar from "../compnent/nav";
import React, { useEffect } from "react";
import img1 from "../img/12208.png";
import Typed from "typed.js"; // Import Typed.js

function Fpg({ onLogoClick }) {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["<i>Frontend</i> developer", "<i>Backend</i> developer"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy the instance to avoid memory leaks
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    function handleMouseMove(event) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;

      const children = document.querySelectorAll(".pg1 > *");

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
  useEffect(() => {
    const e12 = document.querySelectorAll(".move");

    function anglefun(mx, mv, ax, av) {
      let dx = mx - ax;
      let dv = mv - av;
      let degree = (Math.atan2(dv, dx) * 180) / Math.PI; // Calculate the angle in degrees
      return degree;
    }

    function handleMouseMove(e) {
      let x = e.clientX;
      let v = e.clientY;

      let anchor = document.querySelector(".focus");
      if (anchor) {
        let rect = anchor.getBoundingClientRect();
        const anchorlef = rect.left + rect.width / 2;
        const anchorhei = rect.top + rect.height / 2;
        let angle = anglefun(x, v, anchorlef, anchorhei);

        e12.forEach((el) => {
          el.style.transform = `rotate(${angle + 145}deg)`;
        });
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <>
      <div className="confpg">
        <Navbar onLogoClic={onLogoClick} color="#02412f"></Navbar>
        <div className="pg1">
          <div className="cnn">
            <div className="bld">
              Hello! my <br />
              ​name is
              <span className="name">&nbsp;Gagan</span>
              <p className="nbld">
                I'm a <span id="element"> </span>
              </p>
            </div>

            <div className="e12 focus">
              <img className="e1 move" src={img1} alt="kk" />
              <img className="e2 move" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fpg;  