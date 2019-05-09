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
        <Route exact path="/" component={MainPage} />
        <Route path="/ActionMovies" component={GenrePage} />
        <Route path="/ComedyMovies" component={GenrePage} />
        <Route path="/Documentaries" component={GenrePage} />
        <Route path="/FamilyMovies" component={GenrePage} />
        <Route path="/HorrorMovies" component={GenrePage} />
        <Route path="/RomanceMovies" component={GenrePage} />
      </div>
    );
  }
}

export default App;
