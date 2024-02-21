import React from "react";
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
import { LuIndianRupee } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";

function ProductCards(props) {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(`/${props.model}`);
  };

  const formattedPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price); // 'en-IN' for Indian Number System
  };
  return (
    <>
      <Grid item xs={6} sm={6} md={4} lg={3} key={props.index}>
        <Card style={{ marginBottom: "20px" }}>
          <CardMedia
            component="img"
            alt={props.model}
            image={props.imageurl[0]}
            style={{ maxWidth: "200px", margin: "auto" }}
          />
          <CardContent>
            <Tooltip
              title={props.model}
              arrow
              enterDelay={500}
              leaveDelay={200}
            >
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
      </Grid>
    </>
  );
}

export default ProductCards;
