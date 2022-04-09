import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
 // import { blue } from '@material-ui/core/colors';

const HeaderTypography = withStyles({
    root: {
      color: "#FFFFFF"
    },
    
  })(Typography);


const Header = () => {
    return (
        <Box sx={{minHeight: '145px',background:'#F49424',justifyContent:'center', height:'54px',display: 'flex', alignItems: 'center',marginTop:"25px"}}> 
           <HeaderTypography variant="h4" gutterTop component="div" align='center'>
               Welcome SONAM KUMARI
      </HeaderTypography>
        </Box>
    )
}

export default Header