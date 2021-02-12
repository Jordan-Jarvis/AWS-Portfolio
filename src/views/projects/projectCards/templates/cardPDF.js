

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import './card.css'

class ProjectPDFCard extends React.Component {


    render() {
      let button;
      if (this.props.newTab == "1") {
        button = <Button variant="primary" onClick={()=>window.open(this.props.newURL)}>{this.props.buttonText}</Button>;
        
      } else {
        button = <Button variant="primary" onClick={()=>window.location.href = this.props.newURL}>{this.props.buttonText}</Button>;
      }
      console.log(this.props.property);
      return (
        <div className = "card2">
          <div className="buffer">
            
          <iframe className = "marg" src={this.props.PDFURL} frameBorder="0"></iframe>
          </div>
        <Card style={{ }}>

        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.text}
            </Card.Text>
            {button}            
        </Card.Body>
        </Card>
        </div>
      )
    }
  }
  export default ProjectPDFCard