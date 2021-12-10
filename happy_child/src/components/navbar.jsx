import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function NavBar() {
  const [small, setSmall] = useState(null);
  //#endregion
  const handleResize = () => {
    console.log(window.innerWidth);

    window.innerWidth < 800 ? setSmall(true) : setSmall(false);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="navigation">
      <div className="image">
        <img src={Logo} alt="logo" />
      </div>
      {small === false ? (
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/helper">Helper</Link>
          <Link to="/donor">Donor</Link>
        </div>
      ) : (
        <div className="menu">
          <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>
      )}
    </div>
  );
}

export default NavBar;
