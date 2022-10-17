import { Box, Button, Grid, Typography } from '@mui/material'
import hero from "./images/fun-3d-cartoon-teenage-boy.jpg";
import './Hero.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "block", marginTop: "64px" }}>
      <Box
        sx={{
          backgroundColor: "white",
          height: 650,
          width: "100%",
          marginTop: "64px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            item
            xs={6}
          >
            <Typography
              className="booking"
              sx={{ paddingBottom: 2, paddingLeft: 9 }}
              variant="p"
            >
              Book Your Slots Now!
            </Typography>
            <Typography
              className="booking2"
              sx={{ paddingBottom: 2, paddingLeft: 9 }}
              variant="p"
            >
              Don’t wait. The time will never be just right.
            </Typography>
            <Button
              sx={{ backgroundColor: "#121858", marginTop: 1, marginLeft: 9 }}
              variant="contained"
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/slotbooking"
              >
                Register Now
              </Link>
            </Button>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item
            xs={6}
          >
            <img
              className="hero"
              style={{ widht: "300px", height: "400px", paddingTop: "30px" }}
              src={hero}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Hero