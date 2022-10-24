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
import { adminUrl } from '../../Constants/Constants';
import { useNavigate } from 'react-router-dom';





const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#e3f2fd",
  color: "black",
  boxShadow: 24,
  p: 4,
  borderRadius:1
};

let rooms;
const Bookingslots = () => {
  const [slot, setSlots] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [choosen, setChoosen] = useState('not choosen');
  const [organization, setOrganization] = useState('');
  const [blocked, setBlocked] = useState([]);
  const [open, setOpen] = useState(false);
  const [sopen, setSopen] = useState(false);
  const navigate = useNavigate()
  
   let token = localStorage.getItem("Admintoken");
  useEffect(() => {
  axios
    .get(`${adminUrl}/slots`, {
      headers: { token: `Bearer ${token}` },
    })
    .then((mydata) => {
      const { data } = mydata;
      rooms = data;
    })
    .then(() => {
      setSlots(rooms);
    })
    .catch((data) => {
      localStorage.removeItem("admin");
      localStorage.removeItem("Admintoken");
      navigate("/admin/login");
      console.log(data, "error occured........");
    });
    
    axios
      .get(`${adminUrl}/approvedcompanies`, {
        headers: { token: `Bearer ${token}` },
      })
      .then((Cdata) => {
        const { data } = Cdata;
        setCompanies(data);
      })
      .catch((data) => {
        localStorage.removeItem("admin");
        localStorage.removeItem("Admintoken");
        navigate("/admin/login");
        console.log(data, "error occured........");
      });
    
  }, [choosen])


  const handleModal = async (e) => {

    await axios
      .post(
        `${adminUrl}/setslot`,
        { CompanyName: e.target.value, Slot: choosen },
        {
          headers: { token: `Bearer ${token}` },
        }
      )
      .then(() => {
        setOpen(false);

        setChoosen("");
      });

  }

  const handleBooked = async(userId) => {
    axios
      .post(
        `${adminUrl}/blockedslot`,
        { userId: userId },
        {
          headers: { token: `Bearer ${token}` },
        }
      )
      .then((data) => {
        setBlocked(data.data);

        setSopen(true);
      });
  }


  const handleOpen = (id) => {
      setChoosen(id)
      setOpen(true);
  }
  
   const handleClose = () => setOpen(false);
   const handleClosed = () => setSopen(false);

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
                  onClick={() => handleBooked(data.companyId)}
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
        open={sopen}
        onClose={handleClosed}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Companyname :{blocked[0]?.CompanyName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Address :{blocked[0]?.Address}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           City :{blocked[0]?.City}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Email :{blocked[0]?.Email}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Phone :{blocked[0]?.Phone}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Status :{blocked[0]?.Status}
          </Typography>
        </Box>
      </Modal>

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
              sx={{ m: 1, minWidth: 120, color: "black" }}
              size="small"
            >
              <InputLabel sx={{ color: "black" }} id="demo-select-small">
                select
              </InputLabel>
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
  );
}

export default Bookingslots