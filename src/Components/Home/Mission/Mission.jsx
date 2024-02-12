import React, { useEffect } from "react";
import classes from "./Mission.module.css";
import { Link } from "react-router-dom";
import mission from "../../../Images/mission.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.mission_Container}>
      <div className={classes.mission_Wrapper}>
        <div className={classes.mission_Text} data-aos="fade-right">
          <h2>Our Mission</h2>
          <hr />
          <p data-aos="fade-left">
            At Natijah Minerals Nigeria Limited, we are dedicated to building a
            brighter future for our students. Our mission is to create a global
            network of learners who are empowered, enlightened, and ready to
            make a positive impact on society.
          </p>
          <Link to="/about">
            <button data-aos="flip-left">Read More</button>
          </Link>
        </div>
        <div className={classes.img}>
          <img src={mission} alt="" data-aos="fade-left" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
