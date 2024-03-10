import React, { useEffect } from "react";
import classes from "./Service.module.css";
import { FaTruckMonster, FaSellsy, FaShip } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className={classes.service_Container} data-aos="fade-down">
      <div className={classes.service_Wrapper}>
        <h2>Our Services</h2>
        <hr />
        <div className={classes.service_Cards}>
          <div className={classes.card} data-aos="fade-down">
            <FaTruckMonster className={classes.icon} data-aos="flip-right" />
            <h4>Trading And Mining Of Industrial Minerals</h4>
            <p>
              Over the years, we have been successfully engaged in the
              exploration, exploitation, buying, selling and export of
              industrial minerals like Lead Ore, Zinc Ore, and Lithium Ore both
              locally in Nigeria and Morocco, as well as internationally.
            </p>
          </div>
          <div className={classes.card} data-aos="fade-down">
            <FaSellsy className={classes.icon} data-aos="flip-left" />
            <h4>Trading Of Minor Metals</h4>
            <p>
              We have traded in minor metals very profitably, buying, selling
              and exporting directly to our growing client base. We have majorly
              dealt in the trade of Tin Ore, Columbite, Monazite, and Tantalite.
            </p>
          </div>
          <div className={classes.card} data-aos="fade-down">
            <FaShip className={classes.icon} data-aos="fade-right" />
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
