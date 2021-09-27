import React from 'react'
import javascript from './images/javascript-logo.png'
import react from './images/react-logo.png'
import firebase from './images/firebase-logo.png'
import redux from './images/redux-logo.png'
import node from './images/nodejs-logo.png'
import html from './images/html5-logo.png'
import sequelize from './images/sequelize-logo.png'
import postgres from './images/postgresql-inc-logo.png'
import babel from './images/babel-logo.png'
import webpack from './images/webpack-icon-logo.png'
import css from './images/css3-logo.png'
import vsc from './images/visual-studio-code-logo.png'
import bootstrap from './images/bootstrap-logo.png'
import github from './images/github-octocat-logo.png'
import express from './images/expressjs.png'

const Technologies = () => {
  return (
    <div >
      <h1>Technologies:</h1>
      <img src={javascript} className="tech" alt="javascript" />
      <img src={react} className="tech" alt="javascript" />
      <img src={firebase} className="tech" alt="javascript" />
      <img src={redux} className="tech" alt="javascript" />
      <img src={node} className="tech" alt="javascript" />
      <img src={html} className="tech" alt="javascript" />
      <img src={sequelize} className="tech" alt="javascript" />
      <img src={postgres} className="tech" alt="javascript" />
      <img src={css} className="tech" alt="javascript" />

      <img src={webpack} className="tech" alt="javascript" />
      <img src={babel} className="tech" alt="javascript" />
      <img src={vsc} className="tech" alt="javascript" />
      <img src={bootstrap} className="tech" alt="javascript" />
      <img src={github} className="tech" alt="javascript" />
      <img src={express} className="tech" alt="javascript" />
    </div>
  )
}

export default Technologies;