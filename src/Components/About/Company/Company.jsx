import React from "react";
import classes from "./Company.module.css";

const Company = () => {
  return (
    <div className={classes.company_Container}>
      <div className={classes.company_Wrapper}>
        <div className={classes.company_Mission}>
          <h2>Company</h2>
          <div className={classes.company_Text}>
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
