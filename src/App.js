

import './App.css';

import Home from './Home'
import NavigationBar from './bootstraps/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import Footer from "./bootstraps/Footer"
import URLRouter from './Router';
import { Storage } from 'aws-amplify'
import Test from "./components/overlay"





// function App() {
//   const title = "Welcome to the new blo";
//   const likes = 50;
//   const person = { name: "yoshi", age: 30}
//   const link = "http://www.google.com";
//   return (
//     <div className="App">
//       <div className="stickyTop">
//         <NavigationBar />
//       </div>
//       <PDFViewer url="Resume.pdf" />
      
//     </div>
//   );
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };

    }
    
  state = {
    files: [],
    file: ""

  }
  componentDidMount() {
    this.listFiles()
  }
  onChange(e) {
    const file = e.target.files[0]
    Storage.put(file.name, file)
    .then (() => this.listFiles())
    .catch(err => console.log(err));
  }

  listFiles = async () => {
    const files = await Storage.list('')
    this.setState({ files })
  }

  selectFile = async file => {
    const signed = await Storage.get(file.key)
    this.setState({ file: signed })
  }

  render() {


  return (
    
    <div className="App">

      <div className="parallax-wrapper">
      <NavigationBar />

      <div className="boundaries">
        <URLRouter />
        </div>
      
      <div className = "season--desc">

      <div className="desc-wrapper">


        <Subclass property="string"/>
        <Subclass property="string"/>


        </div>
        </div>
        
        </div>
      
    </div>
  );
  }
}

class Subclass extends React.Component {

  render() {
    console.log(this.props.property);
    return (
    <div>
      
    </div>
    )
  }
}

export default App;
