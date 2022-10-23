import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Signup.css";
import { useState } from "react";
import { AuthContext } from "../../Store/context";
import { useContext } from "react";
import validator from 'validator';

const Login = () => {
  const { setUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const formvalues = {
     email: "",
     password: "",
  };
  
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [login, setLogin] = useState(formvalues);

   const handleChange = (e) => {
     setLogin({ ...login, [e.target.name]: e.target.value });
  };
  
  

  const handleSubmit = () => {
    if (login.password === "") {
       setPasswordError("enter a valid password")
     }
    if (!validator.isEmail(login.email)) {
       
       setEmailError("Enter valid Email!");
     } else {
       
    
        axios
          .post("http://localhost:8000/login", login)
          .then((res) => {
            console.log(res.data.token,"kkkkkk");
            localStorage.setItem("token", res.data.token);
            console.log(res.data.user,"iiiiiiiiiiiiii");
            if (res.data.user) {
              localStorage.setItem("user", JSON.stringify(res.data.user));
              setUser(res.data.user);
              navigate("/");
            }
          })
          .catch((error) => {
            console.log(error);
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
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Login;
