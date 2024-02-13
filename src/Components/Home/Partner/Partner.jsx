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
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.partner_Container} data-aos="fade-right">
      <h2>Our Partners</h2>
      <hr />
      <div className={classes.partner_Wrapper}>
        <img src={tianneng} alt="" loading="lazy" />
        <img src={highland} alt="" loading="lazy" />
        <img src={xiamen} alt="" loading="lazy" />
        <img src={aishi} alt="" className={classes.last} loading="lazy" />
      </div>
    </div>
  );
};

export default Partner;
