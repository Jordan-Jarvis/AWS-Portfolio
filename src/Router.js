import React from "react";
import HomePage from "./views/home/home"
import ProjectPDFCard from "./views/projects/projectCards/cardPDF"
import NotFound from "./views/errorCorrection/404Error.js"
import Construction from "./views/errorCorrection/underConstruction.js"
import AboutMe from "./views/aboutme/aboutme"
import ContactMe from "./views/contactme/contactme"
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
              About Page
              <AboutMe/>
            </Route>

            <Route exact path="/resume">
            <ProjectPDFCard 
            
                title = 'Click "download" below to download a copy' 
                PDFURL = "https://projects215100-staging.s3.us-east-2.amazonaws.com/public/Resume-b.pdf"

                buttonText = "Download" 
                newURL = "https://projects215100-staging.s3.us-east-2.amazonaws.com/public/Resume-b.pdf"
                />

              Users Page
            </Route>
              

            <Route exact path="/projects">
              <ProjectList />
            </Route>
            <Route exact path="/thissite">
              <Construction />
            </Route>
            <Route exact path="/rpimusic">
              <Construction />
            </Route>
            <Route exact path="/boggle">
              <Construction />
            </Route>
            <Route exact path="/hmusic">
              <Construction />
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


