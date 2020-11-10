import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <ul className="primary-navbar">
        <NavLink to="/nahuel-react-ff-api" className="element">Characters List</NavLink>
        <NavLink to="/nahuel-react-ff-api/section-2" className="element">Details</NavLink>
        <NavLink to="/nahuel-react-ff-api/section-3" className="element">Section 3</NavLink>
      </ul>
    </nav>
  );
  }
  
export default NavBar;
    