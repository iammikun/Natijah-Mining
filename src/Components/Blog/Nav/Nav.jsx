import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav_Blog}>
      <div className={classes.nav_Text}>
        <p>NEWS</p>
        <p>&</p>
        <p>BLOG </p>
      </div>
      <hr />
    </nav>
  );
};

export default Nav;
