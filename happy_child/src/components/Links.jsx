import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/helper">Helper</Link>
      <Link to="/donor">Donor</Link>
    </div>
  );
}
export default Links;
