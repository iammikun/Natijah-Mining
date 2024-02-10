import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav_Container}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <Button />
      </ul>
    </nav>
  );
};

export default Nav;
