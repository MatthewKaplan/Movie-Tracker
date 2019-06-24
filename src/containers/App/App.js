import React, { Component } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
import GenrePage from "../GenrePage/GenrePage";
import NotFound from "../NotFound/NotFound";
import MovieInfo from "../MovieInfo/MovieInfo";
import LoginPage from "../LoginPage/LoginPage";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/ActionMovies" component={GenrePage} />
          <Route path="/ComedyMovies" component={GenrePage} />
          <Route path="/Documentaries" component={GenrePage} />
          <Route path="/FamilyMovies" component={GenrePage} />
          <Route path="/HorrorMovies" component={GenrePage} />
          <Route path="/RomanceMovies" component={GenrePage} />
          <Route path="/SearchResults" component={GenrePage} />
          <Route path="/Movies" component={GenrePage} />
          <Route path="/Favorites" component={GenrePage} />
          <Route path="/TV_Shows" component={GenrePage} />
          <Route path="/MovieCardInfo" component={MovieInfo} />
          <Route path="/Movie-Tracker" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/Register" component={LoginPage} />
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
