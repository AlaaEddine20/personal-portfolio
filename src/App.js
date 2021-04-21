import React from "react";
// components
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import AboutMe from "./components/about_me/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
// libs
import { Route, Switch } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.app_container}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
