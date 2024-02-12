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
            As a business venture committed to excellent service delivery within
            the solid mineral sector, we embrace innovation, global
            collaboration, and a focus on harnessing untapped potential. Our
            unique value lies in our combination of vast experience, expertise,
            knowledge of the terrain, as well as easy access to resources.
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
