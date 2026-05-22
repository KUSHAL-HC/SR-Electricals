require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const twilio = require("twilio");

const Contacting = require("./models/Contacting.js");
const Booking = require("./models/Booking");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://sr-electricals.vercel.app",
    "https://sr-electricals-git-main-kushalhc.vercel.app",
    "https://sr-electricals-likw9tbip-kushalhc.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/book", async (req, res) => {
  try {
    const { name, phone, email } = req.body;

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

    await client.messages.create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+918431420127",
      body: `New Form Submission:
Name: ${name}
Phone: ${phone}
Email: ${email}`
    });

    res.status(201).json({ message: "Saved + WhatsApp sent" });
  } catch (err) {
    console.log("BOOKING ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/Contacting", async (req, res) => {
  try {
    const { fullName, phone, email, subject, message } = req.body;

    const newContacting = new Contacting({
      fullName,
      phone,
      email,
      subject,
      message
    });

    await newContacting.save();

    await client.messages.create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+918431420127",
      body: `New Contact Submission:
            Full Name: ${fullName}
            Phone: ${phone}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}`
    });

    res.status(201).json({ message: "Saved + WhatsApp sent" });
  } catch (error) {
    console.log("CONTACT ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

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