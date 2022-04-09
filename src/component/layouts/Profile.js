import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Typography , Card } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Button } from '@mui/material';


const onDownload = () => {
  const link = document.createElement("a");
  link.download = `download.txt`;
  link.href = "./download.txt";
  link.click();
};

const Profile = () => {
    useEffect(() => {
        axios
          .get(
            `https://acharya-placement-dev.herokuapp.com/api/student/profile/menpm`,
            {
              headers: {
                Authorization:
    "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxZDU2YTI1MWU0ZGRhM2Y0NWM0MWZkNWQ0ZGEwMWQyYjlkNzJlMGQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU29uYW0gSyIsInJvbGVzIjpbInN0dWRlbnQiXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0Nzc5ODg5OSwidXNlcl9pZCI6InRZa05TRzFYTjhWSjZwZU5mdzM2c1U4U2o2SDIiLCJzdWIiOiJ0WWtOU0cxWE44Vko2cGVOZnczNnNVOFNqNkgyIiwiaWF0IjoxNjQ3Nzk4ODk5LCJleHAiOjE2NDc4MDI0OTksImVtYWlsIjoic29uYW1rcmkxNjA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzb25hbWtyaTE2MDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.RqsQRi-utbm9kxWVFr1q2WEkBhH08eOxbkYAqC0dL47nxhWBjZ-qPxXC2W8MA7dGECk_WoYhOZw7nq5mEdQWq85dAftsgsdUb9E8Sow5FsPb69L-tmGJ78qeF_cxB8LJZB5jNmSG0yaOfdrNJpBhbN1U-mksjqwjqf3Gr7jwHKqtqpBGj324P__QkAEnKNh_iZMagGlfQVvmIh6W_DpxkrRCzspTM2mGKRWmoJWJZunOLaSa27GNn7_lH0dB8slP0fE1oFjzBLyXz4ZI1y_ZmIwXJGW04bO8P70WQTMXmKwDz0l_Q0r6rxNRONyyt9pDzlpthQ1JNhZov4308njy2g"
            ,},
            }
          )
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
   <div>
    <div
    style={{ width: "100wv", height: "50px", background: "rgb(30,71,134)" }}
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
   
 <div style={{background:'pink',width:'100vw',height:'100%',padding:'50px'}}>
        <Card style={{ padding :'20px' ,width:"1000px",margin:"auto"}}>
        <Avatar
            alt="Remy Sharp"
           src="/static/images/avatar/1.jpg"
           sx={{ width: 100, height: 100,marginTop:'10px',marginLeft : '450px'}}
           />
           <br/>
            <Typography>
                USN : 
            </Typography>
            <br/>
            <Typography>
                   Name :
               </Typography>
               <br/>
               <Typography>
                   UID :
               </Typography>
               <br/>
               <Typography>
                   placement Staus: 
               </Typography>
               <br/>
            <Typography>
                contact no :
              </Typography>
              <br/>
              <Typography>
              PersonalMail :
              </Typography>
              <br/>
              <Typography>
                Gender :
              </Typography>
              <br/>
              <Typography>
                Education :
              </Typography>
              <br/>
              <Typography>
                 Active Backlogs :
    
              </Typography>
              <br/>
              <Typography>
                 History of Backlogs :
              </Typography>
              <br/>
              <Typography>
                 Internship :
              </Typography>
              <br/>
              <Typography>
                certifications :
              </Typography>
              <br/>
              <Typography>
               projects :
              </Typography>
              <br/>
              <Typography>
               Skills :
              </Typography>
              <br/>
              <Typography>
               linkdln :
              </Typography>
              <br/>
              <Typography>
               GitHub :
              </Typography>
              <br/>
              <Typography>
               Coactivity :
              </Typography>
               <br/>
               <div   >
              <Button onClick={onDownload} variant="contained" color="primary">
              Download Resume
              </Button>
              </div>


        </Card>

  </div>
    
 </div>
     
  );
};

  

export default Profile;
