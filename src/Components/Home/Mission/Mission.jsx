import React, { useEffect } from "react";
import classes from "./Mission.module.css";
import { Link } from "react-router-dom";
import mission from "../../../Images/mission.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className={classes.mission_Container}>
      <div className={classes.mission_Wrapper}>
        <div className={classes.mission_Text} data-aos="fade-down">
          <h2>Our Mission</h2>
          <hr />
          <p data-aos="fade-down">
            At Natijah Minerals Nigeria Limited, we are dedicated to sourcing
            and delivering 'A' grade solid minerals for our esteemed clients.
            Our mission is to exist as a globally viable resource platform for
            the acquisition and transfer of top quality solid materials required
            for industrial transformation.
          </p>
          <Link to="/about">
            <button data-aos="fade-down">Read More</button>
          </Link>
        </div>
        <div className={classes.img}>
          <img src={mission} alt="" data-aos="fade-left" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
