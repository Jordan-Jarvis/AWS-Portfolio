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
  <h1>  Welcome to my website! My name is Jordan Jarvis. </h1>
  <p>
  I recently graduated from BYU-Idaho with a degree in Computer Scince.
        If you give me a broken laptop I will do my best to turn into a cloud server. I love to eat seafood and if you let me I will spend all day on a computer or in nature. (it is kinda hard to combine the two) I love exercise and swimming. I love to find new things and learn new things, if you provide me an opportunity I would love to learn from you.


  </p>
  <HomeCarousel/>
  <p>
    <Button variant="primary">More about me</Button>    <Button variant="primary">See my projects</Button>

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