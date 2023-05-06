
import { Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import img1 from "./SliderImages/MyMedia1.png"
import img2 from "./SliderImages/MyMedia2.png"
import img3 from "./SliderImages/MyMedia3.png"

const MyMedia = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image width="100%" height="100%" src={img1} alt="img1" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img2} alt="img2" />
      </div>
      <div>
        <Image width="100%" height="100%" src={img3} alt="img3" />
      </div>
      
    </Slider>
  );
};

export { MyMedia };