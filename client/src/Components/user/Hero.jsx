import { Box, Typography } from '@mui/material'
import hero from "./images/fun-3d-cartoon-teenage-boy.jpg";

import React from 'react'

const Hero = () => {
  return (
    <div style={{ display: "block" ,marginTop:"64px"}}>
      <Box sx={{ backgroundColor: "white", height: 650, width: "100%" }}>
        <Typography variant="h5"> Hero section </Typography>
        <img alt='hero-image' style={{widht:"200px" ,height:"300px"}} src={ hero} />
      </Box>
    </div>
  );
}

export default Hero