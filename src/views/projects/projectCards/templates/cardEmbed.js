import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import './card.css'
class ProjectEmbedCard extends React.Component {
  openURL(newURL){
  
  }
    render() {
      let button;
      if (this.props.newTab == "1") {
        button = <Button variant="primary" onClick={()=>window.open(this.props.newURL)}>{this.props.buttonText}</Button>;
        
      } else {
        button = <Button variant="primary" onClick={()=>window.location.href = this.props.newURL}>{this.props.buttonText}</Button>;
      }
      return (
        <div className = "card2">
          
        <Card style={{ }}>
        <Card.Img variant="top" src= {this.props.imgURL} />

        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.text}
            </Card.Text>
            <div className="buffer">
            <div className="minHeight">
          {this.props.embedCode}
          </div>
          </div>
          <Card.Title>{this.props.title2}</Card.Title>

            <Card.Text className="technologies">
            {this.props.CHTML}
            </Card.Text>
            {button}            
        </Card.Body>
        </Card>
        </div>
      )
    }
  }
  export default ProjectEmbedCard