import React, { useEffect } from "react";
import classes from "./Vision.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className={classes.vision_Container}>
      <div className={classes.vision_Wrapper}>
        <div className={classes.vision_Mission}>
          <h2 data-aos="fade-right">Vision</h2>
          <div className={classes.vision_Text} data-aos="fade-left">
            <p>
              To become Africa’s premier solid minerals mining and trading
              company. At Natijah Minerals Nigeria Limited, it is our vision to
              reckon among the top players in the global mineral mining and
              trading sector by ensuring maximum excellence in research, trade
              processes and customer service delivery.
            </p>
            <p>
              Our commitment to excellence and accessibility, will be a critical
              transformative factor that impacts upon the industry one client at
              a time. We envision Natijah Minerals Nigeria Limited as a game
              changer in the solid mineral exploration industry, setting global
              standards for quality and innovation.
            </p>
            <p>
              We believe in ensuring that what we bring only the highest quality
              solid minerals to the market guaranteeing our clients of the best
              they can get anywhere in the world. This is why we perform the due
              diligence to see that no stone is left unturned in our search for
              only the best.
            </p>
            <p>
              Our commitment to customer satisfaction is at the core of our
              vision. We aim to ensure that our customers leave with a sense of
              fulfillment knowing they have done business with trustworthy
              partners.
            </p>
            <p>
              It is our desire to be recognized as a business committed to the
              highest levels of excellence obtainable anywhere around the world.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Vision;
