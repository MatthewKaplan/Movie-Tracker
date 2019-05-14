import React from "react";
import "./_NavBar.scss";
import { NavLink, Link } from "react-router-dom";
import { fetchSearch } from "../../actions";
import { connect } from "react-redux";
import { fetchData } from "../../apiCalls/apiCalls";
import { apiKey } from "../../api/apiKey"; 

class NavBar extends React.Component {
  state = { error: "", userSearch: "" };

  searchChangeHandler = event => {
    const searchTerm = event.target.value;
    this.setState({
      userSearch: searchTerm
    });
    fetchData(`https://api.themoviedb.org/3/search/movie?${apiKey}&query=${searchTerm}`)
    .then(response => this.props.fetchSearch(response.results));
  };

  render() {
    return (
      <div className="nav-bar">
        <header className="header">
          <div className="left-page-links">
            <NavLink to="/home" className="nav">
              Home
            </NavLink>
            <NavLink to="/Favorites" className="nav">
              My Favorites
            </NavLink>
            <NavLink to="/Movies" className="nav">
              Movies
            </NavLink>
            <NavLink to="/TV_Shows" className="nav">
              TV Shows
            </NavLink>
          </div>
          <h1 className="header-title">Movie-Tracker</h1>
          <div className="right-page-links">
          <Link to="/SearchResults">
          <form className="searchForm">
            <input
              className="search"
              type="text"
              onChange={this.searchChangeHandler}
              placeholder="Search Movies..."
            />
          </form>
          </Link>
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
    searchResults: state.search
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: (searchResults) => dispatch(fetchSearch(searchResults))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
