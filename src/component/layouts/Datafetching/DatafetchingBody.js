import { LineAxisOutlined } from "@mui/icons-material";
import Body from "../Body";
import { Card, CardContent, Button, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Readmore from "./Readmore";

function DatafetchingBody() {
  const [job, setJob] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://acharya-placement-dev.herokuapp.com/api/student/jobs/list?pageSize=5&pageNo=1",
        {
          headers: {
            Authorization:
             "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU29uYW0gSyIsInJvbGVzIjpbInN0dWRlbnQiXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0ODEwNDU4MywidXNlcl9pZCI6InRZa05TRzFYTjhWSjZwZU5mdzM2c1U4U2o2SDIiLCJzdWIiOiJ0WWtOU0cxWE44Vko2cGVOZnczNnNVOFNqNkgyIiwiaWF0IjoxNjQ4MTA0NTgzLCJleHAiOjE2NDgxMDgxODMsImVtYWlsIjoic29uYW1rcmkxNjA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzb25hbWtyaTE2MDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cUNh07UHWkA2ReGQ1j7EB1LpovmrNOEdJXWWF5S2_MxIuHhbtZ7jfEyI1Kk8JUy1P92fZe8rw3GhEywrMdQMq-iM8t404dWoIo5BWAC-3Tu0lPEYrGkl22YocvgNqk8n5VBviXParUGqouR9Z5yBNunjeRgcV5NE5589uiEclFO6JRNZld1E4M3JQbo7tEr5l2-sCnL0F-3Mqm-1j18Vcj1p457eo9ydaBBGrD-NO6EEnKKt7gc7xce0cmg3xovbXG4kytzCG5ly__Z51j7ejnE5YiwYiSBrJ1hmfO9N3ptOwRRZb91uSdvP3mG7NHz9NK9f7tSlpyaMDkArUk0f6w"
        ,},
      }
      )
      .then((res) => {
        setJob(res.data.jobs);
      })
      .catch((err) => { 
        console.log(err);
      });
  }, []);
  return (
    <div>
      {job.map((job) => (
        <Body key={job.postId}>
          <h2></h2>
          <li>Company Name :{job.companyName}</li>
          <li>job id :{job.postId}</li>
          <li>Destignation : {job.designation}</li>
          <li>Contact Number : {job.contactNo}</li>
          <li>Email : {job.email}</li>
          <Readmore Id={job.postId}/>
        </Body>
      ))}
    </div>
  );
}
export default DatafetchingBody;