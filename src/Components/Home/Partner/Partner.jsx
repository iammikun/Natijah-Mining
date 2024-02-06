import React from "react";
import canaan from "../../../Images/Canaan.png";
import bitmain from "../../../Images/Bitmain.png";
import scilicon from "../../../Images/scilicon.png";
import microBT from "../../../Images/MicroBT.png";
import classes from "./Partner.module.css";

const Partner = () => {
  return (
    <div className={classes.partner_Container}>
      <h2>Our Partners</h2>
      <hr />
      <div className={classes.partner_Wrapper}>
        <img src={canaan} alt="" />
        <img src={bitmain} alt="" />
        <img src={scilicon} alt="" />
        <img src={microBT} alt="" />
      </div>
    </div>
  );
};

export default Partner;
