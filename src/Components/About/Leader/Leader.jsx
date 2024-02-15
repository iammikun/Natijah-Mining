import React from "react";
import classes from "./Leader.module.css";
import { Link } from "react-router-dom";
import leaderOne from "../../../Images/leaderOne.png";
// import leaderTwo from "../../../Images/leaderTwo.png";

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
            <p>CHAIRMAN/MANAGING DIRECTOR</p>
          </div>
        </div>
        <Link to="/team" data-aos="fade-left">
          <button className={classes.button}>See the Team</button>
        </Link>
      </div>
    </div>
  );
};

export default Leader;
