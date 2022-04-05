import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          conduit
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="article">
              <i className="ion-compose"></i>&nbsp;New Article
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="settings">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="login">
              Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="register">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
