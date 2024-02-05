import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = () => {
  return (
    <Link to="/contact">
      <button className={classes.button}>Contact Us</button>
    </Link>
  );
};

export default Button;
