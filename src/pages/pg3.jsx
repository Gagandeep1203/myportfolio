import "../css/Pg3.css";
import { useEffect } from "react";
import React from "react";
import hill1 from "../img/parallax/hill1.png";
import hill2 from "../img/parallax/hill2.png";
import hill3 from "../img/parallax/hill3.png";
import hill4 from "../img/parallax/hill4.png";
import hill5 from "../img/parallax/hill5.png";
import leaf from "../img/parallax/leaf.png";
import tree from "../img/parallax/tree.png";
import plant from "../img/parallax/plant.png";
function Pg3() {
  const move = window.scrollY;
  useEffect(() => {
    const leaf = document.querySelector(".leaf");
    const hill1 = document.querySelector(".hill1");
    const hill2 = document.querySelector(".hill2");
    const hill3 = document.querySelector(".hill3");
    const hill4 = document.querySelector(".hill4");
    const hill5 = document.querySelector(".hill5");
    const tree = document.querySelector(".tree");

    const h1 = document.querySelector("h1");
    function scrollup() {
      const val = window.scrollY;
      leaf.style.marginTop = -val * 0.3 + `px`;
      hill1.style.marginTop = val * 0.3 + `px`;
      hill2.style.marginTop = val * 0.3 + `px`;
      hill3.style.marginTop = -val * 0.3 + `px`;

      hill5.style.marginLeft = -val * 0.3 + `px`;

      hill4.style.marginRight = -val * 0.3 + `px`;
      tree.style.marginLeft = -val * 0.3 + `px`;
      h1.style.top = val * 1 + `px`;
    }

    window.addEventListener("scroll", scrollup);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollup);
    };
  }, [scrollY]);
  return (
    <>
      <div className="parallax">
        <img src={hill1} className="hill1" alt="" />
        <img src={hill2} className="hill2" alt="" />
        <img src={hill3} className="hill3" alt="" />
        <img src={hill4} className="hill4" alt="" />
        <img src={hill5} className="hill5" alt="" />
        <h1>My Portfolio</h1>
        <img src={leaf} className="leaf" alt="" />
        <img src={tree} className="tree" alt="" />
        <img src={plant} className="plant" alt="" />
      </div>
    </>
  );
}
export default Pg3;
