import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel/CarouselStyle.css'
import airdotsImage from '../../Assets/fones/foneAirDots.jpg';
import hrebosImage from '../../Assets/fones/foneHrebosIos.jpg';
import lehmoxImage from '../../Assets/fones/foneLehmox.jpg';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
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
