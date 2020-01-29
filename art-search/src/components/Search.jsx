import React from 'react';
import { Route, Link } from 'react-router-dom'


function Search(props) {
    return (
      <div className="search">
          {/* <p>Search artist or topic</p> */}
            <form>
              <input className="search-bar" type="text" placeholder='       Search by artist, style or theme' onChange={props.handleChange} value={props.searchInput}/>
              <button onClick={props.handleClick}><i class="fa fa-search"></i></button>  
            </form>

          {/* <Link exact activeClassName="active" to="/art/">Link to Detail component</Link> */}
   
      </div>
    );
  }
  
  export default Search;