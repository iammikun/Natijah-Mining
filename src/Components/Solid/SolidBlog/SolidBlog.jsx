import React from "react";
import { Link } from "react-router-dom";
import classes from "./SolidBlog.module.css";
import { FaArrowLeft, FaRegClock } from "react-icons/fa6";
import Content from "./Content/Content";

const SolidBlog = () => {
  return (
    <div className={classes.solidBlog}>
      <div className={classes.solid_Wrapper}>
        <div className={classes.solidBack}>
          <Link to="/blog">
            <div>
              <FaArrowLeft />
            </div>
            Back to overview
          </Link>
          <p>
            <FaRegClock />8 min
          </p>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default SolidBlog;
