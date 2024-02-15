import React, { useEffect } from "react";
import classes from "./Vision.module.css";
import vish from "../../../Images/vish.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.vision_Container}>
      <div className={classes.vision_Wrapper} data-aos="fade-down">
        <div className={classes.vision_Content} data-aos="fade-left">
          <img src={vish} alt="" data-aos="fade-down" />
          <div className={classes.vision_Text}>
            <h2 data-aos="fade-down">Vision</h2>
            <p>
              To become Africa’s premier solid minerals mining and trading
              company.
            </p>
            <p>
              At Natijah Minerals Nigeria Limited, it is our vision to reckon
              among the top players in the global mineral mining and trading
              sector by ensuring maximum excellence in research, trade processes
              and customer service delivery. Our commitment to excellence and
              accessibility, will be a critical transformative factor that
              impacts upon the industry one client at a time.
            </p>
          </div>
        </div>
        <div className={classes.vision_Cards}>
          <div className={classes.card} data-aos="fade-right">
            <h4>Global Leadership in Mineral Exploration</h4>
            <hr />
            <p>
              We envision Natijah Minerals Nigeria Limited as a game changer in
              the solid mineral exploration industry, setting global standards
              for quality and innovation.
            </p>
          </div>
          <div className={classes.card} data-aos="fade-down">
            <h4>Thorough Research</h4>
            <hr />
            <p>
              We believe in ensuring that what we bring only the highest quality
              solid minerals to the market guaranteeing our clients of the best
              they can get anywhere in the world. This is why we perform the due
              diligence to see that no stone is left unturned in our search for
              only the best.
            </p>
          </div>
          <div className={classes.card} data-aos="fade-left">
            <h4>Symbol of Business Excellence</h4>
            <hr />
            <p>
              It is our desire to be recognized as a business committed to the
              highest levels of excellence obtainable anywhere around the world.
            </p>
          </div>
          <div className={classes.card} data-aos="fade-left">
            <h4>Unwavering Commitment to Customer Satisfaction</h4>
            <hr />
            <p>
              Our commitment to customer satisfaction is at the core of our
              vision. We aim to ensure that our customers leave with a sense of
              fulfillment knowing they have done business with trustworthy
              partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
