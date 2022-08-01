import React from 'react';
import logo from '../../assets/Other Assets/Logo.png';
import logoMobile from '../../assets/Other Assets/Logo-Mobile-NoBevel.png';
import { NavLink } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
  return (
    <div className = "bgd__navbar">
      <div className = "bgd__navbar-links">
        <img src = {logo} alt = "Bowling Game Design Logo" className = "bgd__navbar-links_logo"/>
        <img src = {logoMobile} alt = "Bowling Game Design Logo" className = "bgd__navbar-links_logo-mobile"/>
        <li className = "bgd__navbar-links_container">
          <NavLink exact to = "/" activeClassName = "active"> Home </NavLink>
          <NavLink exact to = "/projects" activeClassName = "active"> Projects </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;