import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar/searchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchBar />
      </div>
    );
  } 
}

export default App;
