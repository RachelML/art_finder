import React from 'react';
import { withRouter } from 'react-router-dom'


function Search(props) {

  if (props.match.isExact === false) {
    return null
  }
    return (
      <div className="search">
            <form>
              <input className="search-bar" type="text" placeholder='       Search by artist, style or theme' onChange={props.handleChange} value={props.searchInput}/>
              <button onClick={props.handleClick}><i class="fa fa-search"></i></button>  
            </form>   
      </div>
    );
  }
  
  export default withRouter(Search);