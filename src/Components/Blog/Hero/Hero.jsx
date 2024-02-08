import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero_News}>
      <div className={classes.news_Wrapper}>
        {" "}
        <h5>NATIJAH NEWS & BLOG</h5>
        <h2>Informations and Insights</h2>
        <p>
          Get news and read about developments in HPC and dive into articles
          abount A.I. and crypto-related topics.
        </p>
      </div>
    </div>
  );
};

export default Hero;
