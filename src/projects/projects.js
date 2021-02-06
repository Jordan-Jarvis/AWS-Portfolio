import React from "react"
import ProjectCard from './projectCards/cardTemplate.js'
import './project.css' 

const Logo = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07712d52323517.5608d99892165.png";

const ProjectList = () => (


<div>
        <ProjectCard title = 'TEST TEMPLATE' text = "This contains the description of the project" buttonText = "Link to Source"/>
        <ProjectCard title = 'TEST TEMPLATE' text = "This contains the description of the project" buttonText = "Link to source" imgURL = 'https://raw.githubusercontent.com/Jordan-Jarvis/RPi-Diskalvier-network-player/master/static/screenshot.png' newURL = 'https://github.com/Jordan-Jarvis/RPi-Diskalvier-network-player'/>
</div>
      )
    

  export default ProjectList