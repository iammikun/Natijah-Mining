import React from "react";
import logo from "../../Images/logo.jpg";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
