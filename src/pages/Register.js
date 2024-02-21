import React, { useEffect } from "react";
import "../App.css";
import { MdPersonOutline } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Header from "../components/home/Header";
import { Link } from "react-router-dom";
import Footer from "../components/home/Footer";
import { Button } from "@mui/material";

function Register() {
  useEffect(() => {
    document.title = "Indevice-Sign Up";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="login-page" style={{ marginTop: "7rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6  offset-lg-3">
              <div className="bg-white shadow rounded d-flex align-items-center justify-content-center login-container">
                <div className="row ">
                  <div className="col-md-12 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <h3 className="mb-3">Sign Up</h3>
                      <form className="row g-4">
                        <div className="col-12">
                          <label>
                            First Name<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <MdPersonOutline />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter First Name"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Last Name<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <MdPersonOutline />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Last Name"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Email<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <MdOutlineAlternateEmail />
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Password<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <IoLockClosedOutline />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <Button
                            variant="contained"
                            color="warning"
                            disableRipple
                          >
                            Sign Up
                          </Button>
                        </div>
                      </form>
                      <p class="text-center mt-3 text-secondary">
                        If you have account, Please{" "}
                        <Link
                          to="/login"
                          style={{ color: "rgb(250, 145, 25)" }}
                        >
                          Login Now
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
