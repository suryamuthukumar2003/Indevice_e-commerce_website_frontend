import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Badge,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  alpha,
  Autocomplete,
  TextField,
  CircularProgress,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CgProfile } from "react-icons/cg";
import { useCart } from "react-use-cart";
import { Search } from "@mui/icons-material";
import { productList } from "../../data";
function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { totalUniqueItems } = useCart();
  const [searchValue, setSearchValue] = useState("");
  const [isMobileView, setIsMobileView] = useState(() => {
    const storedValue = localStorage.getItem("isMobileView");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Logged out");
    setIsLoggedIn(false);
    handleMenuClose();
  };

  const handleSearchSubmit = () => {
    navigate(`/${searchValue}`);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value.trim());
  };

  const onSubmit = () => {
    handleSearchSubmit();
  };

  const handleResize = () => {
    const newIsMobileView = window.innerWidth < 768;
    setIsMobileView(newIsMobileView);
    // Store the new value in local storage
    localStorage.setItem("isMobileView", JSON.stringify(newIsMobileView));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const autocompleteOptions = productList.map((product) => ({
    label: product.model,
    value: product.model,
  }));

  return (
    <div>
      <AppBar position="static" sx={{ background: "white" }}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/">
                <img src="../image/Indevice.ico" alt="" width="130px" />
              </Link>
            </div>
            {/* Add the search bar within the navbar for desktop view */}
            {!isMobileView && (
              <div
                style={{
                  width: "40%",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="submit"
                  onClick={() => onSubmit()}
                  sx={{ marginRight: "8px" }}
                >
                  <Search />
                </IconButton>
                {/* Autocomplete Search Bar */}
                <Autocomplete
                  options={autocompleteOptions}
                  getOptionLabel={(option) => option.label}
                  // getOptionSelected={(option, value) => option.label === value.label}
                  sx={{ width: "100%" }}
                  onChange={(event, value) => {
                    if (value) {
                      setSearchValue(value.label);
                    }
                  }}
                  renderInput={(params) => (
                    <TextField
                      placeholder="Search the product..."
                      inputProps={{ "aria-label": "search" }}
                      {...params}
                      value={searchValue.trim()}
                      onChange={handleSearchChange}
                      sx={{
                        "& .MuiInputBase-root": {
                          backgroundColor: alpha("#000", 0.1),
                          borderRadius: 7,
                          border: "none",
                          width: "100%",
                          padding: "3px 10px",
                          "&:hover": {
                            backgroundColor: alpha("#000", 0.1),
                            borderColor: "none",
                          },
                          "&.Mui-focused": {
                            backgroundColor: alpha("#000", 0.1),
                            borderColor: "none",
                          },
                          "& input": {
                            paddingLeft: "30px",
                          },
                        },
                      }}
                    />
                  )}
                />
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/cart">
                <Badge color="warning" badgeContent={totalUniqueItems}>
                  <ShoppingCartIcon sx={{ color: "black" }} />
                </Badge>
              </Link>
              <div>
                {isLoggedIn ? (
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="profile-menu"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                    color="inherit"
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    disableRipple
                  >
                    <CgProfile size={"25px"} color="black" />
                  </IconButton>
                ) : (
                  <Link to="/login">
                    <IconButton
                      size="large"
                      color="inherit"
                      sx={{ "&:hover": { backgroundColor: "transparent" } }}
                      disableRipple
                    >
                      <CgProfile size={"25px"} color="black" />
                    </IconButton>
                  </Link>
                )}
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={isLoggedIn ? handleLogout : handleLogin}>
                    {isLoggedIn ? "Logout" : "Login"}
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </Toolbar>
        {isMobileView && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              background: "#ffffff",
            }}
          >
            <IconButton
              size="large"
              aria-label="submit"
              onClick={() => onSubmit()}
              sx={{ marginRight: "8px" }}
            >
              <Search />
            </IconButton>

            <Autocomplete
              options={autocompleteOptions}
              getOptionLabel={(option) => option.label}
              sx={{ width: "100%" }}
              onChange={(event, value) => {
                if (value) {
                  setSearchValue(value.label);
                }
              }}
              renderInput={(params) => (
                <TextField
                  placeholder="Search the product..."
                  inputProps={{ "aria-label": "search" }}
                  {...params}
                  onChange={handleSearchChange}
                  sx={{
                    "& .MuiInputBase-root": {
                      backgroundColor: alpha("#000", 0.1),
                      borderRadius: 7,
                      border: "none",
                      width: "100%",
                      padding: "3px 10px",
                      "&:hover": {
                        backgroundColor: alpha("#000", 0.1),
                        borderColor: "none",
                      },
                      "&.Mui-focused": {
                        backgroundColor: alpha("#000", 0.1),
                        borderColor: "none",
                      },
                      "& input": {
                        paddingLeft: "30px",
                      },
                    },
                  }}
                />
              )}
            />
          </div>
        )}
      </AppBar>
    </div>
  );
}

export default Header;
