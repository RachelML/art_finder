import React from 'react';

function Search(props) {
    return (
      <div className="App">
          <p>Search artist or topic</p>
          <input type="text" placeholder='Search...' onChange={props.handleChange} value={props.searchInput}/>
          <button onClick={props.handleClick}>search</button>
     
      </div>
    );
  }
  
  export default Search;