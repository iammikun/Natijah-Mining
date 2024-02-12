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
          Through innovation, global collaboration, and a focus on empowerment,
          we differentiate ourselves by offering our unique experience in the
          sector ensuring that our clients can go to rest as we journey
          together.
        </p>
      </div>
    </div>
  );
};

export default Hero;
