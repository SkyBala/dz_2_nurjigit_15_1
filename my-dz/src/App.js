
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <Portfolio/>
    </div>
  );
}
function AboutUs() {
  return(
      <>
    <h1>title</h1>
    <p>text text</p>
      </>
    );
}

function Portfolio () {
  return(
      <ul>
        <li>test 1</li>
        <li>test 2</li>
        <li>test 3</li>
        <li>test 4</li>
      </ul>

  )
}
export default App;