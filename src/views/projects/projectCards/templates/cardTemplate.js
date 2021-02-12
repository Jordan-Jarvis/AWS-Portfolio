import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import './card.css'
class ProjectCard extends React.Component {
  openURL(newURL){
  
  }
    render() {
      console.log(this.props.property);
      let button;
      if (this.props.newTab == "1") {
        button = <Button variant="primary" onClick={()=>window.open(this.props.newURL)}>{this.props.buttonText}</Button>;
        
      } else {
        button = <Button variant="primary" onClick={()=>window.location.href = this.props.newURL}>{this.props.buttonText}</Button>;
      }
      return (
        <div className = "card2">
        <Card style={{ }}>
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.text}
            </Card.Text>

            <Card.Img variant="top" src= {this.props.imgURL} />
            <Card.Title>{this.props.title2}</Card.Title>
            {this.props.CHTML}
{button}            
        </Card.Body>
        </Card>
        </div>
      )
    }
  }
  export default ProjectCard