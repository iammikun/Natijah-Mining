import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import classes from "./Nav.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = ({ toggle }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className={!toggle ? classes.nav_Container : classes.show_Nav}
      data-aos="fade-down"
    >
      <nav>
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
    </div>
  );
};

export default Nav;
