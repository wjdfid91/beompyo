import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Banner0, Banner1, Banner2, Banner3, Banner4, Banner5 } from '../../assets/images';

function SlideBanner() {
  return (
    <div id="slide">
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Banner0} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2}alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner5} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SlideBanner;
