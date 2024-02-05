import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero_Container}>
      <div className={classes.hero_Wrapper}>
        <h2>Mining Hardware & Hosting Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui!
          Fuga, officia ipsa ad veritatis numquam adipisci consequuntur
          repudiandae nulla nemo sapiente quibusdam quam quo neque velit minus
          ipsam aliquid.
        </p>
      </div>
    </div>
  );
};

export default Hero;
