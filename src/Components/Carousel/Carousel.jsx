import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselStyle from '../Carousel/CarouselStyle.css'
import airdotsImage from '../../Assets/foneAirDots.jpg';
import hrebosImage from '../../Assets/foneHrebosIos.jpg';
import lehmoxImage from '../../Assets/foneLehmox.jpg';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false}>
      <div>
        <img src={airdotsImage} alt="Slide 1" />
      </div>
      <div>
        <img src={hrebosImage} alt="Slide 2" />
      </div>
      <div>
        <img src={lehmoxImage} alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
