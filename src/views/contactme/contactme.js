import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"
import '../projects/projectCards/card.css'
import "./contactme.css"

import Jumbotron from 'react-bootstrap/Jumbotron'
import Test from "../../components/overlay.js"
import Nav from 'react-bootstrap/Nav'
class ContactMe extends React.Component {
  render() {
    return (
      <div className="card2">
        <Card style={{}}>
          <Card.Text><br/>You can contact me via the following platforms <br/>
          <Nav.Link href="https://github.com/Jordan-Jarvis" className="fa fa-github"></Nav.Link>
  <Nav.Link href="https://www.facebook.com/jordan.jarvis3" className="fa fa-facebook"></Nav.Link>
  <Nav.Link href="https://www.linkedin.com/in/jordan-jarvis95" className="fa fa-linkedin"></Nav.Link>
  <Nav.Link href="#" className="fa fa-envelope"></Nav.Link>
          </Card.Text>
          <Jumbotron>
            <p style={{color:"red"}}>The contact form and email have temporarily been disabled due to bots! Please feel free to reach out on any of my social media platforms.</p>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>

              <Test/>
              <br/>
              {/* <Button type="submit" className="btn btn-primary">Submit</Button> */}
            </form>


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
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
  
    fetch('http://localhost:3002/send', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
}


export default ContactMe