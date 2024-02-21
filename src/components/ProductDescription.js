import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./home/Header";
import Footer from "./home/Footer";
import { useCart } from "react-use-cart";
import { productList } from "../data";
import { LuIndianRupee } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@mui/material";
import { Carousel } from "react-bootstrap";
import Swal from "sweetalert2";
const ProductDesc = () => {
  const { productName } = useParams();
  const thisProduct = productList.find((prod) => prod.model === productName);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formattedPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };
  const { addItem, inCart } = useCart();
  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 col-md-9 col-sm-9">
              <Carousel
                className="w-75"
                style={{ margin: "auto" }}
                interval={"5000"}
                indicators={false}
              >
                {thisProduct.imageurl.map((value, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={value}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h4 className="box-title mt-5 ">{thisProduct.model}</h4>
              <p className="text-muted text-captailize fs-5">
                By {thisProduct.brand}
              </p>
              <h2 className="mt-4">
                <LuIndianRupee />
                {formattedPrice(thisProduct.price)}
              </h2>
              <div className="mt-4">
                {inCart(thisProduct.id) ? (
                  <Button
                    variant="contained"
                    sx={{ marginRight: "10px", marginTop: "10px" }}
                    disabled
                  >
                    {" "}
                    In Cart{" "}
                  </Button>
                ) : (
                  <Button
                    startIcon={<FaShoppingCart />}
                    variant="contained"
                    color="warning"
                    disableRipple
                    sx={{ marginRight: "10px", marginTop: "10px" }}
                    onClick={() => {
                      addItem(thisProduct);
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product is added",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }}
                  >
                    Add to cart
                  </Button>
                )}

                <Button
                  variant="contained"
                  sx={{
                    background: "black",
                    color: "white",
                    "&:hover": { background: "#525e4e" },
                    marginTop: "10px",
                  }}
                  disableRipple
                >
                  Buy Now
                </Button>
              </div>
              <h4 className="box-title mt-5">Key Specifications</h4>
              <ul className="list-unstyled">
                {thisProduct.keyspec.map((value, index) => (
                  <li key={index}>
                    <FaCheck color="green" /> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px", width: "100%" }}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3
            className="box-title text-center mt-5"
            style={{ marginBottom: "50px" }}
          >
            Overview
          </h3>
          {thisProduct.overviewimg.map((values, index) => (
            <div key={index}>
              <img
                src={values}
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h3 className="box-title mt-5">Detailed Specifications</h3>
              <div className="table-responsive mt-4">
                <table
                  className="table table-hover table-striped table-bordered "
                  style={{ borderRadius: "5px", overflow: "hidden" }}
                >
                  <tbody>
                    {thisProduct.detail.map((item, index) => {
                      const { heading, spec, specvalue } = item;
                      const nextHeading =
                        thisProduct.detail[index + 1]?.heading;
                      const rowspan = spec.length;
                      return (
                        <React.Fragment key={index}>
                          {spec.map((specItem, specIndex) => (
                            <tr key={`${index}-${specIndex}`}>
                              {specIndex === 0 && (
                                <td
                                  scope="row"
                                  rowSpan={rowspan}
                                  className="align-middle text-center text-uppercase"
                                  style={{ background: "lightgrey" }}
                                >
                                  {index === 0 || heading !== nextHeading
                                    ? heading
                                    : ""}
                                </td>
                              )}
                              <td>{specItem}</td>
                              <td>{specvalue[specIndex]}</td>
                            </tr>
                          ))}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              style={{ marginBottom: "100px" }}
            >
              <h3
                className="box-title text-center mt-5"
                style={{ marginBottom: "50px" }}
              >
                Video
              </h3>
              <div
                className="embed-responsive embed-responsive-16by9"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              >
                <iframe
                  className="embed-responsive-item"
                  src={thisProduct.video}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function ProductDescription() {
  return (
    <>
      <Header />
      <ProductDesc />
      <Footer />
    </>
  );
}

export default ProductDescription;
