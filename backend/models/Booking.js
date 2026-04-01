const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String
});

module.exports = mongoose.model("Booking", bookingSchema);