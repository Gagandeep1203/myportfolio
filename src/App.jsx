import Fpg from "./pages/fpg";
import Pg3 from "./pages/pg3.jsx";
import Navbar from "./compnent/nav";
import Menu from "./pages/pg2";
import React from "react";
import { useState } from "react";
import Pg2p1 from "./pages/pg2p1.jsx";
import Proj from "./pages/proj.jsx";

function App() {
  const [nv, setnv] = useState(false);
  function nvsetter() {
    setnv(!nv);
  }
  const col = "blue" || "defaultColor";
  return (
    <>
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
        </>
      )}
    </>
  );
}

export default App;

/* <Fpg color={"red"}></Fpg>
      <Page2></Page2>

      <div className="page">2</div>
      <div className=" page">3</div>
      <div className="page">4</div>
      <div className="page">7</div>*/
