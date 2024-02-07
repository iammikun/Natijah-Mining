import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero_About}>
      <div className={classes.hero_Wrapper}>
        <h5>NATIJAH MINERALS NIGERIA LIMITED</h5>
        <h2>The Company</h2>
        <h2>The Vision - The Mission</h2>
        <p>
          Natijah is your partner in the world of Mining mineral resources
          Technology and Artificial Intelligence and specializes in the
          construction and operation of high-performance data centers.
        </p>
      </div>
    </div>
  );
};

export default Hero;
