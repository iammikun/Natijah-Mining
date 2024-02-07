import React from "react";
import classes from "./Vision.module.css";

const Vision = () => {
  return (
    <div className={classes.vision_Container}>
      <div className={classes.vision_Wrapper}>
        <div className={classes.vision_Mission}>
          <h2>Vision</h2>
          <div className={classes.vision_Text}>
            <p>
              After the foundation of Bitkern and the construction of the first
              data centers in Austria in 2017, we expanded our production sites
              to Sweden in 2018 and to the United States of America in 2019.
            </p>
            <p>
              As an innovation-oriented company, we are a leading provider of
              solutions for institutional clients and family offices who are
              interested in sustainable, valuable technologies.
            </p>
            <p>
              The key to a sustainable technological contribution to our society
              lies in the efficiency of an organization. Therefore, our main
              focus is to provide access to viable global energy hot spots in
              places where the available energy is not used or is unnecessarily
              disposed as waste.
            </p>
            <p>
              Our goal is to use surplus energy worldwide and utilize it for
              technological progress, whereby we focus on renewable energy and
              aim at achieving the highest possible efficiency.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Vision;
