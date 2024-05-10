// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">PET.S</Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/adopt" className="navbar-link">
              Adopt
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link">
              Resources
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
