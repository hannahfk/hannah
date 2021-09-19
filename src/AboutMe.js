import React from "react";
import './AboutMe.css'
import prof from "./prof.png";

const AboutMe = (props) => {
  return (
    <div>
       <div className="sign">
      <span className="fast-flicker">h</span>ann
      <span className="flicker">a</span>h
    </div>
    <img src={prof} className="prof" alt="logo" />
  <p data-title="Info Dialog" className="dialog-box">
  <em>Note:</em> This is where I'll tell you more about myself. But for now: software engineer, flight attendant, pinball enthusiast, hockey fan, book reader, rooftop dancer, beach relaxer, ametuer foodie, music obsessed.
</p>
</div>
  );
};

export default AboutMe;
