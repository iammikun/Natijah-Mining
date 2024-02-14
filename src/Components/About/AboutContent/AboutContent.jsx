import React, { useEffect } from "react";
import classes from "./AboutContent.module.css";
import Vision from "../Vision/Vision";
import Company from "../Company/Company";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.about_Container}>
      <Company />
      <hr />
      <div className={classes.about_Wrapper}>
        <div className={classes.about_Mission}>
          <h2 data-aos="fade-right">Mission</h2>
          <div className={classes.about_Text} data-aos="fade-left">
            <p>
              At Natijah Minerals Nigeria Limited, we are dedicated to building
              a brighter future for our students. Our mission is to create a
              global network of learners who are empowered, enlightened, and
              ready to make a positive impact on society.
            </p>
            <h3>Strategic Goals</h3>
            <ul className={classes.bullet_List}>
              <p>
                {" "}
                <b>- Ensuring Stability: </b> We work to ensure that our clients
                have unfettered access to the highest quality of solid minerals
                applicable for their use under the most demanding conditions.
                Our commitment to ensuring that we provide the highest standards
                is evident to our work.
              </p>
              <p>
                <b>- Customer Satisfaction: </b>
                We believe that the success of our business is determined by the
                satisfaction of our customers. We are pleased when our customers
                are pleased. Hence we work with our clients to know their
                specific needs and to our best to ensure their satisfaction.
              </p>
              <p>
                <b>- Mutual Profitability: </b>
                As a business, we seek to be profitable while giving our
                customers good deals that also contribute to their own
                profitability. This shows in our pricing and processes designed
                to ensure mutual profitability.
              </p>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <Vision />
    </div>
  );
};

export default AboutContent;
