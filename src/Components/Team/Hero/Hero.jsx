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
        <h5 data-aos="fade-left">Our Team</h5>
        <h2 data-aos="fade-right">Meet the team</h2>
        <p data-aos="fade-left">Meet our world class people.</p>
      </div>
    </div>
  );
};

export default Hero;
