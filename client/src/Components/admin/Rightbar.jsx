import React, { useState } from 'react'
import Applicantlist from './Applicantlist';
import Bookingslots from './Bookingslots';
import Approved from './Approved';






const Rightbar = ({selected,setSelected}) => {
 const [test, setTest] = useState('');
 const  mySwitchFunction = (selected) => {
   switch (selected) {
      case 'applications':
         return [<Applicantlist setSelected={setSelected} />];
      case 'slotbooking':
         return [<Bookingslots />];
      case 'approved':
         return [<Approved setSelected={setSelected} setTest={setTest} />];
      
   }
}

  return <div style={{ padding: "60px" }}>
    {mySwitchFunction(selected)}
  </div>;
}

export default Rightbar