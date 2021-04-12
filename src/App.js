import React from "react";
// components
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/about_me/AboutMe";
// libs
import { Route, Switch } from "react-router-dom";
import "./App.module.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
