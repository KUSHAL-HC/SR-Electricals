require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Contacting = require("./models/Contacting.js");

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

    console.log("Saved to DB");
    await client.messages.create({
      from:"whatsapp:+14155238886",
      to:"whatsapp:+918431420127",
      body:` New Form Submission:
            Name: ${name}
            phone: ${phone}
            email: ${email}`
    })
    res.status(201).json({ message: "Saved + WhatsApp sent" });
  } catch (err) {
    console.log("TWILIO/FULL ERROR:");
    console.log(err);

    res.status(500).json({
        error: err.message
    });
  }
});


app.post("/api/Contacting",async(req,res)=>{
  try{
    

    const { fullName,phone,email,subject,message } = req.body;

    const newContacting  = new Contacting({
      fullName,phone,email,subject,message
    });

    await newContacting.save();


    await client.messages.create({
      from:"whatsapp:+14155238886",
      to:"whatsapp:+918431420127",
      body:` New Form Submission:
            fullName: ${fullName}
            phone: ${phone}
            email: ${email}
            subject:${subject}
            message:${message}`
    })
  
    res.status(201).json({ message: "Saved + WhatsApp sent" });
  }catch(error){
    res.status(500).json({ error: error.message });
  }
})

// Connect DB and start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.log("MongoDB connection error:", err);
});

const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);


const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });