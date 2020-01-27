import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import Detail from './Detail'
import Search from './Search'
import SelectedImage from './SelectedImage'



function Main(props) {
    return (
      <div className="App">
        <Search searchInput={props.searchInput} handleClick={props.handleClick} handleChange={props.handleChange}/>
        <Detail artDetail={props.artDetail} />
        {/* <SelectedImage artDetail={props.artDetail} /> */}
      </div>
    );
  }
  
  export default Main;