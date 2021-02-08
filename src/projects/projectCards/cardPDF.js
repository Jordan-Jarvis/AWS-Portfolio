

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import './card.css'
class ProjectPDFCard extends React.Component {
  openURL(newURL){
  
  }
    render() {
      console.log(this.props.property);
      return (
        <div className = "card2">
          <div className="buffer">
          <iframe className = "marg" src={this.props.PDFURL + "&embedded=true"} frameBorder="0"></iframe>
          </div>
        <Card style={{ }}>

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
  export default ProjectPDFCard