import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className={classes.footer_News}>
        <h4>SUBSCRIBE FOR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email..." />
        <Link to="mailto:info@natijahminerals.com">
          <button>SUBSCRIBE</button>
        </Link>
      </div>
      <div className={classes.footer}>
        <div className={classes.foot}>
          <div className={classes.socials}>
            <p>
              <a href="">
                <FaSquareXTwitter />
              </a>
            </p>
            <p>
              <a href="">
                <FaSquareFacebook />
              </a>
            </p>
            <p>
              <a href="">
                <FaLinkedin />
              </a>
            </p>
          </div>
          <span></span>
          <div className={classes.address}>
            <h4>CORPORATE ADDRESS</h4>
            <p>40, Murtala Mohammed Way, Jos, Plateau State.</p>
          </div>
          <span></span>
          <div className={classes.address}>
            <h4>CONTACT PHONE</h4>
            <a href="tel:">
              <p>+234 803 6226 767</p>
            </a>
          </div>
          <span></span>
          <div className={classes.address}>
            <h4>EMAIL</h4>
            <a href="mailto:info@natijahminerals.com">
              <p>INFO@NATIJAHMINERALS.COM</p>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>© copyright 2024.</p>
        <p>All rights reserved.</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.3410178524255!2d8.891679211540364!3d9.905529474610342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373ba61ebf3a3%3A0x9a16682e0f10768!2s40%20Bauchi%20Rd%2C%20Jos%20930105%2C%20Plateau!5e0!3m2!1sen!2sng!4v1707838364921!5m2!1sen!2sng"
        width="100%"
        height="600"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Footer;
