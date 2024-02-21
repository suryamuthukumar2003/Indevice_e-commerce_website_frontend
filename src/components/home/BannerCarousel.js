import React from "react";
import Carousel from "react-bootstrap/Carousel";
function BannerCarousel() {
  return (
    <div>
      <Carousel data-bs-theme="dark" aria-setsize={500}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../image/slide3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../image/slide.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerCarousel;
