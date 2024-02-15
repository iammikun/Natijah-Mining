import React, { useEffect } from "react";
import classes from "./Content.module.css";
import cardOne from "../../../Images/cardOne.jpg";
import cardTwo from "../../../Images/cardTwo.jpg";
import cardThree from "../../../Images/cardThree.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.content_Container}>
      <div className={classes.content_Wrapper}>
        <div className={classes.content_Service}>
          <div className={classes.content_Card}>
            <h2 data-aos="fade-right">
              Trading And Mining Of Industrial Minerals
            </h2>
            <p data-aos="fade-right">
              Over the years, we have been successfully engaged in the
              exploration, exploitation, buying, selling and export of
              industrial minerals like Lead Ore, Zinc Ore, and Lithium Ore both
              locally in Nigeria and Morocco, as well as internationally.
            </p>
          </div>
          <img src={cardOne} alt="" data-aos="fade-left" loading="lazy" />
        </div>
        <div className={classes.content_Service}>
          <img src={cardTwo} alt="" data-aos="fade-center" loading="lazy" />
          <div className={classes.content_Card}>
            <h2 data-aos="fade-left">Trading Of Minor Metals</h2>
            <p data-aos="fade-left">
              We have traded in minor metals very profitably, buying, selling
              and exporting directly to our growing client base. We have majorly
              dealt in the trade of Tin Ore, Columbite, Monazite, and Tantalite.
            </p>
          </div>
        </div>
        <div className={classes.content_Service}>
          <div className={classes.content_Card}>
            <h2 data-aos="fade-right">Enabling Trading Processes</h2>
            <p data-aos="fade-right">
              In our trading processes, we proffer Ex-Warehousing, Free-On-
              Board (FOB), and Cost, Insurance and Freight (CIF) services to our
              clients as their needs may demand.
            </p>
          </div>
          <img src={cardThree} alt="" data-aos="fade-left" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Content;
