import React from 'react';
import './Navbar.css';
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span>Estoque</span>
      </div>
      <div className="navbar-icons">
        <i className="icon user-icon">👤</i> {/* Use um ícone real ou SVG */}
        <i className="icon logout-icon">🚪</i> {/* Use um ícone real ou SVG */}
      </div>
    </nav>
  );
};

export default Navbar;