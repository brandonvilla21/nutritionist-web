import React from 'react';
import { Carousel } from 'react-responsive-carousel';

function MainSection() {
  return (
    <Carousel infiniteLoop autoPlay swipeable emulateTouch showThumbs={false}>
      <div>
        <img
          src='https://healthyvita.mx/wp-content/uploads/2020/01/Homepics1.png'
          alt='sin-dietas-banner'
        />
      </div>
      <div>
        <img
          src='https://healthyvita.mx/wp-content/uploads/2020/01/Homepics2.png'
          alt='sin-dietas-banner'
        />
      </div>
    </Carousel>
  );
}

export default MainSection;
