import Fpg from "./pages/fpg";
import Pg3 from "./pages/pg3.jsx";
import Navbar from "./compnent/nav";
import Menu from "./pages/pg2";
import React from "react";
import { useState,useEffect,useRef } from "react";
import Pg2p1 from "./pages/pg2p1.jsx";
import Proj from "./pages/proj.jsx";
import Footer from "./compnent/footer.jsx";
import "./css/scroll.css"
import "./css/cursor.css"
import SpaceBackground from "./pages/meetme.jsx"; 
import SmoothScroll from 'smooth-scroll';


function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null); // Create a ref for the cursor
  let crsr=document.getElementsByClassName('cursor');
useEffect(()=>{
  var scroller = new SmoothScroll({
    target: document.querySelectorAll("*"),  
    scrollEase: 0.05,
  });
  
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
 
  const [nv, setnv] = useState(false);
  function nvsetter() {
    setnv(!nv);
  }
  const col = "blue" || "defaultColor";
  return (
    <><div className="cursor" 
    style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
      {nv ? (
        <>
          <Menu onLogoClick={nvsetter} />
        </>
      ) : (
        <>
          {" "} 
          <Fpg onLogoClick={nvsetter} color="red" />
          <Pg2p1></Pg2p1>
          <Proj></Proj> 
          <SpaceBackground></SpaceBackground>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
 