import React, { useState, useEffect, useRef } from "react";
import Fpg from "./pages/fpg";
import Pg2p1 from "./pages/pg2p1.jsx";
import Proj from "./pages/proj.jsx";
import Menu from "./pages/pg2";
import Footer from "./compnent/footer.jsx";
import SpaceBackground from "./pages/meetme.jsx"; 
import SmoothScroll from 'smooth-scroll';
import "./css/scroll.css";
import "./css/cursor.css"; 

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [nv, setnv] = useState(false);
  const cursorRef = useRef(null); // Create a ref for the cursor

  useEffect(() => {
    const scroller = new SmoothScroll({
      target: document.querySelectorAll("*"),  
      scrollEase: 0.01,
    });

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleNav = () => {
    setnv(!nv);
  };

  return (
    <>
      <div className="cursor" 
           style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
      {nv ? (
        <Menu onLogoClick={toggleNav} />
      ) : (
        <> 
         <Fpg onLogoClick={toggleNav} color="red" />
          <Pg2p1 />
          <Proj />
          <SpaceBackground />
            
        </>
      )}
    </>
  );
}

export default App;
