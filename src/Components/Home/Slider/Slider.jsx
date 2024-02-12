import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import classes from "./Slider.module.css";
import cardOne from "../../../Images/cardOne.jpg";
import cardTwo from "../../../Images/cardTwo.jpg";
import cardThree from "../../../Images/cardThree.jpg";
import cardFour from "../../../Images/cardFour.jpg";

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
        <img src={cardOne} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
          quaerat, in iure dolorum rerum quam dolorem nulla eum ipsa facere
          nostrum delectus earum quod sequi animi sunt perferendis rem.
        </p>
      </div>
      <div>
        <img src={cardTwo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
          quaerat, in iure dolorum rerum quam dolorem nulla eum ipsa facere
          nostrum delectus earum quod sequi animi sunt perferendis rem.
        </p>
      </div>
      <div>
        <img src={cardThree} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
          quaerat, in iure dolorum rerum quam dolorem nulla eum ipsa facere
          nostrum delectus earum quod sequi animi sunt perferendis rem.
        </p>
      </div>
      <div>
        <img src={cardFour} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit
          quaerat, in iure dolorum rerum quam dolorem nulla eum ipsa facere
          nostrum delectus earum quod sequi animi sunt perferendis rem.
        </p>
      </div>
    </Slider>
  );
}
