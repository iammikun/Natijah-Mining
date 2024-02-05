import React from "react";
import classes from "./Why.module.css";
import why from "../../../Images/why.jpg";

const Why = () => {
  return (
    <div className={classes.why_Container}>
      <div className={classes.why_Wrapper}>
        <div className={classes.why_Text}>
          <h2>Why Natijah?</h2>
          <hr />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nisi,
            voluptates perferendis odit adipisci in sed illo repudiandae sunt
            illum harum sequi rerum ex veritatis impedit laborum! Excepturi sit
            nisi delectus ullam, consequuntur mollitia, consectetur ipsa
            repudiandae quia quisquam a illo magnam consequatur minus vero in
            similique, alias modi voluptas nemo nulla eligendi numquam quasi?
            Quis
          </p>
        </div>
        <div className={classes.why_Img}>
          <img src={why} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Why;
