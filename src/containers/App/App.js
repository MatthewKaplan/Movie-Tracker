import React, { Component } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
// import { fetchMovieTvData } from "../api/index";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainPage />
      </div>
    );
  }
}

export default App;
