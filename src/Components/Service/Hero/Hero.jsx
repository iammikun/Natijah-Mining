import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero_Service}>
      <div className={classes.hero_Wrapper}>
        {" "}
        <h5>Our Services</h5>
        <h2>Natijah Minerals Services</h2>
        <p>We differentiate ourselves by offering our unique experience</p>
      </div>
    </div>
  );
};

export default Hero;
