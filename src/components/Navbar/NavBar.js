import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <ul className="primary-navbar">
        <NavLink exact to="/" className="element">Characters List</NavLink>
        <NavLink to="/search" className="element">Search & Filter</NavLink>
        <NavLink to="/details" className="element">Details</NavLink>
      </ul>
    </nav>
  );
  }
  
export default NavBar;
    