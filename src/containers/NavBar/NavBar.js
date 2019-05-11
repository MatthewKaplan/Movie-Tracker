import React from "react";
import "./_NavBar.scss";
import { NavLink } from "react-router-dom";
import { fetchSearch } from "../../actions";
import { connect } from "react-redux";
import { fetchData } from "../../apiCalls/apiCalls";
import { apiKey } from "../../api/apiKey"; 
import { popularMovies } from "../../actions";
import MovieCard from "../MovieCard/MovieCard";

class NavBar extends React.Component {
  state = { error: "", userSearch: "" };

  searchChangeHandler = event => {
    const searchTerm = event.target.value;
    this.setState({
      userSearch: searchTerm
    });
    fetchData(`/search/movie?${apiKey}&query=${searchTerm}`)
      .then(response => this.props.fetchSearch(response.results))
  };

  handleMovieClick = () => {
    fetchData(`/discover/movie?&${apiKey}`)
      .then(response => this.props.popularMovies(response.results))
  }

  render() {
    return (
      <div className="nav-bar">
        <header className="header">
          <div className="left-page-links">
            <NavLink to="/home" className="nav">
              Home
            </NavLink>
            <NavLink to="/MyList" className="nav">
              MyList
            </NavLink>
            <NavLink to="/Movies" className="nav" onClick={() => this.handleMovieClick()}>
              Movies
            </NavLink>
            <NavLink to="/TV_Shows" className="nav">
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

const mapStateToProps = state => {
  return {
    searchResults: state.search,
    moviesArray: state.popularMovies
  };
};

const mapDispatchToProps = dispatch => ({
  popularMovies: (moviess) => dispatch(popularMovies(moviess)),
  fetchSearch: (searchResults) => dispatch(fetchSearch(searchResults))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
