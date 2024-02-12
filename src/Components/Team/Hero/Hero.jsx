import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.news_hero}>
      <div className={classes.hero_Hero}>
        <h5>Our Team</h5>
        <h2>Meet the team</h2>
        <p>Meet our world class people.</p>
      </div>
    </div>
  );
};

export default Hero;
