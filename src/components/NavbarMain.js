import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMain = () => {
  return (
    <div className="navbar-main">
      <div className="logo">
        <Link to="/">🛍️ Prince & Co.</Link>
      </div>
      <div className="nav-menu">
        <Link to="/blogs">Blogs</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/equipment">Equipment</Link>
        <Link to="/about">About Us</Link>
        <Link to="/community">Community</Link>
      </div>
    </div>
  );
};

export default NavbarMain;
