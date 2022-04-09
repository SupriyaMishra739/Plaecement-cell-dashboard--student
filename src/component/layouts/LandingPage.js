import { Typography } from "@material-ui/core";
import React from "react";
import StartingNav from "./StartingNav";
import Navbar from "./Navbar";
import { PageContainer, InnerPageContainer } from "./Pagecontainer";
import Tierbox from "./Rectangularbox/Box1";
import Topsection from "./Topsection";
import { Box, AppBar, Link, Button } from "@material-ui/core";
import { Toolbar } from "@mui/material";
import Footer from "./Rectangularbox/Box2";

function LandingPage() {
  return (
    <>
      <PageContainer>
        <Box style={{ width: "100vw" }} sx={{ flexGrow: 1 }}>
          <div
            style={{ background: "rgb(30,71,134)", width: "100vw" }}
            position="static"
          >
            <Toolbar>
              <img src="../../images/acharya_logo.png" alt="logo" />

              <Typography variant="h6" component="div" style={{color:'white'}} sx={{ flexGrow: 1 }}>
                PLACEMENT CELL
              </Typography>
              <Link
                href="./component/layouts/SignupForm1"
                style={{ color: "#FFF", marginLeft: "75%" }}
              >
                <Button color="inherit">Login</Button>
              </Link>
            </Toolbar>
          </div>
        </Box>
        <Topsection />
        <br></br>
        <Tierbox />
        <br></br>
        <Typography className="about">
          Ranking among the Top colleges in Bangalore, India Acharya Institutes
          was established in 1990. A cerebral destination for national and
          international students, we offer prestigious learning experience and a
          lavishing 120 acres of campus that attracts students from around the
          world. There is nothing like the lush greenery and mesmerizing views
          to soothe your soul! Acharya Institutes is exactly what you have
          wished for. Come, discover Acharya Institutes - Where the world comes
          to Learn!
        </Typography>
        <br></br>
        <Footer />
      </PageContainer>
    </>
  );
}

export default LandingPage;