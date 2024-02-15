import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.hero_Service}>
      <div className={classes.hero_Wrapper}>
        {" "}
        <h2 data-aos="fade-left">Our Services</h2>
        <p data-aos="fade-right">
          Providing our local and international clientele with the best
          obtainable solid minerals to make their business of building and
          engendering industrial transformation easy.
        </p>
      </div>
    </div>
  );
};

export default Hero;
