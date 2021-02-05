

import './App.css';

import Home from './Home'
import NavigationBar from './bootstraps/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { PDFViewer } from 'react-view-pdf';
import ExampleRouter from './Router';
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


  render() {
  const title = "Welcome to the new blo";
  const likes = 50;
  const person = { name: "yoshi", age: 30}
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="stickyTop">
        <NavigationBar />
        <Subclass property="string"/>
        <ExampleRouter />
      </div>
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
