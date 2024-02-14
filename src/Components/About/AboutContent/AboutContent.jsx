import React, { useEffect } from "react";
import classes from "./AboutContent.module.css";
import Vision from "../Vision/Vision";
import Company from "../Company/Company";
import mish from "../../../Images/mish.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.about_Container}>
      <Company />
      <div className={classes.mission_Wrapper} data-aos="fade-down">
        <div className={classes.mission_Content} data-aos="fade-left">
          <img src={mish} alt="" data-aos="fade-left" />
          <div className={classes.mission_Text}>
            <h2 data-aos="fade-right">Our Mission</h2>
            <p>
              At Natijah Minerals Nigeria Limited, we are dedicated to building
              a brighter future for our students. Our mission is to create a
              global network of learners who are empowered, enlightened, and
              ready to make a positive impact on society.
            </p>
          </div>
        </div>
        <div className={classes.mission_Cards}>
          <div className={classes.card} data-aos="fade-right">
            <h4>Ensuring Accessibilty</h4>
            <hr />
            <p>
              We work to ensure that our clients have unfettered access to the
              highest quality of solid minerals applicable for their use under
              the most demanding conditions. Our commitment to ensuring that we
              provide the highest standards is evident to our work.
            </p>
          </div>
          <div className={classes.card} data-aos="fade-down">
            <h4>Customer Satisfaction</h4>
            <hr />
            <p>
              We believe that the success of our business is determined by the
              satisfaction of our customers. We are pleased when our customers
              are pleased. Hence we work with our clients to know their specific
              needs and to our best to ensure their satisfaction.
            </p>
          </div>
          <div className={classes.card} data-aos="fade-left">
            <h4>Mutual Profitability</h4>
            <hr />
            <p>
              As a business, we seek to be profitable while giving our customers
              good deals that also contribute to their own profitability. This
              shows in our pricing and processes designed to ensure mutual
              profitability.
            </p>
          </div>
        </div>
      </div>
      <Vision />
    </div>
  );
};

export default AboutContent;
