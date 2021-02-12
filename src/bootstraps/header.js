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

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav.Link href="https://github.com/Jordan-Jarvis" className="fa fa-github"></Nav.Link>
  <Nav.Link href="https://www.facebook.com/jordan.jarvis3" className="fa fa-facebook"></Nav.Link>
  <Nav.Link href="https://www.linkedin.com/in/jordan-jarvis95" className="fa fa-linkedin"></Nav.Link>
  <Nav.Link href="#" className="fa fa-envelope"></Nav.Link>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      
      <NavDropdown title="Individual Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/thissite">This Site</NavDropdown.Item>
        <NavDropdown.Item href="/rpimusic">RPi Disklavier Network Player</NavDropdown.Item>
        <NavDropdown.Item href="/boggle">AI Boggle and Sudoku Solver</NavDropdown.Item>
        <NavDropdown.Item href="/hmusic">Heroku Express MP3 Player</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">More to come!</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/contactme">Contact Me</Nav.Link>
      {/* <Nav.Link eventKey={2} href="/me">
        Non Technical Hobbies And Interests
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </nav>
)
export default NavigationBar