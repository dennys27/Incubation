import React, { useEffect,  useState } from 'react'
import Table from "./Table";
import axios from "axios"
import Pendingtable from './Pendingtable';
import { useContext } from "react";
import {ApplicationContext} from '../../Store/applications'


const Applicantlist = ({ setSelected }) => {
  
   const { setApplications } = useContext(ApplicationContext);

  const [application, setApplication] = useState([])
  useEffect(() => {
    
    axios.get("http://localhost:8000/applications").then((appl) => {
    const {data}=appl
      setApplication(data);
      setApplications(data)
    console.log(data, "im working you know..........");
  });
  },[])


  return (
    <div>
      <Table application={application} setSelected={ setSelected} />
      <Pendingtable application={ application} />
    </div>
  );
}

export default Applicantlist