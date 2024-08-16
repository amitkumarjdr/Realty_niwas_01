import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageforSlide from "./ImageforSlide";


function GalleryImageSlider({text}) {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        pauseOnHover:true
    };
    return (
        <div className="slider-container relative ">
            <div className="capitalize absolute top-[50px] text-[#393729] pb-5 px-4 text-[22px] sm:text-[30px]  font-[700] ">
                {text}
            </div>
            <Slider {...settings}>
                <div className="relative pt-28">
                    <ImageforSlide />
                </div>
                <div className="relative pt-28">
                    <ImageforSlide />
                </div>
                <div className="relative pt-28">
                    <ImageforSlide />
                </div>
                <div className="relative pt-28">
                    <ImageforSlide />
                </div>
                
            </Slider>
        </div>
    );
}

export default GalleryImageSlider
