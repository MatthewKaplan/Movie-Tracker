import React from "react";
import "./_NavBar.scss";
import { fetchMovieTvData } from "../api/index";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  state = { searchUrl: "https://api.themoviedb.org/3/search/movie?" };

  searchChangeHandler = event => {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  };

  performSearch = async searchTerm => {
    const { searchUrl } = this.state;
    try {
      const searchedMovies = await fetchMovieTvData(
        searchUrl,
        "&query=" + searchTerm
      );
    } catch (error) {
      this.setState({
        error: error
      });
    }
  };

  render() {
    return (
      <div className="nav-bar">
        <header className="header">
          <div className="left-page-links">
            <NavLink to="/home" className="nav">
              Home
            </NavLink>
            <NavLink to="/mylist" className="nav">
              MyList
            </NavLink>
            <NavLink to="/movies" className="nav">
              Movies
            </NavLink>
            <NavLink to="/tv_shows" className="nav">
              TV Shows
            </NavLink>
          </div>
          <h1 className="header-title">Movie-Tracker</h1>
          <div className="right-page-links">
            <input
              className="search"
              type="text"
              onChange={this.searchChangeHandler}
            />
            <NavLink to="/login" className="nav login">
              Login
            </NavLink>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
