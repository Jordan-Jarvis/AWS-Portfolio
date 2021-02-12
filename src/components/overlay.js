import React from "react";
import {Button} from 'react-bootstrap'
import Dialog from 'react-bootstrap-dialog'

class Test extends React.Component {

    constructor () {
        super()
        this.onClick = this.onClick.bind(this)
      }
    
      onClick () {
        this.dialog.showAlert('Sorry for the inconvenience, but due to bots this input form has been temporarily disabled until a reCAPTCHA is installed. Feel free to reach out on my social media!')
      }
    
      render () {
        return (
          <div>
            <Button onClick={this.onClick}>Submit</Button>
            <Dialog ref={(el) => { this.dialog = el }} />
            
          </div>
        )
    }
}
export default Test;
