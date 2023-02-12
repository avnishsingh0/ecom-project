import React from 'react'
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageSlider = ({ slides }) => {
    return (
      <Carousel infiniteLoop>
        {slides.map((slide,i) => {
          return <Image className='carosal-img' src={slide.image}  key={i}  />;
        })}
      </Carousel>
    );
  };

export default ImageSlider