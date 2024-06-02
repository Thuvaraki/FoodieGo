import React from "react";
import { assets } from "../../assets/assets.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} />
      <img className="profile" src={assets.profile_image} />
    </div>
  );
};

export default Navbar;
