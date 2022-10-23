const mongoose = require("mongoose");


const slotSchema = new mongoose.Schema({
  slotNo: { type: Number, required: true },
  name: { type: String, required: true }, 
  ApplicantId: { type: String, required: true },
  companyId: { type: String, required: true }, 
});

const Slot = mongoose.model("slots", slotSchema);

module.exports = { Slot };