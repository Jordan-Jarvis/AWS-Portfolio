

import './App.css';

import Home from './Home'
import NavigationBar from './bootstraps/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { PDFViewer } from 'react-view-pdf';
import ExampleRouter from './Router';
import { Storage } from 'aws-amplify'
import { Document } from 'react-pdf'
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
  const title = "Welcome to the new blo";
  const likes = 50;
  const person = { name: "yoshi", age: 30}
  const link = "http://www.google.com";
  const files = Storage.list('')
  console.log(files)
  return (
    <div className="App">
      <div className="stickyTop">
        <NavigationBar />
        <Subclass property="string"/>
        <img class="logo" src="logo192.png" alt="My_Logo"></img>
        <ExampleRouter />
      </div>
      hi
      
      <PDFViewer url="Resume.pdf" />
    </div>
  );
  }
}

class Subclass extends React.Component {

  render() {
    console.log(this.props.property);
    return (
    <div>
      Hi
    </div>
    )
  }
}

export default App;
