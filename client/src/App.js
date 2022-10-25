import {Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/user/Home";
import Navbar from "./Components/user/Navbar";
import Application from "./Components/user/Application";
import Signup from "./Components/user/Signup";
import Login from "./Components/user/Login";
import Adminhome from "./Components/admin/Adminhome";
import AdminLogin from "./Components/admin/AdminLogin";
import PrivateRoute from "./Components/PrivateRoute";
import UserRoutes from "./Components/UserRoutes";





function App() {
   
 
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
        <Route element={<UserRoutes />}>
          <Route element={<Application/>} path="/slotbooking" />
        </Route>
      </Routes>

      <Routes>
        <Route element={<AdminLogin />} path="/admin/login" />
        <Route element={<PrivateRoute />}>
          <Route element={<Adminhome />} path="/admin" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
