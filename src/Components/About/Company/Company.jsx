import React, { useEffect } from "react";
import classes from "./Company.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Company = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.company_Container} data-aos="fade-up">
      <div className={classes.company_Wrapper}>
        <div className={classes.company_Mission}>
          <h2 data-aos="fade-down">About Us</h2>
          <div className={classes.company_Text} data-aos="fade-up">
            <p>
              NATIJAH MINERALS NIG. LTD is an indigenous licensed company
              registered in 2008 under the Corporate Affairs Commission of
              Nigeria for the purpose of solid minerals mining and trading in
              Nigeria and around the world, with its subsidiary NATIJAH MINERAL
              MOROCCO.
            </p>
            <p>
              As a business venture committed to excellent service delivery
              within the solid mineral sector, we embrace innovation, global
              collaboration, and a focus on harnessing untapped potential. Our
              unique value lies in our combination of vast experience,
              expertise, knowledge of the terrain, as well as easy access to
              resources.
            </p>
            <p>
              At Natiijah, we are active in the trade of industrial minerals,
              minor metals, as well as exploration with operational sites for
              Zinc in Gombe, and Lithium in Abuja, both in Nigeria.
            </p>
            <p>
              Our business partnerships cut across both the local and
              international spaces. Some of our international partners include
              Tianneng Nigeria Ltd, Xiamen ITG Nonferrous Metals and Minerals
              Co, Aihua International Group, and Highland Resources Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
