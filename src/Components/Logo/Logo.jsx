import React, { useEffect } from "react";
import logo from "../../Images/logo.jpg";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import classes from "./Logo.module.css";

const Logo = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <Link to="/" className={classes.logo} data-aos="fade-right">
      <img src={logo} alt="" loading="lazy" /> <p>Natijah Minerals Nig Ltd.</p>
    </Link>
  );
};

export default Logo;
