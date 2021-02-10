import React from "react"
import ProjectCard from './projectCards/cardTemplate.js'
import './project.css' 
import ProjectIframeCard from "./projectCards/cardIframe.js"
import ProjectEmbedCard from "./projectCards/cardEmbed.js"


const Logo = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07712d52323517.5608d99892165.png";

const ProjectList = () => (


<div>
<ProjectCard 
                title = 'Take a look at some of my projects' 
                text = "Below are a collection of some of the projects I have done over the years. I am still building the site and have many more projects which will be added soon." 
                
                buttonText = "Go Home"
                newURL = "/"
                />
        <ProjectCard 
                title = 'This Site' 
                text = "My latest project is making this site. It is still under construction as I just started making it. I decided to learn various new technologies based on AWS. Technologies used for this project include, but are not limited to:" 
                CHTML = { <div className="technologies"> <ul >
                        <li>AWS (hosting)</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Amplify</li>
                        <li>S3 Buckets</li>
                        <li>REACT</li>
                        <li>Bootstrap</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>JSON</li>
                        <li>Rest API</li>
                        <li>Proabably more I forgot</li>
                  </ul></div>}
                buttonText = "Go to Source"
                newURL = "https://github.com/Jordan-Jarvis/AWS-Portfolio"
                />

        <ProjectIframeCard 
                title = 'RPi Disklavier Network Player' 
                text = "Please forgThis player allows for a Raspberry Pi to host a Midi player/recorder server. This plays using the serial MIDI port used for various instruments and DOES NOT CONTAIN A SYNTHYSIZER! It was designed to update a player piano from Yamaha that still took floppy disks for playback. You can route it to a local synth like timidity if you need support for a synth. It has a web interface and ajax/json support for future Alexa and Google home integration. Please forgive the messy code, I was learning CSS and JavaScript native when I started this project and it got pretty complicated. I am rebuilding it in Django and React, but this website comes first." 
                CHTML = { <div className="technologies"> <ul >
                        <li>C++</li>
                        <li>Python</li>
                        <li>GRPC</li>
                        <li>JavaScript</li>
                        <li>SMB sharing</li>
                        <li>C (Linux Binaries)</li>
                        <li>Multithreading</li>
                        <li>Flask</li>
                        <li>Serial Interface</li>
                        <li>Raspberry Pi</li>
                        <li>Rest API (Google Home)</li>
                        <li>HTML</li>
                        <li>CSS</li>
                  </ul></div>}
                buttonText = "Link to source" 
                frameURL = "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6719651416736198656?compact=1"
                newURL = 'https://github.com/Jordan-Jarvis/RPi-Diskalvier-network-player'
                />
        <ProjectIframeCard 
                title = 'AI and Computer Vision Boggle and Sudoku Solver' 
                text = "This program uses a combination of tensorflow libraries, opencv2, and numpy matrix manipulation to solve sudoku puzzles and boggle boards real time from a video feed." 
                frameURL = "https://www.youtube.com/embed/1wqC7KMDWdY"
                buttonText = "Link to source" 
                newURL = 'https://github.com/Jordan-Jarvis/ComputerVisionBoggleSolver'
                />
        <ProjectEmbedCard 
                title = 'Heroku HTML5 MP3 Player' 
                frameURL = "https://aqueous-brushlands-07164.herokuapp.com/playMusic"
                text = "Much of the UI was pre-built. I mostly made the back-end, which has a database which stores song information, album information, image URLs and more. It uses Express on Heroku and is able to play music from the server. Another project goes much more in depth on databases and storing data using SQL."
                CHTML = { <div className="technologies"> <ul >
                        <li>Heroku</li>
                        <li>PHP</li>
                        <li>Express</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>mySQL</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Javascript MP3 Player Libraries</li>
                        <li>Postgres</li>
                        <li>JSON</li>
                  </ul></div>}

                  embedCode = {<iframe className = "marg" src="https://aqueous-brushlands-07164.herokuapp.com/playMusic" frameBorder="0" allowFullScreen ><p>Your browser does not support iframes.</p></iframe>}
                buttonText = "Link to source" 
                newURL = 'https://github.com/Jordan-Jarvis/React-MP3-Player'
                />
                        

</div>
      )
    

  export default ProjectList