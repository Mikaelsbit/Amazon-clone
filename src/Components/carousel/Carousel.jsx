import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './carousel.module.css'
import { img } from "./img/data";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infinteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >

        {img.map((imageIcon) => {
          return <img src={imageIcon} alt="Images" />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
};

export default CarouselEffect;
