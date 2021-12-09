import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function NavBar() {
  return (
    <div className="navigation">
      <div className="image">
        <img src={Logo} alt="logo" />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/helper">Helper</Link>
        <Link to="/donor">Donor</Link>
      </div>
    </div>
  );
}

export default NavBar;
