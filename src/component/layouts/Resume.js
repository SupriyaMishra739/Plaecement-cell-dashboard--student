

import React, { useState } from "react";
import { Card, CardContent, Divider } from "@material-ui/core";

import { Grid, Typography, TextField, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import Checkbox from "@material-ui/core/Checkbox";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { history } from "../../History";
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { useEffect } from "react";
import ProfileIcon from "./ProfileIcon"
import { Container, Row, Col } from 'react-grid-system';
import { CollectionsOutlined } from "@material-ui/icons";
import { useRef } from "react";



const Resume = () => {
  const paperStyle = {
    padding: "30px 190px",
    width: 300,
    margin: "100px auto",
    backgroundColor: " #F8F8FF ",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const buttonStyle = { marginTop: "50px", align: "center" };
  //Variables to Store the data from User
  const [name, setname] = useState("");
  const [usn, setusn] = useState("");
  const [personalMail, setpersonalMail] = useState();
  const [Gender, setGender] = useState();
  const [contactNo, setcontactNo] = useState();
  const [github, setgithub] = useState();
  const [ActiveBacks, setActiveBacks] = useState();
  const [HistoryofBacks, setHistoryofBacks] = useState();
  const [linkdin, setlinkdin] = useState();
  const [TenthSch, setTenthSch] = useState();
  const [TenthMarksType,setTenthMarksType] = useState();
  const [TenthMarks, setTenthMarks] = useState();
  const [TwelthSch, setTwelthSch] = useState();
  const [TwelthMarksType, setTwelthMarksType] = useState();
  const [TwelthMarks, setTwelthMarks] = useState();
  const [College, setCollege] = useState();
  const [CollegeMarks, setCollegeMarks] = useState();
  const [ClgMarksType , setMarksType] = useState();
  const [Skill1, setSkill1] = useState();
  const [Skill2, setSkill2] = useState();
  const [Skill3, setSkill3] = useState();
  const [InternName1, setInternName1] = useState();
  const [designation1,setdesignation1] = useState();
  const [ duration1,setduration1]=useState();
  const [ certificate1,setcertificate1]= useState();
  const [InternName2, setInternName2] = useState();
  const [designation2,setdesignation2] = useState();
  const [ duration2,setduration2]=useState();
  const [ certificate2,setcertificate2]= useState();
  const [InternName3, setInternName3] = useState();
  const [designation3,setdesignation3] = useState();
  const [ duration3,setduration3]=useState();
  const [ certificate3,setcertificate3]= useState();
  const [ProjectName1,setProjectName1] = useState();
  const [ description1 ,setdescription1]= useState();
  const [ codeLink1 , setcodeLink1] = useState();
  const [ demoLink1, setdemoLink1] = useState();
  const [ProjectName2,setProjectName2] = useState();
  const [description2 ,setdescription2]= useState();
  const [ codeLink2, setcodeLink2] = useState();
  const [ demoLink2, setdemoLink2] = useState();
  const [ProjectName3 ,setProjectName3] = useState();
  const[description3 ,setdescription3]= useState();
  const [ codeLink3 , setcodeLink3] = useState();
  const [ demoLink3, setdemoLink3] = useState();
  const [certificateName1, setcertificateName1] = useState();
  const [organization1, setorganization1] = useState();
  const [startdate1, setstartdate1] = useState();
  const [Cduration1, setCduration1] = useState();
  const [ certifications1 , setcertifications1] = useState();
  const [certificateName2, setcertificateName2] = useState();
  const [organization2, setorganization2] = useState();
  const [startdate2, setstartdate2] = useState();
  const [Cduration2, setCduration2] = useState();
  const [ certifications2, setcertifications2] = useState();
  const [certificateName3, setcertificateName3] = useState();
  const [organization3, setorganization3] = useState();
  const [startdate3, setstartdate3] = useState();
  const [Cduration3, setCduration3] = useState();
  const [ certifications3 , setcertifications3] = useState();
  const [coActivity1, setcoActivity1] = useState();
  const [codescription1,setcodescription1] = useState();
  const [coActivity2, setcoActivity2] = useState();
  const [codescription2,setcodescription2] = useState();
  const [coActivity3, setcoActivity3] = useState();
  const [codescription3,setcodescription3] = useState();
  const [ profilepic,setprofilepic] =useState();
  const [ update,setupdate] = useState(0);
  const [save,setsave]=useState(0);
  console.log("profilepic:",profilepic);
  console.log("name:", name);
  console.log("usn:", usn);
  console.log("personalMail:", personalMail);
  console.log("Gender:", Gender);
  console.log("contactNo:", contactNo);
  console.log("github :", github);
  console.log("linkdin:", linkdin);
  console.log("ActiveBacks:", ActiveBacks);
  console.log("HistoryofBacks:", HistoryofBacks);
  console.log("Skill1:", Skill1);
  console.log("Skill2:", Skill2);
  console.log("Skill3:", Skill3);
  console.log ("InternName1:", InternName1);
  console.log ("designation1:",designation1);
  console.log ( "duration1:",duration1);
  console.log ( "certificate1:",certificate1);
  console.log ("InternName2:", InternName2);
  console.log ("designation2:",designation2);
  console.log ( "duration2:",duration2);
  console.log ( "certificate2:",certificate2);
  console.log ("InternName3:", InternName3);
  console.log ("designation3:",designation3);
  console.log ( "duration3:",duration3);
  console.log ( "certificate3:",certificate3);
  console.log ("ProjectName1:",ProjectName1);
  console.log("description1:" ,description1);
  console.log (" codeLink1:" , codeLink1);
  console.log ("demoLink1:", demoLink1);
  console.log ("ProjectName2:",ProjectName2);
  console.log("desciption2:" ,description2);
  console.log (" codeLink2:" , codeLink2);
  console.log ("demoLink2:", demoLink2);
  console.log ("ProjectName3:",ProjectName3);
  console.log("desciption3:" ,description3);
  console.log (" codeLink3:" , codeLink3);
  console.log ("demoLink3:", demoLink3);
  console.log ("certificateName1 :", certificateName1);
  console.log ("organization1:", organization1);
  console.log ("startdate1:", startdate1);
  console.log ("Cduration1:", Cduration1);
  console.log ( "certifications2:" , certifications1);
  console.log ("certificateName2 :", certificateName2);
  console.log ("organization2:", organization2);
  console.log ("startdate2:", startdate2);
  console.log ("Cduration2:", Cduration2);
  console.log ( "certifications2:" , certifications2);
  console.log ("certificateName3 :", certificateName3);
  console.log ("organization3:", organization3);
  console.log ("startdate3:", startdate3);
  console.log ("Cduration3:", Cduration3);
  console.log ( "certifications3:" , certifications3);
  console.log("coActivity1:", coActivity1);
  console.log("codescription1:", codescription1);
  console.log("coActivity2:", coActivity2);
  console.log("codescription2:", codescription2);
  console.log("coActivity3:", coActivity3); 
  console.log("codescription3:", codescription3);
  console.log("TenthSch", TenthSch);
  console.log ("TenthMarksType",TenthMarksType);
  console.log("TenthMarks", TenthMarks);
  console.log("TwelthSch", TwelthSch);
  console.log ("TwelthMarksType", TwelthMarksType);
  console.log ("TwelthMarks", TwelthMarks);
  console.log ("College", College);
  console.log ("CollegeMarks", CollegeMarks);
  console.log ("ClgMarksType" , ClgMarksType);
  


  console.log("");
  const back = () => {
    history.push({
      pathname: `./Home`,
    });
  };
  // useEffect(() => {
  const Save=()=>{
    console.log("abc")
   axios.post('https://acharya-placement-dev.herokuapp.com/api/student/profile',
   
   {
      "name": `${name}`,
      "usn": `${usn}`,
      "contactNo": `${ contactNo}`,
      "personalMail": `${personalMail}`,
      "gender": `${Gender}`,
      "education": {
        college:{
          "Name": `${College}`,
          "Marks": `${CollegeMarks}`,
          "marksType": `${ClgMarksType}`
        },
        tenth: {
          "Name": `${TenthSch}`,
          "Marks": `${TenthMarks}`,
          "marksType": `${TenthMarksType}`
        },
        twelth: {
          "Name": `${TwelthSch}`,
          "Marks": `${TwelthMarks}`,
          "marksType": `${TwelthMarks}`
        }
      },
      "activeBacks": `${ActiveBacks}`,
      "historyOfBacks": `${HistoryofBacks}`,
      "internship": [
        {
          "companyName": `${InternName1}`,
          "designation": `${designation1}`,
          "duration": `${duration1}`,
          "certificate": `${certificate1}`
        },
        {
          "companyName": `${InternName2}`,
          "designation": `${designation2}`,
          "duration": `${duration2}`,
          "certificate": `${certificate2}`
        },
        {
          "companyName": `${InternName3}`,
          "designation": `${designation3}`,
          "duration": `${duration3}`,
          "certificate": `${certificate3}`
        }
      ],
      "certifications": [
        {
          "certName": `${certificateName1}`,
          "organization": `${organization1}`,
          "startDate": `${startdate1}`,
          "duration": `${Cduration1}`,
          "certificate": `${certifications1}`
        },
        {
          "certName": `${certificateName2}`,
          "organization": `${organization2}`,
          "startDate": `${startdate2}`,
          "duration": `${Cduration2}`,
          "certificate": `${certifications2}`
        }, {
          "certName": `${certificateName3}`,
          "organization": `${organization3}`,
          "startDate": `${startdate3}`,
          "duration": `${Cduration3}`,
          "certificate": `${certifications3}`
        }
      ],
      "projects": [
        {
          "projectName": `${ProjectName1}`,
          "description": `${description1}`,
          "codeLink": `${codeLink1}`,
          "demoLink": `${demoLink1}`
        },
        {
          "projectName": `${ProjectName2}`,
          "description": `${description2}`,
          "codeLink": `${codeLink2}`,
          "demoLink": `${demoLink2}`
        },
        {
          "projectName": `${ProjectName3}`,
          "description": `${description3}`,
          "codeLink": `${codeLink3}`,
          "demoLink": `${demoLink3}`
        }
      ],
      "skills": [
       { "skill1" :`${Skill1}`, },
       { "skill2" :  `${Skill2}`, },
       { "skill3" :`${Skill3}`  }
      ],
      "profile_pic": "https://picture.com/",
      "coActivity": [
        {
          "Name": `${coActivity1}`,
          "description": `${codescription1}`
        },
        {
          "Name": `${coActivity2}`,
          "description": `${codescription2}`
        },
        {
          "Name": `${coActivity3}`,
          "description": `${codescription3}`
        },
      ],
      "linkedln": `${linkdin}`,
      "gitHub": `${github}`
    },
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
}
  // }, [save]);



     
  return (
    <Grid style={{ background: "#999999" }}>
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
      <Card
        style={{ padding: "20px", margin: "100px 100px 0px 100px" }}
        elevation={10}
      >
        <CardContent>
          <Grid align="center">
            <h1 style={headerStyle}>RESUME</h1>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create the Resume!
            </Typography>
          </Grid>

          <form>
            <h2 style={{ textAlign: "left" }}> About </h2>
            <Divider />
          
            <Grid
            
              container
              style={{ paddingTop: "20px" }}
            >
              <Grid item xs={6}>
              <TextField
                  placeholder="Enter Your name"
                  label="Name"
                  variant="outlined"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  fullWidth
                  style={{margin:'5px'}}
                />
                <TextField
                  placeholder="Enter USN"
                  label="USN"
                  variant="outlined"
                  onChange={(e) => {
                    setusn(e.target.value);
                  }}
                  fullWidth
                  style={{margin:'5px'}}
                />
               
              </Grid>
              <Grid item xs={6}  >
              {/* <Avatar
            alt="Remy Sharp"
           src="/static/images/avatar/1.jpg"
           sx={{ width: 200, height: 200,marginTop:'10px',marginLeft : '200px'}}
           /> */}
               <ProfileIcon  sx={{ width: 200, height: 200,marginTop:'10px',marginLeft : '400px'}}/>
              </Grid>
            </Grid>
          </form>

          <h2 style={{ textAlign: "left", paddingTop: "20px" }}> Info </h2>
          <Divider />
          <Grid container style={{ marginTop: "10px" }} spacing={1}>
            <Grid item xs={12}>
              <TextField
                type="email"
                placeholder="Enter email"
                label="PersonalMail"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setpersonalMail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                placeholder="Specify your Gender"
                label="Gender"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                placeholder="ContactNo"
                label="ContactNo"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcontactNo(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <h2 style={{ textAlign: "left", paddingTop: "20px" }}> Socials</h2>
          <Divider />
          <Grid container style={{ marginTop: "10px" }} spacing={1}>
            <Grid item xs={6}>
              <TextField
                placeholder="Github"
                label="Github"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setgithub(e.target.value);
                }}
              />
            </Grid>
           
           
            <Grid item xs={6}>
              <TextField
                placeholder= "Linkdin"
                label= "Linkdin"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setlinkdin(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <h2 style={{ textAlign: "left", paddingTop: "20px" }}> Education </h2>
          <Divider />
          <br/>
          
          <  Grid  style ={{borderColor : "black"}}>
        
           <Container style = {{borderColor : "black"}}  >
            <Row>
           <Col sm={3} style={{border: "2px solid black"}}>
           EDUCATION LEVEL
           </Col>
           <Col sm={3}  style={{border: "2px solid black"}} > NAME </Col>
           <Col sm ={3} style={{border: "2px solid black"}}> MARKS</Col>
           <Col sm ={3}  style={{border: "2px solid black"}}>MARKS TYPE</Col>
           
           </Row>
           <Row>
            <Col sm = {3}  style={{border: "2px solid black"}}> UNIVERSITY</Col>
            <Col sm = {3}  style={{border: "2px solid black"}} >
            <TextField
                placeholder="University Name"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
              />
            </Col>
            <Col sm = {3}   style={{border: "2px solid black"}} >
            <TextField
                placeholder="University Marks"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setCollegeMarks(e.target.value);
                }}
              />
            </Col>
            <Col sm ={3}   style={{border: "2px solid black"}}>
            <TextField
                placeholder="Marks Type"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setMarksType(e.target.value);
                }}
              />
            </Col>
            </Row>
            <Row>
            <Col sm = {3}  style={{border: "2px solid black"}}> Xii (PUC)</Col>
            <Col sm = {3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="School Name"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTwelthSch(e.target.value);
                }}
              />
            </Col>
            <Col sm = {3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Xii Marks"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTwelthMarks(e.target.value);
                }}
              />
            </Col>
            <Col sm ={3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Marks Type"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTwelthMarksType(e.target.value);
                }}
              />
            </Col>
            </Row>
            <Row>
            <Col sm = {3}  style={{border: "2px solid black"}}> X(10th Board)</Col>
            <Col sm = {3}  style={{border: "2px solid black"}}>      <TextField
                placeholder="School Name"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTenthSch(e.target.value);
                }}
              /></Col>
            <Col sm = {3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="X Marks"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTenthMarks(e.target.value);
                }}
              />
            </Col>
            <Col sm ={3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Marks Type"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTenthMarksType(e.target.value);
                }}
              />
            </Col>
            </Row>
           </Container>
           <br/>

                 
            
           
            <Grid item xs={8} >
              <TextField
                type="text"
                placeholder="activeBacks"
                label="Active Backs"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setActiveBacks(e.target.value);
                }}
              />
            </Grid>
           
            <br/>
            <Grid item xs={8}>
              <TextField
                type="text"
                placeholder="historyOfBacks"
                label="History of Backs"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setHistoryofBacks(e.target.value);
                }}
              />
            </Grid>

          </Grid>
          <h3 style={{ textAlign: "left", paddingTop: "20px" }}>
            {" "}
            Technical Skills{" "}
          </h3>
          <Divider />
          <Grid container style={{ marginTop: "10px" }}>
            <Grid item xs={8} style={{ padding: "5px" }}>
              <TextField
                placeholder="Skills"
                label="Technical Skills"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setSkill1(e.target.value);
                }}
              />
            </Grid>

            <Grid container>
              <Grid item xs={8} style={{ padding: "5px" }}>
                <TextField
                  placeholder="Technical Skills"
                  label="Technical Skills"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setSkill2(e.target.value);
                  }}
                />
              </Grid>

            </Grid>

            <Grid container>
              <Grid item xs={8} style={{ padding: "5px" }}>
                <TextField
                  placeholder="Skills"
                  label="Technical Skills"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setSkill3(e.target.value);
                  }}
                />
              </Grid>
             </Grid>
            </Grid>
            <Grid
              container
              style={{ paddingBottom: "20px", paddingTop: "20px" }}
            >
              <Grid item xs={6}>
                <h3 style={{ textAlign: "left" }}> Internships </h3>
                <Divider style={{ marginRight: "20px" }} />
              </Grid>
            </Grid>

            <Grid container spacing={0}>

            <Container style = {{borderColor : "black"}}  >
            <Row>
           <Col sm={3} style={{border: "2px solid black"}}>
           COMPANY NAME
           </Col>
           <Col sm ={3} style={{border: "2px solid black"}}> DESIGNATION</Col>
           <Col sm ={3}  style={{border: "2px solid black"}}> DURATION</Col>
           <Col sm ={3}  style={{border: "2px solid black"}}> CERTIFICATE LINK</Col>
           
           </Row>
           <Row>
            <Col sm = {3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Company Name"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setInternName1(e.target.value);
                }}
              />
            </Col>
            <Col sm = {3}  style={{border: "2px solid black"}} >
            <TextField
                placeholder="designation"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setdesignation1(e.target.value);
                }}
              />
            </Col>
            <Col sm = {3}   style={{border: "2px solid black"}} >
            <TextField
                placeholder="Duration"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setduration1(e.target.value);
                }}
              />
            </Col>
            <Col sm ={3}   style={{border: "2px solid black"}}>
            <TextField
                placeholder="Link"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcertificate1(e.target.value);
                }}
              />
            </Col>
            </Row>
            <Row>
            
            <Col sm = {3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Company Name"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setInternName2(e.target.value);
                }}
              />
            </Col>
            <Col sm = {3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Designation"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setdesignation2(e.target.value);
                }}
              />
            </Col>
            <Col sm ={3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Duration"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setduration2(e.target.value);
                }}
              />
            </Col>
            <Col sm = {3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Link"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcertificate2(e.target.value);
                }}
              />
            </Col>
            </Row>
            <Row>
            
            <Col sm = {3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Company Name"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setInternName3(e.target.value);
                }}
              />
            </Col>
            
            <Col sm = {3}  style={{border: "2px solid black"}}>      <TextField
                placeholder="Designation"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setdesignation3(e.target.value);
                }}
              /></Col>
            <Col sm = {3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Duration"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setduration3(e.target.value);
                }}
              />
            </Col>
            <Col sm ={3}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Link"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcertificate3(e.target.value);
                }}
              />
            </Col>
            </Row>
           </Container>

           <Grid item xs={6}>
                <h3 style={{ textAlign: "left" }}>Project </h3>
                <Divider />
              </Grid>
              <br/>
              <br/>
              <Grid container spacing={0}>

<Container style = {{borderColor : "black"}}  >
<Row>
<Col sm={3} style={{border: "2px solid black"}}>
PROJECT NAME
</Col>
<Col sm ={3} style={{border: "2px solid black"}}> DESCRIPTION</Col>
<Col sm ={3}  style={{border: "2px solid black"}}> CODE LINK</Col>
<Col sm ={3}  style={{border: "2px solid black"}}> CERTIFICATE LINK</Col>

</Row>
<Row>
<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Project name"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setProjectName1(e.target.value);
    }}
  />
</Col>
<Col sm = {3}  style={{border: "2px solid black"}} >
<TextField
    placeholder="description"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setdescription1(e.target.value);
    }}
  />
</Col>
<Col sm = {3}   style={{border: "2px solid black"}} >
<TextField
    placeholder="Code Link"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setcodeLink1(e.target.value);
    }}
  />
</Col>
<Col sm ={3}   style={{border: "2px solid black"}}>
<TextField
    placeholder=" Demo Link"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setdemoLink1(e.target.value);
    }}
  />
</Col>
</Row>
<Row>

<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Project Name"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setProjectName2(e.target.value);
    }}
  />
</Col>
<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Description"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setdescription2(e.target.value);
    }}
  />
</Col>
<Col sm ={3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Code Link"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setcodeLink2(e.target.value);
    }}
  />
</Col>
<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder=" demo Link"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setdemoLink2(e.target.value);
    }}
  />
</Col>
</Row>
<Row>

<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Project Name"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setProjectName3(e.target.value);
    }}
  />
</Col>

<Col sm = {3}  style={{border: "2px solid black"}}>      <TextField
    placeholder="Description"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setdescription3(e.target.value);
    }}
  /></Col>
<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Code Link"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setcodeLink3(e.target.value);
    }}
  />
</Col>
<Col sm ={3}  style={{border: "2px solid black"}}>
<TextField
    placeholder=" demo Link"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setdemoLink3(e.target.value);
    }}
  />
</Col>
</Row>
</Container>
            </Grid>
            <br/>
            <Grid
              container
              style={{ paddingBottom: "20px", paddingTop: "20px" }}
            >
              <Grid item xs={6}>
                <h3 style={{ textAlign: "left" }}> Certifications </h3>
                <Divider style={{ marginRight: "20px" }} />
              </Grid>
         </Grid>    
            <Grid container spacing={0}>

<Container style = {{borderColor : "black"}}  >
<Row>
<Col sm={3} style={{border: "2px solid black"}}>
CERTIFICATION NAME
</Col>
<Col sm ={2} style={{border: "2px solid black"}}> ORGANIZATION</Col>
<Col sm ={2}  style={{border: "2px solid black"}}> START DATE</Col>
<Col sm ={2}  style={{border: "2px solid black"}}> DURATION</Col>
<Col sm ={3}  style={{border: "2px solid black"}}> CERTIFICATE LINK</Col>

</Row>
<Row>
<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Certificate Name"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setcertificateName1(e.target.value);
    }}
  />
</Col>
<Col sm = {2}  style={{border: "2px solid black"}} >
<TextField
    placeholder="Organization"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setorganization1(e.target.value);
    }}
  />
</Col>
<Col sm = {2}   style={{border: "2px solid black"}} >
<TextField
    placeholder="Start Date"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setstartdate1(e.target.value);
    }}
  />
</Col>
<Col sm ={2}   style={{border: "2px solid black"}}>
<TextField
    placeholder="Duration"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setCduration1(e.target.value);
    }}
  />
</Col>
<Col sm ={3}   style={{border: "2px solid black"}}>
<TextField
    placeholder="Link"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setcertifications1(e.target.value);
    }}
  />
</Col>
</Row>
<Row>

<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Certificate Name"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setcertificateName2(e.target.value);
    }}
  />
</Col>
<Col sm = {2}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Organization"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setorganization2(e.target.value);
    }}
  />
</Col>
<Col sm ={2}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Start Date"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setstartdate2(e.target.value);
    }}
  />
</Col>
<Col sm ={2}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Duration"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setCduration2(e.target.value);
    }}
  />
</Col>
<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Link"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setcertifications2(e.target.value);
    }}
  />
</Col>
</Row>
<Row>

<Col sm = {3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Certificate Name"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setcertificateName3(e.target.value);
    }}
  />
</Col>

<Col sm = {2}  style={{border: "2px solid black"}}>      <TextField
    placeholder="Organization"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setorganization3(e.target.value);
    }}
  /></Col>
<Col sm = {2}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Start Date"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setstartdate3(e.target.value);
    }}
  />
</Col>
<Col sm = {2}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Duration"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setCduration3(e.target.value);
    }}
  />
</Col>
<Col sm ={3}  style={{border: "2px solid black"}}>
<TextField
    placeholder="Link"
    variant="outlined"
    fullWidth
    onChange={(e) => {
      setcertifications3(e.target.value);
    }}
  />
</Col>
</Row>
     </Container>
            </Grid>
            <Grid
              container
              style={{ paddingBottom: "20px", paddingTop: "20px" }}
            >
              <Grid item xs={6}>
                <h3 style={{ textAlign: "left" }}> Co-Activity </h3>
                <Divider style={{ marginRight: "20px" }} />
              </Grid>
         </Grid>    
            <Divider/>
            <br/>
            <br/>
            <Grid>
            <Container style = {{borderColor : "black"}}  >
            <Row>
           <Col sm={6} style={{border: "2px solid black"}}>
           NAME
           </Col>
           <Col sm ={6} style={{border: "2px solid black"}}> DESCRIPTION</Col>
           </Row>
           <Row>
            <Col sm = {6}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Name"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcoActivity1(e.target.value);
                }}
              />
            </Col>
            <Col sm = {6}  style={{border: "2px solid black"}} >
            <TextField
                placeholder="description"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcodescription1(e.target.value);
                }}
              />
            </Col>
            </Row>
            <Row>
            
            <Col sm = {6}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Name"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcoActivity2(e.target.value);
                }}
              />
            </Col>
            <Col sm = {6}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Description"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcodescription2(e.target.value);
                }}
              />
            </Col>
            </Row>
            <Row>
            
            <Col sm = {6}  style={{border: "2px solid black"}}>
            <TextField
                placeholder="Name"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcoActivity3(e.target.value);
                }}
              />
            </Col>
            
            <Col sm = {6}  style={{border: "2px solid black"}}>      <TextField
                placeholder="Description"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setcodescription3(e.target.value);
                }}
              /></Col>
            </Row>
           </Container>
           </Grid>
           <br/>
           <br/>
            <Grid
              container
              justifyContent="space-evenly"
              spacing={1}
              style={buttonStyle}
            >
              <Grid item xs={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  Width="230"
                  auto
                  onClick={Save}
                  // onClick={() => {
                  //   setsave(1);
                  // }}
                >
                  Save
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  Width="250"
                  auto
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Resume;