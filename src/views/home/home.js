import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import '../projects/projectCards/card.css'
import HomeCarousel from "./carousel.js"
import Jumbotron from 'react-bootstrap/Jumbotron'
class HomePage extends React.Component {
  openURL(newURL){
  
  }
    render() {
      console.log("Home loading");
      return (
        <div className = "card2">
        <Card style={{ }}>
        <Card.Text>
            
        </Card.Text>
        <Jumbotron>
  <h1>  Welcome to my portfolio website! My name is Jordan Jarvis. </h1>
  <p>
  This site was written using a variety of technologies including but not limited to React, AWS, and Express. To see more about it check my projects page! 
  <br></br>

  </p>
  <HomeCarousel/>
  <p>
    <Button variant="primary" onClick={()=>window.open("/aboutme")}>More about me</Button>    <Button variant="primary" onClick={()=>window.open("/projects")}>See my projects</Button>

  </p>
</Jumbotron>
        <Card.Text>
                </Card.Text>
        
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            Feel free to check out my projects. Github is not always the best medium to show one's work.
            </Card.Text>            
        </Card.Body>
        </Card>
        </div>
      )
    }
  }
  export default HomePage