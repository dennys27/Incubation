import React, { useContext } from "react";
import Tablee from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Modal, Typography } from "@mui/material";
import { ApplicationContext } from "../../Store/applications";
import axios from 'axios';




const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height:400,
  bgcolor: "background.paper",
 
  boxShadow: 24,
  p: 4,
};



const Table = ({ application, setSelected }) => {
  const [modal, setModal] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const { applications } = useContext(ApplicationContext);
  
  const handleOpen = (id) => {
  
    applications.map((data) => {
      if(data._id)
    })

    setOpen(true)
  }
   const handleClose = () => setOpen(false);

 
  
  return (
    <>
      <Typography m={4} variant="h5">
        New Applications
      </Typography>

      <TableContainer sx={{ width: 900 }} component={Paper}>
        <Tablee aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Sl.no</TableCell>
              <TableCell align="center">Company Name</TableCell>
              <TableCell align="center">Comapany Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {application.map((row) => (
              <TableRow key={row._id}>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.CompanyName}</TableCell>
                <TableCell align="center">
                  <p> {row.Address}</p>
                  <p> {row.City}</p>
                  <p> {row.Email}</p>
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={()=>handleOpen(row._id)}
                    variant="contained"
                    href="#contained-buttons"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Tablee>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Table;
