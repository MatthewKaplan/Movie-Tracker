import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  searchChangeHandler = event => {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  };

  performSearch = searchTerm => {
    console.log(searchTerm);
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
