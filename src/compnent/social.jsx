import "../css/Navbar.css";
import insta from "../img/socialmedia/insta.svg";
import linkedln from "../img/socialmedia/linkedln.svg";
import git from "../img/socialmedia/git.svg";
import mail from "../img/socialmedia/mail.svg";

function Social() {
  return (
    <div className="consocial">
      <div className="hr"></div>
      <div className="iconbar">
<<<<<<< HEAD
        <a href="https://www.instagram.com/gagan_deep27?igsh=eHpoM2IxdjIwZHRp">
          <img src={insta} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/gagandeep-singh-21b333247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <img src={linkedln} alt="" />
        </a>
        <a href="https://github.com/Gagandeep1203">
          <img src={git} alt="" />
        </a>
        <a href="gagan2782003@gmail.com">
          <img src={mail} alt="" />
        </a>
      </div>
      <div className="cv">
  <a
    href="./Gagandeep_Singh_2101594.pdf"
    download
    className="download-btn pixel-corners"
  >
    <div className="button-content">
      <div className="svg-container">
        <svg
          className="download-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"
          ></path>
        </svg>
      </div>
      <div className="text-container">
        <div className="text">Resume!</div>
      </div>
    </div>
  </a>
</div>

=======
        <a href="">
          <img src={insta} alt="" />
        </a>
        <a href="">
          <img src={linkedln} alt="" />
        </a>
        <a href="">
          <img src={git} alt="" />
        </a>
        <a href="">
          <img src={mail} alt="" />
        </a>
      </div>
>>>>>>> ecaf63186867df9c3944ae9d2ae7fde6c0ec63c9
    </div>
  );
}
export default Social;
