/*

import React, { useState } from "react";
import home from "../img/lib.svg";
import hireme from "../img/message-square-lines-alt-svgrepo-com (1).svg";
import "../css/Navbar.css";
import Page2 from "../pages/pg2";

function Navbar({ color, onlogoclick }) {
  console.log("Background Color Prop:", color);
  const [ham, setham] = useState(false);

  console.log(ham);

  return (
    <header style={{ backgroundColor: color }}>
      <div className="lef">
        <div className="logo" onClick={() => setham(!ham)}>
          <img src={home} className="homec1" alt="" />
          <img src={home} className="homec2" alt="" />
        </div>
        <div className="divider"></div>
        <div className="menu">
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>U</span>
        </div>
      </div>
      <div className="rig">
        <img src={hireme} className="hm" alt="" />
        <div className="hiremehd">
          <span>H .</span>
          <span>I .</span>
          <span>R .</span>
          <span>E .</span>
          <span> &nbsp; M .</span>
          <span>E .</span>
        </div>
      </div>

      { {ham && <Page2 />} Display SecondPage when ham is true  }
    </header>
  );
}

export default Navbar;*


/
/*


import React, { useState } from "react";
import home from "../img/lib.svg";
import hireme from "../img/message-square-lines-alt-svgrepo-com (1).svg";
import "../css/Navbar.css";

function Navbar(props) {
  console.log("Background Color Prop:", props.color);
  const [ham, setham] = useState(false);

  console.log(ham);
  return (
    <header style={{ backgroundColor: props.color }}>
      <div className="lef">
        <div className="logo" onClick={() => setham(!ham)}>
          <img src={home} className="homec1" alt="" />
          <img src={home} className="homec2" alt="" />
        </div>
        <div className="divider"></div>
        <div className="menu">
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>U</span>
        </div>
      </div>
      <div className="rig">
        <img src={hireme} className="hm" alt="" />
        <div className="hiremehd">
          <span>H .</span>
          <span>I .</span>
          <span>R .</span>
          <span>E .</span>

          <span> &nbsp; M .</span>
          <span>E .</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;




*/

/*import React, { useState } from "react";
import home from "../img/lib.svg";
import hireme from "../img/message-square-lines-alt-svgrepo-com (1).svg";
import "../css/Navbar.css";

function Navbar(props) {
  console.log("Background Color Prop:", props.color);
  const [ham, setham] = useState(false);

  console.log(ham);
  return (
    
    <header style={{ backgroundColor: props.color }}>
      <div className="lef">
        <div className="logo" onClick={() => setham(!ham)}>
          <img src={home} className="homec1" alt="" />
          <img src={home} className="homec2" alt="" />
        </div>
        <div className="divider"></div>
        <div className="menu">
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>U</span>
        </div>
      </div>
      <div className="rig">
        <img src={hireme} className="hm" alt="" />
        <div className="hiremehd">
          <span>H .</span>
          <span>I .</span>
          <span>R .</span>
          <span>E .</span>

          <span> &nbsp; M .</span>
          <span>E .</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
*/

import React, { useState } from "react";
import home from "../img/lib.svg";
import hireme from "../img/message-square-lines-alt-svgrepo-com (1).svg";
import "../css/Navbar.css";

function Navbar({ color, onLogoClic }) {
  return (
    <header style={{ backgroundColor: "#aadcec" }}>
      <div className="lef">
        <div className="logo" onClick={onLogoClic}>
          <img src={home} className="homec1" alt="" />
          <img src={home} className="homec2" alt="" />
        </div>
        <div className="divider"></div>
        <div className="menu">
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>U</span>
        </div>
      </div>
      <div className="rig">
        <img src={hireme} className="hm" alt="" />
        <div className="hiremehd">
          <span>H .</span>
          <span>I .</span>
          <span>R .</span>
          <span>E .</span>
          <span> &nbsp; M .</span>
          <span>E .</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
