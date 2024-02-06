import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
// import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={classes.footer_News}>
        <h4>SUBSCRIBE FOR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email..." />
        <Link to="mailto:">
          <button>SUBSCRIBE</button>
        </Link>
      </div>
      <div className={classes.footer}>
        <div className={classes.foot}>
          <h2>Natijah Minerals Nigeria Limited.</h2>
          <span></span>
          <div className={classes.address}>
            <h4>MAIN OFFICE LOCATION</h4>
            <p>69 Yonge Street, Suite 1010 Toronto, ON M5E 1K3</p>
          </div>
          <span>.</span>
          <div className={classes.address}>
            <h4>CONTACT PHONE</h4>
            <p>TF: +1 647-992-9837</p>
          </div>
          <span></span>
          <div className={classes.address}>
            <h4>EMAIL</h4>
            <p>info@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>© copyright 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
