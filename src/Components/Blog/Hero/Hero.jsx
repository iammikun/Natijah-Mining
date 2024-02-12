import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.hero_News}>
      <div className={classes.news_Wrapper}>
        {" "}
        <h5 data-aos="fade-left">NATIJAH NEWS & BLOG</h5>
        <h2 data-aos="fade-right">Informations and Insights</h2>
        <p data-aos="fade-left">
          Get news and read about minerals mined in Nigeria and abroad and dive
          into articles about A.I. and other mining-related topics.
        </p>
      </div>
    </div>
  );
};

export default Hero;
