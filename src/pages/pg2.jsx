import "../css/pg2.css";
import Social from "../compnent/social";
import "../css/index.css";
import home from "../img/lib.svg";
import hireme from "../img/message-square-lines-alt-svgrepo-com (1).svg";

import Navbar from "../compnent/nav";

function Menu({ onLogoClick }) {
  return (
    <>
      <div className="nav2">
        <header style={{ backgroundColor: "#aadcec" }}>
          <div className="lef">
            <a href=""> <img src={home} className="homec1"
  alt="" /> </a>


          <div className="divider"></div>
            <div className="logo" onClick={onLogoClick}> 
            <div className="menu">
              <span>c</span>
              <span>l</span>
              <span>o</span>
              <span>s</span>
              <span>e</span>
            </div>
            </div>
            
           
          </div>
          <div className="rig"> 
          <div className="hiremehd">
        <a href= "./Gagandeep_Singh_2101594.pdf"   download>  
        <span>H .</span>
          <span>I .</span>
          <span>R .</span>
          <span>E .</span>
          <span> &nbsp; M .</span>
          <span>E .</span>
        </a>
         
        </div>
          </div>
        </header>
      </div>
      <div className="pg22">
        <Social></Social>
      </div>
    </>
  );
}

export default Menu;
