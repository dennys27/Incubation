import { Grid, Stack } from '@mui/material'
import React from 'react'
import AdminNavbar from './AdminNavbar'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

const Adminhome = () => {
    return (
      <>
        <AdminNavbar />

        <Grid container spacing={1}>
          <Grid item xs={1} lg={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={11} lg={10}>
            <Rightbar />
          </Grid>
        </Grid>
        
        {/* <Stack direction="row" spacing={1} justifyContent="normal">
          <Sidebar />
          <Rightbar />
        </Stack> */}
      </>
    );
}

export default Adminhome