import React from "react";
import { NavLink } from "react-router-dom";
import "./_NavBar.scss";

class NavBar extends React.Component {
  //will need to set up state to conditionally render navbar variants depending on what page we are on.
  //example: on LoginPage hide the login button. If user logged in, render login to say logout.
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
          <NavLink to="/login" className="nav login">
            Login
          </NavLink>
        </header>
      </div>
    );
  }
}

export default NavBar;
