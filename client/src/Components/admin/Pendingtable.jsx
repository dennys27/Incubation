import React from "react";
import Tablee from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";

const Pendingtable = ({application}) => {
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
                      {application.map((row) => (
                row.view?
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
                  <Button variant="contained" href="#contained-buttons">
                  Approve
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained" href="#contained-buttons">
                  Decline
                  </Button>
                </TableCell>
                              </TableRow>
                              : ""
            ))}
          </TableBody>
        </Tablee>
      </TableContainer>
    </>
  );
};

export default Pendingtable;
