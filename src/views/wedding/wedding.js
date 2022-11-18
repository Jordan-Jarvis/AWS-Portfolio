import ProjectEmbedCard from "../projects/projectCards/templates/cardEmbed"
import React from "react"
import '../projects/projectCards/templates/card.css'
import "https://unpkg.com/@ungap/custom-elements-builtin"
import "https://unpkg.com/x-frame-bypass"

import { Embed } from 'semantic-ui-react'

class Wedding extends React.Component {

    render() {
    return (
      
    
<iframe is="x-frame-bypass" src="https://www.theknot.com/us/jordan-jarvis-and-rebecca-kiser/	" width="200" height="200" frameBorder="0" allowFullScreen ><p>Your browser does not support iframes.</p></iframe>
)

}
}
export default Wedding
