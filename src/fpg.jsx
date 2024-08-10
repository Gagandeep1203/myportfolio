/*import React from "react";
import img1 from "./img/12208.png"; // Correct path

function Fpg() {
  const e12 = document.querySelectorAll(".move");
  window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let v = e.clientY;
    console.log(x, v);
    let anchor = document.getElementsByClassName(".focus");
    let rek = focus.getBoundingclientreac;
    const anchorlef = anchor.left + anchor.width / 2;
    const anchorhei = anchor.top + anchor.height / 2;
    let angle = anglefun(x, v, anchorlef, anchorhei);
    Array.from(e12).forEach((e) => {
      e.style.transform = `rotate(${angle + 90})deg`;
    });
  });

  function anglefun(mx, mv, ax, av) {
    let dx = mx - ax;
    let dv = mv - av;
    let degree = (Math.atan2(dx, dv) * 180) / 3.14;
    return degree;
  }
  return (
    <>
      <div className=" pg1">
        <div className="cnn">
          <div className="bld">
            hii! my <br />
            ​name is
            <span className="name">&nbsp;Gagan</span>
            <p className="nbld">
              I'm an <b>independent creative developer</b> from chandigarh.
            </p>
          </div>

          <div className="e12 focus">
            <img className="e1 move" src={img1} alt="kk" />
            <img className="e2 move" src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fpg;
*/
import React, { useEffect } from "react";
import img1 from "./img/12208.png";

function Fpg() {
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
          el.style.transform = `rotate(${angle + 135}deg)`;
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
    <div className="pg1">
      <div className="cnn">
        <div className="bld">
          hii! my <br />
          ​name is
          <span className="name">&nbsp;Gagan</span>
          <p className="nbld">
            I'm an <b>independent creative developer</b> from Chandigarh.
          </p>
        </div>

        <div className="e12 focus">
          <img className="e1 move" src={img1} alt="kk" />
          <img className="e2 move" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Fpg;
