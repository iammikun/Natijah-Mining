import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Button = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <Link to="/contact" data-aos="fade-left">
      <button className={classes.button}>Contact Us</button>
    </Link>
  );
};

export default Button;
