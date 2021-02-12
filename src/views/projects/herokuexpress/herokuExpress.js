import ProjectEmbedCard from "../projectCards/templates/cardEmbed"
import React from "react"
import '../projectCards/templates/card.css'
class HerokuExpress extends React.Component {
  openURL(newURL){
  }
    render() {
      console.log(this.props.property);
      return (
<ProjectEmbedCard 
                title = 'Heroku Express MP3 Player' 
                frameURL = "https://aqueous-brushlands-07164.herokuapp.com/playMusic"
                text = "Much of the UI was pre-built. I mostly made the back-end, which has a database which stores song information, album information, image URLs and more. It uses Express on Heroku and is able to play music from the server. Another project goes much more in depth on databases and storing data using SQL."
                CHTML = { <div className="technologies"> <ul >
                        <li>Heroku</li>
                        <li>PHP</li>
                        <li>Express</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>mySQL</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Javascript MP3 Player Libraries</li>
                        <li>Postgres</li>
                        <li>JSON</li>
                  </ul></div>}

                  embedCode = {<iframe className = "marg" src="https://aqueous-brushlands-07164.herokuapp.com/playMusic" frameBorder="0" allowFullScreen ><p>Your browser does not support iframes.</p></iframe>}
                buttonText = "Link to source" 
                newURL = 'https://github.com/Jordan-Jarvis/React-MP3-Player'
                />
      )
    }
  }
  export default HerokuExpress