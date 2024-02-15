import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.news_hero}>
      <div className={classes.hero_Hero}>
        <h2 data-aos="fade-right">Our People</h2>
        <p data-aos="fade-left">
          Meet our Team of World Class Experienced Profesionals.
        </p>
      </div>
    </div>
  );
};

export default Hero;
