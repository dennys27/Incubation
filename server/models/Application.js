const mongoose = require("mongoose");


const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Address: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: String, required: true },
  CompanyName: { type: String, required: true },
  CompanyLogo: { type: String },
  DescribeYourTeamAndBackground: { type: String, required: true },
  DescribeYourCompanyAndProducts: { type: String, required: true },
  DescribeTheProblem: { type: String, required: true },
  WhatsUniqe: { type: String, required: true },
  WhatsYourValueProptoCustomer: { type: String, required: true },
  CompetitorsAndYourAdvantage: { type: String, required: true },
  RevenueModel: { type: String, required: true },
  PotentiialMarketSize: { type: String, required: true },
  MarketingPlan: { type: String, required: true },
  TypeOfIncubation: { type: String, required: true },
  BuisnessProposel: { type: String, required: true },
  Status: { type: String, required: true },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = { Application};