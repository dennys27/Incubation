import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Store/context";

const UserRoutes = () => {
 const { user, setUser } = useContext(AuthContext);
 //const token = localStorage.getItem("token");
 const token2 = localStorage.getItem("user");
//  if (token2) {
//    const userAuth = JSON.parse(localStorage.getItem("user"))
//    setUser(userAuth);
   
//  }

 return token2 ? <Outlet /> : <Navigate to="/login" />;
};

export default UserRoutes;
