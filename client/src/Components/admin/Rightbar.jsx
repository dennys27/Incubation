import React from 'react'
import Applicantlist from './Applicantlist';
import Bookingslots from './Bookingslots';
import ViewApplication from './ViewApplication';





const Rightbar = ({selected,setSelected}) => {

 const  mySwitchFunction = (selected) => {
   switch (selected) {
      case 'applications':
         return [<Applicantlist setSelected={setSelected} />];
      case 'slotbooking':
         return [<Bookingslots />];
      case 'applicationView':
         return [<ViewApplication />];
      
   }
}

  return <div style={{ padding: "60px" }}>
    {mySwitchFunction(selected)}
  </div>;
}

export default Rightbar