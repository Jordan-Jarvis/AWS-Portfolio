import Card from 'react-bootstrap/Card'
import React from "react"
import '../projects/projectCards/card.css'
class Construction extends React.Component {
  openURL(newURL){
  
  }
    render() {
      console.log(this.props.property);
      return (
        <div className = "card2">

        <Card style={{ }}>
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>


                        <div className="error-template">
                            <h1>
                                Well, this is no fun.!</h1>
                            <h2>
                                Under Construction</h2>
                            <div className="error-details">
                                Sorry, the page you requested is under construction and will be publicly available soon. This is a fairly new website (less than a week old). In the meantime check out some of my projects!
                            </div>
                            <div className="error-actions">
                                <a href="/projects" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                    See My Projects </a>
                            </div>
           
            </div>

            </Card.Text>

            
        </Card.Body>
        </Card>
        </div>
      )
    }
  }

  export default Construction