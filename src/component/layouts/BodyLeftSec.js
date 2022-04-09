import React, { useState } from "react";
import Card from "@mui/material/Card";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { Instagram } from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const ApplyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  borderRadius: 10,
  textTransform: "Applied",
  width: 226,
  height: 67,
  color: "white",
  "&:hover": {
    backgroundColor: green[700],
  },
  "&:focus": {
    // backgroundColor: "#808080",
  },
}));


const BodyLeftSec = () => {
  // var applytext="Apply Now";
  const [applytext, setApplytext] = useState("Apply Now");
  
  const apply = () => {
    axios.post(`https://acharya-placement-dev.herokuapp.com/api/student/job/apply/${Id}`,
    {},
  {
    headers : {
      'Content-Type': 'application/json',
      'Authorization':
"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU29uYW0gSyIsInJvbGVzIjpbInN0dWRlbnQiXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0ODEwNDU4MywidXNlcl9pZCI6InRZa05TRzFYTjhWSjZwZU5mdzM2c1U4U2o2SDIiLCJzdWIiOiJ0WWtOU0cxWE44Vko2cGVOZnczNnNVOFNqNkgyIiwiaWF0IjoxNjQ4MTA0NTgzLCJleHAiOjE2NDgxMDgxODMsImVtYWlsIjoic29uYW1rcmkxNjA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzb25hbWtyaTE2MDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cUNh07UHWkA2ReGQ1j7EB1LpovmrNOEdJXWWF5S2_MxIuHhbtZ7jfEyI1Kk8JUy1P92fZe8rw3GhEywrMdQMq-iM8t404dWoIo5BWAC-3Tu0lPEYrGkl22YocvgNqk8n5VBviXParUGqouR9Z5yBNunjeRgcV5NE5589uiEclFO6JRNZld1E4M3JQbo7tEr5l2-sCnL0F-3Mqm-1j18Vcj1p457eo9ydaBBGrD-NO6EEnKKt7gc7xce0cmg3xovbXG4kytzCG5ly__Z51j7ejnE5YiwYiSBrJ1hmfO9N3ptOwRRZb91uSdvP3mG7NHz9NK9f7tSlpyaMDkArUk0f6w"
  ,},

  }
 )
 .then(function(response){
   console.log(response );
 })
 .catch(function(error){
   console.log(error);
 }

 );
    setApplytext("Applied");
    document.getElementById("Applybutton").disabled = true;
    // var applytext="Applied";
  }
  const pathname = window.location.pathname;
  const Id = pathname.split('/')[4]; console.log("job id", Id)
  return (
    <div
      className="body_left"
      style={{ width: "291px", padding: "23px", boxSizing: "border-box" }}
    >
      <Card
        sx={{
          maxWidth: 275,
          height: 137,
          borderRadius: 2,
          boxShadow: 0,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
          marginBottom: "1rem",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Instagram style={{ width: '45', height: '45', color: 'pink' }} />
          {/* <CardMedia
            component="img"
            style={{ width: "35px", marginLeft: "10px" }}
              image ="./images/instagram_s.png"
        
            alt="instagram"
          /> */}
          <Button
            variant="outlined"
            style={{ marginRight: "15px", textTransform: "none" }}
            href = "https://instagram.com/acharyainstitutes?utm_medium=copy_link"
          >
            Connect
          </Button>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <LinkedInIcon style={{ width: '45', height: '45', color: 'blue' }} />
          {/* <CardMedia
            component="img"
            style={{ width: "35px", marginLeft: "10px" }}
            image="../../images/linkedin.png"
            alt="linkedin"
          /> */}
          <Button
            variant="outlined"
            style={{ marginRight: "15px", textTransform: "none" }}
            href = "https://www.linkedin.com/school/acharya-institutes"
          >
            Connect
          </Button>
        </Stack>
      </Card>
      <ApplyButton id="Applybutton" onClick={apply} variant="contained"  >{applytext}</ApplyButton>

    </div>
  );
};

export default BodyLeftSec;