import React, { useState } from "react";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { styled, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import {
  InfoRounded,
  VerifiedUser,
  AssignmentIndIcon,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import Menu from "./Menu";

import "./Navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(theme.breakpoints.down("sm"));
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Appbar>
        <Toolbar>
          <img src="../../images/acharya_logo.png" alt="logo" />

          <Typography>PLACEMENT CELL</Typography>
          {matches ? (
            <DrawerComponent
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          ) : (
            <Box style={{ marginLeft: "auto" }}>
              WELCOME STUDENT!
              <Link to="/component/layouts/Resume" style={{ color: "#FFF" }}>
                <Button
                  color="inherit"
                  className="button"
                  startIcon={<InfoRounded />}
                >
                  Resume
                </Button>
              </Link>
              <Link
                to="/"
                style={{ color: "#FFF" }}
              >
                <Button
                  color="inherit"
                  className="button"
                  startIcon={<VerifiedUser />}
                >
                  Logout
                </Button>
              </Link>
              {/* <Button color="inherit" className="button" startIcon={<Login />}>
                Sign Up
              </Button> */}
            </Box>
          )}
          {matches ? (
            <IconButton
              style={{ color: "white", marginLeft: "auto" }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            ""
          )}
          <Menu />
        </Toolbar>
      </Appbar>
    </>
  );
};
export default Navbar;