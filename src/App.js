import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/about_me/AboutMe";

function App() {
  return (
    <div className="App">
      <Home />
      <Portfolio />
      <AboutMe />
    </div>
  );
}

export default App;
