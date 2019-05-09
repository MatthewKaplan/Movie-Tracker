import React from "react";
import "./_NavBar.scss";
import movieDB from "../../api/movieDB";
import apiKey from "../../api/apiKey";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  state = { error: "" };

  searchChangeHandler = event => {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  };

  performSearch = async searchTerm => {
    try {
      const searchedMovies = await movieDB.get(
        `/search/movie?${apiKey}&query=${searchTerm}`
      );
      const response = searchedMovies.data.results;
      console.log(response);
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
