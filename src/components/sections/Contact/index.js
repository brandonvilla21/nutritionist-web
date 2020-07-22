import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

function Contact() {
  return (
    <ParallaxBanner
      className='your-class'
      layers={[
        {
          image:
            'https://healthyvita.mx/wp-content/uploads/2020/01/fondoblanco.png',
          amount: 0.1,
        },
      ]}
      style={{
        height: '500px',
      }}
    >
      <h1>Banner Children</h1>
    </ParallaxBanner>
  );
}

export default Contact;
