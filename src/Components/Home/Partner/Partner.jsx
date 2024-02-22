import React, { useEffect } from "react";
import tianneng from "../../../Images/tianneng.jpeg";
import highland from "../../../Images/highland.jpeg";
import xiamen from "../../../Images/xiamen.jpeg";
import aishi from "../../../Images/aishi.png";
import classes from "./Partner.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Partner = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className={classes.partner_Container} data-aos="fade-right">
      <h2>Our Partners</h2>
      <hr />
      <div className={classes.partner_Wrapper}>
        <div className={classes.img}>
          <img src={tianneng} alt="" loading="lazy" />
        </div>
        <div className={classes.img}>
          <img src={highland} alt="" loading="lazy" />
        </div>
        <div className={classes.img}>
          <img src={xiamen} alt="" loading="lazy" />
        </div>
        <div className={classes.img}>
          <img src={aishi} alt="" className={classes.last} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
