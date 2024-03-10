import React from "react";
import classes from "./Content.module.css";
// import dir from "../../../Images/dir.jpg";

// import ceo from "../../../Images/ceo.jpg";

const Content = () => {
  return (
    <div className={classes.content_Container}>
      <div className={classes.content_Content}>
        <div className={classes.content_Img}>
          {/* <img src={dir} alt="" /> */}
          {/* <h4>Stefan Kern</h4> */}
          <h3>MD/CEO</h3>
          <p>
            Saidu Mohammed usman is a consummate business man with almost two
            decades in the international solid minerals mining and trading
            industry.
          </p>
          <p>
            His experience in the mining and trading of both industrial minerals
            and minor metals started as humble beginnings in ex-warehouse
            delivery through Lagos Nigeria, and later Onne Port, Port Harcourt.
          </p>
          <p>
            From this humble beginning, he has gone on successful do
            international trade from Casablanca, Morocco, to both local and
            international buyers in China and other countries.
          </p>
          <p>
            This underscores his international experience and deep understanding
            of the business, earning him the trust of his partners at an
            intercontinental level.
          </p>
        </div>
        {/* <div className={classes.content_Img}>
          <img src={ceo} alt="" />
          <h4>Foluso Phillips</h4>
          <p>Managing Director</p>
        </div> */}
        {/* <div className={classes.content_Img}>
          <img src={ceo} alt="" />
          <h4>Modupe Thomas-Owoseni</h4>
          <p>Partner, Business Operations</p>
        </div> */}
      </div>
      <div className={classes.content_Cont}>
        {/* <div className={classes.content_Img}>
          <img src={ceo} alt="" />
          <h4>Foluso Phillips</h4>
          <p>Chairman</p>
        </div> */}
        {/* <div className={classes.content_Img}>
          <img src={ceo} alt="" />
          <h4>Foluso Phillips</h4>
          <p>Managing Director</p>
        </div> */}
        {/* <div className={classes.content_Img}>
          <img src={ceo} alt="" />
          <h4>Modupe Thomas-Owoseni</h4>
          <p>Partner, Business Operations</p>
        </div> */}
      </div>
    </div>
  );
};

export default Content;
