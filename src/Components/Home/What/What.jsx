import React from "react";
import classes from "./What.module.css";
import { Link } from "react-router-dom";

const What = () => {
  return (
    <div className={classes.what_Container}>
      <div className={classes.what_Wrapper}>
        <h2>What We Are</h2>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          aperiam tempora, error autem nulla recusandae asperiores reprehenderit
          maiores porro quasi pariatur deleniti necessitatibus ex ipsum sit
          omnis, corporis possimus fugiat. Quas velit dolorum fuga molestiae id
          consequuntur facere, dolores porro sint molestias natus reiciendis?
          Accusantium vitae architecto repudiandae ab totam iure, quod corrupti
          voluptate tempore quis amet. Sit temporibus adipisci quisquam facilis
          blanditiis rerum fugiat, velit quo perspiciatis quasi, veniam
          doloribus illo quae repellat? Aut nisi consequuntur reiciendis veniam
          eaque fuga.
        </p>
        <Link to="/about">
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default What;
