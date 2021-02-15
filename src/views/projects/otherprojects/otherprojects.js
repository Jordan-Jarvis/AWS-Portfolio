import ProjectCard from "../projectCards/templates/cardTemplate"
import React from "react"
import '../projectCards/templates/card.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../home/carousel.css"
import "./otherprojects.css"

class OtherProjects extends React.Component {
  openURL(newURL) {
  }
  render() {
    console.log(this.props.property);
    return (
      <ProjectCard
        title='Other Projects'
        text="I haven't had a chance to convert the projects to a format good for viewing on the web yet, but below is a list of some other projects I have done."
        CHTML={<div>
          <div className="technologies"><ul >
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/blob/master/cs345/cs345_lab03.cpp">C++ Linux Shell implementation</a></li>
            <li><a href= "https://github.com/Jordan-Jarvis/school-stuff/tree/master/cs345/cs345_lab04">C++ CPU Operating System Scheduling Implementations</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/blob/master/cs345/cs345_lab05/lab05.cpp">C++ Multithreaded Matrix Multiplication</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/blob/master/cs345/cs345_lab07/lab07.cpp">C++ Multithreaded Producer And Consumer Simulator (Semlock practice)</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/blob/master/cs345/cs345_lab08/lab08.cpp">C++ Matrix Multiplication Using OpenMP</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/tree/master/cs345/cs345_lab10">C++ Page Replacement Algorithm Implementations</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/tree/master/cs345/cs345_lab11">C++ Disk Scheduling Algorithm Implementations</a></li>
            <li><a href="https://github.com/kolmills/TrashApple">Android App Using Various Technologies</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/cse453">C++ Security Exploit Examples And Mitigations</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/tree/master/cs235">Collection Of C++ Data Structure Implementations And Sorting Algorithms</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/tree/master/cs165/week11/asteroids">C++ Asteroids Game</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/tree/master/cs165/week8/skeet">C++ Skeet Game</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/school-stuff/tree/master/cs124/week12">C++ Sudoku Game</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/ML/blob/master/Neural%20Network%20Implementation.py">Python Neural Network Implementation</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/ML/blob/master/Decision%20tree%26k-folds.py">K-Folds And Decision Tree Implementation</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/ML/blob/master/KNN%20algorithm%20implementation.py">K Nearest Neighbors Implementation</a></li>
            <li><a href="https://github.com/Jordan-Jarvis/cs313-php/tree/master/web">Collection Of PHP Practice And Demos</a></li>
          </ul>
          More are on the way, these are just the ones I have already uploaded.
          </div></div>}
        buttonText="Home"
        newURL="/"
        newTab="0"
      />
    )
  }
}
export default OtherProjects