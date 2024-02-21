import React, { useEffect, useState } from "react";
import Header from "./home/Header";
import ProductCards from "./ProductCards";
import Footer from "./home/Footer";
import { LuFilter } from "react-icons/lu";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { productList } from "../data";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";

function ProductfilterPage() {
  const location = useLocation();
  const initialTechnology = location.state?.technology || "";
  const initialResolution = location.state?.resolution || "";
  const initialBrand = location.state?.brand || "all";
  const [filters, setFilters] = useState({
    brand: initialBrand,
    priceRange: [0, 1000000],
    technology: initialTechnology,
    displaySize: "",
    resolution: initialResolution,
    sortOrder: "asc",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const filteredProducts = productList.filter((product) => {
    return (
      (filters.brand === "all" || product.brand === filters.brand) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1] &&
      (filters.technology
        ? product.technology.toLowerCase() === filters.technology.toLowerCase()
        : true) &&
      (filters.displaySize
        ? product.size === parseInt(filters.displaySize, 10)
        : true) &&
      (filters.resolution
        ? product.resolution.toLowerCase() === filters.resolution.toLowerCase()
        : true)
    );
  });

  useEffect(() => {
    document.title = `Indevice-${filters.brand}`;
    window.scrollTo(0, 0);
  }, [filters.brand]);

  const handleSortChange = (event) => {
    setFilters({ ...filters, sortOrder: event.target.value });
  };

  const handleSliderChange = (event, newValue) => {
    setFilters({ ...filters, priceRange: newValue });
  };

  const handleBrandChange = (event) => {
    setFilters({ ...filters, brand: event.target.value });
  };

  const handleSizeChange = (event) => {
    setFilters({ ...filters, displaySize: event.target.value });
  };

  const handleTechnologyChange = (event) => {
    setFilters({ ...filters, technology: event.target.value });
  };

  const handleResolutionChange = (event) => {
    setFilters({ ...filters, resolution: event.target.value });
  };

  const handleResetFilters = () => {
    setFilters({
      brand: "all",
      priceRange: [0, 1000000],
      technology: "",
      displaySize: "",
      resolution: "",
      sortOrder: "asc",
    });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Container style={{ flex: 1 }}>
        <Row className="mt-5">
          <Col xs={12} sm={12} md={3}>
            {/* Product category card with filters */}
            <Accordion expanded={isFilterOpen} onChange={toggleFilter}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="filter-panel"
                id="filter-header"
              >
                <Typography>
                  <LuFilter /> Filter
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ width: "100%" }}>
                  {/* Brand Filter */}
                  <Form.Group className="mb-3">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                      as="select"
                      value={filters.brand}
                      onChange={handleBrandChange}
                    >
                      <option value="all">All Brands</option>
                      <option value="sony">Sony</option>
                      <option value="samsung">Samsung</option>
                      <option value="realme">Realme</option>
                      <option value="xiaomi">Xiaomi</option>
                      <option value="lg">LG</option>
                      <option value="oneplus">One Plus</option>

                      {/* Add other brand options as needed */}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Size</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter size"
                      value={filters.displaySize}
                      onChange={handleSizeChange}
                    />
                  </Form.Group>
                  {/* Technology Filter */}
                  <Form.Group className="mb-3">
                    <Form.Label>Technology</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter technology"
                      value={filters.technology}
                      onChange={handleTechnologyChange}
                    />
                  </Form.Group>
                  {/* Resolution Filter */}
                  <Form.Group className="mb-3">
                    <Form.Label>Resolution</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter resolution"
                      value={filters.resolution}
                      onChange={handleResolutionChange}
                    />
                  </Form.Group>
                  {/* Price Range Filter */}
                  <Form.Group className="mb-3">
                    <Form.Label>Price Range</Form.Label>
                    <Slider
                      value={filters.priceRange}
                      onChange={handleSliderChange}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) =>
                        "Rs." + value.toLocaleString()
                      }
                      min={0}
                      max={1000000}
                      color="warning"
                    />
                  </Form.Group>
                  {/* Sort Order Filter */}
                  <Form.Group className="mb-3">
                    <Form.Label>Sort Order</Form.Label>
                    <Form.Control
                      as="select"
                      value={filters.sortOrder}
                      onChange={handleSortChange}
                    >
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
                    </Form.Control>
                  </Form.Group>
                  {/* Reset Filters Button */}
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={handleResetFilters}
                    disableRipple
                  >
                    Reset Filters
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <Row
              xs={2}
              md={3}
              lg={4}
              className="g-4"
              style={{ marginTop: "20px" }}
            >
              {filteredProducts.length > 0 ? (
                filteredProducts
                  .sort((a, b) =>
                    filters.sortOrder === "asc"
                      ? a.price - b.price
                      : b.price - a.price
                  )
                  .map((result, index) => (
                    <ProductCards
                      key={index}
                      brand={result.brand}
                      model={result.model}
                      price={result.price}
                      imageurl={result.imageurl}
                    />
                  ))
              ) : (
                // Display an "Product not found" image if no products are found
                <div
                  style={{
                    display: "grid",
                    placeContent: "center",
                    margin: "auto",
                  }}
                >
                  <img
                    src="../image/noproductfound.png" // Replace with the actual path to your "Product not found" image
                    alt="Product not found"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ProductfilterPage;
