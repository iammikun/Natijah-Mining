import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero_Container}>
      <div className={classes.hero_Wrapper}>
        <h2>Global leader in the solid minerals</h2>
        <p>
          Providing our local and international clientele with the best
          obtainable solid minerals to make their business of building and
          engendering industrial transformation easy.
        </p>
      </div>
    </div>
  );
};

export default Hero;
