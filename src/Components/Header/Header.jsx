import Logo from "../Logo/Logo";
import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { FaPhone, FaMessage } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  // const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState(false);

  const closeMenu = () => {
    setActive(false);
  };

  // window.scrollTo(1, 0);

  return (
    <div className={classes.header_Container} data-aos="fade-down">
      <div className={classes.copyright}>
        <div className={classes.rights}>
          <Link to="tel:+234 803 6226 767">
            <FaPhone className={classes.icon} />
          </Link>
          <Link to="mailto:natijahminerals@yahoo.com">
            <FaMessage className={classes.icon} />
          </Link>
        </div>
      </div>
      <div className={classes.header_Wrapper}>
        <Logo />
        <Nav />
        <div onClick={() => setActive(!active)} className={classes.hamburger}>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
        </div>
      </div>
      <nav className={active ? classes.activeSide_Nav : classes.show_Nav}>
        <ul>
          <li>
            <Link to="/" data-aos="fade-down" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" data-aos="fade-down" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" data-aos="fade-down" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/team" data-aos="fade-down" onClick={closeMenu}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/blog" data-aos="fade-down" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
