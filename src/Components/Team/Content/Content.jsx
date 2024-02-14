import React from "react";
import classes from "./Content.module.css";
// import ceo from "../../../Images/ceo.jpg";

const Content = () => {
  return (
    <div className={classes.content_Container}>
      <div className={classes.content_Content}>
        <div className={classes.content_Img}>
          {/* <img src={ceo} alt="" /> */}
          {/* <h4>Foluso Phillips</h4> */}
          <p>Chairman</p>
        </div>
        <div className={classes.content_Img}>
          {/* <img src={ceo} alt="" /> */}
          {/* <h4>Foluso Phillips</h4> */}
          <p>Managing Director</p>
        </div>
        <div className={classes.content_Img}>
          {/* <img src={ceo} alt="" /> */}
          {/* <h4>Modupe Thomas-Owoseni</h4> */}
          <p>Partner, Business Operations</p>
        </div>
      </div>
      <div className={classes.content_Cont}>
        <div className={classes.content_Img}>
          {/* <img src={ceo} alt="" /> */}
          {/* <h4>Foluso Phillips</h4> */}
          <p>Chairman</p>
        </div>
        <div className={classes.content_Img}>
          {/* <img src={ceo} alt="" /> */}
          {/* <h4>Foluso Phillips</h4> */}
          <p>Managing Director</p>
        </div>
        <div className={classes.content_Img}>
          {/* <img src={ceo} alt="" /> */}
          {/* <h4>Modupe Thomas-Owoseni</h4> */}
          <p>Partner, Business Operations</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
