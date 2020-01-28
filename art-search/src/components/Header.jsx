import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
      <div className="nav-container">
        <nav>
            <div>
            <NavLink exact className="header" activeClassName="active" to="/">Art Search header</NavLink>
            <NavLink exact className="favorites" activeClassName="active" to="/">Favorites</NavLink>

            </div>
        </nav>

      </div>
    );
  }
  
  export default Header;