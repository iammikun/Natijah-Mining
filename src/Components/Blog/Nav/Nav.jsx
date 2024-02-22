import React, { useEffect } from "react";
import classes from "./Nav.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <nav className={classes.nav_Blog}>
      <div className={classes.nav_Text}>
        <p data-aos="fade-left">NEWS</p>
        <p data-aos="fade-right">&</p>
        <p data-aos="fade-left">BLOG </p>
      </div>
      <hr />
    </nav>
  );
};

export default Nav;
