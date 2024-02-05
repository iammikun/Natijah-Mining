import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import What from "../../Components/Home/What/What";
import Partner from "../../Components/Home/Partner/Partner";
import Why from "../../Components/Home/Why/Why";
import Mission from "../../Components/Home/Mission/Mission";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <What />
        <Mission />
        <Why />
        <Partner />
      </div>
    </div>
  );
};

export default Home;
