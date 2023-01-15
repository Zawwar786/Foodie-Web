import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "The food at this restaurant is absolutely delicious! The flavors and 
          ingredients are perfectly balanced and cooked to perfection. The service is 
          also top-notch, with friendly and attentive staff. I highly recommend this 
          restaurant to anyone looking for an enjoyable dining experience!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Zawwar Asif</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "I had an amazing experience at this restaurant. The food was delicious 
          and the service was excellent. I highly recommend the burger it was cooked to 
          perfection. I will definitely be back for more!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Faraz Gul</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "This restaurant serves up delicious, authentic dishes that will transport 
          your taste buds to a different country. The friendly staff and cozy atmosphere 
          make for a truly enjoyable dining experience!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Naufil Mansoor</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
