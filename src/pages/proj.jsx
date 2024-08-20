import React, { useEffect } from "react";
import "../css/proj.css"; // Make sure you have your CSS in the 'style.css' file

function Proj() {
  const spfi = {
    description:
      " --I created a Spotify clone that fetches song data directly from local storage. This project replicates core Spotify features, such as dynamic song display and playback, all built using HTML, CSS, and JavaScript.",
  };

  useEffect(() => {
    // Select the sticky section only once after the component mounts
    const stickySection = document.querySelector(".chipku");

    function handleScroll() {
      // Function to handle the scroll transformation logic
      transform(stickySection);
    }

    // Attach scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect only runs once when the component mounts

  function transform(section) {
    if (section) {
      const offsetTop = section.parentElement.offsetTop;
      const scrollSection = section.querySelector(".scrollsec");

      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;

      percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;

      // Apply the transform to the horizontal scroll element
      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    }
  }

  return (
    <>
      <main>
        <section>
          <div className="prjcon prjverpg1">
            <div className="projh1par">
              <h1 className="projh1">My Projects</h1>
            </div>
          </div>
        </section>
        <div className="chipkupar">
          <div className="chipku">
            <div className="scrollsec">
              <div className=" elem red">
                <div className="spficon">
                  <div className="spfiimg">
                    <img src="../src/img/spfi.jpg" alt="" />
                  </div>
                  <div className="spfispan">
                    <span>{spfi.description}</span>
                  </div>
                </div>
              </div>
              <div className=" elem red">
                <div className="spficon">
                  <div className="spfiimg">
                    <img src="../src/img/abmKBEZ-800.jpg" alt="" />
                  </div>
                  <div className="spfispan">
                    <span>
                      The Memory Matching Game is a classic card game designed
                      to test and improve memory skills. Players are presented
                      with a grid of face-down cards, which they need to flip
                      two at a time to find matching pairs. The game continues
                      until all pairs are found.{" "}
                    </span>
                  </div>
                </div>
              </div>{" "}
              <div className=" elem red">
                <div className="spficon">
                  <div className="spfiimg">
                    <img src="../src/img/spfi.jpg" alt="" />
                  </div>
                  <div className="spfispan">
                    <span>{spfi.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="prjcon prjverpg1">
            <div className="black">
              <div className="lasheading">
                <h1>Thank you! </h1>
              </div>
            </div>
            <div className="white"></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Proj;
