import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselStyle from '../Carousel/CarouselStyle.css'

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false}>
      <div>
        <img src="https://www.instagram.com/lrcases.store/p/CdGuCrpus7p/" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
