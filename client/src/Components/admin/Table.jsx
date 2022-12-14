import React, { useContext,useEffect } from "react";
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
import { adminUrl } from "../../Constants/Constants";
import { useNavigate } from "react-router-dom";






const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height:400,
  bgcolor: "background.paper",
  overflow: "scroll",
  overflowX:"hidden",
  scrollBehavior: "smooth",
  boxShadow: 24,
  p: 4,
  borderRadius:1
};



const Table = ({ application, setSelected ,setTest}) => {
  let refresh=false
  const [modal, setModal] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const { applications } = useContext(ApplicationContext);
  const navigate = useNavigate();
  
  useEffect(() => {
   
  }, [applications]);
  
  const handleOpen = (id) => {
    setTest("testing....")
  
    application.map(async(data) => {
      if (data._id === id) {
       
        setModal(data);
        
        await setOpened(id)
       
      }
    })

    setOpen(true)
  }

  const handleClose = () => setOpen(false);
   let token = localStorage.getItem("Admintoken");
  const setOpened = async(id) => {
    await axios
      .post(
        `${adminUrl}/changeview`,
        { id: id },
        {
          headers: { token: `Bearer ${token}` },
        }
      )
      .catch((data) => {
        localStorage.removeItem("admin");
        localStorage.removeItem("Admintoken");
        navigate("/admin/login");
        console.log(data, "error occured........");
      });
   
  }
  
  return (
    <>
      <Typography m={4} variant="h5">
        New Applications
      </Typography>

      <TableContainer sx={{ width: 900 }} component={Paper}>
        <Tablee aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Applicant Name</TableCell>
              <TableCell align="center">Company Name</TableCell>
              <TableCell align="center">Comapany Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {application.map((row) =>
              !row.View ? (
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
                      onClick={() => handleOpen(row._id)}
                      variant="contained"
                      href="#contained-buttons"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                ""
              )
            )}
          </TableBody>
        </Tablee>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Company Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name:{modal.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            CompanyName:{modal.CompanyName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Address:{modal.Address}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            City:{modal.City}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            State:{modal.State}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Email:{modal.Email}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Phone:{modal.Phone}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            BuisnessProposel: {modal.BuisnessProposel}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Table;
