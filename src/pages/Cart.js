import React, { useState } from "react";
import Header from "../components/home/Header";
import { useCart } from "react-use-cart";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { LuIndianRupee } from "react-icons/lu";
import { Button } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const formattedPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price); // 'en-IN' for Indian Number System
  };

  if (isEmpty)
    return (
      <>
        <Header />
        <div
          className="card text-center position-fixed top-50 start-50 translate-middle"
          style={{
            width: "70%",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            padding: "50px",
            maxWidth: "600px",
            width: "80vw",
          }}
        >
          <div className="card-body">
            <img
              src="./image/sony/overview/emty-cart.jpg"
              className="img-fluid"
              alt="Your Image"
              style={{ maxWidth: "200px", width: "100%", margin: "auto" }}
            />
            <p>
              <strong>Your cart is empty! </strong>
            </p>
            <Button
              variant="contained"
              color="warning"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9 col-sm-8" style={{ marginBottom: "20px" }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Items in your cart ({totalUniqueItems} items)
                </h5>
                {items.map((item, index) => (
                  <div
                    className="row mb-3 align-items-center border-bottom pb-3"
                    key={index}
                  >
                    <div className="col-md-2 col-3">
                      <img
                        src={item.imageurl[0]}
                        className="img-fluid"
                        alt="item"
                      />
                    </div>
                    <div className="col-md-10 col-9">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/${item.model}`}
                      >
                        <p
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.model}
                        </p>
                      </Link>
                      <h4>
                        <LuIndianRupee />
                        {formattedPrice(item.price)}
                      </h4>
                    </div>
                    <div className="col-md-2 col-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="1"
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          const maxLimit = 1;
                          if (value > maxLimit) {
                            updateItemQuantity(item.id, 1);
                            Swal.fire({
                              title: "Limit Exceeded",
                              icon: "warning",
                            });
                          }
                          if (value === 0) {
                            removeItem(item.id);
                          }
                        }}
                        min={0}
                      />
                    </div>
                    <div className="col-md-3 col-3">
                      <Button
                        color="warning"
                        startIcon={<FaTrash />}
                        size="large"
                        onClick={() => removeItem(item.id)}
                        disableRipple
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="row">
                  <div className="col-md-12">
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => navigate("/")}
                    >
                      Continue Shopping
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        marginLeft: {
                          xs: "5px",
                          sm: "5px",
                          md: "10px",
                          lg: "10px",
                          xl: "10px",
                        },
                        background: "black",
                        color: "white",
                        "&:hover": { background: "white", color: "black" },
                      }}
                      onClick={() => emptyCart()}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-4 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <span>Total</span>
                <h3 className="font-bold">
                  <LuIndianRupee />
                  {formattedPrice(cartTotal)}
                </h3>
                <hr />
                <Button
                  color="warning"
                  variant="contained"
                  style={{ width: "100%" }}
                  disableRipple
                >
                  Check Out
                </Button>
              </div>
            </div>

            <div className="card mt-4" style={{ marginBottom: "30px" }}>
              <div className="card-body">
                <h5 className="card-title">Support</h5>
                <h4>
                  <FaPhoneAlt /> +43 100 783 001
                </h4>
                <p className="small">
                  Please contact us if you have any questions. We are available
                  24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
