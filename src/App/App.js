import React, { Component } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
import { fetchMovieTvData } from "../api/index";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieUrl: "https://api.themoviedb.org/3/discover/movie?",
      tvUrl: "https://api.themoviedb.org/3/discover/tv?",
      upcomingMovies: "https://api.themoviedb.org/3/movie/upcoming?",
      popular: "&sort_by=popularity.desc",
      error: ""
    };
  }

  componentDidMount = async () => {
    const { movieUrl, tvUrl, upcomingMovies, popular } = this.state;
    try {
      const popularMovies = await fetchMovieTvData(movieUrl, popular);
      const comingSoon = await fetchMovieTvData(upcomingMovies, "");
      const popularTvShows = await fetchMovieTvData(tvUrl, popular);
    } catch (error) {
      this.setState({
        error: error
      });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar movieUrl={this.state.movieUrl} />
        <Route exact path="/" component={MainPage} />
      </div>
    );
  }
}

export default App;
