import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'

const ViewApplication = () => {
  return (
    <Box 
      sx={{
       boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
              width: "800px",
              height: "500px",
              backgroundColor: 'white',
          borderRadius:3
          }}>
          
          <Typography>
              Name:
          </Typography>


      </Box>
  );
}

export default ViewApplication