import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import classes from "./Slider.module.css";
import slideOne from "../../../Images/slideOne.jpg";
import slideTwo from "../../../Images/slideTwo.jpg";
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
    autoplaySpeed: 2000,

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
        <img src={slideOne} alt="" />
        <p>Tantalite</p>
      </div>
      <div>
        <img src={slideTwo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
          quaerat, in iure dolorum rerum quam dolorem nulla eum ipsa facere
          nostrum delectus earum quod sequi animi sunt perferendis rem.
        </p>
      </div>
      <div>
        <img src={slideThree} alt="" />
        <p>Tin Ore</p>
      </div>
      <div>
        <img src={slideFour} alt="" />
        <p>Columbite</p>
      </div>
    </Slider>
  );
}
