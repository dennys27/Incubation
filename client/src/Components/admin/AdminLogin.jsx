import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import Navbar from "./AdminNavbar";
import "../user/Signup.css";
import { useState } from "react";
import { AdminContext } from "../../Store/Admin";
import { useContext } from "react";
import { adminUrl } from "../../Constants/Constants";
import validator from "validator";
import { useEffect } from "react";




const AdminLogin = () => {
  const { setAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
  let token = localStorage.getItem("admin");
   useEffect(() => {
     
     if (token) {
       navigate("/admin")
     }
   }, []);
  const formvalues = {
    email: "",
    password: "",
  };

  const [login, setLogin] = useState(formvalues);
  const [invalid, setInvalid] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => { 
    if (!validator.isEmail(login.email)) {
      setEmailError("Enter valid Email!");
    } else if (login.password === "") {
      setPasswordError("invalid pasword")
    } else {
     
   
      axios
        .post(`${adminUrl}/login`, login)
        .then((res) => {
          if (res.data.Estatus) {
            setInvalid(res.data.message)
          }
          
          else if (res.data.status) {
            localStorage.setItem("Admintoken", res.data.AdminToken);
            localStorage.setItem("admin", res.data.admin);
            setAdmin(res.data.user);
            navigate("/admin");
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
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {invalid}
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

export default AdminLogin;
