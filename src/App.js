

import './App.css';

import Home from './Home'
import NavigationBar from './bootstraps/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { PDFViewer } from 'react-view-pdf';
function App() {
  const title = "Welcome to the new blo";
  const likes = 50;
  const person = { name: "yoshi", age: 30}
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="stickyTop">
        <NavigationBar />
      </div>
      <PDFViewer url="Resume.pdf" />
      
    </div>
  );
}

export default App;
