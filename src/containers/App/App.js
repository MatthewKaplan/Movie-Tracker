import React, { Component } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
import GenrePage from "../GenrePage/GenrePage";
import LoginPage from "../LoginPage/LoginPage";
import { Switch, Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
