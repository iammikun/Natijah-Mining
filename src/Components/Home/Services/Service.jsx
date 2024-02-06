import React from "react";
import classes from "./Service.module.css";
import { FaLandMineOn, FaResolving, FaNetworkWired } from "react-icons/fa6";

const Service = () => {
  return (
    <div className={classes.service_Container}>
      <div className={classes.service_Wrapper}>
        <h2>Our Services</h2>
        <hr />
        <div className={classes.service_Cards}>
          <div className={classes.card}>
            <FaLandMineOn className={classes.icon} />
            <h4>Mining Center</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              accusantium consectetur? Cum, ut temporibus in, numquam doloremque
              autem dignissimos totam id tempore qui a amet corporis doloribus
              fuga unde asperiores ea fugiat esse labore itaque repellat?
              Blanditiis perspiciatis
            </p>
          </div>
          <div className={classes.card}>
            <FaResolving className={classes.icon} />
            <h4>Data Center Operations</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              accusantium consectetur? Cum, ut temporibus in, numquam doloremque
              autem dignissimos totam id tempore qui a amet corporis doloribus
              fuga unde asperiores ea fugiat esse labore itaque repellat?
              Blanditiis perspiciatis
            </p>
          </div>
          <div className={classes.card}>
            <FaNetworkWired className={classes.icon} />
            <h4>Mining Center Solutions</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              accusantium consectetur? Cum, ut temporibus in, numquam doloremque
              autem dignissimos totam id tempore qui a amet corporis doloribus
              fuga unde asperiores ea fugiat esse labore itaque repellat?
              Blanditiis perspiciatis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
