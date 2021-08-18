import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SearchBar.css"
class SearchBar extends React.Component {
  render() {
    return (
    <div className="search-bar">
          <form class="form">
            <input
              class="form"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Enter
            </button>
          </form>
      </div>
    );
  }
}

export default SearchBar;
