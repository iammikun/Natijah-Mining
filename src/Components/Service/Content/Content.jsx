import React from "react";
import classes from "./Content.module.css";
import cardOne from "../../../Images/cardOne.jpg";
import cardTwo from "../../../Images/cardTwo.jpg";
import cardThree from "../../../Images/cardThree.jpg";

const Content = () => {
  return (
    <div className={classes.content_Container}>
      <div className={classes.content_Wrapper}>
        <div className={classes.content_Service}>
          <div className={classes.content_Card}>
            <h2>1. Trading And Mining Of Industrial Minerals</h2>
            <p>
              Over the years, we have been successfully engaged in the
              exploration, exploitation, buying, selling and export of
              industrial minerals like Lead Ore, Zinc Ore, and Lithium Ore both
              locally in Nigeria and Morocco, as well as internationally.
            </p>
          </div>
          <img src={cardOne} alt="" />
        </div>
        <div className={classes.content_Service}>
          <img src={cardTwo} alt="" />
          <div className={classes.content_Card}>
            <h2>2. Trading Of Minor Metals</h2>
            <p>
              We have traded in minor metals very profitably, buying, selling
              and exporting directly to our growing client base. We have majorly
              dealt in the trade of Tin Ore, Columbite, Monazite, and Tantalite.
            </p>
          </div>
        </div>
        <div className={classes.content_Service}>
          <div className={classes.content_Card}>
            <h2>3. Quality Standards</h2>
            <p>
              In our trading processes, we proffer Ex-Warehousing, Free-On-
              Board (FOB), and Cost, Insurance and Freight (CIF) services to our
              clients as their needs may demand.
            </p>
          </div>
          <img src={cardThree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Content;
