import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import './header.css' 
import './Navbar.css'
import './SocialMedia.css'
const Logo = "/lighttransparent.png";

const NavigationBar = () => (
  
  <nav className="navbar">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"><img src={Logo} alt="Jarvis logo" className="navbar--logo" /></Navbar.Brand>
  <div style={{color:"red", display:'flex'}}>
  <a href="https://www.facebook.com/jordan.jarvis3" className="fa fa-facebook"></a>
  <a href="https://www.linkedin.com/in/jordan-jarvis95" className="fa fa-linkedin"></a>
  <a href="https://github.com/Jordan-Jarvis" className="fa fa-github"></a>
  <a href="#" className="fa fa-envelope"></a>
  </div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      <NavDropdown title="Individual Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/about">Placeholder</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Placeholder</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Site under construction</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/contactme">Contact Me</Nav.Link>
      <Nav.Link eventKey={2} href="/me">
        Non Technical Hobbies And Interests
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </nav>
)
export default NavigationBar