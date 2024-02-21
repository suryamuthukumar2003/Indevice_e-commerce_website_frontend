import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function BrandCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const brandLogo = [
    {
      id: 1,
      imageurl: "../image/brandlogo/sony logo.jpg",
      brand: "sony",
      name: "Sony logo",
    },
    {
      id: 2,
      imageurl: "../image/brandlogo/samsung logo.jpg",
      brand: "samsung",
      name: "samsung logo",
    },
    {
      id: 3,
      imageurl: "../image/brandlogo/mi logo.jpg",
      brand: "xiaomi",
      name: "mi logo",
    },
    {
      id: 4,
      imageurl: "../image/brandlogo/lg logo.jpg",
      brand: "lg",
      name: "Lg logo",
    },
    {
      id: 5,
      imageurl: "../image/brandlogo/realme logo.jpg",
      brand: "realme",
      name: "Realme logo",
    },
    {
      id: 6,
      imageurl: "../image/brandlogo/oneplus logo.jpg",
      brand: "oneplus",
      name: "One Plus logo",
    },
  ];

  const BrandLogoCard = (props) => {
    return (
      <Card style={{ width: "100%", border: "none" }}>
        <Link to="/filter" state={{ brand: `${props.brand}` }}>
          <Card.Img
            variant="top"
            src={props.url}
            alt={props.name}
            style={{ height: "10rem" }}
          />
        </Link>
      </Card>
    );
  };

  const brand = brandLogo.map((item, index) => (
    <BrandLogoCard
      key={item.id}
      name={item.name}
      url={item.imageurl}
      brand={item.brand}
    />
  ));
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <h3 className="text-center" style={{ margin: "50px 0px" }}>
        {props.heading}
      </h3>
      <Carousel centerMode={true} responsive={responsive}>
        {brand}
      </Carousel>
    </div>
  );
}

export default BrandCarousel;
