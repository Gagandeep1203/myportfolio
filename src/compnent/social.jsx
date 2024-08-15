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
    </div>
  );
}
export default Social;
