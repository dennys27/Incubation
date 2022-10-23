import React, { useEffect,  useState } from 'react'
import Table from "./Table";
import axios from "axios"
import Pendingtable from './Pendingtable';
import { useContext } from "react";
import {ApplicationContext} from '../../Store/applications'
import { adminUrl } from '../../Constants/Constants';


const Applicantlist = ({ setSelected }) => {
  
  const {applications, setApplications } = useContext(ApplicationContext);

  const [test, setTest] = useState([])
  const [application, setApplication] = useState([])
  let token = localStorage.getItem("Admintoken")
  useEffect(() => {
    axios
      .get(`${adminUrl}/applications`, {
        headers: { token: `Bearer ${token}` },
      })
      .then((appl) => {
        const { data } = appl;
        setApplications(data);
        setApplication(data);
      });
  }, [test]);


  return (
    <div>
      <Table
        application={application}
        setSelected={setSelected}
        setTest={setTest}
      />
      <Pendingtable application={application} applications={applications} setApplications={setApplications} setTest={setTest} />
    </div>
  );
}

export default Applicantlist