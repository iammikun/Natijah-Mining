import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className={classes.hero_About}>
      <div className={classes.hero_Wrapper}>
        <h2 data-aos="fade-right">About Us</h2>
        <h2 data-aos="fade-left">Vision - Mission</h2>
        <p data-aos="fade-right">
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
