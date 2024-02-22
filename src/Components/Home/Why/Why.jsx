import React, { useEffect } from "react";
import classes from "./Why.module.css";
import why from "../../../Images/why.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className={classes.why_Container} data-aos="fade-down">
      <div className={classes.why_Wrapper}>
        <div className={classes.why_Text}>
          <h2 data-aos="fade-down">Why Natijah?</h2>
          <hr data-aos="fade-down" />
          <p data-aos="fade-down">
            As a business venture committed to excellent service delivery within
            the solid mineral sector, we embrace innovation, global
            collaboration, and a focus on harnessing untapped potential. Our
            unique value lies in our combination of vast experience, expertise,
            knowledge of the terrain, as well as easy access to resources.
          </p>
        </div>
        <div className={classes.why_Img}>
          <img src={why} alt="" data-aos="fade-down" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Why;
