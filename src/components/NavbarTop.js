import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const NavbarTop = () => {
  return (
    <div className="navbar-top">
      <Link to="/login" className="nav-link"><FaUser /> Login</Link>
      <Link to="/cart" className="nav-link"><FaShoppingCart /> Cart</Link>
    </div>
  );
};

export default NavbarTop;
