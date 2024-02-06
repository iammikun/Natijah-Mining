import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero_Service}>
      <div className={classes.hero_Wrapper}>
        {" "}
        <h2>Natijah Minerals Services</h2>
        <p>Your reliable partner. First-class mining since 2017.</p>
      </div>
    </div>
  );
};

export default Hero;
