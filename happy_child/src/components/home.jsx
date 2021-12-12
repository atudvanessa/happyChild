import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="brief_about">
        <div className="text_side">
          <p className="main_text">Every child deserves happiness</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="logins">
            <span className="login">
              <Link to="/helper">Login As Helper</Link>
            </span>
            <span className="login">
              <Link to="/donor">Login As Donor</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="helper">
        <div className="text_side">
          <p className="main_text">Every child deserves happiness</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="logins">
            <span className="login">
              <Link to="/helper">Login As Helper</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="donor">
        <div className="text_side">
          <p className="main_text">Every child deserves happiness</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="logins">
            <span className="login">
              <Link to="/donor">Login As Donor</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
