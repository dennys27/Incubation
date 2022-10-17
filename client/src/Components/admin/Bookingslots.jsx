import { Grid } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import './booking.css'
import axios from 'axios'
import { useState } from 'react';



const Bookingslots = () => {
  const [slots,setSlots] = useState({})
  useEffect(() => {
   axios.get("http://localhost:8000/slots").then((data) => {
      setSlots(data)
    })
  },[])

 // console.log(slots.data.slots,"checking...........");
 
  return (
    <>
      <Grid
        sx={{ marginBottom: 1 }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {/* {slots.data.slots.map((data) => {
          console.log(data, "dfgdshkfshdgf");
          return (
            <Grid item xs={1}>
                <div className="slot">{data}</div>
              </Grid>
          )
              
            })
          } */}
      </Grid>

      {/* {grid} */}

      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       
             <Grid item xs={1}>
          <div
           className='slot'
          ></div>
        </Grid>
     
       
       
       
      </Grid> */}

      <div style={{ width: "100%" }}></div>
    </>
  );
}

export default Bookingslots