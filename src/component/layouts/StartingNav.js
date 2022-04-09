import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function StartingNav() {
  return (
    <Box style={{ height: "20px" }} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src="../../images/acharya_logo.png" alt="logo" />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PLACEMENT CELL
          </Typography>
          <Link
            to="./components/layouts/SignupForm1"
            style={{ color: "#FFF" }}
          ></Link>
          <Button color="inherit">Login</Button>
          <Link />
        </Toolbar>
      </AppBar>
    </Box>
  );
}