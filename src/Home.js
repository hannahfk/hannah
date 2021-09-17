import React from "react";
import prof from "./prof.png";
import pinball from "./pinball.png";
import Navbar from "./Navbar";

const Home = (props) => (
  <div className="App">
    <div className="sign">
      <span className="fast-flicker">h</span>ann
      <span className="flicker">a</span>h
    </div>

    <img src={prof} className="prof" alt="logo" />

    <Navbar />
    <img src={pinball} className="flippers" alt="flippers" />
  </div>
);

export default Home;
