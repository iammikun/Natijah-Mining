import React, { useEffect } from "react";
import Hero from "../../Components/About/Hero/Hero";
import AboutContent from "../../Components/About/AboutContent/AboutContent";
import Leader from "../../Components/About/Leader/Leader";
import Partner from "../../Components/Home/Partner/Partner";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <Hero />
        <AboutContent />
        <Partner />
        <Leader />
      </div>
    </div>
  );
};

export default About;
