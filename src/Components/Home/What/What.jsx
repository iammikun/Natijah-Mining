import React from "react";
import classes from "./What.module.css";
import { Link } from "react-router-dom";

const What = () => {
  return (
    <div className={classes.what_Container}>
      <div className={classes.what_Wrapper}>
        <h2>Who We Are</h2>
        <hr />
        <p>
          NATIJAH MINERALS NIG. LTD is an indigenous licensed company registered
          in 2008 under the Corporate Affairs Commission of Nigeria for the
          purpose of solid minerals mining and trading in Nigeria and around the
          world, with its subsidiary NATIJAH MINERAL MOROCCO. With a vision to
          become Africa’s premier mineral mining and solid minerals trading
          company, we are an international business with imprints across Nigeria
          (West Africa), Morocco (North Africa), and China (East Asia).
        </p>
        <Link to="/about">
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default What;
