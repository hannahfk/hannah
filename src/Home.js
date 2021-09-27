import React from "react";

import pinball from "./pinball.png";
import neongif2 from './images/neongif2.gif'
import Navbar from "./Navbar";

const Home = (props) => (
  <div className="App">
      <Navbar />
    <div className="sign">
      <span className="fast-flicker">w</span>elc
      <span className="flicker">o</span>me
    </div>
  
  

  
    {/* <img src={pinball} className="flippers" alt="flippers" /> */}
    <img src={neongif2} className="gif" alt="javascript" />
  </div>
);

export default Home;
