import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import './card.css'
class ProjectEmbedCard extends React.Component {
  openURL(newURL){
  
  }
    render() {
      console.log(this.props.property);
      return (
        <div className = "card2">
          <div className="buffer">
            <div className="minHeight">
          {this.props.embedCode}
          </div>
          </div>
        <Card style={{ }}>
        <Card.Img variant="top" src= {this.props.imgURL} />

        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.text}
            </Card.Text>
            <Card.Text className="technologies">
            {this.props.CHTML}
            </Card.Text>
            <Button variant="primary" onClick={()=>window.open(this.props.newURL)}>{this.props.buttonText}</Button>
            
        </Card.Body>
        </Card>
        </div>
      )
    }
  }
  export default ProjectEmbedCard