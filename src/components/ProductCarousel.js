import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Tooltip,
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { productList } from "../data";
import { LuIndianRupee } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
function ProductCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 0.5,
    },
  };

  const formattedPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price); // 'en-IN' for Indian Number System
  };

  const Productcardz = (props) => {
    const navigate = useNavigate();
    const productName = useParams();
    const onSubmit = () => {
      navigate(`/${props.model}`);
    };
    return (
      <Card style={{ marginRight: "5px" }}>
        <CardMedia
          component="img"
          alt={props.model}
          image={props.imageurl[0]}
          title={props.model}
          style={{ maxWidth: "200px", margin: "auto" }}
        />
        <CardContent>
          <Tooltip title={props.model} arrow enterDelay={500} leaveDelay={200}>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {props.model}
            </Typography>
          </Tooltip>
          <Typography
            guuterBottom
            variant="p"
            component="div"
            style={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {props.brand}
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            color="green"
            style={{ textAlign: "center" }}
          >
            <LuIndianRupee />
            {formattedPrice(props.price)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            startIcon={<FaEye />}
            style={{ margin: "auto" }}
            color="warning"
            onClick={onSubmit}
          >
            VIEW PRODUCT
          </Button>
        </CardActions>
      </Card>
    );
  };

  const product = productList.map((result) => (
    <Productcardz
      brand={result.brand}
      model={result.model}
      price={result.price}
      imageurl={result.imageurl}
    />
  ));

  return (
    <div className="container" style={{ marginBottom: "20px" }}>
      <h3 className="text-center" style={{ margin: "20px 0px" }}>
        {props.heading}
      </h3>
      <Carousel centerMode={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
