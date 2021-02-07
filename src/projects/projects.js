import React from "react"
import ProjectCard from './projectCards/cardTemplate.js'
import './project.css' 

const Logo = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07712d52323517.5608d99892165.png";

const ProjectList = () => (


<div>
        <ProjectCard 
                title = 'This Site' 
                text = "This contains the source code for the site you are looking at now. It is built in Node.js, uses React for the front-end, and is hosted on AWS." 
                buttonText = "Go to Source"
                newURL = "https://github.com/Jordan-Jarvis/AWS-Portfolio"
                />

        <ProjectCard 
                title = 'RPi Disklavier Network Player' 
                text = "Will add a description soon. Right now the site is under construction." 
                buttonText = "Link to source" 
                imgURL = 'https://raw.githubusercontent.com/Jordan-Jarvis/RPi-Diskalvier-network-player/master/static/screenshot.png' 
                newURL = 'https://github.com/Jordan-Jarvis/RPi-Diskalvier-network-player'
                />
        <ProjectCard 
                title = 'TEST TEMPLATE' 
                text = "This contains the description of the project" 
                buttonText = "Link to source" 
                imgURL = 'https://raw.githubusercontent.com/Jordan-Jarvis/RPi-Diskalvier-network-player/master/static/screenshot.png' 
                newURL = 'https://github.com/Jordan-Jarvis/RPi-Diskalvier-network-player'
                />

</div>
      )
    

  export default ProjectList