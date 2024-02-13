import React, { useEffect } from "react";
import classes from "./Value.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.value_Container} data-aos="fade-right">
      <h2>Our Core Values</h2>
      <hr />
      <div className={classes.value_Wrapper} data-aos="fade-right">
        <div className={classes.value_Box}>
          <p>Integrity</p>
        </div>
        <div className={classes.value_Box}>
          <p>Professionalism</p>
        </div>
        <div className={classes.value_Box}>
          <p>Collaboration</p>
        </div>
        <div className={classes.value_Box}>
          <p>Profitability</p>
        </div>
      </div>
    </div>
  );
};

export default Values;
