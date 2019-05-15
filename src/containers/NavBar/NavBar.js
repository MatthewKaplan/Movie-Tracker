import React from "react";
import "./_NavBar.scss";
import { NavLink, Link } from "react-router-dom";
import { fetchSearch, setUser, isLoggedIn } from "../../actions";
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
    fetchData(
      `https://api.themoviedb.org/3/search/movie?${apiKey}&query=${searchTerm}`
    ).then(response => this.props.fetchSearch(response.results));
  };

  render() {
    const renderLogin = (
      <NavLink to="/login" className="nav login">
        Sign in
      </NavLink>
    );

    const renderLogout = (
      <div className="navBar-btn">
        <p className="greeting">
          Hello, {this.props.user ? this.props.user.name : null}.
        </p>
        <button
          className="logout-btn"
          onClick={() => {
            this.props.setUser({});
            this.props.isLoggedIn(false);
          }}
        >
          Sign out
        </button>
      </div>
    );

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
                <div className="search-box">
                  <input
                    type="text"
                    name=""
                    className="search-txt"
                    onChange={this.searchChangeHandler}
                    placeholder="Type to search"
                  />
                  <a className="search-btn" href="#">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </form>
            </Link>
            {this.props.user.name ? renderLogout : renderLogin}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.search,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: searchResults => dispatch(fetchSearch(searchResults)),
  setUser: user => dispatch(setUser(user)),
  isLoggedIn: bool => dispatch(isLoggedIn(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
