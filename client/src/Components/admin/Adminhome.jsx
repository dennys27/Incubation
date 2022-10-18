import { Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

const Adminhome = () => {
  const [selected, setSelected] = useState("applications");
    return (
      <>
        <AdminNavbar />

        <Grid container spacing={1}>
          <Grid item xs={1} lg={2}>
            <Sidebar setSelected={setSelected}  />
          </Grid>
          <Grid item xs={11} lg={10}>
            <Rightbar selected={selected} setSelected={setSelected} />
          </Grid>
        </Grid>
        
     
      </>
    );
}

export default Adminhome