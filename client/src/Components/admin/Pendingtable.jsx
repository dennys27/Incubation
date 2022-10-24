import React, { useEffect } from "react";
import Tablee from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import axios from 'axios'
import { adminUrl } from "../../Constants/Constants";

const Pendingtable = ({ application, setTest,applications,setApplications }) => {
  useEffect(() => {
     
  }, [setTest])
  
   let token = localStorage.getItem("Admintoken");
  
  const setApprovel = (id) => {
    axios.post(
      `${adminUrl}/setapprovel`,
      { id: id },
      {
        headers: { token: `Bearer ${token}` },
      }
    );
    setTest("testinnggg") 
  }

  const setDecline = (id) => {
    axios.post(
      `${adminUrl}/setdecline`,
      { id: id },
      {
        headers: { token: `Bearer ${token}` },
      }
    );
    setTest("testinnggg") 
  }

  return (
    <>
      <Typography m={4} variant="h5">
        Pending Applications
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
            {application.map((row) =>
              row.View===true && row.Status==="pending"? (
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
                      onClick={() => {
                        setApprovel(row._id)
                      }}
                      variant="contained"
                      href="#contained-buttons"
                    >
                      Approve
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={() => {
                      setDecline(row._id);
                    }} variant="contained" href="#contained-buttons">
                      Decline
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
    </>
  );
};

export default Pendingtable;
