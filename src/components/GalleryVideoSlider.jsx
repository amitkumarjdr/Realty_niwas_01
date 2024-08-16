
import img1 from "../images/Group 1285.png"

import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function GalleryVideoSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover : true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-[100%] lg:h-[500px] md:h-[400px] h-[300px] relative md:pt-[100px] px-4 pt-10 lg:pt-28">
          <img className="w-[100%] h-[100%] " src={img1} alt="" />
        </div>
        <div className="w-[100%] lg:h-[500px] md:h-[400px] h-[300px] relative md:pt-[100px] px-4 pt-10 lg:pt-28">
          <img className="w-[100%] h-[100%] " src={img1} alt="" />
        </div>
        <div className="w-[100%] lg:h-[500px] md:h-[400px] h-[300px] relative md:pt-[100px] px-4 pt-10 lg:pt-28">
          <img className="w-[100%] h-[100%] " src={img1} alt="" />
        </div>
        <div className="w-[100%] lg:h-[500px] md:h-[400px] h-[300px] relative md:pt-[100px] px-4 pt-10 lg:pt-28">
          <img className="w-[100%] h-[100%] " src={img1} alt="" />
        </div>
       
      </Slider>
    </div>
  );
}

export default GalleryVideoSlider;



