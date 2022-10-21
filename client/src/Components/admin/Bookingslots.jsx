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
  const [slot, setSlots] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [choosen, setChoosen] = useState('not choosen');
  const [organization, setOrganization] = useState('');

  const [open, setOpen] = useState(false);
 
  useEffect(() => {
  axios.get("http://localhost:8000/slots").then((mydata) => {
    const { data } = mydata
    rooms = data;
  }).then(() => {
       setSlots(rooms);
  })
    
    axios.get("http://localhost:8000/approvedcompanies").then((Cdata) => {
      const { data } = Cdata;
      setCompanies(data)
     
    });  
    
  }, [choosen])


  const handleModal = async (e) => {

    await axios.post("http://localhost:8000/setslot", { CompanyName: e.target.value, Slot: choosen }).then(() => {
      console.log("yoooooo");
      setOpen(false)
      
       
    })

  }


  const handleOpen = (id) => {
      setChoosen(id)
      setOpen(true);
  }
  
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
          console.log(data,"ggggggggg");
          return (
            <Grid key={data._id} item xs={1}>
              {data.companyId === "" ? (
                <div
                  onClick={() => {
                    handleOpen(data.slotNo);
                  }}
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
              ) : (
                <div 
                  
                  style={{
                    backgroundColor: "#0d47a1",
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
              )}
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
              Approved Companies
            </Typography>
            <FormControl
              sx={{ m: 1, minWidth: 120, color: "white" }}
              size="small"
            >
              <InputLabel sx={{color:"white"}} id="demo-select-small">select</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={organization}
                name="company"
                label="select"
                onChange={handleModal}
              >
                {companies.map((item, index) => (
                  <MenuItem value={item?._id}>{item?.CompanyName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default Bookingslots