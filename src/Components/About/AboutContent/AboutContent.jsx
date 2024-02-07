import React from "react";
import classes from "./AboutContent.module.css";
import Vision from "../Vision/Vision";
import Company from "../Company/Company";

const AboutContent = () => {
  return (
    <div className={classes.about_Container}>
      <div className={classes.about_Wrapper}>
        <div className={classes.about_Mission}>
          <h2>Mission</h2>
          <div className={classes.about_Text}>
            <p>
              The world of technology advances at a fast pace, and we are moving
              into the Fourth Industrial Revolution, an era in which
              digitization and technology will affect us in all spheres of life
              and become embedded within societies.
            </p>
            <p>
              A significant technological progress of humanity is the blockchain
              technology and the technology of artificial intelligence. It is
              probably beyond our imagination to think about what our
              environment and our societies will look like in a few decades from
              now.
            </p>
            <p>
              At Bitkern, we have dedicated ourselves to this exciting topic.
              The goal of Bitkern is to take up, develop and advance
              technologies that are valuable to humanity. Our focus is primarily
              on decentralized technologies, such as blockchain technology –
              technologies by people for people.
            </p>
          </div>
        </div>
        <hr />
      </div>
      <Vision />
      <Company />
    </div>
  );
};

export default AboutContent;
