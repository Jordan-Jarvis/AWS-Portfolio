

import './App.css';
import './style.css'
import Home from './Home'
import useSticky from './hooks/useSticky.js'
import Navbar from './header/Navbar'
function App() {
  const title = "Welcome to the new blo";
  const likes = 50;
  const person = { name: "yoshi", age: 30}
  const link = "http://www.google.com";
  const { isSticky, element} = useSticky()
  return (
    <div className="App">
      <Navbar sticky = {isSticky} />
      <Home /> 
    </div>
  );
}

export default App;
