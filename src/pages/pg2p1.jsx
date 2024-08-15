import React, { useEffect } from "react";
import "../css/Pg2p1.css";

function Pg2p1() {
  /*  useEffect(() => {
    const leaf = document.querySelector(".linepar");

    if (leaf) {
      // Ensure initial value is either the current top position or 0 if undefined
      let initop = parseFloat(leaf.style.top) || 0;

      const scrollup = () => {
        const scrollDistance = window.scrollY; // Get the scroll distance
        initop = scrollDistance * -0.8; // Modify this to control scroll speed
        leaf.style.top = initop + `px`; // Update the top position
        console.log(initop); // Log for debugging
      };

      window.addEventListener("scroll", scrollup);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", scrollup);
      };
    }
  }, []); // Empty dependency array to run only once on mount
*/
  return (
    <>
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
      </div>
    </>
  );
}

export default Pg2p1;
