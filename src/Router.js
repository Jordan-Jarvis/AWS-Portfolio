import React from "react";
import HomePage from "./views/home/home"
import ProjectPDFCard from "./views/projects/projectCards/templates/cardPDF"
import NotFound from "./views/errorCorrection/404Error.js"
import Construction from "./views/errorCorrection/underConstruction.js"
import AboutMe from "./views/aboutme/aboutme"
import ContactMe from "./views/contactme/contactme"
import BoggleSolve from "./views/projects/bogglesolve/bogglesolve"
import RPIPlay from "./views/projects/rpiplay/rpiplay"
import HerokuExpress from "./views/projects/herokuexpress/herokuExpress"
import ThisSite from "./views/projects/thissite/thissite"
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {AnimatePresence} from 'framer-motion'
  import { BrowserRouter as Router} from 'react-router-dom';
  import ProjectList from './views/projects/projects.js'
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
          <AnimatePresence>
          <Switch>
            <Route exact path="/aboutme">
              
              <AboutMe/>
            </Route>

            <Route exact path="/resume">
            <ProjectPDFCard 
            
                title = 'Click "download" below to download a copy' 
                PDFURL = "https://projects215100-staging.s3.us-east-2.amazonaws.com/public/Resume-b.pdf"

                buttonText = "Download" 
                newURL = "https://projects215100-staging.s3.us-east-2.amazonaws.com/public/Resume-b.pdf"
                newTab="1"
                />

              
            </Route>
            <Route exact path="/projects">
              <ProjectList />
            </Route>
            <Route exact path="/thissite">
              <ThisSite />
            </Route>
            <Route exact path="/rpimusic">
              <RPIPlay />
            </Route>
            <Route exact path="/boggle">
              <BoggleSolve/>
            </Route>
            <Route exact path="/hmusic">
              <HerokuExpress/>
            </Route>
            <Route exact path="/contactme">
              <ContactMe />
            </Route>
            <Route exact path="/me">
              <Construction />
            </Route>
            <Route exact path="/">
              <HomePage

              />
            </Route>
            <Route component={NotFound} />
          </Switch>
      </AnimatePresence>
        </div>
      </Router>
    );
  }


