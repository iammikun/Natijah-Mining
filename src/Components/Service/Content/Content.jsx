import React from "react";
import classes from "./Content.module.css";
import cardOne from "../../../Images/cardOne.jpg";
import cardTwo from "../../../Images/cardTwo.jpg";
import cardThree from "../../../Images/cardThree.jpg";
import cardFour from "../../../Images/cardFour.jpg";

const Content = () => {
  return (
    <div className={classes.content_Container}>
      <div className={classes.content_Wrapper}>
        <div className={classes.content_Service}>
          <div className={classes.content_Card}>
            <h2>All-in service</h2>
            <p>
              All hosting plans offered by Bitkern are all-in tariffs, which
              include rack space, direct support, operations including small
              troubleshooting work, firmware updates and on-site technicians for
              maintenance of the infrastructure consisting of energy supply,
              cooling technology and the IT network.
            </p>
          </div>
          <img src={cardOne} alt="" />
        </div>
        <div className={classes.content_Service}>
          <img src={cardTwo} alt="" />
          <div className={classes.content_Card}>
            <h2>Mobile Data Center Approach</h2>
            <p>
              In addition to building interiors, we also use mobile container
              solutions, depending on the location. Due to their small volume,
              these provide the optimal basis for air exchange and thus for the
              best possible ventilation and cooling of the high-performance
              computers.
            </p>
          </div>
        </div>
        <div className={classes.content_Service}>
          <div className={classes.content_Card}>
            <h2>Repair Services</h2>
            <p>
              High-performance computers like ASIC miners, are high-priced
              hardware that work continuously to mine cryptocurrencies. Due to
              the high and continuous load, problems can occur. Therefore,
              Bitkern offers a comprehensive in-house repair service. This saves
              our customers a lot of time and thus increases their profit.
            </p>
          </div>
          <img src={cardThree} alt="" />
        </div>
        <div className={classes.content_Service}>
          <img src={cardFour} alt="" />
          <div className={classes.content_Card}>
            <h2>Quality Standards</h2>
            <p>
              Bitkern uses high-quality hardware from the world's leading
              manufacturers, which corresponds to current industry standards.
              With specifically developed firmware, we are also able to increase
              the efficiency of the high-performance computers and thus maximize
              the ROI of our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
