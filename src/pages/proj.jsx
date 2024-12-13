import React, { useEffect } from "react";
import "../css/proj.css";
import "../css/pg2p1.css"; 
function Proj() {
  const spfi = {
    description:
      " --I created a Spotify clone that fetches song data directly from local storage. This project replicates core Spotify features, such as dynamic song display and playback, all built using HTML, CSS, and JavaScript.",
  };

  useEffect(() => {
    let cursorY = window.innerHeight / 2; // Default to middle of viewport

    // Function to highlight popup elements based on cursor position
    const highlightPopups = () => {
      const popups = document.querySelectorAll(".popup");

      popups.forEach((popup) => {
        const { top, bottom } = popup.getBoundingClientRect();
        if (cursorY >= top && cursorY <= bottom) {
          popup.classList.add("highlight");
        } else {
          popup.classList.remove("highlight");
        }
      });
    };

    const handleMouseMove = (event) => {
      cursorY = event.clientY; // Update cursorY position on mousemove
      highlightPopups();
      applyParallax(event);
    };

    const handleScroll = () => {
      highlightPopups(); // Trigger highlight check on scroll
    };

    // Parallax effect for popup elements
    const applyParallax = (event) => {

      const popups = document.querySelectorAll(".popup");
      const popups2 = document.querySelectorAll(".skillscon > *");
      const popups3 = document.querySelectorAll(".projin > *");
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (event.clientX - centerX) / centerX;
      const offsetY = (event.clientY - centerY) / centerY;

      const applyParallaxEffect = (elements) => {
        elements.forEach((child, index) => {
          const intensity = (index + 1) * 0.1;
          const translateX = offsetX * intensity * 60;
          const translateY = offsetY * intensity * 60;
          child.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
      };
      applyParallaxEffect(popups3); 

      applyParallaxEffect(popups2); 
      applyParallaxEffect(popups); 
    };

    // Attach both event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for hidden elements
    const hiddenElements = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElements.forEach((elem) => observer.observe(elem));

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="prjcon prjverpg1">
            <div className="headd">
              <div className="projh1par">
                <div>
                  <h1 className="projh2">My Projects</h1>
                </div>
                <div>
                  <h1 className="projh2">and skills..</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="popup red preac">react</div>
            <div className="popup blue pnode">node</div>
            <div className="popup red pexpress">express</div>
            <div className="popup blue pcss">css</div>
            <div className="popup red pwind">tailwind</div>
            <div className="popup blue pmongo">mongodb</div>
            <div className="popup red pcpp">c++</div>
            <div className="popup blue pphp">php</div>
            <div className="popup red pnet">.net</div>
          </div>
        </section>
        <section className="skillscon">
          <div className="projincon">
            <section className="projin hidden ">
              <div className="head hidden">
                <h1>Real-time chat application</h1>
              </div>
              <div className="intro hidden">
                <a  href="https://github.com/Gagandeep1203/chaiAurCodeReac/tree/main/chatapp">
                  <p>
                    --"Introducing ChatSpace – a dynamic real-time chat
                    application built using the power of the MERN stack
                    (MongoDB, Express, React, Node.js). Whether you're catching
                    up with friends or collaborating with teammates, ChatSpace
                    delivers instant, seamless communication."<br /><b>link</b>
                  </p>
                </a>
              </div>
            </section>
            <section className="projin hidden">
              <div className="head hidden">
                <h1>Music player</h1>
              </div>
              <div className="intro hidden">
                <a href="https://github.com/Gagandeep1203/spotify-clone">
                  <p>
                    --"Introducing Spfi – a powerful music player built with
                    JavaScript that brings your personal music library to life."<br />
                    <b>link</b>
                  </p>
                </a>
              </div>
            </section>
            <section className="projin hidden">
              <div className="head hidden">
                <h1>Memory Game</h1>
              </div>
              <div className="intro hidden">
                <a href="">
                  <p>
                    --"Step into the world of mind-bending challenges with
                    MemoryMaster – a fast-paced memory game designed to test and
                    enhance your cognitive skills."<br />
                   <b>link</b>                    
                  </p>
                </a>
              </div>
              <div className="intro hidden">
                <p>
                  --"All these projects are available on my GitHub and yet to be
                  deployed, please have a look at my GitHub account."
                  <b>link</b>
                </p>
              </div>
            </section>
            
          </div>
        </section> 
      </main>
    </>
  );
}

export default Proj;
