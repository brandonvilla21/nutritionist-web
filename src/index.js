import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
