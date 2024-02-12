import React, { useEffect } from "react";
import classes from "./What.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const What = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.what_Container}>
      <div className={classes.what_Wrapper}>
        <h2 data-aos="fade-right">Who We Are</h2>
        <hr data-aos="fade-right" />
        <p data-aos="fade-left">
          NATIJAH MINERALS NIG. LTD is an indigenous licensed company registered
          in 2008 under the Corporate Affairs Commission of Nigeria for the
          purpose of solid minerals mining and trading in Nigeria and around the
          world, with its subsidiary NATIJAH MINERAL MOROCCO. With a vision to
          become Africa’s premier mineral mining and solid minerals trading
          company, we are an international business with imprints across Nigeria
          (West Africa), Morocco (North Africa), and China (East Asia).
        </p>
        <Link to="/about">
          <button data-aos="flip-left">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default What;
