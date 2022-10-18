import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { useContext } from "react";
import { ApplicationContext } from "../../Store/applications";


const Approved = ({ application }) => {
  const { applications } = useContext(ApplicationContext);
  return (
    <>
      <Typography m={4} variant="h5">
        Approved Applications
      </Typography>
 
      <TableContainer sx={{ width: 900 }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Sl.no</TableCell>
              <TableCell align="center">Company Name</TableCell>
              <TableCell align="center">Comapany Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((row) =>
              row.Status=="approved"? (
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
                      Allocate
                    </Button>
                  </TableCell>
              
                </TableRow>
              ) : (
                ""
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Approved