import React from "react";
import classes from "./PreLoader.module.css";

const PreLoader = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={`${classes.ring} ${classes[`ring--hidden`]}`}></div>
      </div>
    </>
  );
};

export default PreLoader;
