import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Hotel } from "@mui/icons-material";

export default function MenuAppBar() {
  const token = localStorage.getItem("user");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Hotel /> <Box sx={{ ml: 1 }}>Hotel Managment</Box>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>

          {token && (
            <>
              <a href="#mainContent" className="skip-link">
                Skip Navigation
              </a>
              <Button color="inherit">
                <Link to="#mainContent" className="skip-link">
                  Skip Navigation
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/dashboard" className="App-navigation">
                  Dashboard
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/employee" className="App-navigation">
                  Employee
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/user" className="App-navigation">
                  User
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/room" className="App-navigation">
                  Room
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/reservation" className="App-navigation">
                  Reservation
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/booking" className="App-navigation">
                  Bookings
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/guest" className="App-navigation">
                  Guest
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/audit" className="App-navigation">
                  Audit
                </Link>
              </Button>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                  <MenuItem onClick={handleClose}>
                    <Link to="/logout" className="App-navigationMenu">
                      Logout
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
