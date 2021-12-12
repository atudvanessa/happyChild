import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Helper() {
  return (
    <div className="helperPage">
      <div className="caption">
        <img src={Logo} alt="logo" className="sideImg" />
        <p>Spread some happiness!</p>
      </div>
      <div className="login_form">
        <div className="form_element">
          <label for="username" id="username-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="eg. Nkongho_Arrah"
            required
          />
        </div>
        <div className="form_element">
          <label for="password" id="password-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
          />
        </div>
      </div>
    </div>
  );
}
export default Helper;
