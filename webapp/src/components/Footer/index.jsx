import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, IconButton } from "@mui/material";

const Footer = (props) => {
  return (
    <footer>
      <p>Copyright {props.year}</p>
      {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
      <InstagramIcon />
      <FacebookIcon />
      <TwitterIcon />
      <LinkedInIcon />
      {/* </IconButton> */}
    </footer>
  );
};

export default Footer;
