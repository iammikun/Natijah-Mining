import React, { useEffect } from "react";
import logo from "../../Images/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import classes from "./Logo.module.css";

const Logo = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.logo} data-aos="fade-right">
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
