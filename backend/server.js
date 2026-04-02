const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Contacting = require("./models/Contacting.js");
require("dotenv").config();


const Booking = require("./models/Booking");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// POST API
app.post("/book", async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    // Validation
    if (!name || !phone || !email) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const newBooking = new Booking({
      name,
      phone,
      email
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking saved successfully",
      data: newBooking
    });

  } catch (error) {
    res.status(500).json({
      message: "Error saving booking",
      error: error.message
    });
  }
});


app.post("/api/Contacting",async(req,res)=>{
  try{
    const data = new Contacting(req.body);
    await data.save();
    res.status(201).json({message:"Contacting form data saved"});
  }catch(error){
    res.status(500).json({error:error.message});
  }
})

// Connect DB and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected");

  app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
  });

})
.catch((err) => {
  console.log("MongoDB connection error:", err);
});