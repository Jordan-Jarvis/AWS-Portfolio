import React from "react"
import ProjectCard from './projectCards/cardTemplate.js'
import './project.css' 
import ProjectIframeCard from "./projectCards/cardIframe.js"

const Logo = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07712d52323517.5608d99892165.png";

const ProjectList = () => (


<div>
        <ProjectCard 
                title = 'This Site' 
                text = "My latest project is making this site. It is built in Node.js, uses React for the front-end, and is hosted on AWS. Click the button below to see the source." 
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
                title = 'AI and Computer Vision Boggle and Sudoku Solver' 
                text = "This program uses a combination of tensorflow libraries, opencv2, and numpy matrix manipulation to solve sudoku puzzles and boggle boards real time from a video feed." 
                buttonText = "Link to source" 
                imgURL = 'https://raw.githubusercontent.com/Jordan-Jarvis/ComputerVisionBoggleSolver/master/ReadmeFiles/boardfound.png' 
                newURL = 'https://github.com/Jordan-Jarvis/ComputerVisionBoggleSolver'
                />
        <ProjectIframeCard 
                title = 'AI and Computer Vision Boggle and Sudoku Solver' 
                frameURL =   '<iframe src="https://aqueous-brushlands-07164.herokuapp.com/playMusic"></iframe>'

                buttonText = "Link to source" 
                newURL = 'https://github.com/Jordan-Jarvis/ComputerVisionBoggleSolver'
                />
                

</div>
      )
    

  export default ProjectList