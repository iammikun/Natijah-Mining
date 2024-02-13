import React, { useEffect } from "react";
import Hero from "../../Components/Service/Hero/Hero";
import Content from "../../Components/Service/Content/Content";
import Partner from "../../Components/Home/Partner/Partner";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <Hero />
        <Content />
        <Partner />
      </div>
    </div>
  );
};

export default Service;
