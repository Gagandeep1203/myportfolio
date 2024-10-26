import React, { useEffect } from "react";
import "../css/proj.css"; // Make sure you have your CSS in the 'style.css' file
import "../css/pg2p1.css"; // Make sure you have your CSS in the 'style.css' file
 
function Proj() {
 
  useEffect(() => {
    const hid=document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((es)=>{
      es.forEach((e)=>{
        console.log(e);
        if(e.isIntersecting){
          e.target.classList.add("show")
        }
        else{
          e.target.classList.remove("show")
        }
      })
    })
    hid.forEach((elem)=> observer.observe(elem));
    function handleMouseMove(event) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;

      const children = document.querySelectorAll(".popup");
      const children2= document.querySelectorAll(".popup2");

      children.forEach((child, index) => {
        const intensity = (index + 1) * 0.2; 
        const translateX = offsetX * intensity * 60; 
        const translateY = offsetY * intensity * 60;

        child.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
      children2.forEach((child, index) => {
        const intensity = (index + 1) * 0.2; 
        const translateX = offsetX * intensity * 60; 
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
    <>
      <main>
        <section>
          <div className="prjcon prjverpg1">
            <div className="headd">
            <div className="projh1par">
              <h1 className="projh1">My Projects</h1>

            </div>
            <div className="projh1par">
              <h1 className="projh2">and skills..</h1>
              
            </div>
            </div>
          </div>
        </section> 
        <section className="skillscon"> 
          <div className="skills">
            <div className="popup2 red preac">react</div>
            <div className="popup red pnode">node</div>
            <div className="popup2 red pexpress">express</div>
            <div className="popup red pcss">css</div>
            <div className="popup2 red pwind">tailwind</div>
            <div className="popup red pmongo">mongodb</div>
            <div className="popup red pcpp">c++</div>
            <div className="popup2 red pphp">php</div>
            <div className="popup red pnet">.net</div> 
            <div className="popup2 red pcon">contact for more</div>
            <div className="popup red pbe">thanks for visiting</div>
          </div>
          <div className="projincon">
          <section className="projin hidden">
           <div className="head hidden"> <h1> Real time chat application</h1></div>
           <div className="intro hidden"><p>--"Introducing ChatSpace – a dynamic real-time chat application built using the power of the MERN stack (MongoDB, Express, React, Node.js). Whether you're catching up with friends or collaborating with teammates, ChatSpace delivers instant, seamless communication. With live updates, typing indicators, and a sleek, responsive UI, this app offers an effortless chatting experience across devices. Harnessing the full capabilities of Socket.io for real-time communication, ChatSpace ensures your conversations are not just fast but fully interactive."</p></div>
          </section>
          <section className="projin hidden">
           <div className="head hidden"><h1>Music player</h1></div>
           <div className="intro hidden"> <p>--"Introducing LocalTune – a powerful music player built with JavaScript that brings your personal music library to life. Designed to fetch songs directly from your local folder, LocalTune offers a seamless and intuitive listening experience. With its sleek interface, you can effortlessly browse, play, and create playlists from your favorite tracks stored on your device. Leveraging modern JavaScript capabilities, LocalTune ensures smooth playback and dynamic audio controls, allowing you to enjoy your music collection like never before. Rediscover the joy of your favorite songs with LocalTune!"</p></div>
          </section>
           <section className="projin hidden">
           <div className="head hidden" ><h1>Memory Game</h1></div>
           <div className="intro hidden"><p>--"Step into the world of mind-bending challenges with MemoryMaster – a fast-paced memory game designed to test and enhance your cognitive skills. Built using React, this game offers an engaging, responsive experience that sharpens your focus with every flip. MemoryMaster dynamically shuffles cards and tracks your performance in real time, ensuring no two games are the same. Whether you're competing against yourself or racing the clock, the sleek UI and smooth animations make this brain workout fun and rewarding."</p></div>
           <div className="intro hidden"><p>--all these projects are available on my github and yet to be deployed please have a look at my github account "</p></div>

          </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default Proj;
