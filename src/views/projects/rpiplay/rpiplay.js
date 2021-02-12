import ProjectIframeCard from "../projectCards/templates/cardIframe"
import React from "react"
import '../projectCards/templates/card.css'
class RPIPlay extends React.Component {
  openURL(newURL){
  }
    render() {
      console.log(this.props.property);
      return (
        <ProjectIframeCard 
                title = 'RPi Disklavier Network Player' 
                text = "Please forgThis player allows for a Raspberry Pi to host a Midi player/recorder server. This plays using the serial MIDI port used for various instruments and DOES NOT CONTAIN A SYNTHYSIZER! It was designed to update a player piano from Yamaha that still took floppy disks for playback. You can route it to a local synth like timidity if you need support for a synth. It has a web interface and ajax/json support for future Alexa and Google home integration. Please forgive the messy code, I was learning CSS and JavaScript native when I started this project and it got pretty complicated. I am rebuilding it in Django and React, but this website comes first." 
                CHTML = { <div className="technologies"> <ul >
                        <li>C++</li>
                        <li>Python</li>
                        <li>GRPC</li>
                        <li>JavaScript</li>
                        <li>SMB sharing</li>
                        <li>C (Linux Binaries)</li>
                        <li>Multithreading</li>
                        <li>Flask</li>
                        <li>Serial Interface</li>
                        <li>Raspberry Pi</li>
                        <li>Rest API (Google Home)</li>
                        <li>HTML</li>
                        <li>CSS</li>
                  </ul></div>}
                buttonText = "Link to source" 
                frameURL = "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6719651416736198656?compact=1"
                newURL = 'https://github.com/Jordan-Jarvis/RPi-Diskalvier-network-player'
                />
      )
    }
  }
  export default RPIPlay