import Card from 'react-bootstrap/Card'
import React from "react"
import '../projects/projectCards/card.css'
class PageNotFound extends React.Component {
  openURL(newURL){
  
  }
    render() {
      console.log(this.props.property);
      return (
        <div className = "card2">
            <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
            <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <Card style={{ }}>
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>


                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                                <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                    Take Me Home </a>
                            </div>
           
            </div>

            </Card.Text>

            
        </Card.Body>
        </Card>
        </div>
      )
    }
  }

  export default PageNotFound