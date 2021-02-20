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
                text = "This project was implemented using an Agile Methodology as my Senior Project. This program uses a combination of TensorFlow libraries, opencv2, and NumPy matrix manipulation to solve sudoku puzzles and boggle boards in real time from a video feed. While this looks simple, it is far from it. The computer needs to find the largest polygon on the image by using canny edge detection, then crop and warp-affine to it. Then it splits it up into pieces and removes extraneous data. Only then is it fed into a neural network. The neural network was built using Keras and I generated the training data by hand. I also created the architecture of the neural network. Only after all of this does the system even attempt to solve the boggle or sudoku board, using the output from the neural network." 
                frameURL = "https://www.youtube.com/embed/1wqC7KMDWdY"
                buttonText = "Link to source" 
                newURL = 'https://github.com/Jordan-Jarvis/ComputerVisionBoggleSolver'
                newTab="1"
                title2 = "Technologies used:"
                CHTML = { <div className="technologies"> <ul >
                        <li>Python</li>
                        <li>C++</li>
                        <li>OpenCV</li>
                        <li>TensorFlow</li>
                        <li>NVidia CUDA</li>
                        <li>Multiprocessing</li>
                        <li>NumPy (matrix manipulation)</li>
                        <li>TKinter</li>
                        <li>Keras</li>
                        <li>OpenNN</li>
                  </ul></div>}
                />
      )
    }
  }
  export default BoggleSolve