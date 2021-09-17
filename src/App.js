
import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import AboutMe from "./AboutMe";

import Projects from "./Projects";
import Home from './Home'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
    </Router>
  );
}

export default App;
