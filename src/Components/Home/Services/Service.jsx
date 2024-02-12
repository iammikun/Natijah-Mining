import React from "react";
import classes from "./Service.module.css";
import { FaLandMineOn, FaResolving, FaNetworkWired } from "react-icons/fa6";

const Service = () => {
  return (
    <div className={classes.service_Container}>
      <div className={classes.service_Wrapper}>
        <h2>Our Services</h2>
        <hr />
        <div className={classes.service_Cards}>
          <div className={classes.card}>
            <FaLandMineOn className={classes.icon} />
            <h4>Trading And Mining Of Industrial Minerals</h4>
            <p>
              Over the years, we have been successfully engaged in the
              exploration, exploitation, buying, selling and export of
              industrial minerals like Lead Ore, Zinc Ore, and Lithium Ore both
              locally in Nigeria and Morocco, as well as internationally.
            </p>
          </div>
          <div className={classes.card}>
            <FaResolving className={classes.icon} />
            <h4>Trading Of Minor Metals</h4>
            <p>
              We have traded in minor metals very profitably, buying, selling
              and exporting directly to our growing client base. We have majorly
              dealt in the trade of Tin Ore, Columbite, Monazite, and Tantalite.
            </p>
          </div>
          <div className={classes.card}>
            <FaNetworkWired className={classes.icon} />
            <h4>Mining Center Solutions</h4>
            <p>
              In our trading processes, we proffer Ex-Warehousing, Free-On-
              Board (FOB), and Cost, Insurance and Freight (CIF) services to our
              clients as their needs may demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
