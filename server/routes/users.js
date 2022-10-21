var express = require('express');
var router = express.Router();
require('dotenv').config();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User, validate } = require("../models/user");
const { Application } = require("../models/Application");
const { Slot } = require("../models/slots");
const { Admin } = require("../models/Admin");



const validatelog = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("email"),
    password: Joi.string().required().label("password"),
  });
  return schema.validate(data);
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({name:"dennys"});
});

router.post('/signup', async (req, res, next) => {

  try {
    const { error } = validate(req.body)
      console.log(error);
    if (error) {
      return res.status(400).send({message:error.details[0].message})
    }
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(409).send({message:"User with same email already exists"})
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
   
    await new User({ ...req.body, password: hashedPassword }).save()
    res.status(201).send({message:"User created successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"Internal server error"})
  }
  console.log(req.body); 
});

router.post("/login", async (req, res) => {
  try {
    const { error } = validatelog(req.body);
    console.log(error);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    
    if (!user) {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }
			
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
    ); 
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }
			

    const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully",user });
  } catch (error) {
    console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/application",async (req, res) => {
  
  await new Application(req.body).save() 
  res.json({ status: true })
})
 
router.get("/slots",async (req, res) => { 
  const slots = await Slot.find();
   res.send(slots);
})

router.get("/applications",async (req, res) => { 
  const applications = await Application.find();
   res.send(applications);
})
   
router.post("/changeview",async (req, res) => { 
  await Application.findOneAndUpdate({_id:req.body.id},{View:true}, {upsert: true},)
})
router.post("/setapprovel", async (req, res) => { 
 
  await Application.findOneAndUpdate({_id:req.body.id},{Status:"approved"}, {upsert: true},)
})

router.get("/approvedcompanies", async (req, res) => { 
  console.log(req.body);
  res.send(await Application.find({ Status: "approved" }));
 
})

router.post("/setslot", async (req, res) => {
  console.log(req.body);
  await Slot.findOneAndUpdate(
    { slotNo: req.body.Slot },
    { companyId: req.body.CompanyName }
    , { upsert: true }).then((data) => {
      console.log(data,"yoooooooooo");
    })
  await Application.findOneAndUpdate({ _id: req.body.CompanyName }, { Status: "allocated" }, { upsert: true },)
 
   res.send({ status: "success" });
})

router.post("/adminlogin", async (req, res) => {
  console.log(req.body);
  const admin = await Admin.find({ email: req.body.email })
    
  if (admin===null) {
    res.send({ status: false });
  } else {
      res.send({ status: true,admin });
  }
 
})
   

 
module.exports = router;
