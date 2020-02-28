import React, { Component } from "react";

/***** Search Component *****/
export class Search extends Component {
  render() {
    // Destructuring
    const { value, handleChange, handleSubmit } = this.props;

    return (
      <div className="searchContainer">
        <h1 id="title">Search For Movies</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Enter movie title..."
            onChange={handleChange}
            value={value}
            className="searchInput"
          />
          <button type="submit" className="button searchBtn">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
