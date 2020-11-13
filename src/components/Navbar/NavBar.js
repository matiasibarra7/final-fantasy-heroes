import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <ul className="primary-navbar">
        <NavLink exact to="/final-fantasy-heroes" className="element">Characters List</NavLink>
        <NavLink to="/final-fantasy-heroes/section-2" className="element">Details</NavLink>
        <NavLink to="/final-fantasy-heroes/section-3" className="element">Section 3</NavLink>
      </ul>
    </nav>
  );
  }
  
export default NavBar;
    