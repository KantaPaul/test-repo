import React from 'react';
import {BrowserRouter , Route, Switch, Link, NavLink  } from 'react-router-dom';

let Header = () => (
  <div className="header">
    <h1>Portfolio</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact={true} to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact={true} to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header;