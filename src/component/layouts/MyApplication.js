import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Typography , Card } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useState } from 'react';
import { Divider } from '@mui/material';


const MyApplication = () => {
    
  const [application, setapplication] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://acharya-placement-dev.herokuapp.com/api/student/job/applications/all",
        {
          headers: {
            Authorization:
             "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU29uYW0gSyIsInJvbGVzIjpbInN0dWRlbnQiXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0ODEwNDU4MywidXNlcl9pZCI6InRZa05TRzFYTjhWSjZwZU5mdzM2c1U4U2o2SDIiLCJzdWIiOiJ0WWtOU0cxWE44Vko2cGVOZnczNnNVOFNqNkgyIiwiaWF0IjoxNjQ4MTA0NTgzLCJleHAiOjE2NDgxMDgxODMsImVtYWlsIjoic29uYW1rcmkxNjA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzb25hbWtyaTE2MDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cUNh07UHWkA2ReGQ1j7EB1LpovmrNOEdJXWWF5S2_MxIuHhbtZ7jfEyI1Kk8JUy1P92fZe8rw3GhEywrMdQMq-iM8t404dWoIo5BWAC-3Tu0lPEYrGkl22YocvgNqk8n5VBviXParUGqouR9Z5yBNunjeRgcV5NE5589uiEclFO6JRNZld1E4M3JQbo7tEr5l2-sCnL0F-3Mqm-1j18Vcj1p457eo9ydaBBGrD-NO6EEnKKt7gc7xce0cmg3xovbXG4kytzCG5ly__Z51j7ejnE5YiwYiSBrJ1hmfO9N3ptOwRRZb91uSdvP3mG7NHz9NK9f7tSlpyaMDkArUk0f6w"
        ,},
      }
      )
      .then((res) => {
        setapplication(res.data.applications);
        console.log(res.data.applications)
      })
      .catch((err) => { 
        console.log(err);
      });
  }, []);
  return(
  <div>
    <div style={{ width: '100wv', height: "50px", background: "rgb(30,71,134)" }}
  >
    <a
      style={{
        border: "none",
        background: "rgb(30,71,134)",
        color: "white",
        fontSize: "24px",
      }}
      href="./Home"
    >
      <KeyboardArrowLeft style={{ marginTop: "4px", paddingTop: "10px" }} />
      Back
    </a>
  </div>
   
       <div style={{background:'#ff8c69',width:'100vw',height:'100vh',padding :'50px'}}>
        <Card style={{ padding :'40px' ,width:"1000px",margin:"auto"}}>
              
           <br/>
            <Typography variant='h5'>
                MY APPLICATIONS: 
            </Typography>
            <br/>
            {application.map((application) => (
        <ul>
          <li>Application Id :{application.applicationId}</li>
          <li>Applied At :{application.appliedAt}</li>
          <li>Company Name : {application.company}</li>
          <li>Designation : {application.designation}</li>
          <li>Post Id : {application.postId}</li>
          <li>Status of Application : {application.status}</li>
          <br/>
          <Divider style={{height:'4px'}}/>
        </ul>
        
        ))}
        </Card>
   </div>
  </div>
  );
    };

export default MyApplication ;