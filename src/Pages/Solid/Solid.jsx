import React, { useEffect } from "react";
import Hero from "../../Components/Solid/Hero/Hero";
import SolidBlog from "../../Components/Solid/SolidBlog/SolidBlog";

const Solid = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <Hero />
        <SolidBlog />
      </div>
    </div>
  );
};

export default Solid;
