import React from 'react';
import { NavLink } from 'react-router-dom';
import Favorite from './Favorite'


function Header() {
    return (
      <div className="nav-container">
        <nav>
            <div>
            <NavLink exact className="header" activeClassName="active" to="/">THE MET ART SEARCH</NavLink>
            <NavLink exact className="favorites" activeClassName="active" to="/Favorite">Favorites</NavLink>

            </div>
        </nav>

      </div>
    );
  }
  
  export default Header;