import ProjectIframeCard from "../projectCards/templates/cardIframe"
import React from "react"
import '../projectCards/templates/card.css'
class BoggleSolve extends React.Component {
  openURL(newURL){
  }
    render() {
      console.log(this.props.property);
      return (
        <ProjectIframeCard 
                title = 'AI and Computer Vision Boggle and Sudoku Solver' 
                text = "This program uses a combination of tensorflow libraries, opencv2, and numpy matrix manipulation to solve sudoku puzzles and boggle boards real time from a video feed." 
                frameURL = "https://www.youtube.com/embed/1wqC7KMDWdY"
                buttonText = "Link to source" 
                newURL = 'https://github.com/Jordan-Jarvis/ComputerVisionBoggleSolver'
                newTab="1"
                title2 = "Technologies used:"
                CHTML = { <div className="technologies"> <ul >
                        <li>Python</li>
                        <li>C++</li>
                        <li>OpenCV</li>
                        <li>Tensorflow</li>
                        <li>NVidia CUDA</li>
                        <li>Multiprocessing</li>
                        <li>NumPy (matrix manipulation)</li>
                        <li>TKinter</li>
                        <li>Keras</li>
                        <li>C++</li>
                        <li>OpenNN</li>
                  </ul></div>}
                />
      )
    }
  }
  export default BoggleSolve