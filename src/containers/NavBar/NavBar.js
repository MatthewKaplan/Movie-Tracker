import React from "react";
import "./_NavBar.scss";
import movieDB from "../../api/movieDB";
import apiKey from "../../api/apiKey";
import GenrePage from "../GenrePage/GenrePage";
import { NavLink, Redirect } from "react-router-dom";
import { fetchSearch } from "../../actions";
import { connect } from "react-redux";

class NavBar extends React.Component {
  state = { error: "", userSearch: "" };

  componentDidMount() {
    this.props.fetchSearch();
  }

  searchChangeHandler = event => {
    const searchTerm = event.target.value;
    this.setState({
      userSearch: searchTerm
    });
    this.props.fetchSearch(searchTerm);
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

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  { fetchSearch }
)(NavBar);
