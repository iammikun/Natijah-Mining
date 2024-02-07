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
      </div>
    </div>
  );
};

export default Company;
