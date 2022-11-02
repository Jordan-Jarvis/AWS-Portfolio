import ProjectCard from "../projectCards/templates/cardTemplate"
import React from "react"
import '../projectCards/templates/card.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel'
import "../../home/carousel.css"
import "./jarvtoolkit.css"
import Card from 'react-bootstrap/Card'

class Jtoolkit extends React.Component {
  openURL(newURL) {
  }
  render() {
    console.log(this.props.property);
    return (
      <ProjectCard
        imgURL="assets/jarvtoolkit/Complete.png"
        title='Jarvinator Mi A2 Toolkit'
        text="This toolkit was made in C# and used .net frameworks. I used Visual Studio to design it. This was a personal project. The project goal was to make a program which could not only perform the actions shown in the image below, but to so intelligently. Often times when doing written command sequences the user will experience a problem where they need to search for an answer. I have been very active on the XDA forums and as such I know many of the common issues and their solutions. I designed the program not only to resolve common problems intelligently, but added what I called 'Noob Mode' where it tells the user what it is doing on the command line and why. The reason for this was to reduce the number of posts regarding common issues and people trying to learn to do the different things to their phone."
        CHTML={<div><Card.Body>The screenshots below show the functions of the program.</Card.Body><div className="car"><Carousel className="caro">
          <Carousel.Item interval={5000}>
            <img src="assets/jarvtoolkit/welcomecropped.png" />
            <Carousel.Caption className="caption">Contains a console to see what commands are running and links to useful resources.</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img src="assets/jarvtoolkit/General.png" />
            <Carousel.Caption className="caption">Can root, unroot, backup bootloader, unlock bootloader, reboot phone into various modes and chnage the kernel ID to show as a different variant of the device.</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img src="assets/jarvtoolkit/TWRP.png" />
            <Carousel.Caption className="caption">Can install TWRP or temporarily boot TWRP to install zip files for customization of the ROM.</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img src="assets/jarvtoolkit/fastboot.png" />
            <Carousel.Caption className="caption">Downloads any selected version of the stock rom and flashes it automatically using fastboot commands. Allows for customization of what parts to flash</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img src="assets/jarvtoolkit/Flash.png" />
            <Carousel.Caption className="caption">Allows for installation of custom ROMs automatically as well as performing common actions such as installing Google apps and rooting the device.</Carousel.Caption>
          </Carousel.Item >
        </Carousel>
          <p><br></br>The program had the abilities to intelligently discover what mode the phone was in (fastboot, edl, plugged in with debugging disabled, plugged in with debugging enabled) and would adjust the commands it would run according to the mode. This allowed the user to easily unbrick their phone in the event of a bad flash or corrupted data.</p>
        </div>
          <Card.Title>Technologies Used:</Card.Title>
          <div className="technologies"> <ul >
            <li>C#</li>
            <li>Visual Studio</li>
            <li>.Net</li>
            <li>ADB</li>
            <li>Fastboot</li>
            <li>Rest API (to get the latest bootloaders)</li>
            <li>XiaomiFirmwareLoader</li>
            <li>Batch</li>
            <li>Powershell</li>
            <li>XML (for automatic updates)</li>
          </ul>
          </div></div>}
        buttonText="Go to Source"
        newURL="https://github.com/Jordan-Jarvis/A2-Toolkit-GUI-Version"
        newTab="1"
      />
    )
  }
}
export default Jtoolkit