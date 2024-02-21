import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{ backgroundColor: "#333", color: "white", padding: "20px" }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <h1 style={{ margin: 0 }}>Indevice</h1>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        style={{ marginTop: "5px" }}
      >
        <Grid
          item
          component={Link}
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          Home
        </Grid>
        <Grid
          item
          component={Link}
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          Contact
        </Grid>
        {/* <Grid item component={Link} to="/services" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          Services
        </Grid> */}
        <Grid
          item
          component={Link}
          to="/about"
          style={{ color: "white", textDecoration: "none" }}
        >
          About
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "5px" }}
      >
        <Grid item>
          <div className="icons">
            <FaTwitter
              color="white"
              size={"20px"}
              style={{ marginRight: "10px" }}
            />
            <FaFacebookF
              color="white"
              size={"20px"}
              style={{ marginRight: "10px" }}
            />
            <FaGoogle
              color="white"
              size={"20px"}
              style={{ marginRight: "10px" }}
            />
            <FaInstagram
              color="white"
              size={"20px"}
              style={{ marginRight: "10px" }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <div className="copyright">
            Copyright &copy;{" "}
            <strong>
              <span> {currentYear} Indevice</span>
            </strong>
            . All Rights Reserved
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "5px" }}
      >
        <Grid item>
          <div className="credite">Designed By Mk Surya</div>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
