import React, { useEffect } from "react";
import Hero from "../../Components/Home/Hero/Hero";
import What from "../../Components/Home/What/What";
import Partner from "../../Components/Home/Partner/Partner";
import Why from "../../Components/Home/Why/Why";
import Mission from "../../Components/Home/Mission/Mission";
import Service from "../../Components/Home/Services/Service";
import Slider from "../../Components/Home/Slider/Slider";
import Values from "../../Components/About/Values/Values";
import Map from "../../Components/Home/Map/Map";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <Hero />
        <What />
        <Mission />
        <Values />
        <Why />
        <Map />
        <Service />
        <Slider />
        <Partner />
      </div>
    </div>
  );
};

export default Home;
