import {Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/user/Home";
import Navbar from "./Components/user/Navbar";
import Application from "./Components/user/Application";
import Signup from "./Components/user/Signup";
import Login from "./Components/user/Login";
import Adminhome from "./Components/admin/Adminhome";

function App() {
 
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
        
        <Route element={<Application />} path="/slotbooking" />
      </Routes>

      <Routes>
        <Route element={<Adminhome />} path="/admin" />
      </Routes>
    </>
  );
}

export default App;
