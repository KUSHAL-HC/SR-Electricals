const mongoose = require("mongoose");

const Contacting = new mongoose.Schema({
  fullName: String,
  phone: String,
  emailAddress: String,
  subject: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Contacting", Contacting);