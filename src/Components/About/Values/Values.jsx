import React, { useEffect } from "react";
import classes from "./Value.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPeopleCarry,
  FaDollarSign,
  FaHandshake,
  FaAward,
} from "react-icons/fa";

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
          <FaHandshake className={classes.icon} />
          <p>Integrity</p>
        </div>
        <div className={classes.value_Box}>
          <FaAward className={classes.icon} />
          <p>Professionalism</p>
        </div>
        <div className={classes.value_Box}>
          <FaPeopleCarry className={classes.icon} />
          <p>Collaboration</p>
        </div>
        <div className={classes.value_Box}>
          <FaDollarSign className={classes.icon} />
          <p>Profitability</p>
        </div>
      </div>
    </div>
  );
};

export default Values;
