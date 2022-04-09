import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import { Stack } from "@mui/material";
import { CardContent } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";

const CardsEx = () => {
  const pathname = window.location.pathname;
  const Id = pathname.split('/')[4]; console.log("cardex",Id);
  const [jobDetails,setJobdetail]=useState({});
  
  useEffect(() => {
    axios
      .get(
        `https://acharya-placement-dev.herokuapp.com/api/student/job/${Id}`,
        {
          headers: {
            Authorization:
"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU29uYW0gSyIsInJvbGVzIjpbInN0dWRlbnQiXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0ODEwNDU4MywidXNlcl9pZCI6InRZa05TRzFYTjhWSjZwZU5mdzM2c1U4U2o2SDIiLCJzdWIiOiJ0WWtOU0cxWE44Vko2cGVOZnczNnNVOFNqNkgyIiwiaWF0IjoxNjQ4MTA0NTgzLCJleHAiOjE2NDgxMDgxODMsImVtYWlsIjoic29uYW1rcmkxNjA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzb25hbWtyaTE2MDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cUNh07UHWkA2ReGQ1j7EB1LpovmrNOEdJXWWF5S2_MxIuHhbtZ7jfEyI1Kk8JUy1P92fZe8rw3GhEywrMdQMq-iM8t404dWoIo5BWAC-3Tu0lPEYrGkl22YocvgNqk8n5VBviXParUGqouR9Z5yBNunjeRgcV5NE5589uiEclFO6JRNZld1E4M3JQbo7tEr5l2-sCnL0F-3Mqm-1j18Vcj1p457eo9ydaBBGrD-NO6EEnKKt7gc7xce0cmg3xovbXG4kytzCG5ly__Z51j7ejnE5YiwYiSBrJ1hmfO9N3ptOwRRZb91uSdvP3mG7NHz9NK9f7tSlpyaMDkArUk0f6w"
        ,},
        }
      )
      .then((res) => {
        setJobdetail(res.data.job);
        console.log(res.data.job.eligibility.marks.X.minMarks)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="body" style={{ padding: "23px" }}>
      <Card
        sx={{
          maxWidth: 800,
          height: 650,
          borderRadius: 2,
          boxShadow: 10,
          width: 1000,
          padding: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
          marginBottom: 10,
        }}
      >
        <Typography
          sx={{ fontSize: 30 }}
          color="text.secondary"
          // backgroundColor="gray"
          // width="126px"
          // height="15px"
          // radius="5px"
          // left="10px"
          // textAlign="center"
          // gutterBottom
          // marginTop={10}
        >
          Job Details
        </Typography>
        <Typography variant="h5">Company Name: {jobDetails.companyName}</Typography>
        <Typography variant="h5">Designation: {jobDetails.designation}</Typography>
        <Typography variant="h5">Description: {jobDetails.jobDesc}</Typography>
        <Typography variant="h5">Contact No.: {jobDetails.contactNo}</Typography>
        <Typography variant="h5">Email: {jobDetails.email}</Typography>
        <Typography variant="h5">No of Rounds: {jobDetails.noOfRounds}</Typography>
        <Typography variant="h5">Venue: {jobDetails.venue}</Typography>
        {/* <Typography variant="h5">Eligibility: Min marks in 10th {jobDetails.eligibility.marks.X.minMarks}, Min marks in 12th {jobDetails.eligibility.marks.XII.minMarks} </Typography> */}
        {/* <Typography variant="h5">Maximum Backlog: {jobDetails.eligibility.noOfBacks.maxBacks}</Typography> */}
      </Card>
    </div>
  );
};

export default CardsEx;