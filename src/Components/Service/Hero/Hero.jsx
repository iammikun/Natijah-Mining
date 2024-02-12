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
        <h5 data-aos="fade-left">Our Services</h5>
        <h2 data-aos="fade-left">Natijah Minerals Services</h2>
        <p data-aos="fade-right">
          We differentiate ourselves by offering our unique experience
        </p>
      </div>
    </div>
  );
};

export default Hero;
