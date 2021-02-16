import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import './card.css'
import Spinner from 'react-spinkit'

class ProjectEmbedCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  } hideSpinner = () => {
    this.setState({
      loading: false
    });
  };
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
            <div className="container rsvp-wrapper">
                    {this.state.loading ? (
                      <Spinner
                        className="loading text-center"
                        name="three-bounce"
                        color="Black"
                        fadeIn="none"
                      />
                    ) : null}
          {this.props.embedCode}
                  </div>
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