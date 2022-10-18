import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import './booking.css'
import axios from 'axios'
import { useState } from 'react';
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { Box } from '@mui/system';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";




const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(10, 95, 223)",
  color:"white",
  boxShadow: 24,
  p: 4,
};

let rooms;
const Bookingslots = () => {
  const [slot,setSlots] = useState([])
  useEffect(() => {
  axios.get("http://localhost:8000/slots").then((mydata) => {
    const { data } = mydata
    rooms = data;
  }).then(() => {
       setSlots(rooms);
       console.log(slot , "jgssssssssssssssssf");
    })
  }, [0])


   const [age, setAge] = React.useState("");

   const handleChange = (event) => {
     setAge(event.target.value);
   };

  const handleBooking = (userId,slotId) =>{
    
  }

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        sx={{ marginBottom: 1 }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {slot.map((data) => {
          return (
            <Grid item xs={1}>
              <div
                onClick={handleOpen}
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="slot"
                key={data.id}
              >
                <h5>{data.name}</h5>
              </div>
            </Grid>
          );
        })}
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <FormControl  sx={{ m: 1, minWidth: 120,color:"white" }} size="small">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Bookingslots