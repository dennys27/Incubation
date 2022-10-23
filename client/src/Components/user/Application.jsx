import { Box, Button,  FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState,useContext } from 'react'
import axios from "axios";
import './Application.css'
import Navbar from './Navbar';
import { AuthContext } from '../../Store/context';
import { useNavigate } from 'react-router-dom';
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";



const Application = () => {
 const navigate = useNavigate()
 let token =  localStorage.getItem("token")
 
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user._id,"yooooooooooooooooooooooooooo");
  
  let error = 0;
  if (!user) {
    navigate("/login")
  }
  const [nameError, setNameError] = useState("");
  const [AddressError, setAddressError] = useState("");
  const [CityError, setCityError] = useState("");
  const [StateError, setStateError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PhoneError, setPhoneError] = useState("");
  // const [CompanyNameError, setCompanyNameError] = useState("");
  // const [DescribeYourTeamAndBackgroundError,setDescribeYourTeamAndBackgroundError,] = useState("");
  // const [DescribeYourCompanyAndProductsError,setDescribeYourCompanyAndProductsError,] = useState("");
  // const [DescribeTheProblemError, setDescribeTheProblemError] = useState("");
  // const [WhatsUniqeError, setWhatsUniqeError] = useState("");
  // const [WhatsYourValueProptoCustomerError,setWhatsYourValueProptoCustomerError,] = useState("");
  // const [CompetitorsAndYourAdvantageError,setCompetitorsAndYourAdvantageError,] = useState("");
  // const [RevenueModelError, setRevenueModelError] = useState("");
  // const [PotentiialMarketSizeError, setPotentiialMarketSizeError] = useState("");
  // const [MarketingPlanError, setMarketingPlanError] = useState("");
  // const [BuisnessProposelError, setBuisnessProposelError] = useState("");


      const formValues = {
          name: "",
          Address: "",
          City: "",
          State: "",
          Email: "",
          Phone: "",
          CompanyName: "",
          DescribeYourTeamAndBackground: "",
          DescribeYourCompanyAndProducts: "",
          DescribeTheProblem: "",
          WhatsUniqe: "",
          WhatsYourValueProptoCustomer: "",
          CompetitorsAndYourAdvantage: "",
          RevenueModel: "",
          PotentiialMarketSize: "",
          MarketingPlan: "",
          TypeOfIncubation:"",
          BuisnessProposel: "",
          UserId:user._id,
          Status:"pending",
          View:false
          
  };
  


  const [formData, setFormData] = useState(formValues);
  
  

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   
    const handleSubmit = () => {
      if (formData.name === "") {
        error++;
        setNameError("enter a valid Name");
      }
      if (formData.Address === "") {
        error++;
        setAddressError("enter a valid address");
      }
      if (formData.City === "") {
        error++;
        setCityError("enter a valid city name");
      }
      if (formData.State === "") {
        error++;
        setStateError("enter a valid state")
      }
      if (formData.Phone === "") {
        error++;
        setPhoneError("enter a valid phone");
      }
      if (formData.Email === "") {
        error++;
        setEmailError("enter a valid email");
      }


      if (!validator.isEmail(formData.Email)) {
        error++
        setEmailError("Enter valid Email!"); 
      }
        if (error === 0) {
          console.log("im working");
          axios
            .post("http://localhost:8000/application", formData, {
              headers: { token: `Bearer ${token}` },
            }) 
            .then(async (res) => {
              await toast.info("Application submited successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setTimeout(() => {
                navigate("/");
              }, 2500);
            })
            .catch((error) => {
              console.log(error);
            });
        }
     };
  

  return (
    <>
      <Navbar />
      <div className="signup_form_outer">
        <Box
          mt={5}
          sx={{ width: "800px", boxShadow: 1, padding: 3 }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Grid item xs={12} sm={6} md={3} lg={6}>
              <TextField
                id="outlined-name"
                label="Name"
                name="name"
                value={formData.name}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {nameError}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={6}>
              <TextField
                id="outlined-name"
                label="Address"
                name="Address"
                value={formData.Address}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {AddressError}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={6}>
              <TextField
                id="outlined-city"
                label="City"
                name="City"
                value={formData.City}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <ToastContainer />
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {CityError}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={6}>
              <TextField
                id="outlined-state"
                label="State"
                name="State"
                value={formData.State}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {StateError}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={6}>
              <TextField
                id="outlined-email"
                label="Email"
                name="Email"
                value={formData.Email}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {EmailError}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={6}>
              <TextField
                id="outlined-phone"
                label="Phone"
                name="Phone"
                value={formData.Phone}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {PhoneError}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                id="outlined-company-name"
                label="Company Name"
                name="CompanyName"
                value={formData.CompanyName}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="DescribeYourTeamAndBackground"
                id="outlined-company-team"
                label="Describe your team and background"
                value={formData.DescribeYourTeamAndBackground}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="DescribeYourCompanyAndProducts"
                id="outlined-company-products"
                label="Describe your company and products"
                value={formData.DescribeYourCompanyAndProducts}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="DescribeTheProblem"
                id="outlined-company solution"
                label="Describe the problem you're trying to solve"
                value={formData.DescribeTheProblem}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="WhatsUniqe"
                id="outlined-unique solution"
                label="What is unique about your solution"
                value={formData.WhatsUniqe}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="WhatsYourValueProptoCustomer"
                id="outlined-value proposition"
                label="Whats your value proposition to the customer"
                value={formData.WhatsYourValueProptoCustomer}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="CompetitorsAndYourAdvantage"
                id="outlined-advantage"
                label="Who are your competitors and whats your competitive advantage"
                value={formData.CompetitorsAndYourAdvantage}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="RevenueModel"
                id="outlined-revenue"
                label="Explain your revenue model"
                value={formData.RevenueModel}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="PotentiialMarketSize"
                id="outlined-market-size"
                label="What is the potential market size of the product"
                value={formData.PotentiialMarketSize}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="MarketingPlan"
                id="outlined-market-plan"
                label="How do you market or plan to market your products and services"
                value={formData.MarketingPlan}
                mt={2}
                sx={{ width: "100%" }}
                onChange={handleChange}
              />
              <Typography sx={{ color: "red", fontSize: "12px" }}></Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControl sx={{ marginBottom: "30px" }}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Type of incubation needed
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    name="TypeOfIncubation"
                    value="Physical"
                    control={<Radio />}
                    label="Physical"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    name="TypeOfIncubation"
                    value="virtual"
                    control={<Radio />}
                    label="virtual"
                    onChange={handleChange}
                  />
                </RadioGroup>
              </FormControl>
              <Grid />

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  name="BuisnessProposel"
                  id="outlined-name"
                  label="Upload a detailed buisness proposel"
                  value={formData.BuisnessProposel}
                  mt={2}
                  sx={{ width: "100%" }}
                  onChange={handleChange}
                />
                <Typography
                  sx={{ color: "red", fontSize: "12px" }}
                ></Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button
                  onClick={handleSubmit}
                  sx={{ marginTop: 4 }}
                  size="large"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Application