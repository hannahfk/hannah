import React from "react";

import pinball from "./pinball.png";
import Navbar from "./Navbar";

const Home = (props) => (
  <div className="App">
    <div className="sign">
      <span className="fast-flicker">h</span>ann
      <span className="flicker">a</span>h
    </div>
  
  

    <Navbar />
    <img src={pinball} className="flippers" alt="flippers" />
  </div>
);

export default Home;
