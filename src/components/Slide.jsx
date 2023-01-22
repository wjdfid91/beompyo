import React from "react";
import Carousel from "react-bootstrap/Carousel";

function SlideBanner() {
  return (
    <div id="slide">
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner0.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner1.gif" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/banner2.gif"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner3.gif" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner4.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner5.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SlideBanner;
