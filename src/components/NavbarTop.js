import React from 'react';
import { Link } from 'react-router-dom';

const NavbarTop = () => {
  return (
    <div className="navbar-top">
      <Link to="/login">Login</Link>
      <Link to="/cart">My Cart</Link>
    </div>
  );
};

export default NavbarTop;
