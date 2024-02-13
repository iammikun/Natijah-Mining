import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import classes from "./Slider.module.css";
import slideOne from "../../../Images/slideOne.jpg";
// import slideTwo from "../../../Images/slideTwo.jpg";
import slideThree from "../../../Images/slideThree.jpg";
import slideFour from "../../../Images/slideFour.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={classes.slider_Container}>
      <div className={classes.slider_Card}>
        <img src={slideOne} alt="" loading="lazy" />
        <h4>Lead Ore</h4>
        <p>
          Lead ore, a dense and malleable mineral, serves as a crucial source of
          lead, used in batteries, construction, and various industries,
          contributing to diverse applications in modern society
        </p>
      </div>
      <div>
        <img src={slideThree} alt="" loading="lazy" />
        <h4>Iron Ore</h4>
        <p>
          Iron ore, a vital raw material for steel production, is a naturally
          occurring mineral with high iron content, mined globally to fuel the
          construction and manufacturing industries.
        </p>
      </div>
      <div>
        <img src={slideFour} alt="" loading="lazy" />
        <h4>Columbite</h4>
        <p>
          Columbite, a mineral ore, contains tantalum and niobium, vital
          elements for electronic devices. Mined globally, it plays a key role
          in technological advancements and manufacturing processes.
        </p>
      </div>
    </Slider>
  );
}
