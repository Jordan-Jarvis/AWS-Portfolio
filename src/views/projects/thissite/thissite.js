import ProjectCard from "../projectCards/templates/cardTemplate"
import React from "react"
import '../projectCards/templates/card.css'
class ThisSite extends React.Component {
  openURL(newURL){
  }
    render() {
      console.log(this.props.property);
      return (
        <ProjectCard
                        title='This Site'
                        text="My latest project is making this site. It is still under construction as I just started making it. I decided to learn various new technologies based on AWS. Technologies used for this project include, but are not limited to:"
                        CHTML={<div className="technologies"> <ul >
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
                                <li>Potentially More</li>
                        </ul></div>}
                        buttonText="Go to Source"
                        newURL="https://github.com/Jordan-Jarvis/AWS-Portfolio"
                        newTab="1"
                        />
      )
    }
  }
  export default ThisSite