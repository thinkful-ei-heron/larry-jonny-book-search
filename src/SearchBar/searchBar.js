import React, { Component } from 'react';
import './searchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__controls">
          <FontAwesomeIcon icon={faSearch} />
          <input 
            placeholder="Search term" 
            value={this.props.searchTerm}
            onChange={e => this.props.handleUpdate(e.target.value)} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
