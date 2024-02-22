import React, { useEffect } from "react";
import map from "../../../Images/map.jpg";
import classes from "./Map.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Map = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className={classes.map_Container} data-aos="fade-right">
      <div className={classes.map_Wrapper}>
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default Map;
