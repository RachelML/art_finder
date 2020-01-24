import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import Detail from './Detail'



function Main(props) {
    return (
      <div className="App">
        <Detail artDetail={props.artDetail} />
      </div>
    );
  }
  
  export default Main;