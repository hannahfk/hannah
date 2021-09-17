import React from "react";
import './Projects.css'

const Projects = (props) => {
  return (
    <div className="projects">
        <div className="skill-row">
        <h2>Projects</h2>
          <img
            className="design"
            src="images/glow.png"
            alt="paper unicorn"
          />
          <h3>Glow In The Blue</h3>
          <p>"A Cozy Place For Pacing Your Day"</p>
          <p>
            A mobile productivity tracking app allowing you to challenge friends
            and get user analytics. Created using React Native, Firebase, React,
            Express, PostgreSQL
          </p>
          <p>
            Visit:

            <a className="link"href="http://glowintheblue.herokuapp.com/">Visit GlowInTheBlue</a>
          </p>
        </div>
        <div className="skill-row">
          <img
            className="coding"
            src="images/Donut-clipart-removebg-preview.png"
            alt="donut"
          />
          <h3>Squats Til Donuts</h3>
          <p>
            A fitness inspired app the number of squats you do and reminds you
            to treat yourself. Created using React Native, React, Express,
            PostgreSQL, Sequelize, NodeJS.
          </p>
          <p>
            Visit:
            <a className="link"href="expo.io/@hannahkemp/projects/squats">Visit SquatsTilDonuts</a>
          </p>
        </div>
        <div className="skill-row">
          <img
            className="design"
            src="images/Exit-Ticket-removebg-preview.png"
            alt="ticket"
          />
          <h3>City Tickets NYC</h3>
          <p>
            An e-commerce site listing and selling tickets to events in New York
            City. Created using React, Redux, Express, PostgreSQL, Sequelize,
            NodeJS.
          </p>
          <p>
            Visit:
            <a className="link"href="cityticketsnyc.herokuapp.com">Visit City Tickets</a>
          </p>
        </div>
      </div>
  )
};

export default Projects;