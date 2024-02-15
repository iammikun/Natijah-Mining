import React, { useEffect } from "react";
import classes from "./News.module.css";
import lime from "../../../Images/lime.jpg";
// import newTwo from "../../../Images/newTwo.jpg";
import newsThree from "../../../Images/newsThree.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const News = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.news_Section} data-aos="fade-right">
      <div className={classes.news_Content}>
        <div data-aos="fade-right">
          <Link to="/solid">
            <img src={lime} alt="" />
          </Link>
          <div className={classes.card}>
            <h4>Solid Minerals in Nigeria</h4>
            <p>
              In Nigeria, some key mineralsmined include limestone for cement
              production, tin and columbite for electronics and alloys, coal for
              energy generation, lead ore, zinc ore, lithium, copper,
              petroleum/natural gas, bitumen, iron ore, gypsum, talc, bentonite
              and baryte, gemstones, kaolin, rock salt,limestone, tin, marble,
              bitumen, bentonite, gemstones, kaolin, rock salt, and gold.
            </p>
            <Link to="/solid" className={classes.button}>
              <button>READ MORE</button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-up">
          <Link to="">
            <img src={lime} alt="" />
          </Link>
          <div className={classes.card}>
            <h4>New Partnership: Kadena Mining Club</h4>
            <p>
              The Bitkern Group Announces Groundbreaking Partnership with Kadena
              Mining Club.
            </p>
            <Link to="/solid" className={classes.button}>
              <button>READ MORE</button>
            </Link>
          </div>
        </div>
        {/* <div data-aos="fade-right">
          <Link to="">
            <img src={newsThree} alt="" />
          </Link>
          <div className={classes.card}>
            <h4>New Partnership: Crypto Oxygen</h4>
            <p>
              Crypto Oxygen and Bitkern Announce Partnership to Deliver
              Cutting-Edge Solutions in Crypto Mining.
            </p>
            <Link to="/solid" className={classes.button}>
              <button>READ MORE</button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default News;
