import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { PDFViewer } from 'react-view-pdf';
  import ProjectList from './projects/projects.js'
  export default function URLRouter() {
    return (
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/resume">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav> */}
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              About Page
            </Route>
            <Route path="/resume">
            <PDFViewer url="Resume.png" />
              Users Page
            </Route>
            <Route path="/projects">
              <ProjectList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }