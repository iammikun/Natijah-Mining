import React from "react";
import classes from "./Leader.module.css";
import leaderOne from "../../../Images/leaderOne.png";
import leaderTwo from "../../../Images/leaderTwo.png";

const Leader = () => {
  return (
    <div className={classes.leader_Container}>
      <div className={classes.leader_Wrapper}>
        <h5>MANAGEMENT</h5>
        <h2>Leadership</h2>
        <div className={classes.leader_Image}>
          <div>
            <img src={leaderOne} alt="" />
            <h4>Stefan Kern</h4>
            <p>CEO & FOUNDER BITKERN GROUP</p>
          </div>
          <div>
            <img src={leaderTwo} alt="" />
            <h4>Patrick Stich</h4>
            <p>CEO BITKERN USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
