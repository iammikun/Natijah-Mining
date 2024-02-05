import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import classes from "./Header.module.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className={classes.header_Container}>
      <div className={classes.header_Wrapper}>
        <Logo />
        <Nav />
        <Button />
      </div>
    </div>
  );
};

export default Header;
