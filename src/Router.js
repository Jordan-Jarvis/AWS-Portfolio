import React from "react";
import HomePage from "./home/home"
import ProjectPDFCard from "./projects/projectCards/cardPDF"
import NotFound from "./errorCorrection/404Error.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { PDFViewer } from 'react-view-pdf';
  import ProjectList from './projects/projects.js'
  var PDFURL = ""


console.log(PDFURL)
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
            <Route exact path="/about">
              About Page
            </Route>

            <Route exact path="/resume">
            <ProjectPDFCard 
            
                title = 'AI and Computer Vision Boggle and Sudoku Solver' 
                PDFURL = "https://projects215100-staging.s3.us-east-2.amazonaws.com/public/Resume.pdf"

                buttonText = "Link to source" 
                newURL = 'https://github.com/Jordan-Jarvis/ComputerVisionBoggleSolver'
                />

              Users Page
            </Route>


            <Route exact path="/projects">
              <ProjectList />
            </Route>
            <Route exact path="/">
              <HomePage
              title = 'AI and Computer Vision Boggle and Sudoku Solver' 

              buttonText = "Link to source" 
              newURL = 'https://github.com/Jordan-Jarvis/ComputerVisionBoggleSolver'
              />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }