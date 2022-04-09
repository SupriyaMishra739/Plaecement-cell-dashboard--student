import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from '@material-ui/core';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { KeyboardArrowLeft } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


const Myprofile = () => {

  const [profile, setprofile] = useState("");
  const [Internships, setinternship] = useState([]);
  const [Certifications, setcertification] = useState([]);
  const [project, setproject] = useState([]);
  const [skills, setskill] = useState([]);
  const [Coactivity, setcoactivity] = useState([]);
  const [education, seteducation] = useState({ 'X': {}, 'XII': {}, 'university': {} });



  const Download = () => {
    axios("https://acharya-placement-dev.herokuapp.com/api/student/profile/pdf", {
      method: 'GET',
      responseType: 'blob', //Force to receive data in a Blob Format
       headers: {
            Authorization:
              "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU29uYW0gSyIsInJvbGVzIjpbInN0dWRlbnQiXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0ODEwNDU4MywidXNlcl9pZCI6InRZa05TRzFYTjhWSjZwZU5mdzM2c1U4U2o2SDIiLCJzdWIiOiJ0WWtOU0cxWE44Vko2cGVOZnczNnNVOFNqNkgyIiwiaWF0IjoxNjQ4MTA0NTgzLCJleHAiOjE2NDgxMDgxODMsImVtYWlsIjoic29uYW1rcmkxNjA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzb25hbWtyaTE2MDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cUNh07UHWkA2ReGQ1j7EB1LpovmrNOEdJXWWF5S2_MxIuHhbtZ7jfEyI1Kk8JUy1P92fZe8rw3GhEywrMdQMq-iM8t404dWoIo5BWAC-3Tu0lPEYrGkl22YocvgNqk8n5VBviXParUGqouR9Z5yBNunjeRgcV5NE5589uiEclFO6JRNZld1E4M3JQbo7tEr5l2-sCnL0F-3Mqm-1j18Vcj1p457eo9ydaBBGrD-NO6EEnKKt7gc7xce0cmg3xovbXG4kytzCG5ly__Z51j7ejnE5YiwYiSBrJ1hmfO9N3ptOwRRZb91uSdvP3mG7NHz9NK9f7tSlpyaMDkArUk0f6w"
            ,
          },
   })
   .then(response => {
   //Create a Blob from the PDF Stream
      const file = new Blob(
        [response.data], 
        {type: 'application/pdf'});
   //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
   //Open the URL on new Window
      window.open(fileURL);
   })
   .catch(error => {
      console.log(error);
   });
   
  }

  useEffect(() => {
    axios
      .get(
        `https://acharya-placement-dev.herokuapp.com/api/student/profile/me`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImIwNmExMTkxNThlOGIyODIxNzE0MThhNjdkZWE4Mzc0MGI1ZWU3N2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU29uYW0gSyIsInJvbGVzIjpbInN0dWRlbnQiXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0ODEwNDU4MywidXNlcl9pZCI6InRZa05TRzFYTjhWSjZwZU5mdzM2c1U4U2o2SDIiLCJzdWIiOiJ0WWtOU0cxWE44Vko2cGVOZnczNnNVOFNqNkgyIiwiaWF0IjoxNjQ4MTA0NTgzLCJleHAiOjE2NDgxMDgxODMsImVtYWlsIjoic29uYW1rcmkxNjA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzb25hbWtyaTE2MDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cUNh07UHWkA2ReGQ1j7EB1LpovmrNOEdJXWWF5S2_MxIuHhbtZ7jfEyI1Kk8JUy1P92fZe8rw3GhEywrMdQMq-iM8t404dWoIo5BWAC-3Tu0lPEYrGkl22YocvgNqk8n5VBviXParUGqouR9Z5yBNunjeRgcV5NE5589uiEclFO6JRNZld1E4M3JQbo7tEr5l2-sCnL0F-3Mqm-1j18Vcj1p457eo9ydaBBGrD-NO6EEnKKt7gc7xce0cmg3xovbXG4kytzCG5ly__Z51j7ejnE5YiwYiSBrJ1hmfO9N3ptOwRRZb91uSdvP3mG7NHz9NK9f7tSlpyaMDkArUk0f6w"
            ,
          },
        }
      )
      .then((res) => {
        setprofile(res.data.data);
        setinternship(res.data.data.internship)
        setcertification(res.data.data.certifications)
        setproject(res.data.data.projects)
        setskill(res.data.data.skills)
        setcoactivity(res.data.data.coActivity)
        seteducation(res.data.data.education)
        console.log(res.data.data.education)

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (

    <div style={{ background: "#C4C4C4", paddingBottom: '10px' }}>
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


      <Box sx={{ flexGrow: 1, backgroundColor: "orange", display: "flex", justifyContent: "right", textAlign: "center", height: 130 }}>
        <h1 style={{ marginTop: "40px" }}> {profile.name}</h1>
        <Avatar
          alt="Remy Sharp"
          src={profile.profile_pic}
          sx={{ width: 100, height: 100, marginTop: '10px', marginLeft: '25px', marginRight: "50px" }}
        />
      </Box>
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} >
            <Item>Name: {profile.name}</Item>

          </Grid>
          <Grid item xs={4}>
            <Item>USN: {profile.usn}</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Contact No: {profile.contactNo}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Email: {profile.personalMail}</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>Gender: {profile.gender}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Linkedln: {profile.linkedIN}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Github: {profile.github}</Item>
          </Grid>
        </Grid>
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Education</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Marks</StyledTableCell>
                <StyledTableCell align="right">MarksType</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key={education}>
                <StyledTableCell component="th" scope="row">
                  Xth
                </StyledTableCell>
                <StyledTableCell align="right">{education.X.Name}</StyledTableCell>
                <StyledTableCell align="right">{education.X.Marks}</StyledTableCell>
                <StyledTableCell align="right">{education.X.marksType}</StyledTableCell>

              </StyledTableRow>
              <StyledTableRow key={profile.education}>
                <StyledTableCell component="th" scope="row">
                  XIIth
                </StyledTableCell>
                <StyledTableCell align="right">{education.XII.Name}</StyledTableCell>
                <StyledTableCell align="right">{education.XII.Marks}</StyledTableCell>
                <StyledTableCell align="right">{education.XII.marksType}</StyledTableCell>

              </StyledTableRow>
              <StyledTableRow key={profile.education}>
                <StyledTableCell component="th" scope="row">
                  University
                </StyledTableCell>
                <StyledTableCell align="right">{education.university.Name}</StyledTableCell>
                <StyledTableCell align="right">{education.university.Marks}</StyledTableCell>
                <StyledTableCell align="right">{education.university.marksType}</StyledTableCell>

              </StyledTableRow>


            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={6}>
            <Item>Active Backs:{profile.activeBacks}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>History of Backs:{profile.historyOfBacks}</Item>
          </Grid>
        </Grid>
        <br />
        <br />
        <TableContainer component={Paper}>
          <h3 style={{ margin: '10px' }}>Internships:</h3>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Company Name</StyledTableCell>
                <StyledTableCell align="right">Designation</StyledTableCell>
                <StyledTableCell align="right">Duration</StyledTableCell>
                <StyledTableCell align="right">Certificate Link</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {Internships.map((Internships) => (
                <StyledTableRow key={Internships}>

                  <StyledTableCell align="right">{Internships.companyName}</StyledTableCell>
                  <StyledTableCell align="right">{Internships.designation}</StyledTableCell>
                  <StyledTableCell align="right">{Internships.duration}</StyledTableCell>
                  <StyledTableCell align="right">{Internships.certificate}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <TableContainer component={Paper} marginTop={10}>
          <h3 style={{ margin: '10px' }}>Certifications:</h3>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Certificate Name</StyledTableCell>
                <StyledTableCell align="right">Organization</StyledTableCell>
                <StyledTableCell align="right">Start Date</StyledTableCell>
                <StyledTableCell align="right">Duration</StyledTableCell>
                <StyledTableCell align="right">Certificate Link</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {Certifications.map((Certifications) => (
                <StyledTableRow key={Certifications}>
                  <StyledTableCell align="right">{Certifications.certName}</StyledTableCell>
                  <StyledTableCell align="right">{Certifications.organization}</StyledTableCell>
                  <StyledTableCell align="right">{Certifications.startDate}</StyledTableCell>
                  < StyledTableCell align="right">{Certifications.duration}</StyledTableCell>
                  <StyledTableCell align="right">{Certifications.certificate}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <TableContainer component={Paper} marginTop={10}>
          <h3 style={{ margin: '10px' }}>Projects:</h3>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>

                <StyledTableCell align="right">Project Name</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Code Link</StyledTableCell>
                <StyledTableCell align="right">Demo Link</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {project.map((project) => (
                <StyledTableRow key={project}>
                  <StyledTableCell align="right">{project.projectName}</StyledTableCell>
                  <StyledTableCell align="right">{project.description}</StyledTableCell>
                  <StyledTableCell align="right">{project.codeLink}</StyledTableCell>
                  <StyledTableCell align="right">{project.demoLink}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <Grid container style={{ paddingBottom: "50px", borderBottom: "1px solid white", direction: "row" }}>
          <Grid item container xs={6} style={{ color: "white", justifyContent: "center" }}  >
            <TableContainer component={Paper} marginTop={10}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell> <h3>Skills:</h3></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {skills.map((skills) => (
                    <StyledTableRow key={skills}>
                      <StyledTableCell >
                        {skills}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item container xs={6} >
            <TableContainer component={Paper} marginTop={10}>
              <h3 style={{ margin: '10px' }}>Co-Activities:</h3>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>

                    <StyledTableCell align="right"> Name</StyledTableCell>
                    <StyledTableCell align="right"> Description</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Coactivity.map((Coactivity) => (
                    <StyledTableRow key={Coactivity}>

                      < StyledTableCell align="right">{Coactivity.Name}</StyledTableCell>
                      < StyledTableCell align="right">{Coactivity.description}</StyledTableCell>

                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>


      </Box>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}  >
        <Button onClick={Download} variant="contained" color="primary">
          Download Resume
        </Button>
      </div>

    </div>
  );
}

export default Myprofile