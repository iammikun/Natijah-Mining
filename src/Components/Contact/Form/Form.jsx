import React from "react";
import classes from "./Form.module.css";
import { Link } from "react-router-dom";
import { FaMessage, FaPhone, FaLocationDot } from "react-icons/fa6";

const Form = () => {
  return (
    <div className={classes.contact_Container}>
      <div className={classes.contact_Wrapper}>
        <div className={classes.contact_Text}>
          <h2>Contact</h2>
          <hr />
          <p>Please feel free to contact us with any enquiries you may have.</p>
        </div>
        <div className={classes.location}>
          <div className={classes.info}>
            <a href="mailto:info@natijahminerals.com">
              <FaMessage className={classes.icon} />
              INFO@NATIJAHMINERALS.COM
            </a>
            {/* <a href="tel:">
              <FaPhone className={classes.icon} />
              +234 803 6226 767
            </a> */}
          </div>
        </div>
        <div className={classes.loca}>
          <div className={classes.info}>
            <Link to="mailto:">
              <FaLocationDot className={classes.icon} />
              40, Murtala Mohammed Way, Jos, Plateau State. <br />
            </Link>
            <a href="tel:">
              <FaPhone className={classes.icon} />
              +234 803 6226 767
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
