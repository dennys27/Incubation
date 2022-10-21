import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import axios from "axios";
import * as yup from "yup";
import Navbar from "./Navbar";
import "./Signup.css";
import {loginschema} from '../../Validations/UserValidation'
import { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const navigate = useNavigate() 

  const formvalues = {
    name: "",
    email: "",
    password: "",
  };
     const [signup, setSignup] = useState(formvalues);
     const [nameError, setNameError] = useState("");
     const [emailError, setEmailError] = useState("");
     const [passwordError, setPasswordError] = useState("");
    
  const handleChange = (e) => {
  
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  
 

  const handleSubmit = () => {

    if (signup.name === "") {
       setNameError("enter a valid username")
     }
    if (signup.password === "") {
       setPasswordError("enter a valid password")
     }
    if (!validator.isEmail(signup.email)) {
      console.log("yes im here.....");
      setEmailError("Enter valid Email!");
    } else {

      axios
        .post("http://localhost:8000/signup", signup)
        .then((res) => {
         navigate("/login")
        })
        .catch((error) => {
          //console.log(error);
        });
    }
   };
    
  return (
    <>
      <Navbar />
      <div className="signup_wrapper">
        <Box
          mt={9}
          sx={{ width: "300px", padding: 3, borderRadius: 5 }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AccountCircleIcon sx={{ fontSize: 40 }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={12}>
              <TextField
                id="outlined-name"
                label="Name"
                name="name"
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
                variant="standard"
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {nameError}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={12}>
              <TextField
                id="outlined-email"
                label="Email"
                name="email"
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
                variant="standard"
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {emailError}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={12}>
              <TextField
                type="password"
                id="outlined-password"
                label="Password"
                name="password"
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
                variant="standard"
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {passwordError}
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={12}
              sm={6}
              md={3}
              lg={12}
            >
              <Button
                onClick={() => handleSubmit()}
                mt={4}
                variant="contained"
                size="medium"
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Signup;
