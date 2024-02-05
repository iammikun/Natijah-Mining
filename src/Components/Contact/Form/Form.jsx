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
            <Link to="mailto:">
              <FaMessage className={classes.icon} />
              info@example.com
            </Link>
            <Link to="tel:">
              <FaPhone className={classes.icon} />
              +234 (09) 290 4738 , 09-2904748{" "}
            </Link>
          </div>
        </div>
        <div className={classes.loca}>
          <div className={classes.info}>
            <Link to="mailto:">
              <FaLocationDot className={classes.icon} />
              2nd Floor, NEXIM House Plot 975, <br /> Cadastral Zone A0 Central{" "}
              <br />
              Business district Abuja.{" "}
            </Link>
            <Link to="tel:">
              <FaPhone className={classes.icon} />
              +234 (09) 290 4738 , 09-2904748{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
