import React from 'react';
import { Route, Link } from 'react-router-dom'


function Search(props) {
    return (
      <div className="App">
          <p>Search artist or topic</p>
            <form>
              <input type="text" placeholder='Search...' onChange={props.handleChange} value={props.searchInput}/>
              <button onClick={props.handleClick}>search</button>  
            </form>

          {/* <Link exact activeClassName="active" to="/art/">Link to Detail component</Link> */}
   
      </div>
    );
  }
  
  export default Search;