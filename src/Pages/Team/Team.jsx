import React, { useEffect } from "react";
import Hero from "../../Components/Team/Hero/Hero";
import Content from "../../Components/Team/Content/Content";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <Hero />
        <Content />
      </div>
    </div>
  );
};

export default Team;
