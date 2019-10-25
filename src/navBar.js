import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/navBar.css';

class NavBar extends React.Component {
    render() {
      return (
        <ul className="navContainer">
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/resume">Resume</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
        </ul>
      )
    }
  }
  export default NavBar;  