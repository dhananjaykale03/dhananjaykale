import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// 💾 Define message schema & model
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// 📨 Contact route (send email + save to MongoDB)
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        // 1️⃣ Save message to MongoDB
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // 2️⃣ Send email using Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail", // use 'smtp.mailtrap.io' for testing
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
            subject: `Portfolio Contact from ${name}`,
            text: `
New message from your portfolio contact form:
----------------------------------------------
Name: ${name}
Email: ${email}

Message:
${message}
      `,
        });

        console.log("✅ Email sent and message stored!");
        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
