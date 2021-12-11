import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import Links from "./Links";

function NavBar() {
  const [small, setSmall] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleResize = () => {
    console.log(window.innerWidth);
    window.innerWidth < 800 ? setSmall(true) : setSmall(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="navigation">
        <div className="image">
          <img src={Logo} alt="logo" />
        </div>
        {small === false ? (
          <Links />
        ) : (
          <div className="menu">
            <i className="fa fa-bars fa-2x" aria-hidden="true" onClick={menu} />
          </div>
        )}
      </div>

      {menuIsOpen && small ? (
        <div className="small_menu">
          <Links />{" "}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default NavBar;
