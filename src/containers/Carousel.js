import React from 'react';
//import { Carousel } from 'react-bootstrap';
//import secondSlide from '../images/podcastImg.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import styled from 'styled-components';

// const Styles = styled.div`
//   .embed-responsive{    
//     margin: 0 auto;
//     width:900px;
//     height:800px;

//   }
// `;

export default () => (
  <Carousel showThumbs={false}>
    <div>
      <iframe title='raccoons' width="900" height="500" src="https://www.youtube.com/embed/nJ4CUJTFK2E" />
    </div>
    <div>
      <iframe title='cronos' width="900" height="500" src="https://www.youtube.com/embed/oCgtZowbB5M" />
    </div>
  </Carousel>
);
