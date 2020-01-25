import React from 'react';
import { Route, NavLink } from 'react-router-dom';


function Header() {
    return (
      <div>
        <nav>
            <h1>Art Search header</h1>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>

        </nav>

      </div>
    );
  }
  
  export default Header;