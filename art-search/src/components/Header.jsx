import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
      <div>
        <nav>
            <NavLink exact activeClassName="active" to="/">Art Search header</NavLink>

        </nav>

      </div>
    );
  }
  
  export default Header;