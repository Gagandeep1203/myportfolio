
/*
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


*/





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
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const cursorRef = useRef(null); // Create a ref for the cursor

  useEffect(() => {
    // Simulate loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000 );

    const scroller = new SmoothScroll({
      target: document.querySelectorAll("*"),  
      scrollEase: 0.01,
    });

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(loadingTimeout);
    };
  }, []);

  const toggleNav = () => {
    setnv(!nv);
  };

  // Loading Screen Component
  const LoadingScreen = () => (
     <>
      <div className="loading">
        <div className="boxes">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> 
      </div></>
  );

  return (
    <>
      {isLoading ? (<>
         {console.log("Rendering loading screen.")}
        <LoadingScreen /> </>
      ) : (
        <>
          <div
            className="cursor"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          ></div> 
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
      )}
    </>
  );
}

export default App;
