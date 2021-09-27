import React from "react";
import "./Projects.css";
import donut from "./images/Donut-clipart copy.png";
import unicorn from "./images/glow copy.png";
import ticket from "./images/ticket2.jpeg";

const Projects = (props) => {
  return (
    <div className="projects">
      <div className="sign">
        <span className="fast-flicker">P</span>roje
        <span className="flicker">ct</span>s
      </div>
      <div className="skill-row">
        <img src={unicorn} className="design" alt="origami unicorn" />
        <h3>Glow In The Blue</h3>
        <p>"A Cozy Place For Pacing Your Day"</p>
        <p>
          A mobile productivity tracking app allowing you to challenge friends
          and get user analytics. Created using React Native, Firebase, React,
          Express, PostgreSQL
        </p>
        <p>
          <div id="neonShadow">
            <button
              className="project-button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "http://glowintheblue.herokuapp.com/";
              }}
            >
              Go ➪
            </button>
          </div>
        </p>
      </div>
      <hr></hr>
      <div className="skill-row">
        <img src={donut} className="coding" alt="donut" />
        <h3>Squats Til Donuts</h3>
        <p>
          A fitness inspired app the number of squats you do and reminds you to
          treat yourself. Created using React Native, React, Express,
          PostgreSQL, Sequelize, NodeJS.
        </p>
        <div id="neonShadow">
          <button
            className="project-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://expo.io/@hannahkemp/projects/squats";
            }}
          >
            Go ➪
          </button>
        </div>
      </div>

      <hr></hr>
      <div className="skill-row">
        <img src={ticket} className="design" alt="ticket" />
        <h3>City Tickets NYC</h3>
        <p>
          An e-commerce site listing and selling tickets to events in New York
          City. Created using React, Redux, Express, PostgreSQL, Sequelize,
          NodeJS.
        </p>

        <div id="neonShadow">
          <button
            className="project-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://cityticketsnyc.herokuapp.com";
            }}
          >
            Go ➪
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
