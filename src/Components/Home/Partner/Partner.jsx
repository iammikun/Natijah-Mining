import React from "react";
import tianneng from "../../../Images/tianneng.jpeg";
import highland from "../../../Images/highland.jpeg";
import xiamen from "../../../Images/xiamen.jpeg";
import aishi from "../../../Images/aishi.jpeg";
import classes from "./Partner.module.css";

const Partner = () => {
  return (
    <div className={classes.partner_Container}>
      <h2>Our Partners</h2>
      <hr />
      <div className={classes.partner_Wrapper}>
        <img src={tianneng} alt="" />
        <img src={highland} alt="" />
        <img src={xiamen} alt="" />
        <img src={aishi} alt="" className={classes.last} />
      </div>
    </div>
  );
};

export default Partner;
