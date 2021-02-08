import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import '../projects/projectCards/card.css'
class HomePage extends React.Component {
  openURL(newURL){
  
  }
    render() {
      console.log("Home loading");
      return (
        <div className = "card2">
        <Card style={{ }}>
        <Card.Img variant="top" src= {this.props.imgURL} />
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.text}
            </Card.Text>
            <Button variant="primary" onClick={()=>window.open(this.props.newURL)}>{this.props.buttonText}</Button>
            
        </Card.Body>
        </Card>
        </div>
      )
    }
  }
  export default HomePage