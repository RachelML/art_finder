import React from 'react';
import Detail from './Detail'
import Search from './Search'



function Main(props) {
    return (
      <div className="App">
        <Search searchInput={props.searchInput} handleClick={props.handleClick} handleChange={props.handleChange}/>
        <Detail artDetail={props.artDetail} />
      </div>
    );
  }
  
  export default Main;