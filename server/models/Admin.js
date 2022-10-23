const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");



const adminSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const generateAuthToken = ()=> {
   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKADMINKEY, {
     expiresIn: "7d",
   });
   return token;
 }

const Admin = mongoose.model("admin", adminSchema);




module.exports = { Admin, generateAuthToken };
