import Fpg from "./pages/fpg";
import Pg3 from "./pages/pg3.jsx";
import Navbar from "./compnent/nav";
import Menu from "./pages/pg2";
import React from "react";
<<<<<<< HEAD
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
 
=======
import { useState } from "react";
import Pg2p1 from "./pages/pg2p1.jsx";
import Proj from "./pages/proj.jsx";
import Footer from "./compnent/footer.jsx";

function App() {
>>>>>>> ecaf63186867df9c3944ae9d2ae7fde6c0ec63c9
  const [nv, setnv] = useState(false);
  function nvsetter() {
    setnv(!nv);
  }
  const col = "blue" || "defaultColor";
  return (
<<<<<<< HEAD
    <><div className="cursor" 
    style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
=======
    <>
>>>>>>> ecaf63186867df9c3944ae9d2ae7fde6c0ec63c9
      {nv ? (
        <>
          <Menu onLogoClick={nvsetter} />
        </>
      ) : (
        <>
<<<<<<< HEAD
          {" "} 
          <Fpg onLogoClick={nvsetter} color="red" />
          <Pg2p1></Pg2p1>
          <Proj></Proj> 
          <SpaceBackground></SpaceBackground>
=======
          {" "}
          <Fpg onLogoClick={nvsetter} color="red" />
          <Pg2p1></Pg2p1>
          <Proj></Proj>
>>>>>>> ecaf63186867df9c3944ae9d2ae7fde6c0ec63c9
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
<<<<<<< HEAD
 
=======

/* <Fpg color={"red"}></Fpg>
      <Page2></Page2>

      <div className="page">2</div>
      <div className=" page">3</div>
      <div className="page">4</div>
      <div className="page">7</div>*/
>>>>>>> ecaf63186867df9c3944ae9d2ae7fde6c0ec63c9
