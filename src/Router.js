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
import Wedding from "./views/wedding/wedding"
import ThisSite from "./views/projects/thissite/thissite"
import {
    Routes,
    Route,
    Link,
    redirect
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
          <Routes>
            <Route exact path="/aboutme" element={<AboutMe/>}/>
              



            <Route exact path="/resume" element={
            <ProjectPDFCard 
            
                title = 'Click "download" below to download a copy' 
                PDFURL = "https://projects215100-staging.s3.us-east-2.amazonaws.com/public/Resume-b.pdf"

                buttonText = "Download" 
                newURL = "https://projects215100-staging.s3.us-east-2.amazonaws.com/public/Resume-b.pdf"
                newTab="1"
                />}/>
            <Route exact path="/projects" element={<ProjectList />}/>
             
            
            <Route exact path="/thissite" element={<ThisSite />}/>
              
            
            <Route exact path="/rpimusic" element={<RPIPlay />}/>
              
            
            <Route exact path="/boggle" element={<BoggleSolve/>}/>
              
            
            <Route exact path="/hmusic" element={<HerokuExpress/>}/>
            
            
            <Route exact path="/wedding" element={window.location.replace('https://www.theknot.com/us/jordan-jarvis-and-rebecca-kiser/	')}/>
              
           
            <Route exact path="/contactme" element={<ContactMe />}/>
              
           
            <Route exact path="/me" element={<Construction />}/>
              
           
            <Route exact path="/" element={<HomePage/>}/>
              
            
            <Route component={NotFound} />
          </Routes>
      </AnimatePresence>
        </div>
      </Router>
    );
  }


