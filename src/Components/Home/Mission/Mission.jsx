import React from "react";
import classes from "./Mission.module.css";
import { Link } from "react-router-dom";
import mission from "../../../Images/mission.jpg";

const Mission = () => {
  return (
    <div className={classes.mission_Container}>
      <div className={classes.mission_Wrapper}>
        <div className={classes.mission_Text}>
          <h2>Our Mission</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            pariatur excepturi? Dolor delectus molestias dolorum assumenda ad.
            Odio beatae, recusandae repellendus architecto placeat voluptatem
            minus, accusamus rem asperiores labore earum sint iusto tempore nam
            maiores ratione nobis? Maiores
          </p>
          <Link>
            <button>Read More</button>
          </Link>
        </div>
        <div className={classes.img}>
          <img src={mission} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
