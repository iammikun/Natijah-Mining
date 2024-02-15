import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero_Container}>
      <div className={classes.hero_Wrapper}>
        <h2>Solid Minerals In Nigeria</h2>
      </div>
    </div>
  );
};

export default Hero;
