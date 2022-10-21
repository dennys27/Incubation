import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "../Store/Admin";


const PrivateRoute = () => {
    const { admin,setAdmin } = useContext(AdminContext);
   
    const token2 = localStorage.getItem("admin");
      if (token2) {
        const adminAuth = localStorage.getItem("admin");
        setAdmin(adminAuth);
      
      }

    return token2 ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
