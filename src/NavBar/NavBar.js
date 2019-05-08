import React from "react";
import "./NavBar.css";
import { fetchMovieTvData } from "../api/index";

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
      <header>
        <nav className="navBar">
          <input
            className="search"
            type="text"
            onChange={this.searchChangeHandler}
          />
        </nav>
      </header>
    );
  }
}

export default NavBar;
