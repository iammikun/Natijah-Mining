import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import classes from "./Header.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FaPhone, FaMessage } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={classes.header_Container}>
      <div className={classes.copyright}>
        <div className={classes.rights}>
          <Link to="tel:+234 (09) 290 4738 09-2904748">
            <FaPhone className={classes.icon} />
          </Link>
          <Link to="mailto:">
            <FaMessage className={classes.icon} />
          </Link>
        </div>
      </div>
      <div className={classes.header_Wrapper}>
        <Logo />
        <Nav />
        <Button />
      </div>
    </div>
  );
};

export default Header;
