import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className={classes.hero_News}>
      <div className={classes.news_Wrapper}>
        {" "}
        {/* <h2 data-aos="fade-right">Information and Insights</h2> */}
        <h2 data-aos="fade-right">News and Blog</h2>
        <p data-aos="fade-left">
          Get information and insight about us, other players, activities and
          happenings in the global solid minerals industry.
        </p>
      </div>
    </div>
  );
};

export default Hero;
