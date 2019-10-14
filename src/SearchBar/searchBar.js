import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__controls">
          <input 
            placeholder="Search term" 
            value={this.props.searchTerm}
            onChange={this.props.handleSearch}/>
          <button onClick={this.props.handleSubmit}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
