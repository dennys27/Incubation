var express = require('express');
var router = express.Router();
require('dotenv').config();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User, validate } = require("../models/user");
const { Application } = require("../models/Application");
const { Slot } = require("../models/slots");



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
  console.log(req.body);
  await new Application(req.body).save()
})

router.get("/slots",async (req, res) => {
  const slots = await Slot.find();
   res.json({ slots });
})
   

 
module.exports = router;
