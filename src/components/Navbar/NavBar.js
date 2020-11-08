import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink to="/" className="element">Characters List</NavLink>
        <NavLink to="/section-2" className="element">Section 2</NavLink>
        <NavLink to="/section-3" className="element">Section 3</NavLink>
      </ul>
    </nav>
  );
  }
  
export default NavBar;
    