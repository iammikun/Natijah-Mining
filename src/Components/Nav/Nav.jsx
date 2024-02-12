import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import classes from "./Nav.module.css";

const Nav = ({ toggle }) => {
  return (
    <>
      <nav className={!toggle ? classes.nav_Container : classes.show_Nav}>
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
      <nav className={classes.show_Nav}>
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
          <li>
            <Link to="/blog">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
