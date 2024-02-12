import React from "react";
import classes from "./News.module.css";
import newsOne from "../../../Images/newsOne.jpg";
// import newTwo from "../../../Images/newTwo.jpg";
import newsThree from "../../../Images/newsThree.jpg";

const News = () => {
  return (
    <div className={classes.news_Section}>
      <div className={classes.news_Content}>
        <div>
          <a href="https://www.bitkern.com/en/news" target="_blank">
            <img src={newsOne} alt="" />
          </a>
          <div className={classes.card}>
            <h4>New Head Office</h4>
            <p>The Bitkern Group moved Head Office to Zug in Switzerland.</p>
            <a href="" className={classes.button}>
              <button>READ MORE</button>
            </a>
          </div>
        </div>
        <div>
          <a href="https://www.bitkern.com/en/news">
            <img src={newsOne} alt="" />
          </a>
          <div className={classes.card}>
            <h4>New Partnership: Kadena Mining Club</h4>
            <p>
              The Bitkern Group Announces Groundbreaking Partnership with Kadena
              Mining Club.
            </p>
            <a href="" className={classes.button}>
              <button>READ MORE</button>
            </a>
          </div>
        </div>
        <div>
          <a href="">
            <img src={newsThree} alt="" />
          </a>
          <div className={classes.card}>
            <h4>New Partnership: Crypto Oxygen</h4>
            <p>
              Crypto Oxygen and Bitkern Announce Partnership to Deliver
              Cutting-Edge Solutions in Crypto Mining.
            </p>
            <a href="" className={classes.button}>
              <button>READ MORE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;