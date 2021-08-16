import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class SearchBar extends React.Component {
  render() {
    return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <input
              class="form-control mr-sm-2 floated"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0 floated" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
